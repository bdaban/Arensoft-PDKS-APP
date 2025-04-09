import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return { success: false, error: 'Vardiya ID gereklidir' }
    }
    
    const shift = await prisma.shift.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        company: true,
        schedules: true
      }
    })
    
    if (!shift) {
      return { success: false, error: 'Vardiya bulunamadı' }
    }
    
    return { success: true, data: shift }
  } catch (error) {
    console.error(`Vardiya bilgisi alınırken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Vardiya bilgisi yüklenirken bir hata oluştu.' }
  }
}) 