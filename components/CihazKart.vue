<template>
  <div class="card">
    <div class="card-header flex justify-between items-center">
      <h3 class="text-lg font-medium">Cihaz Bilgileri</h3>
      <div class="flex items-center space-x-2">
        <button class="p-1 text-gray-500 hover:text-gray-700" title="Kaydet">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Sol Panel -->
        <div class="md:col-span-1">
          <div class="flex flex-col items-center mb-4">
            <div class="h-48 w-48 border border-gray-200 rounded-md flex items-center justify-center text-gray-500 mb-2">
              <img src="https://via.placeholder.com/150" alt="Cihaz Görseli" class="max-h-full max-w-full" />
            </div>
          </div>
          
          <div class="border rounded-md divide-y">
            <div class="px-3 py-2 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Durum</span>
              <span class="badge-green text-xs">Aktif</span>
            </div>
            <div class="px-3 py-2 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Cihaz İşlevi</span>
              <span class="text-sm text-gray-600">Giriş / Çıkış</span>
            </div>
            <div class="px-3 py-2 flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Son Bağlantı</span>
              <span class="text-sm text-gray-600">{{ new Date().toLocaleDateString('tr-TR') }}</span>
            </div>
          </div>
        </div>
        
        <!-- Orta Panel -->
        <div class="md:col-span-2">
          <div class="grid grid-cols-2 gap-x-4 gap-y-3">
            <div class="form-group col-span-1">
              <label class="form-label">Cihaz Modeli</label>
              <div class="flex">
                <input type="text" class="form-input" value="MP 20656" />
                <button class="ml-1 bg-gray-200 p-2 rounded-md text-gray-600 hover:bg-gray-300">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Cihaz Adı</label>
              <input type="text" class="form-input" value="SERVİS" />
            </div>
            
            <div class="form-group col-span-1">
              <label class="form-label">Cihaz No</label>
              <input type="text" class="form-input" value="1" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Cihaz IP</label>
              <input type="text" class="form-input" value="192.168.2.78" />
            </div>
            
            <div class="form-group col-span-1">
              <label class="form-label">Bağlantı Tipi</label>
              <select class="form-input">
                <option>Network (TCP/IP)</option>
                <option>Serial (RS232)</option>
                <option>USB</option>
              </select>
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Port No</label>
              <input type="text" class="form-input" value="5005" />
            </div>
            
            <div class="form-group col-span-1">
              <label class="form-label">Com Port No</label>
              <input type="text" class="form-input" value="0" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Baudrate</label>
              <input type="text" class="form-input" value="115200" />
            </div>
            
            <div class="form-group col-span-1">
              <label class="form-label">Gateway</label>
              <input type="text" class="form-input" placeholder="Gateway adresi" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Alt Ağ Maskesi</label>
              <input type="text" class="form-input" placeholder="Alt ağ maskesi" />
            </div>
            
            <div class="form-group col-span-1">
              <label class="form-label">Mac Adresi</label>
              <input type="text" class="form-input" placeholder="Mac adresi" />
            </div>
            <div class="form-group col-span-1">
              <label class="form-label">Bağlantı Şifresi</label>
              <input type="password" class="form-input" value="0" />
            </div>
          </div>
          
          <div class="border-t pt-4 mt-4">
            <h4 class="text-md font-medium mb-3 text-gray-700">Cihaz Bilgileri</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label">Cihaz Sıra No</label>
                <div class="flex">
                  <input type="text" class="form-input" value="1" />
                  <button class="ml-1 p-2 text-gray-600 hover:text-gray-800">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Cihaz İşlevi</label>
                <select class="form-input">
                  <option>Giriş / Çıkış</option>
                  <option>Sadece Giriş</option>
                  <option>Sadece Çıkış</option>
                </select>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-2">
              <div class="form-group">
                <label class="form-label">Cihaz Seri No</label>
                <input type="text" class="form-input" placeholder="Cihaz seri numarası" />
              </div>
              <div class="form-group">
                <label class="form-label">Kayıtlı Kullanıcı Sayısı</label>
                <input type="text" class="form-input" placeholder="Kayıtlı kullanıcı sayısı" />
              </div>
              
              <div class="form-group">
                <label class="form-label">Kayıtlı Yönetici Sayısı</label>
                <input type="text" class="form-input" placeholder="Kayıtlı yönetici sayısı" />
              </div>
              <div class="form-group">
                <label class="form-label">Tanımlı Avuç Adedi</label>
                <input type="text" class="form-input" placeholder="Tanımlı avuç adedi" />
              </div>
              
              <div class="form-group">
                <label class="form-label">Tanımlı Yüz Adedi</label>
                <input type="text" class="form-input" placeholder="Tanımlı yüz adedi" />
              </div>
              <div class="form-group">
                <label class="form-label">Tanımlı Parmak Adedi</label>
                <input type="text" class="form-input" placeholder="Tanımlı parmak adedi" />
              </div>
              
              <div class="form-group">
                <label class="form-label">Tanımlı Kart Adedi</label>
                <input type="text" class="form-input" placeholder="Tanımlı kart adedi" />
              </div>
              <div class="form-group">
                <label class="form-label">Tanımlı Şifre Adedi</label>
                <input type="text" class="form-input" placeholder="Tanımlı şifre adedi" />
              </div>
              
              <div class="form-group">
                <label class="form-label">Cihaz DLL Grup</label>
                <input type="text" class="form-input" value="PERSDKS" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Alt Paneller -->
      <div class="border-t mt-6 pt-4">
        <div class="flex space-x-4 border-b">
          <button class="px-4 py-2 text-sm font-medium text-primary-600 border-b-2 border-primary-600">
            Cihaz Saat Bilgileri
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Cihaz Geçiş Kayıtları
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Tanımlı Personel
          </button>
        </div>
        
        <div class="mt-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="form-group col-span-1">
              <textarea readonly class="form-input h-24 w-full bg-gray-50" placeholder="Henüz saat bilgisi alınmadı"></textarea>
            </div>
            <div class="col-span-1 flex flex-col space-y-2 justify-end">
              <button class="btn-secondary text-sm px-4 py-2 flex items-center justify-center">
                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Saati Getir
              </button>
              <button class="btn-primary text-sm px-4 py-2 flex items-center justify-center">
                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Saati Güncelle
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Butonlar -->
      <div class="flex justify-between mt-6 border-t pt-4">
        <div class="flex space-x-2">
          <button class="btn-secondary text-sm">
            Bilgileri Getir
          </button>
          <button class="btn-secondary text-sm">
            Cihazı Kapat
          </button>
          <button class="btn-secondary text-sm">
            Tüm Geçiş Kayıtlarını Sil
          </button>
        </div>
        <div class="flex space-x-2">
          <button class="btn-secondary text-sm">
            Tüm Personeli Sil
          </button>
          <button class="btn-secondary text-sm text-red-600 hover:text-red-800">
            Cihazı Kayıtlardan Sil
          </button>
          <button class="btn-primary text-sm">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template> 