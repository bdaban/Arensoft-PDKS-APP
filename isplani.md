
# PDKS (Personel Devam Kontrol Sistemi) Projesi - is_plani.md

Bu doküman, Nuxt 3, Tailwind CSS, Prisma ve MySQL kullanılarak geliştirilecek olan PDKS (Personel Devam Kontrol Sistemi) projesinin teknik planlamasını içermektedir.

## 1. Proje Yapısı ve Teknolojiler

### Kullanılacak Teknolojiler:
- **Frontend:** Nuxt 3
- **CSS Framework:** Tailwind CSS
- **Backend:** Nuxt Server Routes
- **ORM:** Prisma
- **Veritabanı:** MySQL

---

## 2. Veritabanı Tasarımı (Prisma Schema)

### Tablolar:
- `users` (id, name, email, role)
- `companies` (id, name)
- `departments` (id, name, company_id)
- `devices` (id, name, ip, model, company_id)
- `shifts` (id, name, start_time, end_time, type, company_id)
- `schedules` (id, name, parameter_id)
- `payroll_parameters` (id, name, daily_hour, absence_rate, absence_type)
- `payroll_fields` (id, name, type, is_day, is_hour, is_salary)
- `employees` (id, card_no, name, surname, company_id, department_id, schedule_id)
- `attendance_logs` (id, employee_id, date, entry_time, exit_time, device_id)
- `leaves` (id, employee_id, leave_type, start_time, end_time, description)
- `leave_types` (id, name, is_paid, payroll_field_id)
- `penalties` (id, employee_id, date, duration, type, multiplier, payroll_field_id)
- `reasons` (id, name, leave_name, full_day)

---

## 3. Kullanıcı Rolleri ve Yetkileri
- **Admin:** Tüm sistemde tam yetki.
- **Personel:** Sadece kendi bilgilerini görme ve randevu/izin talebi oluşturma.
- **İK:** Personel giriş/çıkış, vardiya, izin ve ceza işlemleri.

---

## 4. Modül Planlaması

### 4.1 Personel Yönetimi
- Personel kartı oluşturma
- Şirket, departman ve servis atama
- Aylık maaş ve saatlik bilgiler

### 4.2 Giriş-Çıkış Takibi
- Kart no bazlı giriş çıkış saatlerinin kaydı
- Giriş/çıkış hareketi olmayan kayıtların takibi
- Cihazdan veri çekme ve eşleştirme (Arextek TR3800, MP20656 vb.)

### 4.3 İzin İşlemleri
- Rapor, istirahat, ücretli ve ücretsiz izin türleri
- Yıllık izin hakkı ve kullanımı
- Tatil ve vardiya planlarına etki durumu

### 4.4 Ceza ve Avans Modülü
- Ceza süresi ve oranı bazlı hesaplama
- Avans/kesinti bordrosu entegrasyonu

### 4.5 Vardiya ve Mesai Tanımlamaları
- Sabit ve vardiyalı çalışma planları
- Mesai tabloları: erken/ geç giriş-çıkış toleransı
- Mola süreleri, ceza çarpanı ve mesai çarpanı

### 4.6 Puantaj Ayarları
- Aylık hesaplama parametreleri (08, 09, 9.5 saat)
- Devamsızlık ve ceza ücret çarpanı
- Genel grup çalışma planları ve tatil günleri

### 4.7 Cihaz Yönetimi
- Cihaz IP, port, bağlantı türü ve modeli
- Terminalden veri aktarımı
- Bağlantı testi, kullanıcı senkronizasyonu

---

## 5. Kullanıcı Arayüzü

### Sayfalar:
- Giriş (Login)
- Dashboard
- Personel Listesi ve Kartı
- Vardiya Planlama
- İzin ve Tatil Takibi
- Cihaz Yönetimi
- Giriş/Çıkış Kayıtları
- Avans / Ceza İşlemleri
- Raporlar ve Excel çıktısı

---

## 6. Geliştirme Aşamaları

### Aşama 1: Proje Kurulumu
- Nuxt 3 + Tailwind + Prisma setup
- .env dosyası ve MySQL bağlantısı

### Aşama 2: Veritabanı Modelleme
- Prisma şema yazımı ve migration

### Aşama 3: API Geliştirme
- CRUD işlemleri (personel, cihaz, izin, vardiya vs)
- Giriş-çıkış verisi işleme

### Aşama 4: Arayüz Geliştirme
- Admin ve personel panelleri
- Formlar ve listeleme bileşenleri

### Aşama 5: Cihaz Entegrasyonu
- Arextek cihazdan veri çekme (örnek data: kart no, tarih, saat)
- Veriyi veri tabanına yazma ve işleme

### Aşama 6: Raporlama ve Hesaplama
- Aylık puantaj hesaplamaları
- Excel veya PDF çıktısı

---

## 7. Ek Notlar
- Saatlik ücret, günlük saat, çarpan gibi alanlar parametrik tanımlanmalı
- Her şirketin farklı vardiya planı ve cihazı olabilir
- Her çalışana özel hesaplama yapılmalı (vardiyası, izinleri, cezaları dahil)

---

Bu plan temel olarak tüm ihtiyaçları kapsar şekilde hazırlanmıştır. Her modül geliştirildikçe ilgili bölümler detaylandırılacaktır.
