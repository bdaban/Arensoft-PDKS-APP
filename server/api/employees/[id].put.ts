import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
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
      return { success: false, error: 'Güncellenecek personel bulunamadı' }
    }
    
    // Gönderilen verilerden sadece güncellenebilir alanlar alınır
    const {
      name,
      surname,
      companyId,
      departmentId,
      scheduleId,
      cardNo,
      // Diğer güncellenen alanlar burada tanımlanır
      ...otherFields
    } = body
    
    // Kart numarası (cardNo) benzersiz olduğundan, başka bir personele ait değilse güncellenir
    if (cardNo && cardNo !== existingEmployee.cardNo) {
      const existingCardNo = await prisma.employee.findUnique({
        where: {
          cardNo
        }
      })
      
      if (existingCardNo && existingCardNo.id !== parseInt(id)) {
        return { success: false, error: 'Bu kart numarası başka bir personel tarafından kullanılıyor' }
      }
    }
    
    const updatedEmployee = await prisma.employee.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        surname,
        companyId: companyId ? parseInt(companyId) : undefined,
        departmentId: departmentId ? parseInt(departmentId) : undefined,
        scheduleId: scheduleId ? parseInt(scheduleId) : undefined,
        cardNo,
        ...otherFields
      },
      include: {
        company: true,
        department: true,
        schedule: true
      }
    })
    
    return { success: true, data: updatedEmployee }
  } catch (error) {
    console.error(`Personel güncellenirken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Personel güncellenirken bir hata oluştu.' }
  }
}) 