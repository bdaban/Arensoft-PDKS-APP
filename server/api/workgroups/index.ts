import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  try {
    // İsteğe bağlı filtreleme parametreleri
    const query = getQuery(event)
    const type = query.type as string | undefined // 'fixed' veya 'shift'
    
    // NOT: Veritabanı entegrasyonu yapıldığında aşağıdaki kod aktif edilecek
    /*
    const prisma = new PrismaClient()
    
    // Filtre oluştur
    const filter: any = {}
    
    if (type) {
      filter.type = type
    }
    
    // Çalışma gruplarını getir
    const workGroups = await prisma.workGroup.findMany({
      where: filter,
      include: {
        shifts: {
          select: {
            shift: true
          }
        },
        _count: {
          select: { employees: true }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    // Dönüş formatını düzenle
    const formattedWorkGroups = workGroups.map(group => ({
      id: group.id,
      name: group.name,
      type: group.type,
      workHours: group.type === 'fixed' ? `${group.startTime} - ${group.endTime}` : null,
      shifts: group.type === 'shift' 
        ? group.shifts.map(s => ({
            id: s.shift.id,
            name: s.shift.name
          })) 
        : [],
      employeeCount: group._count.employees
    }))
    */
    
    // Örnek veri - Veritabanı entegrasyonu tamamlanıncaya kadar
    const mockWorkGroups = [
      {
        id: 1,
        name: 'Ofis Personeli',
        type: 'fixed',
        workHours: '08:30 - 17:30',
        shifts: [],
        employeeCount: 12
      },
      {
        id: 2,
        name: 'Üretim Vardiyalı',
        type: 'shift',
        workHours: null,
        shifts: [
          { id: 1, name: 'Sabah' },
          { id: 2, name: 'Akşam' },
          { id: 3, name: 'Gece' }
        ],
        employeeCount: 24
      },
      {
        id: 3,
        name: 'Yarı Zamanlı',
        type: 'fixed',
        workHours: '13:00 - 17:00',
        shifts: [],
        employeeCount: 5
      }
    ]
    
    // Filtre uygula
    const filteredWorkGroups = type 
      ? mockWorkGroups.filter(group => group.type === type)
      : mockWorkGroups
    
    return {
      success: true,
      data: filteredWorkGroups,
      message: "Database işlemleri sırasında WorkGroup modeli henüz veritabanına eklenmemiş."
    }
  } catch (error: any) {
    console.error('Çalışma grupları listelenirken hata oluştu:', error)
    
    return {
      success: false,
      error: 'Çalışma grupları listelenirken bir hata oluştu',
      details: error.message
    }
  }
}) 