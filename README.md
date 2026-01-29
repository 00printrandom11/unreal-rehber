# 📘 Unreal Engine Rehberi

Unreal Engine geliştiricileri için hazırlanmış, **Actor** türleri, **Değişkenler**, **Blueprint Node'ları** ve **Kısayollar** hakkında detaylı bilgiler içeren interaktif web rehberi.

Bu proje, Unreal Engine öğrenme sürecini hızlandırmak ve sık kullanılan kavramlara hızlıca erişim sağlamak amacıyla geliştirilmiştir.

## 🚀 Özellikler

*   **🎭 Actor Sınıfları:** AActor, Pawn, Character, Controller ve daha fazlası hakkında detaylı açıklamalar ve kullanım senaryoları.
*   **📦 Değişken Tipleri:** Boolean, Integer, Float, Vector, Rotator gibi veri tiplerinin renk kodlu anlatımları.
*   **🔗 Blueprint Node'ları:** Event'ler, Flow Control, Matematik işlemleri ve daha fazlası için kategorize edilmiş node kütüphanesi.
*   **⌨️ Kısayollar:** Editör içi verimliliği artıran hayati kısayollar.
*   **⚡ Hızlı ve Hafif:** Vite ve Vanilla JavaScript ile geliştirilmiştir, anında yüklenir.

## 🛠️ Kurulum ve Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Gereksinimler
*   [Node.js](https://nodejs.org/) (Bilgisayarınızda yüklü olmalıdır)

### 1. Kolay Başlatma (Windows)
Proje klasörü içerisindeki **`start_server.bat`** dosyasına çift tıklayın.
Bu dosya otomatik olarak:
1.  Gerekli paketleri yükler.
2.  Rastgele bir port oluşturur.
3.  Tarayıcınızı açıp rehberi başlatır.

### 2. Manuel Başlatma (Terminal)
Eğer terminal kullanmayı tercih ederseniz:

```bash
# Bağımlılıkları yükle
npm install

# Sunucuyu başlat
npm run dev
```

## 📂 Proje Yapısı

*   `src/data.js`: Tüm rehber içeriğinin (yazılar, açıklamalar) bulunduğu veri dosyası.
*   `src/components/`: Sidebar ve İçerik alanı gibi arayüz bileşenleri.
*   `src/main.js`: Uygulamanın giriş noktası.
*   `index.html`: Ana HTML şablonu.

## 🤝 Katkıda Bulunma

Eğer rehbere yeni bir bilgi eklemek veya düzeltme yapmak isterseniz:
1.  Bu repoyu Fork'layın.
2.  Yeni bir Branch oluşturun (`git checkout -b yeni-ozellik`).
3.  Değişikliklerinizi yapın (Genellikle `src/data.js` dosyasında).
4.  Commit'leyin (`git commit -m 'Yeni node eklendi'`).
5.  Push'layın (`git push origin yeni-ozellik`).
6.  Bir Pull Request oluşturun.

## 📝 Lisans

Bu proje MIT lisansı altında sunulmaktadır. İstediğiniz gibi kullanabilir ve değiştirebilirsiniz.
