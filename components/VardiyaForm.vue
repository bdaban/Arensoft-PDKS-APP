<template>
  <div class="card">
    <div class="card-header flex justify-between items-center">
      <h3 class="text-lg font-medium">{{ isEditMode ? 'Vardiya Düzenle' : 'Yeni Vardiya Ekle' }}</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
          <!-- Vardiya Temel Bilgileri -->
          <div class="form-group col-span-1">
            <label class="form-label">Vardiya Adı</label>
            <input 
              type="text" 
              class="form-input" 
              v-model="formData.name" 
              :class="{'border-red-500': errors.name}"
              placeholder="Vardiya adı" 
            />
            <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
          </div>
          
          <div class="form-group col-span-1">
            <label class="form-label">Şirket</label>
            <select 
              class="form-input" 
              v-model="formData.companyId"
              :class="{'border-red-500': errors.companyId}"
            >
              <option value="">Şirket seçiniz</option>
              <option v-for="company in companies" :key="company.id" :value="company.id">
                {{ company.name }}
              </option>
            </select>
            <p v-if="errors.companyId" class="text-red-500 text-xs mt-1">{{ errors.companyId }}</p>
          </div>
          
          <div class="form-group col-span-1">
            <label class="form-label">Başlangıç Saati</label>
            <input 
              type="time" 
              class="form-input" 
              v-model="formData.startTime" 
              :class="{'border-red-500': errors.startTime}"
              placeholder="Başlangıç saati" 
            />
            <p v-if="errors.startTime" class="text-red-500 text-xs mt-1">{{ errors.startTime }}</p>
          </div>
          
          <div class="form-group col-span-1">
            <label class="form-label">Bitiş Saati</label>
            <input 
              type="time" 
              class="form-input" 
              v-model="formData.endTime" 
              :class="{'border-red-500': errors.endTime}"
              placeholder="Bitiş saati" 
            />
            <p v-if="errors.endTime" class="text-red-500 text-xs mt-1">{{ errors.endTime }}</p>
          </div>
          
          <div class="form-group col-span-1">
            <label class="form-label">Vardiya Türü</label>
            <select 
              class="form-input" 
              v-model="formData.type"
              :class="{'border-red-500': errors.type}"
            >
              <option value="">Tür seçiniz</option>
              <option value="normal">Normal Çalışma</option>
              <option value="shift">Vardiya</option>
              <option value="holiday">Tatil</option>
              <option value="holiday_shift">Tatil Vardiya</option>
            </select>
            <p v-if="errors.type" class="text-red-500 text-xs mt-1">{{ errors.type }}</p>
          </div>
        </div>
        
        <!-- Butonlar -->
        <div class="flex justify-end space-x-3">
          <button 
            type="button" 
            class="btn-secondary" 
            @click="$emit('cancel')"
          >
            İptal
          </button>
          <button 
            v-if="isEditMode"
            type="button" 
            class="btn-danger" 
            @click="$emit('delete', formData.id)"
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
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const props = defineProps({
  shift: {
    type: Object,
    default: () => null
  },
  isEditMode: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit', 'cancel', 'delete'])

// Form durumu
const isSubmitting = ref(false)
const companies = ref([])
const errors = ref({})

// Form verisi
const formData = ref({
  id: null,
  name: '',
  startTime: '08:00',
  endTime: '17:00',
  type: 'normal',
  companyId: ''
})

// Şirket bilgilerini al
const fetchCompanies = async () => {
  try {
    const response = await fetch('/api/companies')
    const data = await response.json()
    if (data.success) {
      companies.value = data.data
    }
  } catch (error) {
    console.error('Şirket verileri alınırken hata oluştu:', error)
  }
}

// Form doğrulama
const validateForm = () => {
  const newErrors = {}
  
  if (!formData.value.name) {
    newErrors.name = 'Vardiya adı gereklidir'
  }
  
  if (!formData.value.startTime) {
    newErrors.startTime = 'Başlangıç saati gereklidir'
  }
  
  if (!formData.value.endTime) {
    newErrors.endTime = 'Bitiş saati gereklidir'
  }
  
  if (!formData.value.type) {
    newErrors.type = 'Vardiya türü gereklidir'
  }
  
  if (!formData.value.companyId) {
    newErrors.companyId = 'Şirket seçimi gereklidir'
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

// Form gönderimi
const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // API endpoint ve metodu belirleme
    const url = props.isEditMode 
      ? `/api/shifts/${formData.value.id}` 
      : '/api/shifts/create'
      
    const method = props.isEditMode ? 'PUT' : 'POST'
    
    // İsteği gönder
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })
    
    const result = await response.json()
    
    if (result.success) {
      emit('submit', result.data)
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

// Düzenleme modunda formu doldur
watch(() => props.shift, (newValue) => {
  if (newValue) {
    formData.value = {
      id: newValue.id,
      name: newValue.name || '',
      startTime: newValue.startTime || '08:00',
      endTime: newValue.endTime || '17:00',
      type: newValue.type || 'normal',
      companyId: newValue.companyId?.toString() || ''
    }
  }
}, { immediate: true })

// Komponent yüklendiğinde referans verilerini al
onMounted(fetchCompanies)
</script> 