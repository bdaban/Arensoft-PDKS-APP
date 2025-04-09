import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return { success: false, error: 'Şirket ID gereklidir' }
    }
    
    const company = await prisma.company.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        departments: true,
        _count: {
          select: {
            employees: true,
            devices: true,
            shifts: true
          }
        }
      }
    })
    
    if (!company) {
      return { success: false, error: 'Şirket bulunamadı' }
    }
    
    return { success: true, data: company }
  } catch (error) {
    console.error(`Şirket bilgisi alınırken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Şirket bilgisi yüklenirken bir hata oluştu.' }
  }
}) 