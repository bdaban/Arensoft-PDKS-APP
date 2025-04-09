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
        error: 'Şirket adı gereklidir',
        field: 'name'
      }
    }
    
    // Veri temizliği
    const companyData = {
      name: body.name.trim()
    }
    
    const newCompany = await prisma.company.create({
      data: companyData
    })
    
    return { success: true, data: newCompany }
  } catch (error) {
    console.error('Şirket eklenirken hata oluştu:', error)
    return { success: false, error: 'Şirket eklenirken bir hata oluştu.' }
  }
}) 