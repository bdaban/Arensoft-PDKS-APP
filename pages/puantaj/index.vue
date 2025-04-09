<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">Puantaj Hesaplama Parametreleri</h1>
      <div>
        <button class="btn-primary flex items-center">
          <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Yeni Parametre
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Sol Kısım - Parametre Listesi -->
      <div class="lg:col-span-1">
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-3 border-b border-gray-200 font-medium">
            Tablo Adı
          </div>
          <div class="max-h-96 overflow-y-auto">
            <div class="space-y-0 divide-y">
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer bg-blue-50 border-l-4 border-blue-500">
                <span class="text-blue-700 font-medium">GENEL AYLIK PAR. 9.30 SAAT</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">GENEL AYLIK PAR. 08 SAAT</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">GENEL AYLIK 9 SAAT PAR.</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">KIRTASİYE 8 SAAT PAR.</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">TAKSİ 9.5 SAAT PAR.</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">TEKNİK SERVİS 8.5 SAAT PAR.</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">VARDİYA 7-15-23 PAR.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sağ Kısım - Parametre Detayları -->
      <div class="lg:col-span-2">
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-3 border-b border-gray-200 font-medium">
            Parametre Detayları
          </div>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Sol Kısım - Genel Bilgiler -->
              <div>
                <div class="form-group">
                  <label class="form-label">Açıklama</label>
                  <input type="text" class="form-input" value="GENEL AYLIK PAR. 9.30 SAAT" />
                </div>
                
                <div class="form-group">
                  <label class="form-label">Bir Gün Kaç Saat</label>
                  <input type="time" class="form-input" value="09:30" />
                </div>
                
                <div class="mt-6 pt-4 border-t">
                  <h3 class="text-md font-medium mb-3">Devamsızlık Ayarları</h3>
                  <div class="form-group">
                    <label class="form-label">Devamsızlık Nereye Eklenecek</label>
                    <select class="form-input">
                      <option>DEVAMSIZLIK</option>
                      <option>NORMAL ÇALIŞMA</option>
                      <option>CEZA</option>
                    </select>
                  </div>
                  
                  <div class="form-group flex items-center mt-4">
                    <input type="checkbox" class="h-4 w-4 text-primary-600 rounded border-gray-300" id="devamsizlik-sure" checked />
                    <label for="devamsizlik-sure" class="ml-2 text-sm text-gray-700">Devamsızlık süresini günlük saatten al</label>
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Devamsızlık Süresi</label>
                    <input type="time" class="form-input" value="00:00" />
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Devamsızlık Ücret Çarpanı</label>
                    <input type="text" class="form-input" value="100,00" />
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Devamsızlık Saat Ücreti</label>
                    <select class="form-input">
                      <option>Ücret1</option>
                      <option>Ücret2</option>
                      <option>Ücret3</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <!-- Sağ Kısım - Ceza Ayarları -->
              <div>
                <div class="mt-0 md:mt-6 mb-6 pt-4 border-t md:border-t-0">
                  <h3 class="text-md font-medium mb-3">Ceza Ayarları</h3>
                  <div class="form-group">
                    <label class="form-label">Ceza Nereye Eklenecek</label>
                    <select class="form-input">
                      <option>CEZA</option>
                      <option>NORMAL ÇALIŞMA</option>
                      <option>DEVAMSIZLIK</option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Ceza Süresi</label>
                    <div class="grid grid-cols-2 gap-2">
                      <input type="text" class="form-input" value="" />
                      <input type="text" class="form-input" value="" />
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Ücret Çarpanı</label>
                    <input type="text" class="form-input" value="100,00" />
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Saat Ücreti</label>
                    <select class="form-input">
                      <option>Ücret1</option>
                      <option>Ücret2</option>
                      <option>Ücret3</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label class="form-label">Ay Sonu Hesabı</label>
                  <select class="form-input">
                    <option></option>
                    <option>Ay Sonu Saatlik</option>
                    <option>Ay Sonu Günlük</option>
                  </select>
                </div>
                
                <button class="btn-secondary text-sm w-full mt-2">Ay Sonu Hesaplamaları</button>
                
                <div class="form-group mt-4">
                  <label class="form-label">Genel Gün Dönüm Saati</label>
                  <input type="time" class="form-input" value="06:00" />
                </div>
                
                <div class="form-group flex items-center mt-4">
                  <input type="checkbox" class="h-4 w-4 text-primary-600 rounded border-gray-300" id="saatlik-ucret" />
                  <label for="saatlik-ucret" class="ml-2 text-sm text-gray-700">Saatlik ücretleri tekrar hesapla</label>
                </div>
              </div>
            </div>
            
            <!-- Butonlar -->
            <div class="flex justify-end mt-6 space-x-2">
              <button class="btn-secondary">İptal</button>
              <button class="btn-danger">Sil</button>
              <button class="btn-primary">Kaydet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Genel Gruplar Çalışma Planları -->
    <div class="mt-6">
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-3 border-b border-gray-200 font-medium">
          Genel Gruplar Çalışma Planları
        </div>
        <div class="p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Sol Taraf - Plan Listesi -->
            <div>
              <div class="form-group">
                <label class="form-label">Grup Adı</label>
                <select class="form-input">
                  <option>KIRTASİYE 08.30</option>
                  <option>VARDİYALI GRUP</option>
                  <option>KIRTASİYE 10.30</option>
                  <option>SERVİS</option>
                </select>
              </div>
              
              <div class="mt-4 border rounded-md">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Açıklama</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hesap Parametresi</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">KIRTASİYE 08.30</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">GENEL AYLIK PAR. 08 SAAT</td>
                    </tr>
                    <tr class="hover:bg-gray-50 bg-blue-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">VARDİYALI GRUP</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">GENEL AYLIK PAR. 08 SAAT</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">KIRTASİYE 10.30</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">GENEL AYLIK PAR. 08 SAAT</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">SERVİS</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">GENEL AYLIK PAR. 9.30 SAAT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <!-- Sağ Taraf - Takvim Planı -->
            <div>
              <div class="border rounded-md">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vardiya</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">01.11.2023, Çarşamba</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">KIRTASİYE 08-30-18.30</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">02.11.2023, Perşembe</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">KIRTASİYE 08-30-18.30</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">03.11.2023, Cuma</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">KIRTASİYE 08-30-18.30</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">04.11.2023, Cumartesi</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">KIRTASİYE 08-30-18.30</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">05.11.2023, Pazar</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">KIRTASİYE TATİL 08-30-18.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <button class="btn-secondary text-sm mt-4">Tüm Planı Sil</button>
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