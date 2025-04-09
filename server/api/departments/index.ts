import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getQuery } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    
    // Filtreleme parametreleri
    const companyId = query.companyId ? parseInt(query.companyId as string) : undefined
    const search = query.search as string
    const page = query.page ? parseInt(query.page as string) : 1
    const limit = query.limit ? parseInt(query.limit as string) : 50
    const sortBy = query.sortBy as string || 'name'
    const sortDir = query.sortDir as string || 'asc'
    
    // Filtreleme koşulları
    const whereCondition: any = {}
    
    if (companyId) {
      whereCondition.companyId = companyId
    }
    
    if (search) {
      whereCondition.name = {
        contains: search
      }
    }
    
    // Toplam kayıt sayısı
    const totalRecords = await prisma.department.count({
      where: whereCondition
    })
    
    // Sayfalama hesaplamaları
    const totalPages = Math.ceil(totalRecords / limit)
    const skip = (page - 1) * limit
    
    // Departmanları getir
    const departments = await prisma.department.findMany({
      where: whereCondition,
      orderBy: {
        [sortBy]: sortDir
      },
      include: {
        company: true,
        _count: {
          select: {
            employees: true
          }
        }
      },
      skip,
      take: limit
    })
    
    return { 
      success: true, 
      data: departments,
      pagination: {
        page,
        limit,
        totalRecords,
        totalPages
      }
    }
  } catch (error) {
    console.error('Departman listesi alınırken hata oluştu:', error)
    return { success: false, error: 'Departmanlar yüklenirken bir hata oluştu.' }
  }
}) 