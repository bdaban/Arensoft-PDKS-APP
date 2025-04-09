import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
    if (!id) {
      return { success: false, error: 'Vardiya ID gereklidir' }
    }
    
    // Varlık kontrolü
    const existingShift = await prisma.shift.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!existingShift) {
      return { success: false, error: 'Güncellenecek vardiya bulunamadı' }
    }
    
    // Gönderilen verilerden güncellenebilir alanlar alınır
    const {
      name,
      startTime,
      endTime,
      type,
      companyId,
      // Diğer güncellenen alanlar burada tanımlanır
      ...otherFields
    } = body
    
    // Zorunlu alanların kontrolü
    if (!name || !startTime || !endTime || !type || !companyId) {
      return { 
        success: false, 
        error: 'Vardiya adı, başlangıç saati, bitiş saati, türü ve şirket bilgileri gereklidir'
      }
    }
    
    const updatedShift = await prisma.shift.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        startTime,
        endTime,
        type,
        companyId: parseInt(companyId),
        ...otherFields
      },
      include: {
        company: true
      }
    })
    
    return { success: true, data: updatedShift }
  } catch (error) {
    console.error(`Vardiya güncellenirken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Vardiya güncellenirken bir hata oluştu.' }
  }
}) 