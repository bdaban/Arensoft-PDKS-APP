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
    const limit = query.limit ? parseInt(query.limit as string) : 20
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
    const totalRecords = await prisma.shift.count({
      where: whereCondition
    })
    
    // Sayfalama hesaplamaları
    const totalPages = Math.ceil(totalRecords / limit)
    const skip = (page - 1) * limit
    
    // Vardiyaları getir
    const shifts = await prisma.shift.findMany({
      where: whereCondition,
      include: {
        company: true
      },
      orderBy: {
        [sortBy]: sortDir
      },
      skip,
      take: limit
    })
    
    return { 
      success: true, 
      data: shifts,
      pagination: {
        page,
        limit,
        totalRecords,
        totalPages
      }
    }
  } catch (error) {
    console.error('Vardiya listesi alınırken hata oluştu:', error)
    return { success: false, error: 'Vardiyalar yüklenirken bir hata oluştu.' }
  }
}) 