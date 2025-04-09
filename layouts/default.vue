<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <div class="flex items-center">
                <Icon name="tabler:clock-hour-4" class="text-blue-600 mr-2 h-6 w-6" />
                <h1 class="text-xl font-bold text-blue-600">PDKS</h1>
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink to="/" class="border-transparent text-gray-500 hover:border-blue-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <Icon name="tabler:home" class="mr-1 h-5 w-5" />
                Ana Sayfa
              </NuxtLink>
              <NuxtLink to="/personel" class="border-transparent text-gray-500 hover:border-blue-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <Icon name="tabler:users" class="mr-1 h-5 w-5" />
                Personel
              </NuxtLink>
              <NuxtLink to="/cihazlar" class="border-transparent text-gray-500 hover:border-blue-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <Icon name="tabler:device-desktop" class="mr-1 h-5 w-5" />
                Cihazlar
              </NuxtLink>
              <NuxtLink to="/vardiyalar" class="border-transparent text-gray-500 hover:border-blue-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <Icon name="tabler:clock" class="mr-1 h-5 w-5" />
                Vardiyalar
              </NuxtLink>
              <NuxtLink to="/izinler" class="border-transparent text-gray-500 hover:border-blue-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <Icon name="tabler:calendar" class="mr-1 h-5 w-5" />
                İzinler
              </NuxtLink>
              <NuxtLink to="/raporlar" class="border-transparent text-gray-500 hover:border-blue-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <Icon name="tabler:report" class="mr-1 h-5 w-5" />
                Raporlar
              </NuxtLink>
            </div>
          </div>
          
          <div class="hidden sm:flex sm:items-center space-x-4">
            <!-- Ayarlar Dropdown -->
            <div class="relative">
              <button 
                @click="toggleSettingsMenu" 
                class="border-transparent text-gray-500 hover:border-blue-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <Icon name="tabler:settings" class="mr-1 h-5 w-5" />
                Ayarlar
                <svg 
                  class="ml-1 h-4 w-4" 
                  :class="isSettingsMenuOpen ? 'transform rotate-180' : ''"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div 
                v-if="isSettingsMenuOpen" 
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
              >
                <NuxtLink 
                  to="/sirketler" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  @click="isSettingsMenuOpen = false"
                >
                  <Icon name="tabler:building" class="mr-2 h-4 w-4" />
                  Şirket Yönetimi
                </NuxtLink>
                <NuxtLink 
                  to="/departmanlar" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  @click="isSettingsMenuOpen = false"
                >
                  <Icon name="tabler:layout-grid" class="mr-2 h-4 w-4" />
                  Departman Yönetimi
                </NuxtLink>
                <NuxtLink 
                  to="/puantaj/planlama" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  @click="isSettingsMenuOpen = false"
                >
                  <Icon name="tabler:calendar-time" class="mr-2 h-4 w-4" />
                  Puantaj Planlama
                </NuxtLink>
              </div>
            </div>
            
            <div class="ml-3 relative">
              <div>
                <button type="button" class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu-button">
                  <span class="sr-only">Kullanıcı menüsü</span>
                  <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    A
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div class="-mr-2 flex items-center sm:hidden">
            <button 
              type="button" 
              @click="toggleMobileMenu"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" 
              aria-controls="mobile-menu" 
              aria-expanded="false"
            >
              <span class="sr-only">Menüyü aç</span>
              <!-- Heroicon name: outline/menu -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-if="isMobileMenuOpen" class="sm:hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink to="/" class="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center">
            <Icon name="tabler:home" class="mr-2 h-5 w-5" />
            Ana Sayfa
          </NuxtLink>
          <NuxtLink to="/personel" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center">
            <Icon name="tabler:users" class="mr-2 h-5 w-5" />
            Personel
          </NuxtLink>
          <NuxtLink to="/cihazlar" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center">
            <Icon name="tabler:device-desktop" class="mr-2 h-5 w-5" />
            Cihazlar
          </NuxtLink>
          <NuxtLink to="/vardiyalar" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center">
            <Icon name="tabler:clock" class="mr-2 h-5 w-5" />
            Vardiyalar
          </NuxtLink>
          <NuxtLink to="/izinler" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center">
            <Icon name="tabler:calendar" class="mr-2 h-5 w-5" />
            İzinler
          </NuxtLink>
          <NuxtLink to="/raporlar" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center">
            <Icon name="tabler:report" class="mr-2 h-5 w-5" />
            Raporlar
          </NuxtLink>
          
          <!-- Mobile Ayarlar Menüsü -->
          <div>
            <button 
              @click="toggleMobileSettingsMenu"
              class="w-full text-left border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 flex justify-between items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              <span class="flex items-center">
                <Icon name="tabler:settings" class="mr-2 h-5 w-5" />
                Ayarlar
              </span>
              <svg 
                class="h-5 w-5"
                :class="isMobileSettingsMenuOpen ? 'transform rotate-180' : ''"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div v-if="isMobileSettingsMenuOpen" class="pl-6">
              <NuxtLink to="/sirketler" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 flex items-center">
                <Icon name="tabler:building" class="mr-2 h-5 w-5" />
                Şirket Yönetimi
              </NuxtLink>
              <NuxtLink to="/departmanlar" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 flex items-center">
                <Icon name="tabler:layout-grid" class="mr-2 h-5 w-5" />
                Departman Yönetimi
              </NuxtLink>
              <NuxtLink to="/puantaj/planlama" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 flex items-center">
                <Icon name="tabler:calendar-time" class="mr-2 h-5 w-5" />
                Puantaj Planlama
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white mt-auto border-t border-gray-200">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Mediacom Bilgisayar PDKS Uygulaması. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
    
    <!-- Overlay to close dropdown when clicked outside -->
    <div 
      v-if="isSettingsMenuOpen" 
      class="fixed inset-0 z-0"
      @click="isSettingsMenuOpen = false"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Dropdown menü durumları
const isSettingsMenuOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileSettingsMenuOpen = ref(false)

// Ayarlar menüsünü aç/kapat
const toggleSettingsMenu = () => {
  isSettingsMenuOpen.value = !isSettingsMenuOpen.value
}

// Mobil menüyü aç/kapat
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Mobil ayarlar menüsü açıksa, kapat
  if (!isMobileMenuOpen.value) {
    isMobileSettingsMenuOpen.value = false
  }
}

// Mobil ayarlar menüsünü aç/kapat
const toggleMobileSettingsMenu = () => {
  isMobileSettingsMenuOpen.value = !isMobileSettingsMenuOpen.value
}

// ESC tuşuyla menüyü kapat
const handleEscKey = (event) => {
  if (event.key === 'Escape') {
    isSettingsMenuOpen.value = false
    isMobileSettingsMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscKey)
})
</script> 