import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam, getQuery } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const query = getQuery(event)
    
    if (!id) {
      return { success: false, error: 'Personel ID gereklidir' }
    }
    
    // Filtreleme parametreleri
    const startDate = query.startDate ? new Date(query.startDate as string) : undefined
    const endDate = query.endDate ? new Date(query.endDate as string) : undefined
    const page = query.page ? parseInt(query.page as string) : 1
    const limit = query.limit ? parseInt(query.limit as string) : 20
    
    // Varlık kontrolü
    const employee = await prisma.employee.findUnique({
      where: {
        id: parseInt(id)
      },
      select: {
        id: true,
        name: true,
        surname: true,
        cardNo: true
      }
    })
    
    if (!employee) {
      return { success: false, error: 'Personel bulunamadı' }
    }
    
    // Giriş-çıkış kayıtlarını getir
    const whereCondition: any = {
      employeeId: parseInt(id)
    }
    
    // Tarih filtreleme
    if (startDate || endDate) {
      whereCondition.date = {}
      
      if (startDate) {
        whereCondition.date.gte = startDate
      }
      
      if (endDate) {
        whereCondition.date.lte = endDate
      }
    }
    
    // Toplam kayıt sayısı
    const totalRecords = await prisma.attendanceLog.count({
      where: whereCondition
    })
    
    // Sayfalama hesaplamaları
    const totalPages = Math.ceil(totalRecords / limit)
    const skip = (page - 1) * limit
    
    // Giriş-çıkış kayıtlarını getir
    const attendanceLogs = await prisma.attendanceLog.findMany({
      where: whereCondition,
      include: {
        device: true
      },
      orderBy: {
        date: 'desc'
      },
      skip,
      take: limit
    })
    
    return { 
      success: true, 
      data: {
        employee,
        attendanceLogs,
        pagination: {
          page,
          limit,
          totalRecords,
          totalPages
        }
      }
    }
  } catch (error) {
    console.error(`Personel giriş-çıkış kayıtları alınırken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Personel giriş-çıkış kayıtları yüklenirken bir hata oluştu.' }
  }
}) 