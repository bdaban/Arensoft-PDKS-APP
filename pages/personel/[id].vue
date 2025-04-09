<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <NuxtLink to="/personel" class="text-gray-500 hover:text-gray-700 mr-2">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </NuxtLink>
        <h1 class="text-2xl font-bold text-gray-900">Personel Detayı</h1>
      </div>
      <div class="flex space-x-2">
        <button class="btn-danger flex items-center">
          <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          Sil
        </button>
        <button class="btn-primary flex items-center">
          <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
          </svg>
          Kaydet
        </button>
      </div>
    </div>
    
    <PersonelKart />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const personelId = route.params.id

definePageMeta({
  layout: 'default'
})
</script> 