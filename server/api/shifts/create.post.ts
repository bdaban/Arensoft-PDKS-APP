import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Gerekli parametreler
    const { name, startTime, endTime, companyId, tolerance } = body
    
    if (!name || !startTime || !endTime || !companyId) {
      return {
        success: false,
        error: 'Vardiya adı, başlangıç ve bitiş saati, şirket ID zorunludur'
      }
    }
    
    const prisma = new PrismaClient()
    
    // Vardiyayı oluştur
    const shift = await prisma.shift.create({
      data: {
        name,
        startTime,
        endTime,
        tolerance: tolerance || 15, // Varsayılan tolerans 15 dakika
        type: body.type || 'normal',
        company: {
          connect: { id: companyId }
        }
      }
    })
    
    return {
      success: true,
      data: shift
    }
  } catch (error: any) {
    console.error('Vardiya oluşturma hatası:', error)
    
    return {
      success: false,
      error: 'Vardiya oluşturulurken bir hata oluştu',
      details: error.message
    }
  }
}) 