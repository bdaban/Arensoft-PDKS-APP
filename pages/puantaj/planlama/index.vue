<template>
  <div>
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex items-center">
          <Icon name="tabler:calendar-time" class="h-6 w-6 text-blue-600 mr-2" />
          <h1 class="text-2xl font-bold text-gray-900">Puantaj Planlama</h1>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Tabs -->
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            @click="activeTab = 'groups'"
            :class="[
              activeTab === 'groups'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center'
            ]"
          >
            <Icon name="tabler:folders" class="mr-2 h-5 w-5" />
            Çalışma Grupları
          </button>
          <button
            @click="activeTab = 'shifts'"
            :class="[
              activeTab === 'shifts'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center'
            ]"
          >
            <Icon name="tabler:clock" class="mr-2 h-5 w-5" />
            Vardiya Tanımları
          </button>
          <button
            @click="activeTab = 'assignments'"
            :class="[
              activeTab === 'assignments'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center'
            ]"
          >
            <Icon name="tabler:user-check" class="mr-2 h-5 w-5" />
            Personel Atamaları
          </button>
        </nav>
      </div>

      <!-- Tab Content -->
      <div class="mt-6">
        <!-- Çalışma Grupları -->
        <div v-if="activeTab === 'groups'" class="bg-white shadow rounded-lg">
          <div class="p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-medium text-gray-900">Çalışma Grupları</h2>
              <button
                @click="openGroupModal"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Icon name="tabler:plus" class="mr-2 -ml-1 h-5 w-5" />
                Yeni Grup Ekle
              </button>
            </div>

            <!-- Yükleniyor göstergesi -->
            <div v-if="loadingGroups" class="text-center py-10">
              <Icon name="tabler:loader" class="h-10 w-10 text-blue-500 mx-auto animate-spin" />
              <p class="mt-2 text-gray-500">Çalışma grupları yükleniyor...</p>
            </div>

            <!-- Grup Listesi -->
            <div v-else-if="workGroups.length > 0" class="mt-4">
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Grup Adı
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Çalışma Tipi
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vardiya Düzeni
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Personel Sayısı
                      </th>
                      <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        İşlemler
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="group in workGroups" :key="group.id">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {{ group.name }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ group.type === 'fixed' ? 'Sabit Saat' : 'Vardiyalı' }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div v-if="group.type === 'fixed'">
                          {{ group.workHours }}
                        </div>
                        <div v-else class="flex items-center">
                          <span 
                            v-for="(shift, index) in group.shifts" 
                            :key="shift.id"
                            :class="[
                              'text-xs font-medium py-1 px-2 rounded-full mr-1',
                              shift.name === 'Sabah' ? 'bg-blue-100 text-blue-800' : 
                              shift.name === 'Akşam' ? 'bg-purple-100 text-purple-800' : 
                              'bg-indigo-100 text-indigo-800'
                            ]">
                            {{ shift.name }}
                          </span>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ group.employeeCount || 0 }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button class="text-blue-600 hover:text-blue-900 mr-2">
                          <Icon name="tabler:edit" class="h-5 w-5" />
                        </button>
                        <button class="text-red-600 hover:text-red-900">
                          <Icon name="tabler:trash" class="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-else class="text-center py-10 bg-gray-50 rounded-lg">
              <Icon name="tabler:folder" class="h-12 w-12 text-gray-400 mx-auto" />
              <h3 class="mt-2 text-sm font-medium text-gray-900">Henüz çalışma grubu yok</h3>
              <p class="mt-1 text-sm text-gray-500">Yeni bir çalışma grubu oluşturarak başlayın.</p>
              <div class="mt-6">
                <button
                  @click="openGroupModal"
                  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Icon name="tabler:plus" class="mr-2 -ml-1 h-5 w-5" />
                  Yeni Grup Ekle
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Vardiya Tanımları -->
        <div v-if="activeTab === 'shifts'" class="bg-white shadow rounded-lg">
          <div class="p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-medium text-gray-900">Vardiya Tanımları</h2>
              <button
                @click="openShiftModal"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Icon name="tabler:plus" class="mr-2 -ml-1 h-5 w-5" />
                Yeni Vardiya Ekle
              </button>
            </div>

            <!-- Yükleniyor göstergesi -->
            <div v-if="loadingShifts" class="text-center py-10">
              <Icon name="tabler:loader" class="h-10 w-10 text-blue-500 mx-auto animate-spin" />
              <p class="mt-2 text-gray-500">Vardiyalar yükleniyor...</p>
            </div>
            
            <!-- Vardiya Listesi -->
            <div v-else-if="shifts.length > 0" class="mt-4">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                  v-for="shift in shifts" 
                  :key="shift.id" 
                  class="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div 
                    class="px-4 py-3"
                    :class="[
                      shift.name === 'Sabah' ? 'bg-blue-50 border-b border-blue-100' : 
                      shift.name === 'Akşam' ? 'bg-purple-50 border-b border-purple-100' : 
                      'bg-indigo-50 border-b border-indigo-100'
                    ]"
                  >
                    <div class="flex justify-between items-center">
                      <h3 class="text-sm font-medium">{{ shift.name }}</h3>
                      <div class="flex items-center">
                        <button class="text-gray-500 hover:text-gray-700 mr-2">
                          <Icon name="tabler:edit" class="h-4 w-4" />
                        </button>
                        <button class="text-gray-500 hover:text-red-600">
                          <Icon name="tabler:trash" class="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="p-4">
                    <div class="flex items-center mb-2">
                      <Icon name="tabler:clock" class="h-4 w-4 text-gray-400 mr-2" />
                      <span class="text-sm text-gray-600">
                        {{ shift.startTime }} - {{ shift.endTime }}
                      </span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="tabler:hourglass" class="h-4 w-4 text-gray-400 mr-2" />
                      <span class="text-sm text-gray-600">
                        Tolerans: {{ shift.tolerance }} dk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-10 bg-gray-50 rounded-lg">
              <Icon name="tabler:clock" class="h-12 w-12 text-gray-400 mx-auto" />
              <h3 class="mt-2 text-sm font-medium text-gray-900">Henüz vardiya tanımı yok</h3>
              <p class="mt-1 text-sm text-gray-500">Yeni bir vardiya tanımı oluşturarak başlayın.</p>
              <div class="mt-6">
                <button
                  @click="openShiftModal"
                  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Icon name="tabler:plus" class="mr-2 -ml-1 h-5 w-5" />
                  Yeni Vardiya Ekle
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Personel Atamaları -->
        <div v-if="activeTab === 'assignments'" class="bg-white shadow rounded-lg">
          <div class="p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-medium text-gray-900">Personel Vardiya Atamaları</h2>
              <button
                @click="openAssignmentModal"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Icon name="tabler:plus" class="mr-2 -ml-1 h-5 w-5" />
                Personel Ata
              </button>
            </div>

            <!-- Filtreleme Bölümü -->
            <div class="mb-6 bg-gray-50 p-4 rounded-lg">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Departman</label>
                  <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option value="">Tümü</option>
                    <option>Üretim</option>
                    <option>Muhasebe</option>
                    <option>İnsan Kaynakları</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Çalışma Grubu</label>
                  <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option value="">Tümü</option>
                    <option>Hafta İçi 08:30-17:30</option>
                    <option>3'lü Vardiya Sistemi</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Personel Durumu</label>
                  <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option value="">Tümü</option>
                    <option>Aktif</option>
                    <option>İzinde</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Yükleniyor göstergesi -->
            <div v-if="loadingEmployees" class="text-center py-10">
              <Icon name="tabler:loader" class="h-10 w-10 text-blue-500 mx-auto animate-spin" />
              <p class="mt-2 text-gray-500">Personel listesi yükleniyor...</p>
            </div>
            
            <div v-else-if="employees.length === 0" class="text-center py-10 bg-gray-50 rounded-lg">
              <Icon name="tabler:users" class="h-12 w-12 text-gray-400 mx-auto" />
              <h3 class="mt-2 text-sm font-medium text-gray-900">Henüz personel kaydı bulunamadı</h3>
              <p class="mt-1 text-sm text-gray-500">Önce personel ekleyip, sonra vardiya ataması yapabilirsiniz.</p>
            </div>

            <div v-else class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Personel
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Departman
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Çalışma Grubu
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vardiya/Çalışma Saati
                    </th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="employee in employees" :key="employee.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="h-10 w-10 flex-shrink-0">
                          <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            {{ employee.name.charAt(0) }}{{ employee.surname.charAt(0) }}
                          </div>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ employee.name }} {{ employee.surname }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ employee.position }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{ employee.department }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{ employee.workGroup }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span 
                        v-if="employee.shift"
                        :class="[
                          'px-2 py-1 text-xs font-medium rounded-full',
                          employee.shift === 'Sabah' ? 'bg-blue-100 text-blue-800' : 
                          employee.shift === 'Akşam' ? 'bg-purple-100 text-purple-800' : 
                          employee.shift === 'Gece' ? 'bg-indigo-100 text-indigo-800' :
                          'bg-gray-100 text-gray-800'
                        ]">
                        {{ employee.shift }}
                      </span>
                      <span v-else class="text-sm text-gray-500">
                        {{ employee.workHours }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button class="text-blue-600 hover:text-blue-900">
                        <Icon name="tabler:pencil" class="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Aktif sekme durumu
const activeTab = ref('groups')

// API'den yüklenecek veriler
const workGroups = ref([])
const shifts = ref([])
const employees = ref([])

// Yükleniyor durumları
const loadingGroups = ref(false)
const loadingShifts = ref(false)
const loadingEmployees = ref(false)

// API verileri yükleme fonksiyonları
const fetchWorkGroups = async () => {
  loadingGroups.value = true
  try {
    const response = await fetch('/api/workgroups')
    const result = await response.json()
    
    if (result.success) {
      workGroups.value = result.data
    } else {
      console.error('Çalışma grupları yüklenirken hata:', result.error)
    }
  } catch (error) {
    console.error('Çalışma grupları yüklenirken hata:', error)
  } finally {
    loadingGroups.value = false
  }
}

const fetchShifts = async () => {
  loadingShifts.value = true
  try {
    const response = await fetch('/api/shifts')
    const result = await response.json()
    
    if (result.success) {
      shifts.value = result.data
    } else {
      console.error('Vardiyalar yüklenirken hata:', result.error)
    }
  } catch (error) {
    console.error('Vardiyalar yüklenirken hata:', error)
  } finally {
    loadingShifts.value = false
  }
}

const fetchEmployees = async () => {
  loadingEmployees.value = true
  try {
    const response = await fetch('/api/employees')
    const result = await response.json()
    
    if (result.success) {
      employees.value = result.data
    } else {
      console.error('Personel listesi yüklenirken hata:', result.error)
    }
  } catch (error) {
    console.error('Personel listesi yüklenirken hata:', error)
  } finally {
    loadingEmployees.value = false
  }
}

// Grup oluşturma 
const createWorkGroup = async (groupData) => {
  try {
    const response = await fetch('/api/workgroups/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(groupData)
    })
    
    const result = await response.json()
    
    if (result.success) {
      await fetchWorkGroups() // Grupları yeniden yükle
      return { success: true, data: result.data }
    } else {
      return { success: false, error: result.error }
    }
  } catch (error) {
    console.error('Grup oluşturma hatası:', error)
    return { success: false, error: 'Grup oluşturulurken bir hata oluştu' }
  }
}

// Vardiya oluşturma 
const createShift = async (shiftData) => {
  try {
    const response = await fetch('/api/shifts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shiftData)
    })
    
    const result = await response.json()
    
    if (result.success) {
      await fetchShifts() // Vardiyaları yeniden yükle
      return { success: true, data: result.data }
    } else {
      return { success: false, error: result.error }
    }
  } catch (error) {
    console.error('Vardiya oluşturma hatası:', error)
    return { success: false, error: 'Vardiya oluşturulurken bir hata oluştu' }
  }
}

// Personel atama
const assignEmployeeToWorkGroup = async (employeeId, workGroupId) => {
  try {
    const response = await fetch('/api/employees/assign-workgroup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ employeeId, workGroupId })
    })
    
    const result = await response.json()
    
    if (result.success) {
      await fetchEmployees() // Personelleri yeniden yükle
      return { success: true, data: result.data }
    } else {
      return { success: false, error: result.error }
    }
  } catch (error) {
    console.error('Personel atama hatası:', error)
    return { success: false, error: 'Personel atanırken bir hata oluştu' }
  }
}

// Modals
const openGroupModal = () => {
  // Grup ekleme modalını açma fonksiyonu
  console.log('Grup modalı açılıyor')
  // Gerçek uygulamada burada bir modal açılabilir ve modal kapandığında
  // createWorkGroup fonksiyonu çağrılabilir
}

const openShiftModal = () => {
  // Vardiya ekleme modalını açma fonksiyonu
  console.log('Vardiya modalı açılıyor')
  // Gerçek uygulamada burada bir modal açılabilir ve modal kapandığında
  // createShift fonksiyonu çağrılabilir
}

const openAssignmentModal = () => {
  // Personel atama modalını açma fonksiyonu
  console.log('Atama modalı açılıyor')
  // Gerçek uygulamada burada bir modal açılabilir ve modal kapandığında
  // assignEmployeeToWorkGroup fonksiyonu çağrılabilir
}

// Sayfa yüklendiğinde verileri getir
onMounted(() => {
  fetchWorkGroups()
  fetchShifts()
  fetchEmployees()
})
</script> 