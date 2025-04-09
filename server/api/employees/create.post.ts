import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Zorunlu alanların kontrolü
    const requiredFields = ['name', 'surname', 'cardNo', 'companyId', 'departmentId', 'scheduleId']
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return { 
          success: false, 
          error: `${field} alanı gereklidir`,
          field 
        }
      }
    }
    
    // Kart numarası benzersizlik kontrolü
    const existingCardNo = await prisma.employee.findUnique({
      where: {
        cardNo: body.cardNo
      }
    })
    
    if (existingCardNo) {
      return { 
        success: false, 
        error: 'Bu kart numarası başka bir personel tarafından kullanılıyor',
        field: 'cardNo'
      }
    }
    
    // Veri temizliği ve tip dönüşümleri
    const employeeData = {
      name: body.name.trim(),
      surname: body.surname.trim(),
      cardNo: body.cardNo.trim(),
      companyId: parseInt(body.companyId),
      departmentId: parseInt(body.departmentId),
      scheduleId: parseInt(body.scheduleId),
      // İsteğe bağlı alanlar
      title: body.title?.trim(),
      ssn: body.ssn?.trim(),
      entryDate: body.entryDate ? new Date(body.entryDate) : new Date(),
      exitDate: body.exitDate ? new Date(body.exitDate) : null,
      monthlySalary: body.monthlySalary ? parseFloat(body.monthlySalary) : 0,
      dailySalary: body.dailySalary ? parseFloat(body.dailySalary) : 0,
      hourlySalary: body.hourlySalary ? parseFloat(body.hourlySalary) : 0,
    }
    
    const newEmployee = await prisma.employee.create({
      data: employeeData,
      include: {
        company: true,
        department: true,
        schedule: true
      }
    })
    
    return { success: true, data: newEmployee }
  } catch (error) {
    console.error('Personel eklenirken hata oluştu:', error)
    return { success: false, error: 'Personel eklenirken bir hata oluştu.' }
  }
}) 