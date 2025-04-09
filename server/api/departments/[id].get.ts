import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return { success: false, error: 'Departman ID gereklidir' }
    }
    
    const department = await prisma.department.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        company: true,
        _count: {
          select: {
            employees: true
          }
        }
      }
    })
    
    if (!department) {
      return { success: false, error: 'Departman bulunamadı' }
    }
    
    return { success: true, data: department }
  } catch (error) {
    console.error(`Departman bilgisi alınırken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Departman bilgisi yüklenirken bir hata oluştu.' }
  }
}) 