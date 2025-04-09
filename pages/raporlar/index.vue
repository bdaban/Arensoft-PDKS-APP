<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">Raporlar</h1>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Puantaj Raporu -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-4 py-5 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Aylık Puantaj Raporu</h3>
          <p class="mt-1 text-sm text-gray-500">
            Personel çalışma süresi, izin ve tatil günleri özeti
          </p>
        </div>
        <div class="p-4">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Şirket</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Şirketler</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Departman</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Departmanlar</option>
                <option>Muhasebe</option>
                <option>Üretim</option>
                <option>İnsan Kaynakları</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Tarih Aralığı</label>
              <div class="mt-1 flex space-x-2">
                <input type="date" class="form-input w-full" />
                <input type="date" class="form-input w-full" />
              </div>
            </div>
            <div class="flex justify-end">
              <button type="button" class="btn-primary">
                Rapor Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Devamsızlık Raporu -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-4 py-5 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Devamsızlık Raporu</h3>
          <p class="mt-1 text-sm text-gray-500">
            Personel izin ve devamsızlık durumları
          </p>
        </div>
        <div class="p-4">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Şirket</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Şirketler</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Departman</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Departmanlar</option>
                <option>Muhasebe</option>
                <option>Üretim</option>
                <option>İnsan Kaynakları</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Tarih Aralığı</label>
              <div class="mt-1 flex space-x-2">
                <input type="date" class="form-input w-full" />
                <input type="date" class="form-input w-full" />
              </div>
            </div>
            <div class="flex justify-end">
              <button type="button" class="btn-primary">
                Rapor Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Mesai Raporu -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-4 py-5 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Mesai Raporu</h3>
          <p class="mt-1 text-sm text-gray-500">
            Fazla mesai ve çalışma saatleri detayları
          </p>
        </div>
        <div class="p-4">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Şirket</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Şirketler</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Departman</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Departmanlar</option>
                <option>Muhasebe</option>
                <option>Üretim</option>
                <option>İnsan Kaynakları</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Tarih Aralığı</label>
              <div class="mt-1 flex space-x-2">
                <input type="date" class="form-input w-full" />
                <input type="date" class="form-input w-full" />
              </div>
            </div>
            <div class="flex justify-end">
              <button type="button" class="btn-primary">
                Rapor Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- İzin Bakiyeleri Raporu -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-4 py-5 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">İzin Bakiyeleri</h3>
          <p class="mt-1 text-sm text-gray-500">
            Personel yıllık izin ve bakiye durumları
          </p>
        </div>
        <div class="p-4">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Şirket</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Şirketler</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Departman</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Departmanlar</option>
                <option>Muhasebe</option>
                <option>Üretim</option>
                <option>İnsan Kaynakları</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Yıl</label>
              <select class="mt-1 form-input block w-full">
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
            <div class="flex justify-end">
              <button type="button" class="btn-primary">
                Rapor Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Gecikme Raporu -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-4 py-5 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Gecikme Raporu</h3>
          <p class="mt-1 text-sm text-gray-500">
            Geç giriş ve erken çıkış detayları
          </p>
        </div>
        <div class="p-4">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Şirket</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Şirketler</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Departman</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Departmanlar</option>
                <option>Muhasebe</option>
                <option>Üretim</option>
                <option>İnsan Kaynakları</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Tarih Aralığı</label>
              <div class="mt-1 flex space-x-2">
                <input type="date" class="form-input w-full" />
                <input type="date" class="form-input w-full" />
              </div>
            </div>
            <div class="flex justify-end">
              <button type="button" class="btn-primary">
                Rapor Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Cihaz Aktivite Raporu -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-4 py-5 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Cihaz Aktivite Raporu</h3>
          <p class="mt-1 text-sm text-gray-500">
            Cihazların kullanım istatistikleri
          </p>
        </div>
        <div class="p-4">
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Cihaz</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Cihazlar</option>
                <option>AREXTEK-001</option>
                <option>AREXTEK-002</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Şirket</label>
              <select class="mt-1 form-input block w-full">
                <option>Tüm Şirketler</option>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Tarih Aralığı</label>
              <div class="mt-1 flex space-x-2">
                <input type="date" class="form-input w-full" />
                <input type="date" class="form-input w-full" />
              </div>
            </div>
            <div class="flex justify-end">
              <button type="button" class="btn-primary">
                Rapor Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 