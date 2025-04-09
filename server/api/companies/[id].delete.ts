import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return { success: false, error: 'Şirket ID gereklidir' }
    }
    
    // Şirket varlığını kontrol et
    const company = await prisma.company.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        departments: true,
        employees: true,
        devices: true,
        shifts: true
      }
    })
    
    if (!company) {
      return { success: false, error: 'Silinecek şirket bulunamadı' }
    }
    
    // İlişkisel kontrol
    if (company.departments.length > 0) {
      return { 
        success: false, 
        error: 'Bu şirkete bağlı departmanlar var. Önce departmanları silmelisiniz.' 
      }
    }
    
    if (company.employees.length > 0) {
      return { 
        success: false, 
        error: 'Bu şirkete bağlı personeller var. Önce personelleri silmelisiniz.' 
      }
    }
    
    if (company.devices.length > 0) {
      return { 
        success: false, 
        error: 'Bu şirkete bağlı cihazlar var. Önce cihazları silmelisiniz.' 
      }
    }
    
    if (company.shifts.length > 0) {
      return { 
        success: false, 
        error: 'Bu şirkete bağlı vardiyalar var. Önce vardiyaları silmelisiniz.' 
      }
    }
    
    // Şirketi sil
    await prisma.company.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    return { success: true, message: 'Şirket başarıyla silindi' }
  } catch (error) {
    console.error(`Şirket silinirken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Şirket silinirken bir hata oluştu.' }
  }
}) 