import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return { success: false, error: 'Departman ID gereklidir' }
    }
    
    // Departman varlığını kontrol et
    const department = await prisma.department.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        employees: true
      }
    })
    
    if (!department) {
      return { success: false, error: 'Silinecek departman bulunamadı' }
    }
    
    // İlişkisel kontrol
    if (department.employees.length > 0) {
      return { 
        success: false, 
        error: 'Bu departmana bağlı personeller var. Önce personelleri silmelisiniz veya başka bir departmana aktarmalısınız.' 
      }
    }
    
    // Departmanı sil
    await prisma.department.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    return { success: true, message: 'Departman başarıyla silindi' }
  } catch (error) {
    console.error(`Departman silinirken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Departman silinirken bir hata oluştu.' }
  }
}) 