<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">Departman Yönetimi</h1>
      <div>
        <button class="btn-primary flex items-center" @click="showAddDepartmentModal = true">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Yeni Departman
        </button>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg">
      <div class="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <div class="flex items-center space-x-4">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Departman ara..." 
              class="pl-10 form-input rounded-md text-sm"
              v-model="searchQuery"
              @input="debouncedSearch"
            />
          </div>
          <div>
            <select 
              class="form-input text-sm rounded-md"
              v-model="filters.companyId"
              @change="loadDepartments()"
            >
              <option value="">Tüm Şirketler</option>
              <option v-for="company in companies" :key="company.id" :value="company.id">
                {{ company.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button class="btn-secondary flex items-center text-sm">
            <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
            </svg>
            Dışa Aktar
          </button>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead class="table-header">
            <tr>
              <th class="table-header-cell cursor-pointer" @click="sortBy('name')">
                Departman Adı
                <span v-if="sortColumn === 'name'" class="ml-1">
                  {{ sortDirection === 'asc' ? '↑' : '↓' }}
                </span>
              </th>
              <th class="table-header-cell">Şirket</th>
              <th class="table-header-cell">Personel Sayısı</th>
              <th class="table-header-cell">İşlemler</th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr v-if="loading" class="table-row">
              <td colspan="4" class="table-cell text-center py-8">
                <div class="flex justify-center">
                  <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
                </div>
                <p class="mt-2 text-gray-500">Veriler yükleniyor...</p>
              </td>
            </tr>
            <tr v-else-if="departments.length === 0" class="table-row">
              <td colspan="4" class="table-cell text-center py-8">
                <p class="text-gray-500">Gösterilecek departman kaydı bulunamadı.</p>
              </td>
            </tr>
            <tr v-for="department in departments" :key="department.id" class="table-row">
              <td class="table-cell font-medium text-gray-900">{{ department.name }}</td>
              <td class="table-cell">{{ department.company?.name }}</td>
              <td class="table-cell">{{ department._count?.employees || 0 }}</td>
              <td class="table-cell">
                <div class="flex items-center space-x-2">
                  <button class="p-1 text-blue-600 hover:text-blue-800" @click="viewDepartment(department.id)">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </button>
                  <button class="p-1 text-gray-600 hover:text-gray-800" @click="editDepartment(department)">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                    </svg>
                  </button>
                  <button class="p-1 text-red-600 hover:text-red-800" @click="deleteDepartmentConfirm(department)">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div class="flex items-center">
          <p class="text-sm text-gray-700">
            <span class="font-medium">{{ paginationInfo.from }}-{{ paginationInfo.to }}</span> / 
            <span class="font-medium">{{ paginationInfo.total }}</span> departman
          </p>
        </div>
        <div class="flex items-center space-x-2">
          <button 
            class="btn-secondary text-sm py-1"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >Önceki</button>
          <div class="flex">
            <template v-for="page in pageButtons" :key="page">
              <button 
                v-if="page !== '...'"
                :class="[
                  page === currentPage ? 'btn-primary' : 'btn-secondary',
                  'text-sm py-1 px-3'
                ]"
                @click="goToPage(page)"
              >{{ page }}</button>
              <span v-else class="px-2 py-1 text-gray-500">...</span>
            </template>
          </div>
          <button 
            class="btn-secondary text-sm py-1"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >Sonraki</button>
        </div>
      </div>
    </div>
    
    <!-- Departman Ekleme/Düzenleme Modal -->
    <div v-if="showAddDepartmentModal" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="relative bg-white rounded-lg w-full max-w-md mx-4">
        <div class="absolute top-0 right-0 p-2">
          <button class="p-2 rounded-md text-gray-500 hover:text-gray-700" @click="showAddDepartmentModal = false">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">{{ editingDepartment ? 'Departmanı Düzenle' : 'Yeni Departman Ekle' }}</h3>
          <form @submit.prevent="submitDepartmentForm" class="space-y-4">
            <div class="form-group">
              <label class="form-label">Departman Adı</label>
              <input 
                type="text" 
                class="form-input" 
                v-model="departmentForm.name" 
                :class="{'border-red-500': errors.name}"
                placeholder="Departman adı"
              />
              <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
            </div>
            
            <div class="form-group">
              <label class="form-label">Şirket</label>
              <select 
                class="form-input" 
                v-model="departmentForm.companyId"
                :class="{'border-red-500': errors.companyId}"
              >
                <option value="">Şirket seçiniz</option>
                <option v-for="company in companies" :key="company.id" :value="company.id">
                  {{ company.name }}
                </option>
              </select>
              <p v-if="errors.companyId" class="text-red-500 text-xs mt-1">{{ errors.companyId }}</p>
            </div>
            
            <div class="flex justify-end space-x-3 mt-5">
              <button 
                type="button" 
                class="btn-secondary" 
                @click="showAddDepartmentModal = false"
              >
                İptal
              </button>
              <button 
                v-if="editingDepartment"
                type="button" 
                class="btn-danger" 
                @click="deleteDepartment(editingDepartment.id)"
              >
                Sil
              </button>
              <button 
                type="submit" 
                class="btn-primary"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Kaydediliyor...' : 'Kaydet' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Silme Onay Modal -->
    <div v-if="showDeleteConfirmation" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="relative bg-white rounded-lg w-full max-w-md mx-4">
        <div class="p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Departmanı Sil</h3>
          <p class="text-sm text-gray-600 mb-4">
            <strong>{{ deleteCandidate?.name }}</strong> departmanını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
          </p>
          <div class="flex justify-end space-x-3">
            <button class="btn-secondary" @click="showDeleteConfirmation = false">İptal</button>
            <button class="btn-danger" @click="deleteDepartment(deleteCandidate?.id)">Sil</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Durum değişkenleri
const departments = ref([])
const companies = ref([])
const loading = ref(true)

// Filtreleme ve sıralama
const searchQuery = ref('')
const filters = ref({
  companyId: ''
})
const sortColumn = ref('name')
const sortDirection = ref('asc')

// Sayfalama
const currentPage = ref(1)
const pageSize = ref(10)
const totalRecords = ref(0)
const totalPages = ref(1)

// Modaller
const showAddDepartmentModal = ref(false)
const editingDepartment = ref(null)
const showDeleteConfirmation = ref(false)
const deleteCandidate = ref(null)

// Form verileri
const departmentForm = ref({
  name: '',
  companyId: ''
})
const errors = ref({})
const isSubmitting = ref(false)

// Arama fonksiyonu yavaşlatma (debounce)
const searchTimeout = ref(null)
const debouncedSearch = () => {
  clearTimeout(searchTimeout.value)
  searchTimeout.value = setTimeout(() => {
    currentPage.value = 1
    loadDepartments()
  }, 300)
}

// Sayfalama bilgileri
const paginationInfo = computed(() => {
  const from = Math.min((currentPage.value - 1) * pageSize.value + 1, totalRecords.value)
  const to = Math.min(currentPage.value * pageSize.value, totalRecords.value)
  
  return {
    from,
    to,
    total: totalRecords.value
  }
})

// Sayfa butonları
const pageButtons = computed(() => {
  if (totalPages.value <= 7) {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1)
  }
  
  // Karmaşık sayfalama: 1 2 ... 5 ... 9 10 gibi
  const buttons = []
  
  buttons.push(1)
  
  if (currentPage.value > 3) {
    buttons.push(2)
    buttons.push('...')
  }
  
  // Orta kısmı hesapla
  const start = Math.max(2, currentPage.value - 1)
  const end = Math.min(totalPages.value - 1, currentPage.value + 1)
  
  for (let i = start; i <= end; i++) {
    buttons.push(i)
  }
  
  if (currentPage.value < totalPages.value - 2) {
    buttons.push('...')
    buttons.push(totalPages.value - 1)
  }
  
  if (!buttons.includes(totalPages.value)) {
    buttons.push(totalPages.value)
  }
  
  return buttons
})

// Sıralama değiştir
const sortBy = (column) => {
  if (sortColumn.value === column) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = column
    sortDirection.value = 'asc'
  }
  
  loadDepartments()
}

// Sayfa değiştir
const goToPage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page
    loadDepartments()
  }
}

// Şirketleri yükle
const loadCompanies = async () => {
  try {
    const response = await fetch('/api/companies')
    const result = await response.json()
    
    if (result.success) {
      companies.value = result.data
    } else {
      console.error(result.error || 'Şirket verileri yüklenirken bir hata oluştu')
    }
  } catch (err) {
    console.error('Şirket verileri alınırken hata oluştu:', err)
  }
}

// Departmanları yükle
const loadDepartments = async () => {
  loading.value = true
  
  try {
    // API endpoint ve sorgu parametreleri
    let url = '/api/departments'
    const params = new URLSearchParams({
      page: currentPage.value,
      limit: pageSize.value
    })
    
    // Filtreler ekle
    if (searchQuery.value) {
      params.append('search', searchQuery.value)
    }
    
    if (filters.value.companyId) {
      params.append('companyId', filters.value.companyId)
    }
    
    // Sıralama parametreleri ekle
    params.append('sortBy', sortColumn.value)
    params.append('sortDir', sortDirection.value)
    
    // İsteği gönder
    const response = await fetch(`${url}?${params.toString()}`)
    const result = await response.json()
    
    if (result.success) {
      departments.value = result.data
      totalRecords.value = result.pagination?.totalRecords || result.data.length
      totalPages.value = result.pagination?.totalPages || 1
    } else {
      console.error(result.error || 'Departman verileri yüklenirken bir hata oluştu')
    }
  } catch (err) {
    console.error('Departman verileri alınırken hata oluştu:', err)
  } finally {
    loading.value = false
  }
}

// Departman detay sayfasına git
const viewDepartment = (id) => {
  router.push(`/departmanlar/${id}`)
}

// Departman düzenleme
const editDepartment = (department) => {
  editingDepartment.value = { ...department }
  departmentForm.value = {
    name: department.name,
    companyId: department.companyId.toString()
  }
  showAddDepartmentModal.value = true
}

// Silme onayı
const deleteDepartmentConfirm = (department) => {
  deleteCandidate.value = department
  showDeleteConfirmation.value = true
}

// Departman sil
const deleteDepartment = async (id) => {
  if (!id) return
  
  try {
    const response = await fetch(`/api/departments/${id}`, {
      method: 'DELETE'
    })
    
    const result = await response.json()
    
    if (result.success) {
      // Silinen departmanı listeden kaldır
      departments.value = departments.value.filter(d => d.id !== id)
      
      // Modal kapat
      showDeleteConfirmation.value = false
      showAddDepartmentModal.value = false
      deleteCandidate.value = null
      editingDepartment.value = null
    } else {
      alert(result.error || 'Departman silinirken bir hata oluştu')
    }
  } catch (err) {
    console.error('Departman silinirken hata oluştu:', err)
    alert('Departman silinirken bir hata oluştu')
  }
}

// Form doğrulama
const validateForm = () => {
  const newErrors = {}
  
  if (!departmentForm.value.name) {
    newErrors.name = 'Departman adı gereklidir'
  }
  
  if (!departmentForm.value.companyId) {
    newErrors.companyId = 'Şirket seçimi gereklidir'
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

// Form gönderimi
const submitDepartmentForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // API endpoint ve metodu belirleme
    const url = editingDepartment.value 
      ? `/api/departments/${editingDepartment.value.id}` 
      : '/api/departments/create'
      
    const method = editingDepartment.value ? 'PUT' : 'POST'
    
    // İsteği gönder
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(departmentForm.value)
    })
    
    const result = await response.json()
    
    if (result.success) {
      // Başarılı kayıttan sonra listeyi yenile
      await loadDepartments()
      
      // Modal kapat ve form temizle
      showAddDepartmentModal.value = false
      editingDepartment.value = null
      departmentForm.value = {
        name: '',
        companyId: ''
      }
    } else {
      if (result.field) {
        errors.value[result.field] = result.error
      } else {
        alert(result.error || 'Bir hata oluştu')
      }
    }
  } catch (error) {
    console.error('Form gönderilirken hata oluştu:', error)
    alert('Bir hata oluştu')
  } finally {
    isSubmitting.value = false
  }
}

// Yeni departman ekleme
const addNewDepartment = () => {
  editingDepartment.value = null
  departmentForm.value = {
    name: '',
    companyId: ''
  }
  errors.value = {}
  showAddDepartmentModal.value = true
}

// Bileşen yüklendiğinde verileri yükle
onMounted(async () => {
  await loadCompanies()
  await loadDepartments()
})

definePageMeta({
  layout: 'default'
})
</script> 