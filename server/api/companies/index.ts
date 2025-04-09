import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getQuery } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    
    // Filtreleme parametreleri
    const search = query.search as string
    const page = query.page ? parseInt(query.page as string) : 1
    const limit = query.limit ? parseInt(query.limit as string) : 50
    const sortBy = query.sortBy as string || 'name'
    const sortDir = query.sortDir as string || 'asc'
    
    // Filtreleme koşulları
    const whereCondition: any = {}
    
    if (search) {
      whereCondition.name = {
        contains: search
      }
    }
    
    // Toplam kayıt sayısı
    const totalRecords = await prisma.company.count({
      where: whereCondition
    })
    
    // Sayfalama hesaplamaları
    const totalPages = Math.ceil(totalRecords / limit)
    const skip = (page - 1) * limit
    
    // Şirketleri getir
    const companies = await prisma.company.findMany({
      where: whereCondition,
      orderBy: {
        [sortBy]: sortDir
      },
      include: {
        _count: {
          select: {
            departments: true,
            employees: true,
            devices: true
          }
        }
      },
      skip,
      take: limit
    })
    
    return { 
      success: true, 
      data: companies,
      pagination: {
        page,
        limit,
        totalRecords,
        totalPages
      }
    }
  } catch (error) {
    console.error('Şirket listesi alınırken hata oluştu:', error)
    return { success: false, error: 'Şirketler yüklenirken bir hata oluştu.' }
  }
}) 