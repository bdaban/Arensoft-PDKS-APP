<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      <p class="ml-4 text-gray-500">Veriler yükleniyor...</p>
    </div>
    
    <div v-else-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
      {{ error }}
    </div>
    
    <div v-else>
      <div class="mb-6 flex flex-wrap justify-between items-center">
        <div>
          <div class="flex items-center space-x-2">
            <NuxtLink to="/vardiyalar" class="text-gray-500 hover:text-gray-700">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </NuxtLink>
            <h1 class="text-2xl font-bold text-gray-900">{{ shift.name }}</h1>
            <span :class="getTypeBadgeClass(shift.type)" class="ml-2">
              {{ getTypeLabel(shift.type) }}
            </span>
          </div>
          <p class="text-gray-600 mt-1">{{ shift.company?.name }}</p>
        </div>
        
        <div class="flex space-x-3 mt-4 sm:mt-0">
          <button 
            class="btn-secondary" 
            @click="router.push('/vardiyalar')"
          >
            Listeye Dön
          </button>
          <button 
            class="btn-primary" 
            @click="editShift"
          >
            Düzenle
          </button>
        </div>
      </div>
      
      <div class="bg-white shadow overflow-hidden rounded-lg">
        <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Vardiya Bilgileri</h3>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt class="text-sm font-medium text-gray-500">Vardiya Adı</dt>
              <dd class="mt-1 text-lg text-gray-900">{{ shift.name }}</dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-gray-500">Şirket</dt>
              <dd class="mt-1 text-lg text-gray-900">{{ shift.company?.name }}</dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-gray-500">Başlangıç Saati</dt>
              <dd class="mt-1 text-lg text-gray-900">{{ shift.startTime }}</dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-gray-500">Bitiş Saati</dt>
              <dd class="mt-1 text-lg text-gray-900">{{ shift.endTime }}</dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-gray-500">Tür</dt>
              <dd class="mt-1">
                <span :class="getTypeBadgeClass(shift.type)">
                  {{ getTypeLabel(shift.type) }}
                </span>
              </dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-gray-500">Oluşturulma Tarihi</dt>
              <dd class="mt-1 text-lg text-gray-900">{{ formatDate(shift.createdAt) }}</dd>
            </div>
          </dl>
        </div>
      </div>
      
      <!-- Çalışma Planları Bölümü -->
      <div class="mt-8 bg-white shadow overflow-hidden rounded-lg">
        <div class="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Çalışma Planları</h3>
        </div>
        
        <div v-if="shift.schedules && shift.schedules.length === 0" class="px-4 py-8 text-center text-gray-500">
          Bu vardiyaya ait çalışma planı bulunmamaktadır.
        </div>
        
        <div v-else class="table-container">
          <table class="table">
            <thead class="table-header">
              <tr>
                <th class="table-header-cell">Plan Adı</th>
                <th class="table-header-cell">Personel Sayısı</th>
                <th class="table-header-cell">İşlemler</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr v-for="schedule in shift.schedules" :key="schedule.id" class="table-row">
                <td class="table-cell font-medium text-gray-900">{{ schedule.name }}</td>
                <td class="table-cell">{{ schedule._count?.employees || 0 }}</td>
                <td class="table-cell">
                  <div class="flex items-center space-x-2">
                    <button class="p-1 text-blue-600 hover:text-blue-800">
                      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <!-- Vardiya Düzenleme Modal -->
    <div v-if="showEditModal" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="relative bg-white rounded-lg w-full max-w-2xl mx-4">
        <div class="absolute top-0 right-0 p-2">
          <button class="p-2 rounded-md text-gray-500 hover:text-gray-700" @click="showEditModal = false">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-6">
          <VardiyaForm 
            :shift="shift" 
            :is-edit-mode="true"
            @submit="handleFormSubmit"
            @cancel="showEditModal = false"
            @delete="deleteShift"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import VardiyaForm from '~/components/VardiyaForm.vue'

const router = useRouter()
const route = useRoute()

// Durum değişkenleri
const shift = ref({})
const loading = ref(true)
const error = ref(null)
const showEditModal = ref(false)

// Vardiya verisini yükle
const loadShift = async () => {
  loading.value = true
  error.value = null
  
  try {
    const id = route.params.id
    
    if (!id) {
      error.value = 'Geçersiz vardiya ID'
      return
    }
    
    const response = await fetch(`/api/shifts/${id}`)
    const result = await response.json()
    
    if (result.success) {
      shift.value = result.data
    } else {
      error.value = result.error || 'Vardiya bilgileri yüklenirken bir hata oluştu'
    }
  } catch (err) {
    console.error('Vardiya detayları alınırken hata oluştu:', err)
    error.value = 'Vardiya bilgileri yüklenirken bir hata oluştu'
  } finally {
    loading.value = false
  }
}

// Vardiya türü için badge
const getTypeBadgeClass = (type) => {
  switch (type) {
    case 'normal':
      return 'badge-green'
    case 'shift':
      return 'badge-blue'
    case 'holiday':
      return 'badge-yellow'
    case 'holiday_shift':
      return 'badge-yellow'
    default:
      return 'badge-gray'
  }
}

// Vardiya türü için etiket
const getTypeLabel = (type) => {
  switch (type) {
    case 'normal':
      return 'Normal Çalışma'
    case 'shift':
      return 'Vardiya'
    case 'holiday':
      return 'Tatil'
    case 'holiday_shift':
      return 'Tatil Vardiya'
    default:
      return 'Bilinmiyor'
  }
}

// Tarih formatı
const formatDate = (dateString) => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

// Düzenleme modalını aç
const editShift = () => {
  showEditModal.value = true
}

// Form gönderim
const handleFormSubmit = async (updatedShift) => {
  shift.value = updatedShift
  showEditModal.value = false
}

// Vardiya sil
const deleteShift = async (id) => {
  if (!id) return
  
  try {
    const response = await fetch(`/api/shifts/${id}`, {
      method: 'DELETE'
    })
    
    const result = await response.json()
    
    if (result.success) {
      showEditModal.value = false
      router.push('/vardiyalar')
    } else {
      alert(result.error || 'Vardiya silinirken bir hata oluştu')
    }
  } catch (err) {
    console.error('Vardiya silinirken hata oluştu:', err)
    alert('Vardiya silinirken bir hata oluştu')
  }
}

// Bileşen yüklendiğinde verileri yükle
onMounted(loadShift)

definePageMeta({
  layout: 'default'
})
</script> 