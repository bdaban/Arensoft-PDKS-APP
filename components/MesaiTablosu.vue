<template>
  <div class="card">
    <div class="card-header flex justify-between items-center">
      <h3 class="text-lg font-medium">Mesai Tablosu</h3>
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
        <!-- Sol Panel - Tablo Listesi -->
        <div>
          <div class="max-h-96 overflow-y-auto border rounded-md">
            <div class="space-y-0 divide-y">
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer bg-blue-50 border-l-4 border-blue-500">
                <span class="text-blue-700 font-medium">HAFTAICI SERVİS</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">HAFTAICI 7-15</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">HAFTAICI 15-23</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">PAZAR 07-15</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">PAZAR 15-23</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">PAZAR 23-07</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">HAFTAICI 08.30-18.30</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">PAZAR 08.30-18.30</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">SERVİS TATİL</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">HAFTAICI 23-07</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">HAFTAICI 10.30-20</span>
              </div>
              <div class="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                <span class="text-gray-700">PAZAR 10.30-20</span>
              </div>
            </div>
          </div>
          
          <button class="btn-secondary text-sm mt-3">Kopya Oluştur</button>
        </div>
        
        <!-- Sağ Panel - Mesai Tablosu Detayları -->
        <div>
          <ul class="flex space-x-1 border-b">
            <li class="px-4 py-2 text-sm font-medium text-primary-600 border-b-2 border-primary-600 cursor-pointer">
              Genel
            </li>
            <li class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer">
              Mola / Ceza
            </li>
          </ul>
          
          <div class="mt-4">
            <div class="form-group">
              <label class="form-label">Adı</label>
              <input type="text" class="form-input" value="PAZAR 15-23" />
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-4">
              <div class="form-group">
                <label class="form-label">Gün dönüm saati</label>
                <select class="form-input">
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>00:00</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Erken gelme toleransı</label>
                <select class="form-input">
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="form-label">İçeri giriş saati</label>
                <select class="form-input">
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Geç gelme toleransı</label>
                <select class="form-input">
                  <option>22:22</option>
                  <option>23:00</option>
                  <option>00:00</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="form-label">Dışarı çıkış saati</label>
                <select class="form-input">
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>00:00</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Erken çıkma toleransı</label>
                <select class="form-input">
                  <option>23:00</option>
                  <option>22:00</option>
                  <option>00:00</option>
                </select>
              </div>
            </div>
            
            <div class="form-group mt-4">
              <label class="form-label">Hesaplama tipi</label>
              <select class="form-input">
                <option>Normal toplam</option>
                <option>Özel toplam</option>
                <option>Vardiya toplam</option>
              </select>
            </div>
            
            <!-- Bordro Alanları -->
            <div class="mt-4">
              <h3 class="text-sm font-medium text-gray-700 mb-2">Bordro alanları</h3>
              <div class="border rounded-md overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-blue-50">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Bordro alanı</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Başla</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Bitiş</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Min</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Max</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Ekle</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Çarpan</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Ücret</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50">
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-yellow-600 font-medium">FAZLA MESAİ %100</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">15:00</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">14:00</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">00:30</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">23:00</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">00:00</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">2.00</td>
                      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Ücret 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 