<template>
  <div class="card">
    <div class="card-header flex justify-between items-center">
      <h3 class="text-lg font-medium">İzin Kaydı</h3>
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
        <!-- Sol Panel - Personel Seçimi -->
        <div>
          <div class="form-group">
            <label class="form-label">Personel Seçimi</label>
            <div class="flex">
              <input type="text" class="form-input" placeholder="Personel ara..." />
              <button class="ml-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-md">
                <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="border rounded-md mt-4">
            <div class="bg-gray-50 px-3 py-2 font-medium text-sm text-gray-700 border-b">
              Seçili Personel
            </div>
            <div class="p-3">
              <div class="flex items-center mb-3">
                <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">Erkan DEMİR</div>
                  <div class="text-sm text-gray-500">000030 - Muhasebe</div>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span class="text-gray-500">Şirket:</span>
                  <span class="ml-1">CS MAMUCA</span>
                </div>
                <div>
                  <span class="text-gray-500">Hesap Grubu:</span>
                  <span class="ml-1">VARDİYALI GRUP</span>
                </div>
                <div>
                  <span class="text-gray-500">Giriş Tarihi:</span>
                  <span class="ml-1">09.06.2022</span>
                </div>
                <div>
                  <span class="text-gray-500">Kalan İzin:</span>
                  <span class="ml-1">14 gün</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-5">
            <div class="border rounded-md overflow-hidden">
              <div class="bg-gray-50 px-3 py-2 font-medium text-sm text-gray-700 border-b">
                Aktif İzinler
              </div>
              <div class="divide-y">
                <div class="p-3">
                  <div class="flex justify-between mb-1">
                    <span class="font-medium text-sm">06.03.2025, Perşembe</span>
                    <span class="badge-red text-xs">ÜCRETSİZ İZİN</span>
                  </div>
                  <div class="text-sm text-gray-600">Tam gün</div>
                  <div class="text-sm text-gray-600 mt-1">Özel izin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Sağ Panel - İzin Bilgileri -->
        <div>
          <div class="form-group">
            <label class="form-label">Tarih</label>
            <input type="date" class="form-input" value="2025-03-06" />
          </div>
          
          <div class="form-group">
            <label class="form-label">Tatil Tipi</label>
            <select class="form-input">
              <option>ÜCRETSİZ İZİN</option>
              <option>ÜCRETLİ İZİN</option>
              <option>RAPOR/İSTİRAHAT</option>
              <option>HAFTA TATİLİ</option>
              <option>AKDI TATİL</option>
              <option>YILLIK İZİN</option>
            </select>
          </div>
          
          <div class="form-group flex items-center mt-4">
            <input type="checkbox" class="h-4 w-4 text-primary-600 rounded border-gray-300" id="saatlik-izin" />
            <label for="saatlik-izin" class="ml-2 text-sm text-gray-700">Saatlik izin ver</label>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-3">
            <div class="form-group">
              <label class="form-label">Giriş Saati</label>
              <input type="time" class="form-input" value="00:00" />
            </div>
            <div class="form-group">
              <label class="form-label">Çıkış Saati</label>
              <input type="time" class="form-input" value="00:00" />
            </div>
          </div>
          
          <div class="form-group mt-2">
            <label class="form-label">Açıklama</label>
            <textarea class="form-input h-24" placeholder="İzin açıklaması...">Özel izin</textarea>
          </div>
          
          <div class="mt-5 pt-5 border-t">
            <h4 class="text-sm font-medium text-gray-700 mb-3">Tarihler Arası Toplu İzin Tanımlama</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label">Başlangıç Tarihi</label>
                <input type="date" class="form-input" />
              </div>
              <div class="form-group">
                <label class="form-label">Bitiş Tarihi</label>
                <input type="date" class="form-input" />
              </div>
            </div>
            <button class="btn-secondary w-full mt-2">Tarihler Arası Tatil Tanımla</button>
          </div>
        </div>
      </div>
      
      <!-- Personelin İzin Durumu -->
      <div class="mt-6 pt-4 border-t">
        <h3 class="text-md font-medium mb-3">Personel İzin Bilgileri</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-md p-4 border">
            <div class="flex justify-between mb-2">
              <span class="font-medium">Yıllık İzin Hakkı:</span>
              <span class="badge-blue">14 gün</span>
            </div>
            <div class="grid grid-cols-2 gap-y-2 text-sm">
              <div class="text-gray-600">Kullanılan İzin Günü:</div>
              <div class="text-right">0</div>
              <div class="text-gray-600">Kalan İzin Günü:</div>
              <div class="text-right font-medium text-green-600">14</div>
            </div>
          </div>
          <div class="bg-gray-50 rounded-md p-4 border">
            <div class="flex justify-between mb-2">
              <span class="font-medium">Yıllık İzin Detayları</span>
            </div>
            <div class="grid grid-cols-2 gap-y-2 text-sm">
              <div class="text-gray-600">Toplam Çalışma Süresi:</div>
              <div class="text-right">1 yıl 9 ay</div>
              <div class="text-gray-600">Hesaplanan İzin:</div>
              <div class="text-right">14 gün</div>
            </div>
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
</template> 