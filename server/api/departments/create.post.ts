import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Zorunlu alanların kontrolü
    if (!body.name) {
      return { 
        success: false, 
        error: 'Departman adı gereklidir',
        field: 'name'
      }
    }
    
    if (!body.companyId) {
      return { 
        success: false, 
        error: 'Şirket seçimi gereklidir',
        field: 'companyId'
      }
    }
    
    // Şirket varlık kontrolü
    const company = await prisma.company.findUnique({
      where: {
        id: parseInt(body.companyId)
      }
    })
    
    if (!company) {
      return { 
        success: false, 
        error: 'Seçilen şirket bulunamadı',
        field: 'companyId'
      }
    }
    
    // Veri temizliği
    const departmentData = {
      name: body.name.trim(),
      companyId: parseInt(body.companyId)
    }
    
    const newDepartment = await prisma.department.create({
      data: departmentData,
      include: {
        company: true
      }
    })
    
    return { success: true, data: newDepartment }
  } catch (error) {
    console.error('Departman eklenirken hata oluştu:', error)
    return { success: false, error: 'Departman eklenirken bir hata oluştu.' }
  }
}) 