import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return { success: false, error: 'Personel ID gereklidir' }
    }
    
    const employee = await prisma.employee.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        company: true,
        department: true,
        schedule: true,
        attendanceLogs: {
          orderBy: {
            date: 'desc'
          },
          take: 10
        },
        leaves: {
          orderBy: {
            startTime: 'desc'
          },
          include: {
            leaveType: true
          }
        }
      }
    })
    
    if (!employee) {
      return { success: false, error: 'Personel bulunamadı' }
    }
    
    return { success: true, data: employee }
  } catch (error) {
    console.error(`Personel bilgisi alınırken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Personel bilgisi yüklenirken bir hata oluştu.' }
  }
}) 