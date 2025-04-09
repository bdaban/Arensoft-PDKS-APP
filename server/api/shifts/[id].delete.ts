import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return { success: false, error: 'Vardiya ID gereklidir' }
    }
    
    // Varlık kontrolü
    const existingShift = await prisma.shift.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        schedules: true
      }
    })
    
    if (!existingShift) {
      return { success: false, error: 'Silinecek vardiya bulunamadı' }
    }
    
    // İlişkisel kontrol - vardiya bir çalışma planında kullanılıyor mu?
    if (existingShift.schedules && existingShift.schedules.length > 0) {
      return { 
        success: false, 
        error: 'Bu vardiya bir veya daha fazla çalışma planında kullanılıyor. Önce ilgili çalışma planlarını güncellemeniz gerekmektedir.'
      }
    }
    
    // Vardiyayı sil
    await prisma.shift.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    return { success: true, message: 'Vardiya başarıyla silindi' }
  } catch (error) {
    console.error(`Vardiya silinirken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Vardiya silinirken bir hata oluştu.' }
  }
}) 