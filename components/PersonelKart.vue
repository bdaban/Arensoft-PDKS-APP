<template>
  <div class="card">
    <div class="card-header flex justify-between items-center">
      <h3 class="text-lg font-medium">Personel Kartı</h3>
      <div class="flex items-center space-x-2">
        <button class="p-1 text-gray-500 hover:text-gray-700" title="Kaydet">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
        </button>
        <button class="p-1 text-gray-500 hover:text-gray-700" title="Yazdır">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Sol Panel -->
        <div class="md:col-span-1">
          <div class="flex flex-col items-center mb-4">
            <div class="h-32 w-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mb-2">
              <svg class="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <button class="text-sm text-primary-600 hover:text-primary-800 mb-2">Fotoğraf Ekle</button>
          </div>
          
          <div class="border rounded-md divide-y">
            <div class="px-3 py-2 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Durum</span>
              <span class="badge-green text-xs">Aktif</span>
            </div>
            <div class="px-3 py-2 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">İşe Giriş</span>
              <span class="text-sm text-gray-600">09.06.2022</span>
            </div>
            <div class="px-3 py-2 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Son Giriş</span>
              <span class="text-sm text-gray-600">{{ new Date().toLocaleDateString('tr-TR') }}</span>
            </div>
            <div class="px-3 py-2 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Kalan İzin</span>
              <span class="text-sm text-gray-600">14 gün</span>
            </div>
          </div>
        </div>
        
        <!-- Orta Panel -->
        <div class="md:col-span-2">
          <div class="grid grid-cols-2 gap-x-4 gap-y-3">
            <div class="form-group col-span-1">
              <label class="form-label">Kart No</label>
              <div class="flex">
                <input type="text" class="form-input" value="000030" />
                <button class="ml-1 bg-gray-200 p-2 rounded-md text-gray-600 hover:bg-gray-300">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Diğer Kart No</label>
              <input type="text" class="form-input" placeholder="Diğer kart numarası" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Ad</label>
              <input type="text" class="form-input" value="Erkan" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Soyad</label>
              <input type="text" class="form-input" value="Demir" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">TC Kimlik No</label>
              <input type="text" class="form-input" placeholder="TC Kimlik No" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Ünvan</label>
              <input type="text" class="form-input" placeholder="Ünvan" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Şirket</label>
              <select class="form-input">
                <option>CS MAMUCA</option>
                <option>CS SERVİS</option>
                <option>CS MERKEZ</option>
                <option>CS HAL</option>
                <option>SIGORTA</option>
              </select>
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Departman</label>
              <select class="form-input">
                <option>Muhasebe</option>
                <option>Üretim</option>
                <option>Satış</option>
                <option>Yönetim</option>
              </select>
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Hesap Grubu</label>
              <select class="form-input">
                <option>VARDİYALI GRUP</option>
                <option>NORMAL MESAİ</option>
                <option>SERVİS</option>
                <option>KIRTASİYE</option>
              </select>
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">A.G.İ.</label>
              <input type="text" class="form-input" placeholder="A.G.İ." />
            </div>
          </div>
          
          <div class="border-t pt-4 mt-4">
            <h4 class="text-md font-medium mb-3 text-gray-700">Çalışma Bilgileri</h4>
            <div class="grid grid-cols-3 gap-4">
              <div class="form-group">
                <label class="form-label">Aylık Ücret</label>
                <div class="relative">
                  <input type="text" class="form-input" value="0,00" />
                  <button class="absolute inset-y-0 right-0 px-3 bg-gray-100 hover:bg-gray-200 rounded-r-md text-sm">Ücret Değiştir</button>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Günlük Ücret</label>
                <input type="text" class="form-input" value="0,00" readonly />
              </div>
              <div class="form-group">
                <label class="form-label">Saat Ücret (A)</label>
                <input type="text" class="form-input" value="0,00000" readonly />
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-2">
              <div class="form-group">
                <label class="form-label">Giriş Tarihi</label>
                <div class="flex items-center">
                  <input type="date" class="form-input" value="2022-06-09" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Çıkış Tarihi</label>
                <div class="flex items-center">
                  <input type="date" class="form-input" />
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
            Giriş-Çıkış
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            İzin
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Avans Kesintiler
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Primler
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Zimmet
          </button>
        </div>
        
        <div class="mt-4">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                  <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giriş Saati</th>
                  <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Çıkış Saati</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="hover:bg-gray-50">
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">19.07.2022, Salı</td>
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">16:34</td>
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">16:37</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">05.07.2022, Salı</td>
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">17:18</td>
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">--:--</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="flex justify-between mt-4">
            <div class="flex items-center space-x-2">
              <input type="text" class="form-input text-sm" placeholder="Tarih ara..." />
              <button class="btn-secondary text-sm">Tara</button>
            </div>
            <div class="flex items-center space-x-2">
              <button class="btn-secondary text-sm">Giriş Yapılmayan Hareketler</button>
              <button class="btn-secondary text-sm">Çıkış Yapılmayan Hareketler</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 