import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        company: true,
        department: true,
        schedule: true,
        attendanceLogs: {
          orderBy: {
            date: 'desc'
          },
          take: 5
        },
        leaves: {
          orderBy: {
            startTime: 'desc'
          },
          include: {
            leaveType: true
          },
          take: 5
        }
      },
      orderBy: {
        cardNo: 'asc'
      }
    })
    
    return { success: true, data: employees }
  } catch (error) {
    console.error('Personel listesi alınırken hata oluştu:', error)
    return { success: false, error: 'Personeller yüklenirken bir hata oluştu.' }
  }
}) 