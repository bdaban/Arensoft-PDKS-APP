<template>
  <div class="card">
    <div class="card-header flex justify-between items-center">
      <h3 class="text-lg font-medium">Vardiya Tanımı</h3>
      <div class="flex items-center space-x-2">
        <button class="p-1 text-gray-500 hover:text-gray-700" title="Kaydet">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Sol Panel - Temel Bilgiler -->
        <div>
          <div class="form-group">
            <label class="form-label">Vardiya İsmi</label>
            <input type="text" class="form-input" value="SERVİS SABİT" />
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label class="form-label">Başlangıç</label>
              <input type="time" class="form-input" value="00:00" />
            </div>
            <div class="form-group">
              <label class="form-label">Bitiş</label>
              <input type="time" class="form-input" value="00:00" />
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Mesai Tablosu</label>
            <select class="form-input">
              <option>HAFTAICI SERVİS</option>
              <option>HAFTAICI KIRTASİYE</option>
              <option>HAFTAICI VARDİYA</option>
              <option>CUMARTESİ MESAİ</option>
              <option>PAZAR MESAİ</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">Tatil Tablosu</label>
            <select class="form-input">
              <option>SERVİS TATİL</option>
              <option>KIRTASİYE TATİL</option>
              <option>CUMARTESİ TATİL</option>
              <option>PAZAR TATİL</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label mt-2">Vardiyalı Çalışmalarda Tuşlar Kullanılmasın</label>
            <div class="mt-1">
              <input type="checkbox" class="h-4 w-4 text-primary-600 rounded border-gray-300" />
            </div>
          </div>
        </div>
        
        <!-- Sağ Panel - Çalışma Aralıkları -->
        <div>
          <!-- Çalışma Aralıkları Tablosu -->
          <div class="border rounded-md overflow-hidden mb-4">
            <div class="bg-gray-50 px-3 py-2 font-medium text-sm text-gray-700 border-b">
              Çalışma Aralıkları
            </div>
            <div class="divide-y">
              <div class="px-3 py-2 grid grid-cols-3 gap-2">
                <div>
                  <span class="block text-xs text-gray-500">Başlangıç</span>
                  <span class="text-sm">00:00</span>
                </div>
                <div>
                  <span class="block text-xs text-gray-500">Bitiş</span>
                  <span class="text-sm">00:00</span>
                </div>
                <div>
                  <span class="block text-xs text-gray-500">Mesai Tablosu</span>
                  <span class="text-sm">HAFTAICI SERVİS</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Detaylı Mesai Tablosu Bilgisi -->
          <div class="border rounded-md overflow-hidden">
            <div class="bg-gray-50 px-3 py-2 font-medium text-sm text-gray-700 border-b">
              Mesai Tablosu Detayları - HAFTAICI SERVİS
            </div>
            <div class="p-3">
              <div class="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <span class="block text-xs text-gray-500">Gün Dönüm Saati</span>
                  <span class="text-sm">14:00</span>
                </div>
                <div>
                  <span class="block text-xs text-gray-500">Erken Gelme Toleransı</span>
                  <span class="text-sm">15:00</span>
                </div>
                
                <div>
                  <span class="block text-xs text-gray-500">İçeri Giriş Saati</span>
                  <span class="text-sm">15:00</span>
                </div>
                <div>
                  <span class="block text-xs text-gray-500">Geç Gelme Toleransı</span>
                  <span class="text-sm">22:22</span>
                </div>
                
                <div>
                  <span class="block text-xs text-gray-500">Dışarı Çıkış Saati</span>
                  <span class="text-sm">04:00</span>
                </div>
                <div>
                  <span class="block text-xs text-gray-500">Erken Çıkma Toleransı</span>
                  <span class="text-sm">01:00</span>
                </div>
              </div>
              
              <div>
                <span class="block text-xs text-gray-500 mb-1">Hesaplama Tipi</span>
                <span class="text-sm badge-blue px-2 py-1">Normal Toplam</span>
              </div>
              
              <div class="mt-3">
                <span class="block text-xs text-gray-500 mb-1">Bordro Alanları</span>
                <div class="bg-gray-50 rounded-md border mt-1">
                  <div class="grid grid-cols-6 gap-2 p-2 text-xs font-medium text-gray-600 border-b">
                    <div>Bordro Alanı</div>
                    <div>Başla</div>
                    <div>Bitiş</div>
                    <div>Min</div>
                    <div>Max</div>
                    <div>Çarpan</div>
                  </div>
                  <div class="grid grid-cols-6 gap-2 p-2 text-xs text-gray-600">
                    <div>FAZLA MESAİ %100</div>
                    <div>15:00</div>
                    <div>14:00</div>
                    <div>00:30</div>
                    <div>23:00</div>
                    <div>2.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Alt Paneller / Tab'lar -->
      <div class="border-t mt-6 pt-4">
        <div class="flex space-x-4 border-b">
          <button class="px-4 py-2 text-sm font-medium text-primary-600 border-b-2 border-primary-600">
            Genel
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Mola / Ceza
          </button>
        </div>
        
        <div class="mt-4">
          <!-- Mola Tablosu -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 rounded-t-md border border-gray-200">
                Molalar
              </div>
              <div class="border border-t-0 border-gray-200 rounded-b-md overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Açıklama</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Başlangıç</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitiş</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">MOLA</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">12:00</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">12:30</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700">MOLA</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">15:00</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">16:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <!-- Ceza Tablosu -->
            <div>
              <div class="bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 rounded-t-md border border-gray-200">
                Cezalar
              </div>
              <div class="border border-t-0 border-gray-200 rounded-b-md p-4 flex items-center justify-center text-sm text-gray-500">
                <span>Tanımlanmış ceza bulunamadı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 