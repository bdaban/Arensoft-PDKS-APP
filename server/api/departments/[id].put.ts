import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParam, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
    if (!id) {
      return { success: false, error: 'Departman ID gereklidir' }
    }
    
    // Varlık kontrolü
    const existingDepartment = await prisma.department.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!existingDepartment) {
      return { success: false, error: 'Güncellenecek departman bulunamadı' }
    }
    
    // Gönderilen verilerden güncellenebilir alanlar alınır
    const { name, companyId } = body
    
    // Zorunlu alanların kontrolü
    if (!name) {
      return { 
        success: false, 
        error: 'Departman adı gereklidir',
        field: 'name'
      }
    }
    
    if (!companyId) {
      return { 
        success: false, 
        error: 'Şirket seçimi gereklidir',
        field: 'companyId'
      }
    }
    
    // Şirket kontrolü
    const company = await prisma.company.findUnique({
      where: {
        id: parseInt(companyId)
      }
    })
    
    if (!company) {
      return { 
        success: false, 
        error: 'Seçilen şirket bulunamadı',
        field: 'companyId'
      }
    }
    
    const updatedDepartment = await prisma.department.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name: name.trim(),
        companyId: parseInt(companyId)
      },
      include: {
        company: true
      }
    })
    
    return { success: true, data: updatedDepartment }
  } catch (error) {
    console.error(`Departman güncellenirken hata oluştu (ID: ${getRouterParam(event, 'id')}):`, error)
    return { success: false, error: 'Departman güncellenirken bir hata oluştu.' }
  }
}) 