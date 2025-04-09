<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">İzin İşlemleri</h1>
      <div>
        <button class="btn-primary flex items-center">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Yeni İzin Kayıt
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Sol Kısım - İzin Türleri -->
      <div class="lg:col-span-1">
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-3 border-b border-gray-200 font-medium">
            İzin Türleri
          </div>
          <div class="p-4">
            <div class="space-y-1">
              <div class="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer bg-blue-50 border-l-4 border-blue-500">
                <span class="text-blue-700 font-medium">Tüm İzinler</span>
                <span class="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">42</span>
              </div>
              <div class="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">AKDI TATİL</span>
                <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">8</span>
              </div>
              <div class="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">HAFTA TATİLİ</span>
                <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">14</span>
              </div>
              <div class="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">ÜCRETLİ İZİN</span>
                <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">6</span>
              </div>
              <div class="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">ÜCRETSİZ İZİN</span>
                <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">3</span>
              </div>
              <div class="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">İDARİ TATİL</span>
                <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">2</span>
              </div>
              <div class="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">YILLIK İZİN</span>
                <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">5</span>
              </div>
              <div class="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">RAPOR/İSTİRAHAT</span>
                <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">4</span>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t">
              <h3 class="text-sm font-medium text-gray-700 mb-3">İzin Türü Ekle/Düzenle</h3>
              <div class="form-group">
                <label class="form-label">Açıklama</label>
                <input type="text" class="form-input" placeholder="İzin türü açıklaması" value="HAFTA TATİLİ" />
              </div>
              <div class="form-group">
                <label class="form-label">Tatil Tipi</label>
                <select class="form-input">
                  <option>Ücretli</option>
                  <option>Ücretsiz</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label mt-2">Günlük Normal Çalışma Saatini Esas Al</label>
                <div class="mt-1">
                  <input type="checkbox" class="h-4 w-4 text-primary-600 rounded border-gray-300" checked />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Haftalıkları Süresi</label>
                <div class="flex">
                  <input type="text" class="form-input" value="07:30" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Ücret</label>
                <div class="flex items-center">
                  <select class="form-input">
                    <option>Ücret 1</option>
                    <option>Ücret 2</option>
                  </select>
                  <span class="px-2">den hesap et</span>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Bordro Alanı</label>
                <select class="form-input">
                  <option>NORMAL ÇALIŞMA</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Hesap Tipi</label>
                <select class="form-input">
                  <option>Tatilden doğan hakları ve çalışmasını planla</option>
                  <option>Tatil günü hakedi</option>
                </select>
              </div>
              
              <div class="flex justify-end space-x-2 mt-4">
                <button class="btn-secondary">İptal</button>
                <button class="btn-primary">Kaydet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sağ Kısım - İzin Kayıtları Listesi -->
      <div class="lg:col-span-2">
        <div class="bg-white shadow rounded-lg">
          <div class="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <div class="font-medium">İzin Kayıtları</div>
            <div class="flex items-center space-x-4">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input type="text" placeholder="İzin ara..." class="pl-10 form-input rounded-md text-sm" />
              </div>
              <div>
                <select class="form-input text-sm rounded-md">
                  <option value="">Tüm Departmanlar</option>
                  <option>Muhasebe</option>
                  <option>Üretim</option>
                  <option>İnsan Kaynakları</option>
                  <option>Bilgi İşlem</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="table-container">
            <table class="table">
              <thead class="table-header">
                <tr>
                  <th class="table-header-cell">Kart No</th>
                  <th class="table-header-cell">Ad Soyad</th>
                  <th class="table-header-cell">Tarih</th>
                  <th class="table-header-cell">Tatil Tipi</th>
                  <th class="table-header-cell">Giriş-Çıkış</th>
                  <th class="table-header-cell">Açıklama</th>
                  <th class="table-header-cell">İşlemler</th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr class="table-row">
                  <td class="table-cell font-medium text-gray-900">000001</td>
                  <td class="table-cell">Ali  EKER</td>
                  <td class="table-cell">21.08.2023, Pazartesi</td>
                  <td class="table-cell">
                    <span class="badge-blue">RAPOR/İSTİRAHAT</span>
                  </td>
                  <td class="table-cell">00:00 - 00:00</td>
                  <td class="table-cell">Yıllık izin</td>
                  <td class="table-cell">
                    <div class="flex items-center space-x-2">
                      <button class="p-1 text-blue-600 hover:text-blue-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                      <button class="p-1 text-gray-600 hover:text-gray-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                      </button>
                      <button class="p-1 text-red-600 hover:text-red-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr class="table-row">
                  <td class="table-cell font-medium text-gray-900">000004</td>
                  <td class="table-cell">Özgül DURMAZ</td>
                  <td class="table-cell">19.08.2023, Cumartesi</td>
                  <td class="table-cell">
                    <span class="badge-yellow">ÜCRETLİ İZİN</span>
                  </td>
                  <td class="table-cell">13:00 - 15:00</td>
                  <td class="table-cell">Yarım gün izin</td>
                  <td class="table-cell">
                    <div class="flex items-center space-x-2">
                      <button class="p-1 text-blue-600 hover:text-blue-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                      <button class="p-1 text-gray-600 hover:text-gray-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                      </button>
                      <button class="p-1 text-red-600 hover:text-red-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr class="table-row">
                  <td class="table-cell font-medium text-gray-900">000030</td>
                  <td class="table-cell">Erkan SEMİR</td>
                  <td class="table-cell">06.03.2025, Perşembe</td>
                  <td class="table-cell">
                    <span class="badge-red">ÜCRETSİZ İZİN</span>
                  </td>
                  <td class="table-cell">00:00 - 00:00</td>
                  <td class="table-cell">Özel izin</td>
                  <td class="table-cell">
                    <div class="flex items-center space-x-2">
                      <button class="p-1 text-blue-600 hover:text-blue-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                      <button class="p-1 text-gray-600 hover:text-gray-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                      </button>
                      <button class="p-1 text-red-600 hover:text-red-800">
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
          
          <div class="px-4 py-3 border-t border-gray-200">
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">Toplam 42 kayıt</span>
              <div class="flex items-center space-x-2">
                <button class="btn-secondary text-sm py-1">Önceki</button>
                <div class="flex">
                  <button class="btn-primary text-sm py-1 px-3">1</button>
                  <button class="btn-secondary text-sm py-1 px-3">2</button>
                  <button class="btn-secondary text-sm py-1 px-3">3</button>
                </div>
                <button class="btn-secondary text-sm py-1">Sonraki</button>
              </div>
            </div>
          </div>
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