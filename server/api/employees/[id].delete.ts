import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return { success: false, error: 'Personel ID gereklidir' }
    }
    
    // Varlık kontrolü
    const existingEmployee = await prisma.employee.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!existingEmployee) {
      return { success: false, error: 'Silinecek personel bulunamadı' }
    }
    
    // Bağlı kayıtları silmeden önce kontrol - isteğe bağlı
    // Burada her bir bağlı veri tipini belirlenen kriterlere göre temizleme işlemi yapılabilir
    
    // Personelin giriş-çıkış kayıtlarını sil
    await prisma.attendanceLog.deleteMany({
      where: {
        employeeId: parseInt(id)
      }
    })
    
    // Personelin izin kayıtlarını sil
    await prisma.leave.deleteMany({
      where: {
        employeeId: parseInt(id)
      }
    })
    
    // Personelin ceza kayıtlarını sil
    await prisma.penalty.deleteMany({
      where: {
        employeeId: parseInt(id)
      }
    })
    
    // Personeli sil
    await prisma.employee.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    return { success: true, message: 'Personel ve ilgili tüm kayıtları başarıyla silindi' }
  } catch (error) {
    console.error(`Personel silinirken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Personel silinirken bir hata oluştu.' }
  }
}) 