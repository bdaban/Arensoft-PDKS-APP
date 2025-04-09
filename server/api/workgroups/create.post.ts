import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Gerekli alanlar
    const { name, type, startTime, endTime, shiftIds, companyId } = body
    
    if (!name || !type || !companyId) {
      return {
        success: false,
        error: 'Grup adı, çalışma tipi ve şirket ID zorunludur'
      }
    }
    
    // Sabit çalışma saati ve vardiyalı çalışma koşullarını kontrol et
    if (type === 'fixed' && (!startTime || !endTime)) {
      return {
        success: false,
        error: 'Sabit çalışma saati için başlangıç ve bitiş saati zorunludur'
      }
    }
    
    if (type === 'shift' && (!shiftIds || !Array.isArray(shiftIds) || shiftIds.length === 0)) {
      return {
        success: false,
        error: 'Vardiyalı çalışma için en az bir vardiya seçilmelidir'
      }
    }
    
    // Geçici örnek veri döndürelim
    const mockWorkGroup = {
      id: Math.floor(Math.random() * 1000),
      name,
      type,
      startTime: type === 'fixed' ? startTime : null,
      endTime: type === 'fixed' ? endTime : null,
      tolerance: body.tolerance || 15,
      companyId,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    return {
      success: true,
      data: mockWorkGroup,
      message: 'Veritabanı henüz WorkGroup modeline hazır değil, çalışma grubu oluşturuldu kabul edildi.'
    }
  } catch (error: any) {
    console.error('Çalışma grubu oluşturulurken hata oluştu:', error)
    
    return {
      success: false,
      error: 'Çalışma grubu oluşturulurken bir hata oluştu',
      details: error.message
    }
  }
}) 