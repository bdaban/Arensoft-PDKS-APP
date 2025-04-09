import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
    if (!id) {
      return { success: false, error: 'Şirket ID gereklidir' }
    }
    
    // Varlık kontrolü
    const existingCompany = await prisma.company.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!existingCompany) {
      return { success: false, error: 'Güncellenecek şirket bulunamadı' }
    }
    
    // Gönderilen verilerden güncellenebilir alanlar alınır
    const { name } = body
    
    // Zorunlu alanların kontrolü
    if (!name) {
      return { 
        success: false, 
        error: 'Şirket adı gereklidir',
        field: 'name'
      }
    }
    
    const updatedCompany = await prisma.company.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name: name.trim()
      }
    })
    
    return { success: true, data: updatedCompany }
  } catch (error) {
    console.error(`Şirket güncellenirken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Şirket güncellenirken bir hata oluştu.' }
  }
}) 