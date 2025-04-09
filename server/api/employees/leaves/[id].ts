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
    const leaveTypeId = query.leaveTypeId ? parseInt(query.leaveTypeId as string) : undefined
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
    
    // İzin kayıtlarını getir
    const whereCondition: any = {
      employeeId: parseInt(id)
    }
    
    // İzin tipi filtreleme
    if (leaveTypeId) {
      whereCondition.leaveTypeId = leaveTypeId
    }
    
    // Tarih filtreleme (başlangıç tarihi için)
    if (startDate || endDate) {
      whereCondition.startTime = {}
      
      if (startDate) {
        whereCondition.startTime.gte = startDate
      }
      
      if (endDate) {
        whereCondition.startTime.lte = endDate
      }
    }
    
    // Toplam kayıt sayısı
    const totalRecords = await prisma.leave.count({
      where: whereCondition
    })
    
    // Sayfalama hesaplamaları
    const totalPages = Math.ceil(totalRecords / limit)
    const skip = (page - 1) * limit
    
    // İzin kayıtlarını getir
    const leaves = await prisma.leave.findMany({
      where: whereCondition,
      include: {
        leaveType: true
      },
      orderBy: {
        startTime: 'desc'
      },
      skip,
      take: limit
    })
    
    // İzin tiplerini getir (filtre için)
    const leaveTypes = await prisma.leaveType.findMany({
      orderBy: {
        name: 'asc'
      }
    })
    
    return { 
      success: true, 
      data: {
        employee,
        leaves,
        leaveTypes,
        pagination: {
          page,
          limit,
          totalRecords,
          totalPages
        }
      }
    }
  } catch (error) {
    console.error(`Personel izin kayıtları alınırken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Personel izin kayıtları yüklenirken bir hata oluştu.' }
  }
}) 