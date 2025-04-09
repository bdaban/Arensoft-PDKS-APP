<template>
  <div class="card">
    <div class="card-header flex justify-between items-center">
      <h3 class="text-lg font-medium">{{ isEditMode ? 'Personel Düzenle' : 'Yeni Personel Ekle' }}</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
          <!-- Personel Temel Bilgileri -->
          <div class="form-group col-span-1">
            <label class="form-label">Kart No</label>
            <div class="flex">
              <input 
                type="text" 
                class="form-input" 
                v-model="formData.cardNo" 
                :disabled="isEditMode"
                :class="{'border-red-500': errors.cardNo}"
                placeholder="Kart numarası" 
              />
            </div>
            <p v-if="errors.cardNo" class="text-red-500 text-xs mt-1">{{ errors.cardNo }}</p>
          </div>
          <div class="form-group col-span-1">
            <label class="form-label">Diğer Kart No</label>
            <input type="text" class="form-input" v-model="formData.otherCardNo" placeholder="Diğer kart numarası" />
          </div>
          <div class="form-group col-span-1">
            <label class="form-label">Ad</label>
            <input 
              type="text" 
              class="form-input" 
              v-model="formData.name" 
              :class="{'border-red-500': errors.name}"
              placeholder="Personel adı" 
            />
            <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
          </div>
          <div class="form-group col-span-1">
            <label class="form-label">Soyad</label>
            <input 
              type="text" 
              class="form-input" 
              v-model="formData.surname" 
              :class="{'border-red-500': errors.surname}"
              placeholder="Personel soyadı" 
            />
            <p v-if="errors.surname" class="text-red-500 text-xs mt-1">{{ errors.surname }}</p>
          </div>
          <div class="form-group col-span-1">
            <label class="form-label">SGK No</label>
            <input type="text" class="form-input" v-model="formData.ssn" placeholder="SGK numarası" />
          </div>
          <div class="form-group col-span-1">
            <label class="form-label">Ünvan</label>
            <input type="text" class="form-input" v-model="formData.title" placeholder="Ünvan bilgisi" />
          </div>
          
          <!-- Şirket ve Departman Bilgileri -->
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
            <label class="form-label">Departman</label>
            <select 
              class="form-input" 
              v-model="formData.departmentId"
              :class="{'border-red-500': errors.departmentId}"
            >
              <option value="">Departman seçiniz</option>
              <option v-for="department in filteredDepartments" :key="department.id" :value="department.id">
                {{ department.name }}
              </option>
            </select>
            <p v-if="errors.departmentId" class="text-red-500 text-xs mt-1">{{ errors.departmentId }}</p>
          </div>
          <div class="form-group col-span-1">
            <label class="form-label">Hesap Grubu</label>
            <select 
              class="form-input" 
              v-model="formData.scheduleId"
              :class="{'border-red-500': errors.scheduleId}"
            >
              <option value="">Hesap grubu seçiniz</option>
              <option v-for="schedule in schedules" :key="schedule.id" :value="schedule.id">
                {{ schedule.name }}
              </option>
            </select>
            <p v-if="errors.scheduleId" class="text-red-500 text-xs mt-1">{{ errors.scheduleId }}</p>
          </div>
          <div class="form-group col-span-1">
            <label class="form-label">A.G.İ.</label>
            <input type="text" class="form-input" v-model="formData.agi" placeholder="A.G.İ." />
          </div>
        </div>
        
        <div class="border-t pt-4 mt-4">
          <h4 class="text-md font-medium mb-3 text-gray-700">Çalışma Bilgileri</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="form-group">
              <label class="form-label">Aylık Ücret</label>
              <div class="relative">
                <input type="text" class="form-input" v-model="formData.monthlySalary" />
                <button type="button" class="absolute inset-y-0 right-0 px-3 bg-gray-100 hover:bg-gray-200 rounded-r-md text-sm">
                  Ücret Değiştir
                </button>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Günlük Ücret</label>
              <input type="text" class="form-input" v-model="formData.dailySalary" :readonly="true" />
            </div>
            <div class="form-group">
              <label class="form-label">Saat Ücret (A)</label>
              <input type="text" class="form-input" v-model="formData.hourlySalary" :readonly="true" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div class="form-group">
              <label class="form-label">Giriş Tarihi</label>
              <div class="flex items-center">
                <input 
                  type="date" 
                  class="form-input" 
                  v-model="formData.entryDate"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Çıkış Tarihi</label>
              <div class="flex items-center">
                <input 
                  type="date" 
                  class="form-input" 
                  v-model="formData.exitDate"
                />
              </div>
            </div>
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
  employee: {
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
const departments = ref([])
const schedules = ref([])
const errors = ref({})

// Form verisi
const formData = ref({
  id: null,
  cardNo: '',
  otherCardNo: '',
  name: '',
  surname: '',
  ssn: '',
  title: '',
  companyId: '',
  departmentId: '',
  scheduleId: '',
  agi: '',
  monthlySalary: '0,00',
  dailySalary: '0,00',
  hourlySalary: '0,00000',
  entryDate: new Date().toISOString().split('T')[0],
  exitDate: ''
})

// Filtrelenmiş departmanlar (seçilen şirkete göre)
const filteredDepartments = computed(() => {
  if (!formData.value.companyId) return []
  return departments.value.filter(dept => dept.companyId === parseInt(formData.value.companyId))
})

// Şirket, departman ve vardiya bilgilerini al
const fetchReferenceData = async () => {
  try {
    // Şirketleri al
    const companyResponse = await fetch('/api/companies')
    const companyData = await companyResponse.json()
    if (companyData.success) {
      companies.value = companyData.data
    }
    
    // Departmanları al
    const departmentResponse = await fetch('/api/departments')
    const departmentData = await departmentResponse.json()
    if (departmentData.success) {
      departments.value = departmentData.data
    }
    
    // Çalışma planlarını al
    const scheduleResponse = await fetch('/api/schedules')
    const scheduleData = await scheduleResponse.json()
    if (scheduleData.success) {
      schedules.value = scheduleData.data
    }
  } catch (error) {
    console.error('Referans verileri alınırken hata oluştu:', error)
  }
}

// Form doğrulama
const validateForm = () => {
  const newErrors = {}
  
  if (!formData.value.cardNo) {
    newErrors.cardNo = 'Kart numarası gereklidir'
  }
  
  if (!formData.value.name) {
    newErrors.name = 'Ad gereklidir'
  }
  
  if (!formData.value.surname) {
    newErrors.surname = 'Soyad gereklidir'
  }
  
  if (!formData.value.companyId) {
    newErrors.companyId = 'Şirket seçimi gereklidir'
  }
  
  if (!formData.value.departmentId) {
    newErrors.departmentId = 'Departman seçimi gereklidir'
  }
  
  if (!formData.value.scheduleId) {
    newErrors.scheduleId = 'Hesap grubu seçimi gereklidir'
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
      ? `/api/employees/${formData.value.id}` 
      : '/api/employees/create'
      
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
watch(() => props.employee, (newValue) => {
  if (newValue) {
    formData.value = {
      id: newValue.id,
      cardNo: newValue.cardNo || '',
      otherCardNo: newValue.otherCardNo || '',
      name: newValue.name || '',
      surname: newValue.surname || '',
      ssn: newValue.ssn || '',
      title: newValue.title || '',
      companyId: newValue.companyId?.toString() || '',
      departmentId: newValue.departmentId?.toString() || '',
      scheduleId: newValue.scheduleId?.toString() || '',
      agi: newValue.agi || '',
      monthlySalary: newValue.monthlySalary?.toLocaleString('tr-TR', { minimumFractionDigits: 2 }) || '0,00',
      dailySalary: newValue.dailySalary?.toLocaleString('tr-TR', { minimumFractionDigits: 2 }) || '0,00',
      hourlySalary: newValue.hourlySalary?.toLocaleString('tr-TR', { minimumFractionDigits: 5 }) || '0,00000',
      entryDate: newValue.entryDate ? new Date(newValue.entryDate).toISOString().split('T')[0] : '',
      exitDate: newValue.exitDate ? new Date(newValue.exitDate).toISOString().split('T')[0] : ''
    }
  }
}, { immediate: true })

// Komponent yüklendiğinde referans verilerini al
onMounted(fetchReferenceData)
</script> 