export const actorData = [
    {
        id: 'AActor',
        name: 'AActor (Actor)',
        description: 'Unreal Engine dünyasının "Atom" parçacığıdır. Kısaca: "Dünyada yeri olan her şey" bir aktördür.\n\n🤔 NEDİR BU?\nEğer bir şeyi mouse ile tutup seviyeye (Level) sürükleyebiliyorsanız, o %100 bir Actor\'dür. Konumu (Location), Dönüşü (Rotation) ve Boyutu (Scale) vardır. Tek başına pek bir şey yapmaz, içine "Component" (Parça) ekleyerek ona özellik kazandırırsınız.\n\n💡 NE ZAMAN KULLANMALIYIM?\nSahneye koyacağınız şeyin özel bir hareket yeteneğine (yürümesine) veya bir beyne (yapay zeka) ihtiyacı YOKSA, sadece duracaksa veya basit bir mantık çalıştıracaksa AActor kullanın. En temel ve en hafif sınıftır.',
        examples: [
            '🔫 Yerde duran ve alınabilen bir Silah (Weapon Class)',
            '🚪 Açılıp kapanabilen interaktif bir Kapı (Door Blueprint)',
            '💥 Patlama efekti yaratan bir Spawner objesi',
            '📦 İçinden eşya çıkan bir Ganimet Sandığı (Loot Chest)',
            '🖼️ Duvara asılı bir Tablo veya Dekoratif Obje'
        ],
        children: [
            {
                id: 'APawn',
                name: 'APawn (Pawn)',
                description: 'Actor\'ün "Ele Geçirilebilir" (Possess) versiyonudur. Yani içine bir ruh (Controller) girebilen bir bedendir.\n\n🤔 NEDİR BU?\nPawn, satrançtaki piyon gibidir. Kendi başına dururken sadece bir eşyadır, ama bir oyuncu (Player) veya bilgisayar (AI) onu kontrol etmeye başladığında canlanır. Hareket etme yeteneği kazanabilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nEğer oyuncunun veya yapay zekanın yöneteceği bir "Varlık" yapıyorsanız Pawn seçin. Ama dikkat: Pawn "Yürümek" zorunda değildir. Uçabilir, yüzebilir veya sadece dönebilir. Eğer "İnsan gibi yürüsün" istiyorsanız Character sınıfına bakın.',
                examples: [
                    '🚗 Sürülebilir bir Yarış Arabası (Araç Fiziği)',
                    '✈️ Uçabilen bir Savaş Uçağı (6 Eksenli Hareket)',
                    '🛡️ Sabit duran ama dönebilen bir Savunma Taretri (Turret)',
                    '🐎 Üzerine binilebilen bir At (Binebilir Hayvan)',
                    '📡 Uzaktan kumandalı bir Drone'
                ],
                children: [
                    {
                        id: 'ACharacter',
                        name: 'ACharacter (Character)',
                        description: 'Pawn sınıfının "İki Ayaklılar" (Bipedal) için özelleşmiş halidir. En çok kullanacağınız sınıftır.\n\n🤔 NEDİR BU?\nPawn\'ın üzerine "CharacterMovementComponent" takılmış halidir. Bu bileşen mucize gibidir; tek tıkla yerçekimi, zıplama, yürüme, yüzme, merdiven çıkma ve hatta internet üzerinden (Multiplayer) gecikmesiz hareket etme sorunlarını çözer.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyununuzdaki canlı, insan benzeri, yürüyen ve koşan her şey için bunu kullanın. Hatta canavarlar ve robotlar için bile, eğer yerde yürüyorsa Character sınıfı en güvenli limandır.',
                        examples: [
                            '🔫 FPS/TPS oyunundaki ana Karakter (Hero)',
                            '🧟 Üzerinize koşan bir Zombi veya Canavar',
                            '👨‍🌾 Köyde dolaşan dost NPC (Non-Player Character)',
                            '🪖 Siper alıp ateş eden Düşman Askeri',
                            '🧙‍♂️ Büyü yapan Bölüm Sonu Canavarı (Boss)'
                        ],
                        children: []
                    },
                    {
                        id: 'ADefaultPawn',
                        name: 'ADefaultPawn',
                        description: 'Basit, yerçekimsiz uçuş moduna sahip, çarpışma özelliği olan yuvarlak bir toptur.\n\n🤔 NEDİR BU?\nGenellikle oyun geliştirirken "Hızlıca bir karakter koyayım da etrafta uçarak gezineyim" dediğimizde kullandığımız hazır şablondur. "Ghost" modunda geziyormuşsunuz gibi hissettirir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nGenellikle oyunun son halinde (Shipping) kullanılmaz. RTS (Strateji) oyunlarında kamerayı haritada gezdirmek için veya test aşamasında basit bir avatar olarak kullanabilirsiniz.',
                        examples: [
                            '🎥 Maçı izleyen Spectator (İzleyici) Kamerası',
                            '🛠️ Debug modunda haritada hızlıca gezinme aracı',
                            '🛸 Basit bir UFO veya uçan küre prototipi',
                            '🏗️ RTS (Strateji) oyunundaki kuş bakışı kamera yöneticisi',
                            '🧪 Fizik testleri için kullanılan basit kontrolcü'
                        ],
                        children: []
                    },
                    {
                        id: 'ASpectatorPawn',
                        name: 'ASpectatorPawn',
                        description: 'Fiziksel bir bedeni, çarpışması (Collision) olmayan, sadece dünyayı izlemek için tasarlanmış saf kameradır.\n\n🤔 NEDİR BU?\nRuh gibidir. Duvarların içinden geçer, yerçekiminden etkilenmez. Sadece "Bakmak" içindir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyuncunuz öldüğünde haritayı özgürce gezmesini istiyorsanız veya bir maç kaydını (Replay) izletirken kamerayı serbest bırakacaksanız bunu kullanın.',
                        examples: [
                            '💀 Öldükten sonra takım arkadaşlarını izlediğin kamera',
                            '📹 Replay (Tekrar Oynatma) sistemindeki serbest kamera',
                            '🎬 Sinematik sahnelerde kullanılan gezici kamera',
                            '🕵️ Admin/GM modunda oyuncuları gözetleme aracı',
                            '⏸️ Oyun durdurulduğunda (Pause) etrafı gezme modu'
                        ],
                        children: []
                    }
                ]
            },
            {
                id: 'AController',
                name: 'AController',
                description: 'Aktörlerin "Görünmez Beyni"dir. Pawn\'ı bir "Kukla" olarak düşünürsek, Controller o kuklayı oynatan "İpler" veya "Eldir".\n\n🤔 NEDİR BU?\nController fiziksel bir varlık değildir. Render edilmez, çarpışması yoktur. Sadece "Karar verme" yeteneği vardır. Bir Pawn öldüğünde (Destroy), Controller hayatta kalabilir. Bu sayede oyuncunun skoru, ismi veya takım bilgisi karakter ölünce silinmez.\n\n💡 NE ZAMAN KULLANMALIYIM?\nAktörünüze "Akıl" koymak istediğiniz her an. Eğer bir insan yönetiyorsa PlayerController, bilgisayar yönetiyorsa AIController. Asla ama asla oyun mantığını Pawn\'ın içine gömmeyin, Controller\'da tutun.',
                examples: [
                    'Oyuncunun iradesini karaktere aktaran sistem',
                    'Yapay zeka (AI) karar mekanizması',
                    'Sinematik kamera yöneticisi'
                ],
                children: [
                    {
                        id: 'APlayerController',
                        name: 'APlayerController',
                        description: 'Gerçek bir insanın oyundaki "Ruhudur". Sizin (Klavye/Mouse başında oturan kişinin) oyundaki direkt karşılığıdır.\n\n🤔 NEDİR BU?\nOyuncu oyuna bağlandığı an, sunucu ona bir PlayerController verir. Bu aktör 7/24 oyuncunun inputlarını dinler. Menü açmak, mouse\'u göstermek, kamerayı yönetmek gibi "Karakterden Bağımsız" işleri bu yapar.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyuncudan tuş girişi alacaksanız (Input), ekrana bir arayüz (HUD/Widget) çizecekseniz veya farenin imlecini (Mouse Cursor) açıp kapayacaksanız doğru yer burasıdır. Karakteriniz ölse bile menüyü açabilmelisiniz, değil mi? İşte bunu PlayerController sağlar.',
                        examples: [
                            '🖱️ Mouse tıklamasıyla envanter yönetimi',
                            '⏸️ ESC tuşuyla Pause Menüsünü açma mantığı',
                            '🎯 Nişan alma (Aim) ve ateş etme girişlerini işleme',
                            '💬 Sohbet (Chat) penceresine yazı yazma',
                            '🗺️ Harita (Map) ekranını açıp kapatma'
                        ],
                        children: []
                    },
                    {
                        id: 'AAIController',
                        name: 'AAIController',
                        description: 'Yapay Zeka (AI) tarafından yönetilen karakterlerin beynidir.\n\n🤔 NEDİR BU?\nPlayerController\'ın robot versiyonudur. Klavye yerine "Behavior Tree" (Davranış Ağacı) ve "Blackboard" (Hafıza) kullanır. Görme ve duyma (Perception) yetenekleri buraya eklenir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nDüşmanlar, dost NPC\'ler, hayvanlar... Kısaca insan olmayan ve hareket eden her şey için. "Karakteri gördün mü?", "Ses duydun mu?", "Nereye devriye atayım?" sorularının cevabı burada verilir.',
                        examples: [
                            '👮 Belirli bir rotada devriye gezen (Patrol) Muhafız',
                            '👀 Oyuncuyu görünce alarma geçen Güvenlik Sistemi',
                            '🛡️ Canı azalınca siper alan (Cover) akıllı düşman',
                            '🐺 Sizi takip eden evcil hayvan (Pet)',
                            '🧟 Ses gelen yere doğru yürüyen Zombi sürüsü'
                        ],
                        children: []
                    }
                ]
            },
            {
                id: 'AInfo',
                name: 'AInfo (Info Actors)',
                description: 'Fiziksel dünyada var olmayan ama "Yönetici" görevi gören aktörlerdir. Görünmez birer müdür gibidirler.\n\n🤔 NEDİR BU?\nBunlar haritada bir yer kaplamaz, şekilleri yoktur. Ama oyunun kurallarını, süresini, skor tablosunu yönetirler. Oyunun "Business Logic" katmanıdır.\n\n💡 NE ZAMAN KULLANMALIYIM?\n"Oyunun kurallarını nereye yazsam?" dediğiniz an buradasınız. Maç süresi, takım puanları, oyunun modu gibi global verileri saklamak için kullanılır.',
                examples: [
                    '⏱️ Maç süresini sayan sayaç',
                    '🏆 Takım skorlarını tutan hafıza',
                    '🌍 Dünyanın yerçekimi ayarı',
                    '📜 Oyunun kural kitabı (Friendly Fire açık mı?)',
                    '💾 Save/Load işlemlerini yöneten sistem'
                ],
                children: [
                    {
                        id: 'AGameModeBase',
                        name: 'AGameMode',
                        description: 'Oyunun MUTLAK OTORİTESİDİR (Yetkili Abi). Sadece ve sadece Sunucuda (Server) çalışır.\n\n🤔 NEDİR BU?\nHile yapılmasını engellemek için, oyunun en kritik kararlarını veren sınıftır. "Oyuncu oyuna girebilir mi?", "Maç bitti mi?", "Kim kazandı?" sorularının cevabını sadece GameMode bilir. İstemciler (Clients) buna erişemez.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyunun kuralları için. Oyuncu doğma (Spawn) kuralları, maçın süresi, kazanma şartları gibi hileye kapalı olması gereken her şeyi buraya yazın.',
                        examples: [
                            '🚩 "Bayrağı kapan kazanır" kuralı',
                            '🐣 Oyuncunun nerede ve hangi silahla doğacağı (Spawn)',
                            '⏳ Maç süresi bitince ne olacağı',
                            '🚫 Hile koruması ve oyuncu atma (Kick) yetkisi',
                            '⏸️ Oyunu durdurma ve başlatma yetkisi'
                        ],
                        children: []
                    },
                    {
                        id: 'AGameStateBase',
                        name: 'AGameState',
                        description: 'Sunucunun oyunculara gönderdiği "Durum Raporu"dur. \n\n🤔 NEDİR BU?\nGameMode sadece sunucudaydı ya, işte GameMode\'un "Bakın durum bu" diyerek herkese (Replicated) gönderdiği veriler GameState\'te tutulur. Tüm oyuncuların skorları, kalan süre, kimin kimi öldürdüğü gibi herkesin bilmesi gereken veriler buradadır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nTüm oyuncuların ekranında aynı anda güncellenmesi gereken veriler için. "Maç kaç kaç?", "Hangi takım önde?" gibi soruların cevabı.',
                        examples: [
                            '⚽ Maç Skoru (Kırmızı: 3 - Mavi: 1)',
                            '⏱️ Kalan Süre (02:45)',
                            '🔥 Aktif olan görev (Bombaları İmha Et)',
                            '👥 Serverdaki toplam oyuncu sayısı',
                            '🌞 Oyun içindeki güncel saat (Gece/Gündüz)'
                        ],
                        children: []
                    },
                    {
                        id: 'APlayerState',
                        name: 'APlayerState',
                        description: 'Her oyuncunun "Kimlik Kartı" veya "Karnesi"dir.\n\n🤔 NEDİR BU?\nPlayerController sadece oyuncunun kendisinde vardır, diğerleri göremez. Ama PlayerState herkese gönderilir (Replicated). Yani siz, karşınızdaki oyuncunun ismini, rütbesini veya pingini PlayerState\'ine bakarak öğrenirsiniz. Karakter (Pawn) ölse bile bu veri silinmez.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyuncunun ismi, takımı, skoru, klanı gibi "Karakter ölse de gitmemesi gereken" ve "Herkesin görmesi gereken" veriler için.',
                        examples: [
                            '🏷️ Oyuncunun İsmi (Player Name)',
                            '📶 Oyuncunun Ping değeri',
                            '💯 Kişisel Skor (Kills/Deaths)',
                            '👑 Takım bilgisi (Kırmızı Takım)',
                            '🎒 Karakter ölse de gitmeyen kalıcı yetenekler'
                        ],
                        children: []
                    },
                    {
                        id: 'AWorldSettings',
                        name: 'AWorldSettings',
                        description: 'Odanın (Level) fiziksel ayarlarıdır.\n\n🤔 NEDİR BU?\nHer level\'ın kendine has kuralları olabilir. Bir level Ay\'dadır yerçekimi azdır, diğer level su altındadır. Bu ayarların yapıldığı yerdir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nGenellikle kodla çok değiştirmeyiz, Editör üzerinden ayarlarız. "Kill Z" (Haritadan düşme yüksekliği) veya "Global Gravity" (Yerçekimi) ayarları için buraya bakılır.',
                        examples: [
                            '🌑 Level\'daki yerçekimi şiddeti (Ay modunda düşük)',
                            '💀 Kill Z (Haritanın ne kadar altına düşerse ölsün?)',
                            '☀️ Global aydınlatma kalitesi (Lightmass)',
                            '🕶️ VR modu açık mı kapalı mı?',
                            '🚶 Navigasyon (Yapay zeka yolu) ayarları'
                        ],
                        children: []
                    }
                ]
            },
            {
                id: 'AStaticMeshActor',
                name: 'AStaticMeshActor',
                description: 'Kıpırdamayan, iskeleti olmayan "Katı Cisimlerdir". \n\n🤔 NEDİR BU?\nOyunun dekorudur. Masalar, duvarlar, taşlar... Kısaca animasyon oynatmayan her şey. Performans dostudur, işlemciyi yormaz. Binlercesini sahneye koyabilirsiniz.\n\n💡 NE ZAMAN KULLANMALIYIM?\nEğer objeniz şekil değiştirmeyecekse, yürümeyecekse ve sadece olduğu yerde duracaksa (belki biraz fizik ile yuvarlanabilir) bunu kullanın. Nanite teknolojisi ile milyonlarca poligonluk versiyonlarını bile rahatça kullanabilirsiniz.',
                examples: [
                    '🏠 Evin duvarları, zemini ve çatısı',
                    '🪑 Masa, sandalye, dolap gibi sabit eşyalar',
                    '🌳 Rüzgarda sallanmayan büyük kayalar ve taşlar',
                    '🛣️ Sokak lambası direği (Işık değil, direk kısmı)',
                    '📦 Etrafta duran kutular ve variller'
                ],
                children: []
            },
            {
                id: 'ASkeletalMeshActor',
                name: 'ASkeletalMeshActor',
                description: 'İçinde kemik (Bone) olan, bükülebilen modellerdir.\n\n🤔 NEDİR BU?\nStatic Mesh\'in aksine "Canlı" gibidir. Bir iskelet sistemi vardır ve animasyon oynatabilir. Bir bayrağın dalgalanması veya bir kapının kolunun dönmesi için kemik gerekir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nModelinizin şekli değişecekse. Örneğin rüzgarda sallanan bir çadır, açılan bir sandık kapağı veya karmaşık bir makine animasyonu için bunu kullanın.',
                examples: [
                    '🚩 Rüzgarda dalgalanan bir Bayrak',
                    '⛓️ Sallanan bir zincir veya halat',
                    '⚔️ Kılıç salladığında ezilen düşman zırhı',
                    '🚪 Karmaşık mekanizmaya sahip açılır kapanır kapı',
                    '🦾 Robot kol veya vinç mekanizması'
                ],
                children: []
            },
            {
                id: 'ALight',
                name: 'ALight (Lights)',
                description: 'Unreal dünyasında karanlığı yok eden ışık kaynaklarıdır. Işık yoksa render simsiyahtır.\n\n🤔 NEDİR BU?\nGerçek hayattaki ışıkların simülasyonudur. Oyunun atmosferini belirleyen en önemli unsurdur.\n\n💡 NE ZAMAN KULLANMALIYIM?\nSahnenizi, karakterinizi veya önemli bir objeyi aydınlatmak için. Hangi tip ışığı ne zaman kullanacağınız ise alt başlıklarda:',
                examples: [
                    '☀️ Güneş (Directional Light)',
                    '💡 Ampul (Point Light)',
                    '🔦 El feneri (Spot Light)',
                    '📺 Televizyon ışığı (Rect Light)',
                    '🌌 Gökyüzü aydınlatması (Sky Light)'
                ],
                children: [
                    {
                        id: 'ADirectionalLight',
                        name: 'DirectionalLight',
                        description: 'Güneş veya Ay ışığıdır.\n\n🤔 NEDİR BU?\nSonsuz uzaklıktan gelen, tüm dünyayı aynı açıyla aydınlatan paralel ışınlardır. Sahnenin neresine koyduğunuzun önemi yoktur, sadece hangi yöne döndürdüğünüzün önemi vardır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nDış mekan (Outdoor) sahnelerde ana aydınlatma olarak. Bir sahnede genellikle sadece 1 tane (Güneş) veya 2 tane (Güneş + Ay) olur.',
                        examples: [
                            '🌞 Öğle vakti tepeden vuran sert Güneş',
                            '🌅 Gün batımında yatay gelen turuncu ışık',
                            '🌕 Geceleyin odaya vuran soluk Ay ışığı',
                            '🪐 Uzay istasyonuna vuran uzak yıldız ışığı',
                            '🎬 Stüdyo çekimindeki ana "Key Light"'
                        ],
                        children: []
                    },
                    {
                        id: 'APointLight',
                        name: 'PointLight',
                        description: 'Her yöne ışık saçan küresel ışık kaynağıdır (Ampul).\n\n🤔 NEDİR BU?\nBir noktadan çıkar ve 360 derece etrafına yayılır. Uzaklaştıkça gücü azalır (Attenuation).\n\n💡 NE ZAMAN KULLANMALIYIM?\nAmpuller, ateş topları, mumlar veya patlamalar için. Lokal aydınlatmanın kralıdır.',
                        examples: [
                            '🕯️ Masadaki titreyen mum alevi',
                            '💡 Tavanda asılı duran ampul',
                            '🔥 Kamp ateşinin etrafa yaydığı sıcak ışık',
                            '🔮 Sihirli bir kürenin parıltısı',
                            '💥 Patlama anında oluşan anlık parlama'
                        ],
                        children: []
                    },
                    {
                        id: 'ASpotLight',
                        name: 'SpotLight',
                        description: 'Koni şeklinde odaklanmış ışıktır (El feneri).\n\n🤔 NEDİR BU?\nIşığı her yere saçmaz, sadece baktığı yöne doğru bir koni içinde atar. Tiyatro sahnesindeki spotlar gibidir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyuncunun dikkatini belirli bir yere çekmek için veya el feneri, araba farı, sokak lambası gibi yönlü ışık kaynakları için.',
                        examples: [
                            '🔦 Karakterin el feneri',
                            '🚘 Arabanın ön farları',
                            '🚔 Polis helikopterinin arama ışığı',
                            '🎭 Sahnedeki şarkıcıyı aydınlatan spot',
                            '👀 Güvenlik kamerasının görüş alanını,kırmızı ışıkla gösterme'
                        ],
                        children: []
                    },
                    {
                        id: 'ARectLight',
                        name: 'RectLight',
                        description: 'Kare veya dikdörtgen panelden yayılan ışıktır.\n\n🤔 NEDİR BU?\nTelevizyon ekranı veya fotoğrafçıların kullandığı "Softbox" ışığı gibidir. Geniş bir yüzeyden çıktığı için gölgeleri çok yumuşak ve gerçekçidir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nModern iç mekan sahnelerinde, pencerelerden giren ışığı taklit ederken veya TV/Monitör parlaması yaparken.',
                        examples: [
                            '📺 Açık çalışan televizyon ekranının odaya verdiği ışık',
                            '🖼️ Pencereden içeri sızan gün ışığı',
                            '📸 Fotoğraf stüdyosundaki Softbox ışığı',
                            '📱 Telefon ekranının yüze vuran ışığı',
                            '🚇 Metro tavanındaki uzun floresan lambalar'
                        ],
                        children: []
                    }
                ]
            },
            {
                id: 'ACameraActor',
                name: 'ACameraActor',
                description: 'Dünyayı gören sanal gözdür.\n\n🤔 NEDİR BU?\nRender işleminin hangi açıdan yapılacağını belirler. Oyuncu her zaman bir kameradan bakar.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyuncunun gözü dışında (PlayerCamera), sinematik sahneler (Cutscenes) veya sabit açılı görüntüler (Güvenlik kamerası odası) gerektiğinde level\'a yerleştirilir.',
                examples: [
                    '🎬 Ara sahneleri (Cutscene) çeken yönetmen kamerası',
                    '📹 Güvenlik odasındaki monitörlere bağlı güvenlik kameraları',
                    '🔭 Sniper tüfeğinin dürbününden bakış (Scope View)',
                    '🖼️ Ana menüde karakterin arkasındaki sabit kamera',
                    '📸 "Photo Mode" açıldığında kontrol edilen serbest kamera'
                ],
                children: []
            },
            {
                id: 'ATriggerBase',
                name: 'ATrigger (Triggers)',
                description: 'Görünmez sensörlerdir. \n\n🤔 NEDİR BU?\nOyunda "Buraya gelince bir şey olsun" dediğimiz alanlardır. Oyuncu içine girdiği an (Overlap) bir sinyal (Event) gönderirler.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOtomatik kapılar, tuzaklar, ara sahne başlatıcılar... Kısaca oyuncunun konumuna göre tetiklenecek her türlü oyun mantığı için.',
                examples: [
                    '🚪 Otomatik kapının önüne gelince kapının açılması',
                    '💀 Tuzağa basınca ok fırlatılması',
                    '💾 Checkpoint noktasına gelince oyunun kaydedilmesi',
                    '🗣️ NPC\'nin yanına gidince "Merhaba" demesi',
                    '🎵 Boss odasına girince müziğin değişmesi'
                ],
                children: [
                    {
                        id: 'ABoxTrigger',
                        name: 'BoxTrigger',
                        description: 'Kutu (Küp) şeklinde algılama alanı.\n\n💡 KULLANIM:\nKoridorlar, dikdörtgen odalar veya kapı önleri için idealdir.',
                        examples: [
                            '🏠 Bir odaya veya koridora girişi algılama',
                            '🛗 Asansörün içine binildiğini anlama',
                            '🏁 Yarış bitiş çizgisini geçme kontrolü',
                            '📦 Bir kutunun belirli bir alana bırakıldığını anlama',
                            '🛌 Yatağın yanına gelince "Uyu" yazısının çıkması'
                        ],
                        children: []
                    },
                    {
                        id: 'ASphereTrigger',
                        name: 'SphereTrigger',
                        description: 'Küre (Top) şeklinde algılama alanı.\n\n💡 KULLANIM:\nEşya toplama, NPC konuşma menzili gibi merkezden dışa doğru yayılan alanlar için idealdir.',
                        examples: [
                            '💰 Yerden altın toplama mesafesi',
                            '💣 Mayının patlama menzili',
                            '🔥 Kamp ateşinin ısıtma alanı',
                            '📶 Wi-Fi veya Radyo sinyal alanı',
                            '🔊 Sesin duyulabilir olduğu bölge'
                        ],
                        children: []
                    }
                ]
            },
            {
                id: 'AVolume',
                name: 'AVolume',
                description: 'İçine girebildiğiniz, 3 boyutlu etki alanlarıdır.\n\n🤔 NEDİR BU?\nTrigger gibi "girince haber ver" demez, bunun yerine "içindeyken fizik kurallarını veya görüntüyü değiştir" der.\n\n💡 NE ZAMAN KULLANMALIYIM?\nSu altı, zehirli bölge, düşük yerçekimli alan veya karanlık bir mağara yaparken.',
                examples: [
                    '🏊 Suyun içi (Karakter yüzer, nefesi azalır, hareket yavaşlar)',
                    '⚛️ Radyasyon bölgesi (Sürekli can azalır)',
                    '🔇 Ses yalıtımlı oda (Dışarıdaki sesler boğuklaşır)',
                    '🌑 Zifiri karanlık mağara (Post Process değişir)',
                    '🚫 "Girilmez Bölge" uyarısının çıktığı alan'
                ],
                children: [
                    {
                        id: 'APostProcessVolume',
                        name: 'PostProcessVolume',
                        description: 'Kameranın lensine takılan filtre gibidir. \n\n🤔 NEDİR BU?\nOyunun renklerini, parlaklığını veya efektlerini sadece belirli bir bölgede değiştirir. \n\n💡 KULLANIM:\nSu altına girince ekranı bulandırmak, hasar alınca ekranı kızartmak veya bir rüya sahnesinde renkleri soluklaştırmak için.',
                        examples: [
                            '💧 Su altına girince görüntünün mavi ve bulanık olması',
                            '😵 Hasar alınca ekranın kenarlarının kanlanması (Vignette)',
                            '🌑 Gece görüş gözlüğü takınca her yerin yeşil olması',
                            '🎥 Sinematik sahnede "Film Grain" (Karlanma) efekti',
                            '🏜️ Çölde sıcaktan havanın dalgalanması'
                        ],
                        children: []
                    },
                    {
                        id: 'APhysicsVolume',
                        name: 'PhysicsVolume',
                        description: 'Fizik kurallarını büken alandır.\n\n🤔 NEDİR BU?\nKarakterin hareketlerini etkiler. Sürtünmeyi azaltıp buz pisti yapabilir veya yerçekimini kapatıp uzay boşluğu yaratabilirsiniz.\n\n💡 KULLANIM:\nSu, Balçık, Buz, Uzay boşluğu simülasyonları için.',
                        examples: [
                            '🌊 Su kütlesi (Yerçekimi azalır, sürtünme artar)',
                            '👩‍🚀 Uzay gemisi içi (Sıfır yerçekimi)',
                            '⛸️ Buz pisti (Sürtünme çok az, karakter kayar)',
                            '🌪️ Rüzgar tüneli (Karakteri geriye iter)',
                            '🧗 Tırmanma duvarı (Karakterin düşmesini engeller)'
                        ],
                        children: []
                    },
                    {
                        id: 'ABlockingVolume',
                        name: 'BlockingVolume',
                        description: 'Görünmez duvardır. \n\n🤔 NEDİR BU?\nBasitçe, geçilemeyen alandır. Oyuncu duvara çarpar gibi buna çarpar.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyuncunun harita dışına çıkmasını engellemek veya henüz açılmamış bir bölgeye girişini kapatmak için.',
                        examples: [
                            '🚧 Harita sınırları (Invisible Wall)',
                            '🏙️ Binaların çatılarına çıkmayı engelleme',
                            '🐛 Oyuncunun sıkışabileceği dar aralıkları kapatma',
                            '🎥 Kameranın duvarın içine girmesini önleme',
                            '🦟 Düşmanların giremeyeceği güvenli bölge sınırı'
                        ],
                        children: []
                    }
                ]
            },
            {
                id: 'AEmitter',
                name: 'AEmitter (Particle)',
                description: 'Görsel efekt (VFX) kaynağıdır.\n\n🤔 NEDİR BU?\nHavada uçuşan kıvılcımlar, dumanlar, yapraklar... Particle System (Niagara) oynatan aktördür.\n\n💡 NE ZAMAN KULLANMALIYIM?\nDünyayı canlandırmak için. Ateş, duman, sis, yağmur, kan efekti gibi dinamik görseller için.',
                examples: [
                    '🔥 Kamp ateşi, Meşale alevi',
                    '🌫️ Bacadan çıkan duman, Sis',
                    '⛈️ Yağmur, Kar yağışı',
                    '✨ Büyü yapınca çıkan parıltılar',
                    '🩸 Vurulunca çıkan kan efekti'
                ],
                children: []
            }
        ]
    }
];

export const variableData = [
    {
        name: 'Boolean (Bool)',
        color: '#8B0000', // Kırmızı
        description: 'En basit karar mekanizmasıdır. Sadece iki değer alır: 1 (True/Doğru) veya 0 (False/Yanlış). Bilgisayara "Evet" ya da "Hayır" demenin yoludur.',
        examples: [
            'IsDead? (Öldü mü? -> Evet/Hayır)',
            'HasKey? (Anahtarı var mı? -> Kapıyı aç)',
            'IsLightOn? (Işık açık mı?)',
            'CanJump? (Zıplayabilir mi?)'
        ]
    },
    {
        name: 'Integer (Int)',
        color: '#00FA9A', // Turkuaz
        description: 'Tane ile sayılabilen şeylerdir. Asla virgüllü olamazlar. Yarım mermi veya 1.5 level olamaz, tam sayı olmak zorundadır.',
        examples: [
            'AmmoCount (Mermi Sayısı: 30)',
            'LevelIndex (Bölüm: 1, 2, 3)',
            'GoldAmount (Altın: 150)',
            'KillCount (Öldürme: 5)'
        ]
    },
    {
        name: 'Float',
        color: '#32CD32', // Yeşil
        description: 'Hassas ölçümler için kullanılan virgüllü sayılardır. Eğer bir şey zamanla yavaşça azalıyorsa veya artıyorsa (0\'dan 100\'e akıcı geçiş) Float kullanılır.',
        examples: [
            'Health (Can: 95.5 -> 95.4...)',
            'Speed (Hız: 600.0)',
            'Timer (Süre: 2.53 saniye)',
            'CritChance (Kritik şansı: %15.5)'
        ]
    },
    {
        name: 'String / Text / Name',
        color: '#FF00FF', // Magenta
        description: 'Yazı tipleridir. String; geliştirici logları (Print String) içindir. Text; ekranda oyuncuya gösterilen (çeviri yapılabilen) yazılardır. Name; kod içindeki özel kimliklerdir (ID).',
        examples: [
            'PlayerName (String: "Oyuncu1")',
            'QuestDescription (Text: "Görev: Kaleyi Koru")',
            'BoneName (Name: "Head" - Kafa kemiği)'
        ]
    },
    {
        name: 'Vector',
        color: '#FFD700', // Altın
        description: '3 Boyutlu uzaydaki (X, Y, Z) koordinatlarıdır. Genelde "Nerede?" veya "Hangi yöne?" sorularının cevabıdır.',
        examples: [
            'ActorLocation (Konum: X=100, Y=50, Z=0)',
            'Velocity (Hız Yönü: İleri doğru 500 birim)',
            'Scale (Boyut: 2 kat büyük)'
        ]
    },
    {
        name: 'Rotator',
        color: '#9932CC', // Mor
        description: 'Dönüş açısını belirtir (Roll, Pitch, Yaw). "Nereye bakıyor?" sorusunun cevabıdır.',
        examples: [
            'CameraRotation (Kamera açısı)',
            'GunAim (Silahın baktığı yön)',
            'SunAngle (Güneşin açısı)'
        ]
    },
    {
        name: 'Transform',
        color: '#FF4500', // Turuncu
        description: 'Hepsi bir arada pakettir. Bir cismin Konumunu (Vector), Dönüşünü (Rotator) ve Boyutunu (Scale) aynı anda tutar.',
        examples: [
            'SpawnTransform (Doğuş noktası bilgileri)',
            'CheckpointData (Kaydetme noktası)'
        ]
    },
    {
        name: 'Object Reference',
        color: '#00BFFF', // Mücevher Mavisi
        description: 'Başka bir aktöre link vermektir. "Hangi düşman?", "Hangi silah?" sorularının cevabıdır. Değişkenin içinde değer değil, hedefteki aktörün adresi vardır.',
        examples: [
            'TargetEnemy (Hedeflediğim düşman kim?)',
            'CurrentWeapon (Elimdeki silah hangisi?)',
            'MyCar (Bindiğim araba)'
        ]
    },
    {
        name: 'Struct (Yapı)',
        color: '#000080', // Lacivert
        description: 'Çoklu değişken çantasıdır. İçinde birden fazla veri taşır (Örn: Hit Result içinde çarptığı yer, çarptığı aktör, normal vektörü gibi 10 tane bilgi vardır).',
        examples: [
            'Hit Result (Çarpışma detayı)',
            'PostProcessSettings (Görüntü ayarları paketi)',
            'DateTime (Tarih ve Saat paketi)'
        ]
    }
];

export const shortcutData = [
    {
        category: '🏠 Genel Editör (Main Editor)',
        items: [
            { key: 'Ctrl + S', description: 'Tümünü Kaydet. Her zaman hayat kurtarır.' },
            { key: 'Ctrl + Space', description: 'Content Browser\'ı (Dosya Yöneticisi) açar/kapatır.' },
            { key: 'F11', description: 'Tam Ekran (Immersive) moduna geçer.' },
            { key: 'Ctrl + Alt + F11', description: 'Live Coding (C++ değişikliklerini editörü kapatmadan derle).' },
            { key: 'Ctrl + Tab', description: 'Açık olan pencereler arasında geçiş yapar.' }
        ]
    },
    {
        category: '🎥 Viewport & Navigasyon',
        items: [
            { key: 'Sağ Tık + WASD', description: 'Kamerayı FPS oyunu oynar gibi hareket ettirir.' },
            { key: 'F', description: 'Seçili objeye odaklanır (Focus). Kamerayı objenin dibine götürür ve ortalar.' },
            { key: 'Alt + Sol Tık (Sürükle)', description: 'Seçili objenin kopyasını (Duplicate) çıkarır.' },
            { key: 'W / E / R', description: 'Gizmo değiştirir. W: Taşı, E: Döndür, R: Büyüt.' },
            { key: 'G', description: 'Game View. Editör simgelerini gizler, oyunu saf haliyle gösterir.' },
            { key: 'End', description: 'Objeyi zemine (Collision olan yere) yapıştırır.' },
            { key: 'Ctrl + B', description: 'Seçili objenin Content Browser\'daki yerini bulur.' }
        ]
    },
    {
        category: '🧠 Blueprint Editörü',
        description: 'Mantık kurarken hız kazandıran kısayollar.',
        items: [
            { key: 'Ctrl + Sürükle (Variable)', description: 'Değişkeni "Get" (Oku) olarak sahneye atar.' },
            { key: 'Alt + Sürükle (Variable)', description: 'Değişkeni "Set" (Yaz/Değiştir) olarak sahneye atar.' },
            { key: 'S + Sol Tık', description: 'Hızlıca "Sequence" nodu ekler.' },
            { key: 'B + Sol Tık', description: 'Hızlıca "Branch" (If) nodu ekler.' },
            { key: 'D + Sol Tık', description: 'Hızlıca "Delay" (Bekle) nodu ekler.' },
            { key: 'F + Sol Tık', description: 'Hızlıca "For Each Loop" nodu ekler.' },
            { key: 'N + Sol Tık', description: 'Hızlıca "Do N" (N kere yap) nodu ekler.' },
            { key: 'O + Sol Tık', description: 'Hızlıca "Do Once" (Tek seferlik) nodu ekler.' },
            { key: 'C', description: 'Seçili nodlara yorum (Comment) kutusu ekler.' },
            { key: 'F7', description: 'Blueprint\'i derler (Compile).' },
            { key: 'F9', description: 'Noda "Breakpoint" koyar (Debug için duraklatır).' }
        ]
    },
    {
        category: '🏃 Animasyon ve Zaman Çizelgesi',
        items: [
            { key: 'Space', description: 'Animasyonu veya Timeline\'ı oynatır/durdurur.' },
            { key: 'Sol / Sağ Ok', description: 'Animasyonu kare kare (Frame by Frame) ileri/geri sarar.' },
            { key: 'Ctrl + K', description: 'Timeline üzerinde yeni bir Keyframe (Nokta) ekler.' }
        ]
    }
];

export const nodeData = [
    // --- EVENTS (KIRMIZI) ---
    { name: 'Event BeginPlay', type: 'event', description: 'Oyun başladığında veya bu aktör yaratıldığı an SADECE BİR KERE çalışan başlangıç noktasıdır.', tags: ['start', 'başla', 'ilk'], examples: ['Can barını fulle', 'Silahı ele al'] },
    { name: 'Event Tick', type: 'event', description: 'Oyunun her karesinde (Frame) sürekli tetiklenir (Saniyede 60+ kez).', tags: ['loop', 'sürekli', 'frame'], examples: ['Süre sayacı (Timer)', 'Homing füze takibi'] },
    { name: 'Event AnyDamage', type: 'event', description: 'Aktör hasar aldığında çalışır.', tags: ['hasar', 'can', 'damage'], examples: ['Canı azalt', 'Kırmızı ekran efekti'] },
    { name: 'Event PointDamage', type: 'event', description: 'Spesifik bir noktadan hasar aldığında (Headshot vb.) çalışır.', tags: ['hasar', 'kafa', 'nişan'], examples: ['Headshot kontrolü', 'Vurulan yerden kan fışkırtma'] },
    { name: 'Event RadialDamage', type: 'event', description: 'Patlama gibi alan hasarı aldığında çalışır.', tags: ['patlama', 'alan', 'bomb'], examples: ['El bombası hasarı', 'Alan etkisi'] },
    { name: 'Event ActorBeginOverlap', type: 'event', description: 'Aktörün içine biri girdiğinde çalışır.', tags: ['trigger', 'giriş', 'temas'], examples: ['Kapıyı aç', 'Tuzağı çalıştır'] },
    { name: 'Event ActorEndOverlap', type: 'event', description: 'Aktörün içinden biri çıktığında çalışır.', tags: ['trigger', 'çıkış'], examples: ['Kapıyı kapat', 'Işığı söndür'] },
    { name: 'Event Hit', type: 'event', description: 'Fiziksel çarpışma (Duvara çarpma) olduğunda çalışır.', tags: ['çarpma', 'fizik', 'duvar'], examples: ['Araba kazası', 'Topun sekmesi'] },
    { name: 'Event Destroyed', type: 'event', description: 'Aktör yok edilmeden hemen önce çalışır.', tags: ['ölüm', 'yok olma'], examples: ['Loot düşür', 'Puan ver'] },
    { name: 'Event Landed', type: 'event', description: 'Karakter yere indiğinde çalışır.', tags: ['zıpla', 'düşme', 'yer'], examples: ['Düşme hasarı ver', 'Toz efekti çıkar'] },
    { name: 'Custom Event', type: 'event', description: 'Kendi özel olayını yarat.', tags: ['özel', 'fonksiyon'], examples: ['"EjderhaAteşi" eventini yap', 'UI butonuna bağla'] },
    { name: 'Input Action (Jump/Fire)', type: 'event', description: 'Tuşa basıldığında çalışır (Project Settings\'den ayarlanır).', tags: ['tuş', 'input', 'klavye'], examples: ['Space ile zıpla', 'Sol tık ile ateş et'] },
    { name: 'Input Axis (Move)', type: 'event', description: 'Tuşun basılı tutulma değerini (0-1) verir.', tags: ['hareket', 'input', 'yürü'], examples: ['W/S ile yürü', 'Mouse ile dön'] },
    { name: 'OnComponentHit', type: 'event', description: 'Sadece belirli bir bileşen çarptığında çalışır.', tags: ['bileşen', 'çarpma'], examples: ['Kılıcın ucu çarpınca', 'Tekerlek çarpınca'] },
    { name: 'OnComponentBeginOverlap', type: 'event', description: 'Sadece belirli bir bileşen tetiklendiğinde çalışır.', tags: ['bileşen', 'trigger'], examples: ['Sensör alanına girince', 'Görüş açısına girince'] },
    { name: 'Event Possess', type: 'event', description: 'Bir Controller bu Pawn\'ı yönetmeye başladığında çalışır.', tags: ['kontrol', 'başla'], examples: ['Kamerayı aktifleştir', 'HUD\'ı aç'] },
    { name: 'Event Unpossess', type: 'event', description: 'Controller bu Pawn\'ı bıraktığında çalışır.', tags: ['kontrol', 'bırak'], examples: ['AI moduna geç', 'Karakteri durdur'] },
    { name: 'Event LevelLoaded', type: 'event', description: 'Level tamamen yüklendiğinde çalışır.', tags: ['level', 'yükle'], examples: ['Ara sahneyi başlat', 'Müziği başlat'] },

    // --- FLOW CONTROL (GRİ) ---
    { name: 'Branch (If)', type: 'flow', description: 'Koşul doğruysa True, yanlışsa False yolundan gider.', tags: ['eğer', 'if', 'kontrol'], examples: ['Mermi var mı?', 'Can > 0 mı?'] },
    { name: 'Sequence', type: 'flow', description: 'İşlemleri sırayla yapar (Önce 0, sonra 1...).', tags: ['sıra', 'dizi'], examples: ['1. Sesi çal, 2. Efekti oynat, 3. Hasar ver'] },
    { name: 'Delay', type: 'flow', description: 'Belirtilen süre kadar bekler.', tags: ['bekle', 'zaman'], examples: ['3 saniye bekle sonra patlat', 'Ateş ettikten sonra bekle'] },
    { name: 'Retriggerable Delay', type: 'flow', description: 'Süre dolmadan tekrar tetiklenirse süreyi sıfırlar.', tags: ['bekle', 'reset'], examples: ['Combat dışı kalma süresi', 'Combo sayacı'] },
    { name: 'Do Once', type: 'flow', description: 'Sadece bir kere çalışır. Resetlenene kadar kapalı kalır.', tags: ['tek', 'bir kere'], examples: ['Sadece ilk girişte konuş', 'Ölüm sesini bir kere çal'] },
    { name: 'Do N', type: 'flow', description: 'N kere çalışır, sonra kapanır.', tags: ['sayılı', 'limit'], examples: ['3 kere zıplama hakkı', '5 kere spawn et'] },
    { name: 'Flip Flop', type: 'flow', description: 'Sırayla A ve B çıkışlarını çalıştırır.', tags: ['anahtar', 'aç kapa'], examples: ['Işığı aç/kapat', 'Eğil/Kalk'] },
    { name: 'Gate', type: 'flow', description: 'Açıkken sinyali geçirir, kapalıyken durdurur.', tags: ['kapı', 'kontrol'], examples: ['Koşma tuşu basılıyken stamina harca'] },
    { name: 'MultiGate', type: 'flow', description: 'Sırayla farklı çıkışları çalıştırır.', tags: ['sıra', 'rastgele'], examples: ['Sırayla farklı yetenek kullan', 'Rastgele diyalog söyle'] },
    { name: 'For Loop', type: 'flow', description: 'Belirtilen sayı kadar döngü kurar.', tags: ['döngü', 'tekrar'], examples: ['10 tane altın yarat', 'Grid oluştur'] },
    { name: 'For Each Loop', type: 'flow', description: 'Listeki her eleman için işlem yapar.', tags: ['liste', 'döngü'], examples: ['Tüm düşmanları öldür', 'Envanterdeki her şeyi sat'] },
    { name: 'While Loop', type: 'flow', description: 'Koşul doğru olduğu sürece döner (Dikkat: Sonsuz döngü riski).', tags: ['döngü', 'şartlı'], examples: ['Duvara çarpana kadar git', 'Rastgele boş yer bul'] },
    { name: 'Switch on Int', type: 'flow', description: 'Sayıya göre yol seçer.', tags: ['seçim', 'case'], examples: ['Silah ID\'sine göre işlem yap', 'Zorluk seviyesini seç'] },
    { name: 'Switch on String', type: 'flow', description: 'Yazıya göre yol seçer.', tags: ['seçim', 'yazı'], examples: ['İsme göre takım seç', 'Komuta göre işlem yap'] },
    { name: 'Select', type: 'flow', description: 'Koşula göre değer seçer.', tags: ['seç', 'değer'], examples: ['Erkek/Kadın mesh seçimi', 'Hızlı/Yavaş hız seçimi'] },
    { name: 'Is Valid', type: 'flow', description: 'Obje var mı yok mu kontrol eder.', tags: ['kontrol', 'null'], examples: ['Düşman yaşıyor mu?', 'Widget ekranda mı?'] },

    // --- MATH (YEŞİL) ---
    { name: 'Add (+)', type: 'math', description: 'Toplama.', tags: ['artı', 'topla'], examples: ['Puan ekle', 'Can ekle'] },
    { name: 'Subtract (-)', type: 'math', description: 'Çıkarma.', tags: ['eksi', 'çıkar'], examples: ['Hasar ver', 'Mermi harca'] },
    { name: 'Multiply (*)', type: 'math', description: 'Çarpma.', tags: ['çarp', 'kat'], examples: ['2 kat hasar', 'Hızlandır'] },
    { name: 'Divide (/)', type: 'math', description: 'Bölme.', tags: ['böl', 'oran'], examples: ['Can yüzdesi hesapla', 'Ortalama al'] },
    { name: 'Equal (==)', type: 'math', description: 'Eşit mi?', tags: ['eşit'], examples: ['Can 0 mı?', 'Mermi dolu mu?'] },
    { name: 'Not Equal (!=)', type: 'math', description: 'Eşit değil mi?', tags: ['farklı'], examples: ['Ölü değil mi?', 'Takım arkadaşı değil mi?'] },
    { name: 'Less (<)', type: 'math', description: 'Küçük mü?', tags: ['küçük'], examples: ['Mesafe 100\'den az mı?', 'Süre bitti mi?'] },
    { name: 'Greater (>)', type: 'math', description: 'Büyük mü?', tags: ['büyük'], examples: ['Skor rekoru geçti mi?', 'Hız limitin üstünde mi?'] },
    { name: 'AND', type: 'math', description: 'İkisi de doğruysa True.', tags: ['ve', 'mantık'], examples: ['Mermi var VE Canlı mı?'] },
    { name: 'OR', type: 'math', description: 'Biri bile doğruysa True.', tags: ['veya', 'mantık'], examples: ['Yerde VEYA Suda mı?'] },
    { name: 'NOT', type: 'math', description: 'Tersine çevirir.', tags: ['değil', 'ters'], examples: ['Ölü değil (Yaşıyor)', 'Görünür değil (Gizli)'] },
    { name: 'Clamp (Float/Int)', type: 'math', description: 'Değeri min-max arasına sıkıştırır.', tags: ['limit', 'sınır'], examples: ['Canı 0-100 arasında tut', 'Açıyı sınırla'] },
    { name: 'Map Range', type: 'math', description: 'Değeri bir aralıktan diğerine oranlar.', tags: ['oran', 'çevir'], examples: ['0-100 hızı 0-1 ses şiddetine çevir'] },
    { name: 'Lerp', type: 'math', description: 'İki değer arasında yumuşak geçiş yapar.', tags: ['yumuşak', 'geçiş'], examples: ['Rengi yavaşça değiştir', 'Kapıyı yavaşça aç'] },
    { name: 'FInterp To', type: 'math', description: 'Hedefe zamanla yumuşakça ulaşır.', tags: ['takip', 'smooth'], examples: ['Kamera takibi', 'Can barı animasyonu'] },
    { name: 'Abs', type: 'math', description: 'Mutlak değer (Pozitif yapar).', tags: ['mutlak', 'artı'], examples: ['Hızın yönünü boşver, büyüklüğünü al'] },
    { name: 'Ceil', type: 'math', description: 'Yukarı yuvarlar.', tags: ['yuvarla', 'tavan'], examples: ['4.1 -> 5'] },
    { name: 'Floor', type: 'math', description: 'Aşağı yuvarlar.', tags: ['yuvarla', 'taban'], examples: ['4.9 -> 4'] },
    { name: 'Round', type: 'math', description: 'En yakına yuvarlar.', tags: ['yuvarla'], examples: ['4.4 -> 4, 4.6 -> 5'] },
    { name: 'Power', type: 'math', description: 'Üs alır.', tags: ['üs', 'kuvvet'], examples: ['2 üzeri 3 = 8'] },
    { name: 'Square Root', type: 'math', description: 'Karekök alır.', tags: ['kök'], examples: ['Alan hesapları'] },
    { name: 'Sin', type: 'math', description: 'Sinüs (Dalga hareketi sağlar).', tags: ['trig', 'dalga'], examples: ['Uçan objeyi aşağı yukarı sallandır'] },
    { name: 'Cos', type: 'math', description: 'Kosinüs.', tags: ['trig', 'dalga'], examples: ['Dairesel hareket'] },
    { name: 'Tan', type: 'math', description: 'Tanjant.', tags: ['trig'], examples: ['Eğim hesabı'] },
    { name: 'Acos', type: 'math', description: 'Ark Kosinüs.', tags: ['trig', 'açı'], examples: ['Açı bulma'] },
    { name: 'Asin', type: 'math', description: 'Ark Sinüs.', tags: ['trig', 'açı'], examples: ['Açı bulma'] },
    { name: 'Atan2', type: 'math', description: 'İki noktadan açı bulur.', tags: ['trig', 'yön'], examples: ['Düşmana bakma açısı'] },
    { name: 'Vector Length', type: 'math', description: 'Vektörün uzunluğunu (Hızını/Mesafesini) verir.', tags: ['uzunluk', 'hız'], examples: ['Karakter ne kadar hızlı?', 'Mesafe ne kadar?'] },
    { name: 'Get Distance To', type: 'math', description: 'İki aktör arası mesafeyi ölçer.', tags: ['mesafe', 'uzaklık'], examples: ['Düşman menzilde mi?', 'Eve ne kadar kaldı?'] },
    { name: 'Normalize', type: 'math', description: 'Vektörün boyunu 1 yapar (Sadece yön kalır).', tags: ['yön', 'birim'], examples: ['Sadece hangi yöne gittiğini bul'] },
    { name: 'Cross Product', type: 'math', description: 'İki vektöre dik vektörü bulur.', tags: ['dik', 'vektör'], examples: ['Yüzeyin sağını solunu bul'] },
    { name: 'Dot Product', type: 'math', description: 'İki vektörün benzerliğini (Açısını) ölçer.', tags: ['açı', 'görüş'], examples: ['Düşman beni görüyor mu? (Önünde miyim?)'] },
    { name: 'Get Forward Vector', type: 'math', description: 'Aktörün önünü gösteren vektörü verir.', tags: ['ön', 'ileri'], examples: ['Baktığı yöne mermi at'] },
    { name: 'Get Right Vector', type: 'math', description: 'Aktörün sağını gösteren vektörü verir.', tags: ['sağ', 'yan'], examples: ['Yana kaçış hareketi'] },
    { name: 'Get Up Vector', type: 'math', description: 'Aktörün tepesini gösteren vektörü verir.', tags: ['yukarı', 'tepe'], examples: ['Kafasından yukarı efekt çıkar'] },
    { name: 'Make Vector', type: 'math', description: 'X, Y, Z değerlerinden vektör yapar.', tags: ['oluştur'], examples: ['Konum belirle'] },
    { name: 'Break Vector', type: 'math', description: 'Vektörü X, Y, Z\'ye ayırır.', tags: ['ayır'], examples: ['Sadece Z (Yükseklik) değerini al'] },
    { name: 'Rotate Vector', type: 'math', description: 'Vektörü döndürür.', tags: ['döndür'], examples: ['Mermiyi saçılımlı at'] },
    { name: 'Random Float', type: 'math', description: '0 ile 1 arası rastgele sayı.', tags: ['rastgele', 'şans'], examples: ['Kritik vuruş şansı'] },
    { name: 'Random Int in Range', type: 'math', description: 'İki sayı arası rastgele tamsayı.', tags: ['rastgele', 'zar'], examples: ['Zar at (1-6)', 'Rastgele hasar (50-100)'] },
    { name: 'Random Bool', type: 'math', description: '%50 şansla True/False.', tags: ['şans', 'yazı tura'], examples: ['Yazı tura at'] },
    { name: 'Min', type: 'math', description: 'İki sayıdan küçük olanı alır.', tags: ['küçük', 'en az'], examples: ['Hangisi daha az?'] },
    { name: 'Max', type: 'math', description: 'İki sayıdan büyük olanı alır.', tags: ['büyük', 'en çok'], examples: ['En yüksek skoru bul'] },
    { name: 'Near Equal', type: 'math', description: 'Yaklaşık eşit mi? (Hata payı ile).', tags: ['yakın', 'benzer'], examples: ['Hedefe yeterince yaklaştı mı?'] },

    // --- STRING (PEMBE) ---
    { name: 'Append', type: 'function', description: 'Yazıları birleştirir.', tags: ['birleştir', 'ekle'], examples: ['"Skor: " + Puan'] },
    { name: 'Format Text', type: 'function', description: 'Dinamik metin oluşturur.', tags: ['format', 'çeviri'], examples: ['"Merhaba {isim}, seviyen {lvl}"'] },
    { name: 'To String', type: 'function', description: 'Veriyi yazıya çevirir.', tags: ['çevir', 'dönüştür'], examples: ['Sayotı ekrana yazdır'] },
    { name: 'To Text', type: 'function', description: 'Veriyi gelişmiş (Çevrilebilir) metne çevirir.', tags: ['çevir', 'ui'], examples: ['Arayüzde sayı göster'] },
    { name: 'To Name', type: 'function', description: 'Yazıyı Name tipine çevirir.', tags: ['çevir', 'id'], examples: ['Kemik ismini bul'] },
    { name: 'Equal (String)', type: 'function', description: 'Yazılar aynı mı?', tags: ['eşit', 'kontrol'], examples: ['Şifre doğru mu?'] },
    { name: 'Contains', type: 'function', description: 'İçinde geçiyor mu?', tags: ['ara', 'bul'], examples: ['İsimde "Admin" var mı?'] },
    { name: 'Len', type: 'function', description: 'Yazının karakter sayısını verir.', tags: ['uzunluk', 'sayı'], examples: ['Kullanıcı adı çok mu kısa?'] },
    { name: 'Left', type: 'function', description: 'Soldan X karakteri alır.', tags: ['kes', 'sol'], examples: ['İsmin baş harflerini al'] },
    { name: 'Right', type: 'function', description: 'Sağdan X karakteri alır.', tags: ['kes', 'sağ'], examples: ['Dosya uzantısını al'] },
    { name: 'Mid', type: 'function', description: 'Ortadan parça alır.', tags: ['kes', 'orta'], examples: ['Kodun ortasını oku'] },
    { name: 'Split', type: 'function', description: 'Yazıyı bir ayırıcıya göre ikiye böler.', tags: ['böl', 'ayır'], examples: ['"Ad:Soyad" -> "Ad" ve "Soyad"'] },
    { name: 'Replace', type: 'function', description: 'Bir kelimeyi başkasıyla değiştirir.', tags: ['değiştir', 'düzenle'], examples: ['Sansürle: "Kötü" -> "****"'] },
    { name: 'Trim', type: 'function', description: 'Baştaki ve sondaki boşlukları siler.', tags: ['temizle', 'boşluk'], examples: ['Giriş yaparken boşlukları temizle'] },
    { name: 'To Upper', type: 'function', description: 'Hepsini BÜYÜK HARF yapar.', tags: ['büyük', 'case'], examples: ['Başlık yap'] },
    { name: 'To Lower', type: 'function', description: 'Hepsini küçük harf yapar.', tags: ['küçük', 'case'], examples: ['Arama yaparken eşleştir'] },
    { name: 'Reverse', type: 'function', description: 'Yazıyı tersten yazar.', tags: ['ters', 'ayna'], examples: ['"Ali" -> "ilA"'] },
    { name: 'Is Empty', type: 'function', description: 'Yazı boş mu?', tags: ['boş', 'kontrol'], examples: ['Kullanıcı isim girmiş mi?'] },
    { name: 'Is Numeric', type: 'function', description: 'Sadece sayılardan mı oluşuyor?', tags: ['sayı', 'kontrol'], examples: ['Telefon numarası kontrolü'] },
    { name: 'Parse into Array', type: 'function', description: 'Yazıyı boşluklardan bölüp liste yapar.', tags: ['liste', 'ayır'], examples: ['"Elma Armut Muz" -> ["Elma", "Armut", "Muz"]'] },
    { name: 'Get Character As Number', type: 'function', description: 'Harfin sayısal (ASCII) kodunu verir.', tags: ['ascii', 'kod'], examples: ['Şifreleme yap'] },

    // --- ARRAY & MAP (MAVİ/GRİ) ---
    { name: 'Make Array', type: 'function', description: 'Manuel liste oluşturur.', tags: ['oluştur'], examples: ['Silah listesi yap'] },
    { name: 'Add', type: 'function', description: 'Listeye ekler.', tags: ['ekle'], examples: ['Eşya topla'] },
    { name: 'Add Unique', type: 'function', description: 'Sadece listede yoksa ekler.', tags: ['ekle', 'benzersiz'], examples: ['Zaten varsa ekleme'] },
    { name: 'Remove', type: 'function', description: 'Listeden siler (İçeriğe göre).', tags: ['sil'], examples: ['Envanterden "Elma" sil'] },
    { name: 'Remove Index', type: 'function', description: 'Sırasına göre siler.', tags: ['sil', 'sıra'], examples: ['1. sıradakini sil'] },
    { name: 'Clear', type: 'function', description: 'Hepsini siler.', tags: ['temizle'], examples: ['Envanteri boşalt'] },
    { name: 'Get', type: 'function', description: 'Elemanı getirir.', tags: ['al', 'oku'], examples: ['Listenin başındakini ver'] },
    { name: 'Last Index', type: 'function', description: 'Son elemanın numarasını verir.', tags: ['son'], examples: ['Döngü kur'] },
    { name: 'Length', type: 'function', description: 'Kaç eleman var?', tags: ['sayı', 'uzunluk'], examples: ['Envanter dolu mu?'] },
    { name: 'Contains', type: 'function', description: 'Var mı?', tags: ['ara'], examples: ['Anahtar var mı?'] },
    { name: 'Find Item', type: 'function', description: 'Kaçıncı sırada olduğunu bulur.', tags: ['bul', 'sıra'], examples: ['Anahtar kaçıncı sırada?'] },
    { name: 'Shuffle', type: 'function', description: 'Karıştırır.', tags: ['karıştır'], examples: ['Kartları karıştır'] },
    { name: 'Random', type: 'function', description: 'Rastgele birini seçer.', tags: ['rastgele'], examples: ['Rastgele silah ver'] },
    { name: 'Resize', type: 'function', description: 'Listenin boyutunu değiştirir.', tags: ['boyut'], examples: ['Boş yer aç'] },
    { name: 'Insert', type: 'function', description: 'Araya ekler.', tags: ['ekle', 'ara'], examples: ['Listenin başına ekle'] },
    { name: 'Set Array Elem', type: 'function', description: 'Belirli bir sıradakini değiştirir.', tags: ['değiştir', 'güncelle'], examples: ['2. silahı değiştir'] },
    { name: 'Swap', type: 'function', description: 'İki elemanın yerini değiştirir.', tags: ['takas'], examples: ['Eşyaların yerini değiş'] },
    { name: 'Append Array', type: 'function', description: 'İki listeyi birleştirir.', tags: ['birleştir'], examples: ['Ganimet kutusunu envantere ekle'] },
    { name: 'Filter Array', type: 'function', description: 'Şarta uyanları ayıklar.', tags: ['filtre', 'seç'], examples: ['Sadece silahları göster'] },
    { name: 'Max of Float Array', type: 'function', description: 'Listedeki en büyük sayıyı bulur.', tags: ['en büyük', 'max'], examples: ['En yüksek skoru bul'] },
    { name: 'Min of Float Array', type: 'function', description: 'En küçük sayıyı bulur.', tags: ['en küçük', 'min'], examples: ['En düşük süreyi bul'] },
    { name: 'Average of Float Array', type: 'function', description: 'Ortalamasını alır.', tags: ['ortalama'], examples: ['Sınıf ortalaması'] },
    { name: 'Find (Map)', type: 'function', description: 'Anahtara karşılık gelen değeri bulur.', tags: ['map', 'bul'], examples: ['ID\'den eşya bul'] },
    { name: 'Add (Map)', type: 'function', description: 'Map\'e veri ekler.', tags: ['map', 'ekle'], examples: ['Yeni kayıt oluştur'] },
    { name: 'Remove (Map)', type: 'function', description: 'Map\'ten siler.', tags: ['map', 'sil'], examples: ['Kaydı sil'] },
    { name: 'Keys (Map)', type: 'function', description: 'Tüm anahtarları liste olarak verir.', tags: ['map', 'liste'], examples: ['Tüm ID\'leri listele'] },
    { name: 'Values (Map)', type: 'function', description: 'Tüm değerleri liste olarak verir.', tags: ['map', 'liste'], examples: ['Tüm eşyaları listele'] },

    // --- ACTOR & COMPONENT MANAGEMENT (MAVİ) ---
    { name: 'Spawn Actor', type: 'function', description: 'Aktör yaratır.', tags: ['yarat', 'doğur'], examples: ['Mermi spawn et'] },
    { name: 'Destroy Actor', type: 'function', description: 'Aktörü siler.', tags: ['sil', 'yok et'], examples: ['Düşmanı sil'] },
    { name: 'Set Life Span', type: 'function', description: 'Ömür biçer. Süre dolunca otomatik silinir.', tags: ['ömür', 'süre', 'otomatik sil'], examples: ['Mermi 5 saniye sonra yok olsun', 'Loot 1 dakika kalsın'] },
    { name: 'Is Pending Kill', type: 'function', description: 'Silinmek üzere mi?', tags: ['kontrol', 'ölü'], examples: ['Silinmiş objeye erişme'] },
    { name: 'Get Class', type: 'function', description: 'Aktörün türünü (Sınıfını) verir.', tags: ['tür', 'sınıf'], examples: ['Bu bir düşman mı yoksa dost mu?'] },
    { name: 'Get Owner', type: 'function', description: 'Sahibini verir.', tags: ['sahip'], examples: ['Mermiyi kim attı?'] },
    { name: 'Set Owner', type: 'function', description: 'Sahip atar.', tags: ['ata', 'sahip'], examples: ['Bu silahın sahibi benim'] },
    { name: 'Get Actor Location', type: 'function', description: 'Konumunu verir.', tags: ['konum'], examples: ['Nerede?'] },
    { name: 'Set Actor Location', type: 'function', description: 'Işınlar.', tags: ['ışınla'], examples: ['Buraya git'] },
    { name: 'Get Actor Rotation', type: 'function', description: 'Yönünü verir.', tags: ['yön'], examples: ['Nereye bakıyor?'] },
    { name: 'Set Actor Rotation', type: 'function', description: 'Döndürür.', tags: ['döndür'], examples: ['Bana dön'] },
    { name: 'Get Actor Scale', type: 'function', description: 'Boyutunu verir.', tags: ['boyut'], examples: ['Ne kadar büyük?'] },
    { name: 'Set Actor Scale', type: 'function', description: 'Boyutlandırır.', tags: ['büyüt'], examples: ['2 kat büyüt'] },
    { name: 'Add Actor World Offset', type: 'function', description: 'Kaydırır.', tags: ['kaydır'], examples: ['İleri kay'] },
    { name: 'Add Actor Local Offset', type: 'function', description: 'Kendi yönüne göre kaydırır.', tags: ['kaydır', 'yerel'], examples: ['Kendi sağına git'] },
    { name: 'Add Actor World Rotation', type: 'function', description: 'Döndürür (Ekleyerek).', tags: ['döndür'], examples: ['Kendi ekseninde dön'] },
    { name: 'Attach To Actor', type: 'function', description: 'Başka aktöre yapışır.', tags: ['yapış', 'bağlan'], examples: ['Araca bin'] },
    { name: 'Attach To Component', type: 'function', description: 'Bileşene yapışır.', tags: ['yapış', 'soket'], examples: ['Eline yapış'] },
    { name: 'Detach From Actor', type: 'function', description: 'Ayrılır.', tags: ['ayrıl', 'bırak'], examples: ['Araçtan in'] },
    { name: 'Get All Actors of Class', type: 'function', description: 'Tüm aktörleri bulur.', tags: ['bul', 'tümü'], examples: ['Tüm düşmanları bul'] },
    { name: 'Get All Actors with Tag', type: 'function', description: 'Etiketi olanları bulur.', tags: ['etiket', 'bul'], examples: ['"Patlayıcı" etiketli her şeyi bul'] },
    { name: 'Actor Has Tag', type: 'function', description: 'Etiketi var mı?', tags: ['etiket', 'kontrol'], examples: ['Bu obje "QuestItem" mı?'] },
    { name: 'Set Visibility', type: 'function', description: 'Görünür/Görünmez yapar.', tags: ['gizle', 'göster'], examples: ['Hayalet ol'] },
    { name: 'Set Hidden in Game', type: 'function', description: 'Oyunda gizler (Ama çarpışma kalabilir).', tags: ['gizle'], examples: ['Debug objelerini gizle'] },
    { name: 'Add Component', type: 'function', description: 'Yeni parça ekler.', tags: ['ekle', 'parça'], examples: ['Karaktere ışık ekle'] },
    { name: 'Get Component by Class', type: 'function', description: 'Parçasını bulur.', tags: ['bul', 'parça'], examples: ['Movement component\'i bul'] },
    { name: 'Destroy Component', type: 'function', description: 'Parçasını siler.', tags: ['sil', 'parça'], examples: ['Efekti sil'] },

    // --- PHYSICS & MOVEMENT (MAVİ) ---
    { name: 'Add Force', type: 'function', description: 'Güç uygular (İter).', tags: ['it', 'güç'], examples: ['Rüzgar itmesi'] },
    { name: 'Add Impulse', type: 'function', description: 'Anlık darbe vurur.', tags: ['vur', 'tekme'], examples: ['Topa vur'] },
    { name: 'Set Simulate Physics', type: 'function', description: 'Fiziği açar.', tags: ['fizik'], examples: ['Ragdoll yap'] },
    { name: 'Set Gravity Enabled', type: 'function', description: 'Yerçekimi aç/kapa.', tags: ['yerçekimi'], examples: ['Uçmak için kapat'] },
    { name: 'Set Mass Scale', type: 'function', description: 'Ağırlığı değiştirir.', tags: ['ağırlık'], examples: ['Hafiflet'] },
    { name: 'Get Velocity', type: 'function', description: 'Hız vektörünü verir.', tags: ['hız'], examples: ['Ne yöne gidiyor?'] },
    { name: 'Set Physics Linear Velocity', type: 'function', description: 'Hızı direkt ayarlar.', tags: ['hız', 'ayarla'], examples: ['Dur (Hız=0)'] },
    { name: 'Set Physics Angular Velocity', type: 'function', description: 'Dönme hızını ayarlar.', tags: ['dönüş', 'hız'], examples: ['Topaç gibi döndür'] },
    { name: 'Line Trace', type: 'function', description: 'Lazer tutar (Raycast).', tags: ['lazer', 'trace'], examples: ['Nişan al'] },
    { name: 'Sphere Trace', type: 'function', description: 'Kalın lazer (Küre) tutar.', tags: ['trace', 'alan'], examples: ['Kılıç savurma'] },
    { name: 'Box Trace', type: 'function', description: 'Kutu şeklinde tarama yapar.', tags: ['trace', 'kutu'], examples: ['Geniş alan tarama'] },
    { name: 'Get Hit Result Under Cursor', type: 'function', description: 'Mouse\'un altındakini bulur.', tags: ['mouse', 'seç'], examples: ['Tıklananı seç'] },
    { name: 'Launch Character', type: 'function', description: 'Karakteri fırlatır.', tags: ['fırlat'], examples: ['Zıplama tahtası'] },
    { name: 'Jump', type: 'function', description: 'Zıplatır.', tags: ['zıpla'], examples: ['Space basınca'] },
    { name: 'Stop Jumping', type: 'function', description: 'Zıplamayı keser.', tags: ['dur'], examples: ['Tuşu bırakınca'] },
    { name: 'Crouch', type: 'function', description: 'Eğilir.', tags: ['eğil'], examples: ['Ctrl basınca'] },
    { name: 'UnCrouch', type: 'function', description: 'Kalkar.', tags: ['kalk'], examples: ['Ctrl bırakınca'] },
    { name: 'Set Movement Speed', type: 'function', description: 'Hızı ayarlar.', tags: ['hız', 'yürü'], examples: ['Koşma hızı'] },
    { name: 'Get Character Movement', type: 'function', description: 'Hareket bileşenini alır.', tags: ['hareket', 'ayar'], examples: ['Ayarlara eriş'] },
    { name: 'Is Falling', type: 'function', description: 'Düşüyor mu?', tags: ['düşme', 'kontrol'], examples: ['Havadaysa zıplayamasın'] },
    { name: 'Is Swimming', type: 'function', description: 'Yüzüyor mu?', tags: ['yüzme'], examples: ['Suda mı?'] },
    { name: 'Is Flying', type: 'function', description: 'Uçuyor mu?', tags: ['uçma'], examples: ['Jetpack açık mı?'] },

    // --- AUDIO (TURUNCU) ---
    { name: 'Play Sound 2D', type: 'function', description: 'Sesi her yerden (arayüz sesi gibi) çalar.', tags: ['ses', 'çal', '2d'], examples: ['Buton sesi', 'Arka plan müziği'] },
    { name: 'Play Sound at Location', type: 'function', description: 'Sesi belirli bir noktada çalar.', tags: ['ses', 'konum', '3d'], examples: ['Patlama sesi', 'Ayak sesi'] },
    { name: 'Spawn Sound 2D', type: 'function', description: 'Sesi bir aktör gibi yaratır (Durdurulabilir, değiştirilebilir).', tags: ['ses', 'yarat', 'kontrol'], examples: ['Müziği başlat ve sonra durdur'] },
    { name: 'Spawn Sound at Location', type: 'function', description: 'Ses objesi yaratır.', tags: ['ses', 'yarat'], examples: ['Kamp ateşi sesi'] },
    { name: 'Set Volume Multiplier', type: 'function', description: 'Ses şiddetini ayarlar.', tags: ['ses', 'ayar'], examples: ['Sesi kıs/aç'] },
    { name: 'Set Pitch Multiplier', type: 'function', description: 'Sesin tonunu (inceliğini) ayarlar.', tags: ['ses', 'ton'], examples: ['Ağır çekimde sesi kalınlaştır'] },
    { name: 'Fade In', type: 'function', description: 'Sesi yavaşça açar.', tags: ['ses', 'fade'], examples: ['Müzik yavaşça girsin'] },
    { name: 'Fade Out', type: 'function', description: 'Sesi yavaşça kapatır.', tags: ['ses', 'fade'], examples: ['Müzik yavaşça bitsin'] },
    { name: 'Is Playing', type: 'function', description: 'Ses çalıyor mu?', tags: ['ses', 'kontrol'], examples: ['Müzik bittiyse yenisini çal'] },
    { name: 'Stop', type: 'function', description: 'Sesi durdurur.', tags: ['ses', 'dur'], examples: ['Müziği kes'] },
    { name: 'Set Sound', type: 'function', description: 'Çalınacak ses dosyasını değiştirir.', tags: ['ses', 'değiş'], examples: ['Radyo kanalını değiştir'] },
    { name: 'Get Audio Component', type: 'function', description: 'Ses bileşenine erişir.', tags: ['ses', 'bileşen'], examples: ['Aktörün sesine eriş'] },

    // --- AI & NAVIGATION (YEŞİL) ---
    { name: 'AI Move To', type: 'function', description: 'Yapay zekayı bir yere veya bir aktöre yürütür.', tags: ['ai', 'git', 'yürü'], examples: ['Düşmanı oyuncuya gönder'] },
    { name: 'Simple Move to Location', type: 'function', description: 'Basit yürüme komutu.', tags: ['ai', 'git'], examples: ['Tıklnan yere git'] },
    { name: 'Stop Movement', type: 'function', description: 'Yürümeyi durdurur.', tags: ['ai', 'dur'], examples: ['Vurunca dursun'] },
    { name: 'Get Random Point in Radius', type: 'function', description: 'Navigasyon üzerinde rastgele bir nokta bulur.', tags: ['ai', 'rastgele', 'yer'], examples: ['Rastgele devriye noktası'] },
    { name: 'Get Path Length', type: 'function', description: 'Yolun uzunluğunu hesaplar.', tags: ['ai', 'yol', 'mesafe'], examples: ['Yol ne kadar uzun?'] },
    { name: 'Project Point to Navigation', type: 'function', description: 'Bir noktayı en yakın yürünebilir zemine izdüşürür.', tags: ['ai', 'zemin', 'nav'], examples: ['Havadaki noktayı yere indir'] },
    { name: 'Get Blackboard', type: 'function', description: 'AI\'nın hafızasına (Tahtaya) erişir.', tags: ['ai', 'hafıza'], examples: ['AI\'nın hedefini öğren'] },
    { name: 'Set Value as Vector (BB)', type: 'function', description: 'AI hafızasına konum kaydeder.', tags: ['ai', 'yaz', 'veri'], examples: ['Gideceği yeri hafızaya yaz'] },
    { name: 'Set Value as Object (BB)', type: 'function', description: 'AI hafızasına obje kaydeder.', tags: ['ai', 'yaz'], examples: ['Hedef oyuncuyu kaydet'] },
    { name: 'Pose Awake', type: 'function', description: 'AI\'yı uyandırır.', tags: ['ai', 'uyan'], examples: ['Görünce harekete geç'] },
    { name: 'Run Behavior Tree', type: 'function', description: 'AI davranış ağacını başlatır.', tags: ['ai', 'beyin'], examples: ['Zekayı aktif et'] },

    // --- USER INTERFACE (MAVİ) ---
    { name: 'Create Widget', type: 'function', description: 'Arayüz oluşturur.', tags: ['ui', 'yarat'], examples: ['Menü yarat'] },
    { name: 'Add to Viewport', type: 'function', description: 'Arayüzü ekrana basar.', tags: ['ui', 'göster'], examples: ['Menüyü göster'] },
    { name: 'Remove from Parent', type: 'function', description: 'Arayüzü kapatır/siler.', tags: ['ui', 'kapat'], examples: ['Menüden çık'] },
    { name: 'Set Input Mode UI Only', type: 'function', description: 'Sadece mouse aktiftir.', tags: ['ui', 'mouse'], examples: ['Envanterde'] },
    { name: 'Set Input Mode Game Only', type: 'function', description: 'Sadece oyun aktiftir.', tags: ['ui', 'oyun'], examples: ['Oyuna dönünce'] },
    { name: 'Get Owning Player', type: 'function', description: 'Arayüzün sahibini bulur.', tags: ['ui', 'sahip'], examples: ['Kimin ekranı?'] },
    { name: 'Set Visibility (Widget)', type: 'function', description: 'Görünürlüğü ayarlar (Visible/Hidden/Collapsed).', tags: ['ui', 'gizle'], examples: ['Butonu gizle'] },
    { name: 'Set Text', type: 'function', description: 'Yazıyı değiştirir.', tags: ['ui', 'yazı'], examples: ['Puanı güncelle'] },
    { name: 'Set Color and Opacity', type: 'function', description: 'Rengi değiştirir.', tags: ['ui', 'renk'], examples: ['Yazıyı kırmızı yap'] },
    { name: 'Set Percent', type: 'function', description: 'Barın doluluk oranını ayarlar (0-1).', tags: ['ui', 'bar'], examples: ['Can barını güncelle'] },
    { name: 'Play Animation (Widget)', type: 'function', description: 'Arayüz animasyonunu oynatır.', tags: ['ui', 'animasyon'], examples: ['Menü açılış efekti'] },

    // --- LEVEL & SYSTEM (GRİ) ---
    { name: 'Open Level', type: 'function', description: 'Level değiştirir.', tags: ['level', 'aç'], examples: ['Diğer bölüme geç'] },
    { name: 'Get Current Level Name', type: 'function', description: 'Level ismini verir.', tags: ['level', 'isim'], examples: ['Hangi bölüm?'] },
    { name: 'Quit Game', type: 'function', description: 'Oyundan atar.', tags: ['kapat', 'çıkış'], examples: ['Masaüstüne dön'] },
    { name: 'Execute Console Command', type: 'function', description: 'Konsol komutu çalıştırır.', tags: ['konsol', 'cmd'], examples: ['"Stat FPS" (FPS göster)'] },
    { name: 'Get Time Seconds', type: 'function', description: 'Oyunun başlangıcından beri geçen süreyi verir.', tags: ['zaman', 'süre'], examples: ['Ne kadar süredir oynuyor?'] },
    { name: 'Get Real Time Seconds', type: 'function', description: 'Gerçek dünyada geçen süreyi verir (Pause dahildir).', tags: ['zaman', 'gerçek'], examples: ['Toplam açık kalma süresi'] },
    { name: 'Set Game Paused', type: 'function', description: 'Oyunu dondurur.', tags: ['pause', 'dur'], examples: ['ESC basınca'] },
    { name: 'Is Game Paused', type: 'function', description: 'Oyun donuk mu?', tags: ['pause', 'kontrol'], examples: ['Menü açık mı?'] },
    { name: 'Load Stream Level', type: 'function', description: 'Arka planda level yükler (Loading süresiz).', tags: ['level', 'stream'], examples: ['Büyük haritada yeni bölgeyi yükle'] },
    { name: 'Unload Stream Level', type: 'function', description: 'Levelı hafızadan atar.', tags: ['level', 'sil'], examples: ['Geride kalan bölgeyi sil'] },

    // --- NETWORKING & REPLICATION (MOR) ---
    { name: 'Switch Has Authority', type: 'network', description: 'Sunucu mu İstemci mi ayrımı yapar.', tags: ['server', 'yetki'], examples: ['Önemli işlemleri sunucuda yap'] },
    { name: 'Run on Server', type: 'network', description: 'Sunucuya sinyal gönderir.', tags: ['rpc', 'sunucu'], examples: ['Vurma işlemini bildir'] },
    { name: 'Multicast', type: 'network', description: 'Herkese sinyal gönderir.', tags: ['rpc', 'herkes'], examples: ['Efektleri herkese göster'] },
    { name: 'Run on Owning Client', type: 'network', description: 'Sadece sahibine gönderir.', tags: ['rpc', 'sahip'], examples: ['Sadece bana mesaj göster'] },
    { name: 'Is Locally Controlled', type: 'network', description: 'Ben mi yönetiyorum?', tags: ['kontrol', 'ben'], examples: ['HUD sadece bende çıksın'] },
    { name: 'Get Player State', type: 'network', description: 'Oyuncu verisine erişir.', tags: ['data', 'oyuncu'], examples: ['Ping, İsim, Skor'] },
    { name: 'Get Game State', type: 'network', description: 'Oyun durumuna erişir.', tags: ['data', 'oyun'], examples: ['Maç süresi'] },
    { name: 'Save Game', type: 'network', description: 'Kaydeder.', tags: ['save'], examples: ['İlerlemeyi sakla'] },
    { name: 'Load Game', type: 'network', description: 'Yükler.', tags: ['load'], examples: ['Kayıttan dön'] },

    // --- INPUT (KIRMIZI) ---
    { name: 'Get Mouse Position', type: 'function', description: 'Mouse koordinatını verir.', tags: ['mouse', 'yer'], examples: ['Mouse nerede?'] },
    { name: 'Set Mouse Position', type: 'function', description: 'Mouse\'u ışınlar.', tags: ['mouse', 'taşı'], examples: ['Ortaya sabitle'] },
    { name: 'Show Mouse Cursor', type: 'function', description: 'İmleci gösterir.', tags: ['mouse', 'görünür'], examples: ['Menüde göster'] },
    { name: 'Is Input Key Down', type: 'function', description: 'Tuş basılı mı?', tags: ['tuş', 'basılı'], examples: ['Shift basılı mı?'] },
    { name: 'Get Input Analog Stick State', type: 'function', description: 'Gamepad kolunun değerini verir.', tags: ['gamepad', 'analog'], examples: ['Ne kadar itiyor?'] },
    { name: 'Set Input Priority', type: 'function', description: 'Giriş önceliğini ayarlar.', tags: ['input', 'öncelik'], examples: ['Sinematikte girişi engelle'] },
    { name: 'Enable Input', type: 'function', description: 'Kontrolü açar.', tags: ['input', 'aç'], examples: ['Giriş izni ver'] },
    { name: 'Disable Input', type: 'function', description: 'Kontrolü kapatır.', tags: ['input', 'kapa'], examples: ['Karakteri dondur'] },

    // --- MATERIAL & APPEARANCE (TURKUAZ) ---
    { name: 'Create Dynamic Material Instance', type: 'function', description: 'Kod ile değiştirilebilir bir materyal kopyası yaratır.', tags: ['materyal', 'renk'], examples: ['Rengi değişen zırh yap'] },
    { name: 'Set Scalar Parameter Value', type: 'function', description: 'Materyaldeki bir sayı değerini (Parlaklık, Opaklık) değiştirir.', tags: ['materyal', 'parametre'], examples: ['Kalkanın parlaklığını arttır'] },
    { name: 'Set Vector Parameter Value', type: 'function', description: 'Materyaldeki bir renk değerini değiştirir.', tags: ['materyal', 'renk'], examples: ['Arabanın rengini değiştir'] },
    { name: 'Set Texture Parameter Value', type: 'function', description: 'Materyale dışarıdan resim (Texture) atar.', tags: ['materyal', 'doku'], examples: ['Profil resmini duvara yapıştır'] },
    { name: 'Get Material', type: 'function', description: 'Aktörün üzerindeki materyali alır.', tags: ['materyal', 'al'], examples: ['Hangi boya var?'] },
    { name: 'Set Material', type: 'function', description: 'Aktörün materyalini değiştirir.', tags: ['materyal', 'değiş'], examples: ['Kıyafet değiştir'] },

    // --- TIME & TIMERS (GRİ) ---
    { name: 'Get World Delta Seconds', type: 'function', description: 'Son kare (frame) ile şimdiki kare arasında geçen süreyi verir. Hız hesaplarında şarttır.', tags: ['süre', 'delta'], examples: ['Hızı sabit tut (Speed * DeltaTime)'] },
    { name: 'Set Timer by Function Name', type: 'function', description: 'Bir fonksiyonu süreyle çalıştırır.', tags: ['zaman', 'timer'], examples: ['5 saniye sonra "Patla" fonksiyonunu çağır'] },
    { name: 'Clear Timer by Handle', type: 'function', description: 'Zamanlayıcıyı iptal eder.', tags: ['iptal', 'timer'], examples: ['Bomba imha edilirse sayacı durdur'] },
    { name: 'Pause Timer by Handle', type: 'function', description: 'Sayacı dondurur.', tags: ['duraklat', 'timer'], examples: ['Oyun donunca sayacı durdur'] },
    { name: 'Unpause Timer by Handle', type: 'function', description: 'Sayacı devam ettirir.', tags: ['devam', 'timer'], examples: ['Oyun başlayınca devam et'] },
    { name: 'Is Timer Active by Handle', type: 'function', description: 'Sayaç çalışıyor mu?', tags: ['kontrol', 'timer'], examples: ['Bomba hala aktif mi?'] },
    { name: 'Get Timer Remaining Time', type: 'function', description: 'Kaç saniye kaldı?', tags: ['kalan', 'süre'], examples: ['Geri sayımı ekranda göster'] },
    { name: 'Get Timer Elapsed Time', type: 'function', description: 'Kaç saniye geçti?', tags: ['geçen', 'süre'], examples: ['Ne kadar süredir yanıyor?'] },

    // --- MATH: ROTATION & TRANSFORM (YEŞİL) ---
    { name: 'Make Rotator', type: 'math', description: 'Sayılar ile açı oluşturur (Roll, Pitch, Yaw).', tags: ['oluştur', 'açı'], examples: ['X ekseninde 90 derece dön'] },
    { name: 'Break Rotator', type: 'math', description: 'Açıyı sayılarına ayırır.', tags: ['ayır', 'açı'], examples: ['Sadece Yaw (Yön) değerini al'] },
    { name: 'Combine Rotators', type: 'math', description: 'İki açıyı toplar.', tags: ['topla', 'açı'], examples: ['Karakterin açısına silahın açısını ekle'] },
    { name: 'Delta (Rotator)', type: 'math', description: 'İki açı arasındaki farkı bulur.', tags: ['fark', 'açı'], examples: ['Hedefe ne kadar dönmeliyim?'] },
    { name: 'Invest Rotator', type: 'math', description: 'Açıyı tersine çevirir.', tags: ['ters', 'açı'], examples: ['Tam arkanı dön'] },
    { name: 'Compose Transforms', type: 'math', description: 'İki transformu birleştirir (Parent-Child ilişkisi gibi).', tags: ['birleştir', 'transform'], examples: ['Elin pozisyonuna silahı ekle'] },
    { name: 'Invert Transform', type: 'math', description: 'Transformu tersine çevirir.', tags: ['ters', 'transform'], examples: ['Globalden yerele çevir'] },
    { name: 'Make Transform', type: 'math', description: 'Konum, Dönüş ve Boyut\'tan Transform yapar.', tags: ['oluştur'], examples: ['Spawn noktası belirle'] },
    { name: 'Break Transform', type: 'math', description: 'Transformu parçalar.', tags: ['parçala'], examples: ['Sadece konumu al'] },

    // --- CHARACTER & ANIMATION (MAVİ) ---
    { name: 'Play Animation', type: 'function', description: 'Bir animasyon klibini zorla oynatır (Montage değil).', tags: ['animasyon', 'oynat'], examples: ['El sallama'] },
    { name: 'Stop Animation', type: 'function', description: 'Animasyonu durdurur.', tags: ['animasyon', 'dur'], examples: ['Donup kal'] },
    { name: 'Play Montage', type: 'function', description: 'Gelişmiş animasyon (Montage) oynatır.', tags: ['montage', 'saldırı'], examples: ['Kılıç kombosu'] },
    { name: 'Stop Montage', type: 'function', description: 'Montajı durdurur.', tags: ['montage', 'dur'], examples: ['Darbe alınca komboyu kes'] },
    { name: 'Get Mesh', type: 'function', description: 'Karakterin modeline erişir.', tags: ['mesh', 'model'], examples: ['Rengini değiştir'] },
    { name: 'Get Socket Location', type: 'function', description: 'Kemik veya soket konumunu alır.', tags: ['kemik', 'soket'], examples: ['Elinin ucunu bul'] },
    { name: 'Get Socket Rotation', type: 'function', description: 'Kemik veya soket açısını alır.', tags: ['kemik', 'açı'], examples: ['Namlunun ucunun açısı'] },
    { name: 'Is Playing Montage', type: 'function', description: 'Şu an bir montaj oynuyor mu?', tags: ['kontrol', 'anim'], examples: ['Saldırırken tekrar saldıramasın'] },
    { name: 'Set Morph Target', type: 'function', description: 'Yüz ifadesi gibi şekil anahtarlarını değiştirir.', tags: ['yüz', 'ifade'], examples: ['Gülümse (Smile=1.0)'] },

    // --- HUD & UMG EXTENDED (MAVİ) ---
    { name: 'Get Viewport Size', type: 'function', description: 'Ekranın piksel boyutunu verir (1920x1080 vb.).', tags: ['ekran', 'boyut'], examples: ['Nişangahı tam ortaya koy'] },
    { name: 'Project World Location to Widget', type: 'function', description: 'Dünyadaki bir noktanın ekrandaki (2D) yerini bulur.', tags: ['ekran', 'konum'], examples: ['Düşmanın kafasında can barı göster'] },
    { name: 'Deproject Screen to World', type: 'function', description: 'Ekrandaki bir tıklamanın dünyadaki yerini bulur.', tags: ['dünya', 'tık'], examples: ['Mouse ile yere tıkladım, orası neresi?'] },
    { name: 'Set Input Mode Game and UI', type: 'function', description: 'Hem oyun hem mouse aktif.', tags: ['input', 'hibrit'], examples: ['Harita ekranı'] },
    { name: 'Get All Widgets of Class', type: 'function', description: 'Ekrandaki tüm belirli widgetları bulur.', tags: ['bul', 'widget'], examples: ['Tüm can barlarını kapat'] },
    { name: 'Remove All Widgets', type: 'function', description: 'Ekrandaki her şeyi temizler.', tags: ['temizle', 'ui'], examples: ['Bölüm sonu'] },

    // --- UTILITIES & SYSTEM (GRİ) ---
    { name: 'Get System Time', type: 'function', description: 'Bilgisayarın saatini verir.', tags: ['saat', 'sistem'], examples: ['Gerçek saati göster'] },
    { name: 'Get Platform Name', type: 'function', description: 'Hangi cihazda çalışıyor? (Windows, Android, PS5).', tags: ['cihaz', 'platform'], examples: ['Mobildeyse grafikleri düşür'] },
    { name: 'Delay Frame', type: 'flow', description: 'Bir kare (frame) bekler.', tags: ['bekle', 'frame'], examples: ['Yükleme hatasını önlemek için bekle'] },
    { name: 'Get Frame Count', type: 'function', description: 'Kaçıncı karedeyiz?', tags: ['frame', 'sayaç'], examples: ['Performans testi'] },
    { name: 'Quit Preferred', type: 'function', description: 'Oyundan çıkmayı önerir (Mobil için).', tags: ['çıkış'], examples: ['Geri tuşuna basınca'] },
    { name: 'Get Window Mode', type: 'function', description: 'Tam ekran mı pencereli mi?', tags: ['ekran', 'mod'], examples: ['Ayarları kontrol et'] },
    { name: 'Set Window Mode', type: 'function', description: 'Ekran modunu değiştirir.', tags: ['ekran', 'ayar'], examples: ['Tam ekrana geç'] },
    { name: 'Get Game User Settings', type: 'function', description: 'Grafik ayarlarına erişir.', tags: ['ayar', 'grafik'], examples: ['Kaliteyi değiştir'] },
    { name: 'Apply Settings', type: 'function', description: 'Grafik ayarlarını kaydeder ve uygular.', tags: ['kaydet', 'ayar'], examples: ['"Uygula" butonuna basınca'] },

    // --- CONVERSION (GRİ/YEŞİL) ---
    { name: 'Byte to Int', type: 'math', description: 'Byte -> Tamsayı.', tags: ['çevir'], examples: ['Veri paketi okurken çevir'] },
    { name: 'Int to Byte', type: 'math', description: 'Tamsayı -> Byte.', tags: ['çevir'], examples: ['Veriyi sıkıştırırken (0-255)'] },
    { name: 'Int to Float', type: 'math', description: 'Tamsayı -> Ondalıklı.', tags: ['çevir'], examples: ['Mermi sayısını bara (%100) oranla'] },
    { name: 'Float to Int', type: 'math', description: 'Ondalıklı -> Tamsayı (Veri kaybı olur).', tags: ['çevir'], examples: ['Can değeri (99.5 -> 99)'] },
    { name: 'Int to String', type: 'function', description: 'Sayı -> Yazı.', tags: ['çevir'], examples: ['Skoru ekrana yaz'] },
    { name: 'String to Int', type: 'function', description: 'Yazı -> Sayı.', tags: ['çevir'], examples: ['Kullanıcının girdiği yaşı sayıya çevir'] },
    { name: 'String to Float', type: 'function', description: 'Yazı -> Ondalıklı.', tags: ['çevir'], examples: ['Ayarlar dosyasından hızı oku'] },
    { name: 'Vector to String', type: 'function', description: 'Vektör -> Yazı (Log için).', tags: ['çevir'], examples: ['Konumu print et'] },
    { name: 'Rotator to Vector', type: 'math', description: 'Açı -> Yön Vektörü (Forward Vector).', tags: ['çevir', 'yön'], examples: ['Baktığı yöne git'] },
    { name: 'Vector to Rotator', type: 'math', description: 'Yön Vektörü -> Açı.', tags: ['çevir', 'açı'], examples: ['Bu yöne bak'] },
    { name: 'Transform to String', type: 'function', description: 'Transform -> Yazı.', tags: ['çevir'], examples: ['Debug için tüm bilgiyi gör'] },
    { name: 'Bool to String', type: 'function', description: 'True/False -> "True"/"False".', tags: ['çevir'], examples: ['Durumu loga yaz'] },

    // --- ADVANCED MATH (YEŞİL) ---
    { name: 'Select Int', type: 'math', description: 'Koşula göre sayı seçer.', tags: ['seç', 'sayı'], examples: ['Hızlıysa 2, yavaşsa 1'] },
    { name: 'Select Float', type: 'math', description: 'Koşula göre ondalıklı seçer.', tags: ['seç', 'float'], examples: ['Canlıysa 1.0, ölüyse 0.0'] },
    { name: 'Select Vector', type: 'math', description: 'Koşula göre vektör seçer.', tags: ['seç', 'vektör'], examples: ['Kırmızı takımın doğuş noktası'] },
    { name: 'Select Color', type: 'math', description: 'Koşula göre renk seçer.', tags: ['seç', 'renk'], examples: ['Dostsa Yeşil, düşmansa Kırmızı'] },
    { name: 'Make Color', type: 'math', description: 'R, G, B, A değerlerinden renk yapar.', tags: ['renk', 'yap'], examples: ['Özel renk tanımla'] },
    { name: 'Break Color', type: 'math', description: 'Rengi parçalarına ayırır.', tags: ['renk', 'ayır'], examples: ['Kırmızılık oranını al'] },
    { name: 'Sign (Float)', type: 'math', description: 'Sayının işaretini verir (+1, -1, 0).', tags: ['işaret', 'yön'], examples: ['İleri mi geri mi gidiyor?'] },
    { name: 'Sign (Int)', type: 'math', description: 'Tamsayının işaretini verir.', tags: ['işaret'], examples: ['Negatif mi pozitif mi?'] },
    { name: 'Truncate', type: 'math', description: 'Virgülü atar (Yuvarlamaz).', tags: ['kes', 'tamsayı'], examples: ['4.9 -> 4'] },
    { name: 'Fraction', type: 'math', description: 'Sadece virgüllü kısmı verir.', tags: ['kesir', 'kalan'], examples: ['4.75 -> 0.75'] },
    { name: 'Snap to Grid (Float)', type: 'math', description: 'Sayıyı belirli aralıklara yuvarlar.', tags: ['grid', 'yuvarla'], examples: ['Eşyaları 10ar 10ar diz'] },
    { name: 'Hypotenuse', type: 'math', description: 'Hipotenüs hesaplar.', tags: ['üçgen', 'mesafe'], examples: ['Dik üçgenin kenarını bul'] },
    { name: 'Log', type: 'math', description: 'Logaritma.', tags: ['log', 'matematik'], examples: ['Ses desibel hesabı'] },
    { name: 'Exp', type: 'math', description: 'E üzeri x.', tags: ['matematik'], examples: ['Üstel artış hesaplama'] },
    { name: 'Degrees to Radians', type: 'math', description: 'Derece -> Radyan.', tags: ['açı', 'çevir'], examples: ['Sin/Cos hesaplaması için çevir'] },
    { name: 'Radians to Degrees', type: 'math', description: 'Radyan -> Derece.', tags: ['açı', 'çevir'], examples: ['Matematik sonucunu açıya çevir'] },
    { name: 'Is Nearly Zero', type: 'math', description: 'Sıfıra çok yakın mı?', tags: ['kontrol', 'sıfır'], examples: ['Hareket durdu mu?'] },
    { name: 'Is Power of Two', type: 'math', description: 'İkinin kuvveti mi? (2, 4, 8, 16...).', tags: ['kontrol', 'matematik'], examples: ['Doku boyutu uygun mu?'] },

    // --- FLOW CONTROL ADVANCED (GRİ) ---
    { name: 'Switch on EInputEvent', type: 'flow', description: 'Tuş olayına göre ayırır (Pressed, Released).', tags: ['tuş', 'durum'], examples: ['Tuşa basınca ateş et, bırakınca dur'] },
    { name: 'Switch on EMovementMode', type: 'flow', description: 'Hareket moduna göre ayırır (Yürüyor, Uçuyor, Yüzüyor).', tags: ['hareket', 'durum'], examples: ['Yüzüyorsa nefes harca'] },
    { name: 'Switch on EPhysBodyOp', type: 'flow', description: 'Fizik olayına göre ayırır.', tags: ['fizik', 'durum'], examples: ['Çarpışma olursa ses çal'] },
    { name: 'For Loop with Break', type: 'flow', description: 'Durdurulabilir döngü.', tags: ['döngü', 'dur'], examples: ['Aradığını bulunca döngüyü kes'] },
    { name: 'While Loop with Break', type: 'flow', description: 'Durdurulabilir sonsuz döngü.', tags: ['döngü', 'dur'], examples: ['Hedefe ulaşana kadar yürümeye devam et'] },
    { name: 'Sequence (Multi)', type: 'flow', description: 'Çoklu sıralama (Sınırsız pin eklenebilir).', tags: ['sıra'], examples: ['1. Müzik çal, 2. Efekt ver, 3. Puan ver...'] },

    // --- GAMEPLAY UTILITIES (MAVİ) ---
    { name: 'Spawn Decal at Location', type: 'function', description: 'Duvara resim/iz yapıştırır (Mermi izi).', tags: ['decal', 'iz'], examples: ['Mermi deliği'] },
    { name: 'Spawn Decal Attached', type: 'function', description: 'Hareketli objeye iz yapıştırır.', tags: ['decal', 'iz'], examples: ['Karakterin omzuna kan lekesi'] },
    { name: 'Spawn Emitter at Location', type: 'function', description: 'Parrticle efekti yaratır (Patlama).', tags: ['efekt', 'patlama'], examples: ['Bomba patlaması'] },
    { name: 'Spawn Emitter Attached', type: 'function', description: 'Yapışık efekt yaratır.', tags: ['efekt', 'yanma'], examples: ['Yanan karakter'] },
    { name: 'Get Distance To (Squared)', type: 'math', description: 'Mesafenin karesini verir (Daha performanslıdır).', tags: ['mesafe', 'hızlı'], examples: ['Çok sık mesafe ölçüyorsan bunu kullan'] },
    { name: 'Get Squared Length', type: 'math', description: 'Vektör uzunluk karesi.', tags: ['uzunluk', 'hızlı'] },
    { name: 'Draw Debug Line', type: 'function', description: 'Ekrana görünmez çizgi çizer (Test için).', tags: ['debug', 'çizgi'], examples: ['Lazerin yolunu gör'] },
    { name: 'Draw Debug Sphere', type: 'function', description: 'Test küresi çizer.', tags: ['debug', 'küre'], examples: ['Patlama alanını gör'] },
    { name: 'Draw Debug Box', type: 'function', description: 'Test kutusu çizer.', tags: ['debug', 'kutu'] },
    { name: 'Draw Debug String', type: 'function', description: '3D uzayda yazı yazar.', tags: ['debug', 'yazı'], examples: ['Karakterin tepesinde canını yaz'] },
    { name: 'Print Text', type: 'function', description: 'Ekrana Text yazar.', tags: ['log', 'yazı'] },

    // --- BATCH 2: LIGHTING, CAMERA, SPLINE ... ---
    // --- LIGHTING & RENDERING (TURUNCU) ---
    { name: 'Set Light Color', type: 'function', description: 'Işığın rengini değiştirir.', tags: ['ışık', 'renk'], examples: ['Alarm çalınca kırmızı yap'] },
    { name: 'Set Intensity', type: 'function', description: 'Işığın parlaklığını ayarlar.', tags: ['ışık', 'parlaklık'], examples: ['Elektrik gidince karart'] },
    { name: 'Set Attenuation Radius', type: 'function', description: 'Işığın etki alanını ayarlar.', tags: ['ışık', 'menzil'], examples: ['Meşalenin aydınlattığı alanı büyüt'] },
    { name: 'Set Cast Shadows', type: 'function', description: 'Gölgeyi açıp kapatır.', tags: ['gölge', 'gizle'], examples: ['Performans için gölgeleri kapat'] },
    { name: 'Set Indirect Lighting Intensity', type: 'function', description: 'Seken ışığın gücünü ayarlar.', tags: ['ışık', 'seken'] },
    { name: 'Set Use Temperature', type: 'function', description: 'Sıcaklık (Kelvin) ayarını açar.', tags: ['ışık', 'sıcaklık'] },
    { name: 'Set Temperature', type: 'function', description: 'Kelvin cinsinden renk sıcaklığı.', tags: ['ışık', 'renk'], examples: ['Gün batımı sarısı (4500K)'] },
    { name: 'Toggle Visibility', type: 'function', description: 'Görünürlüğü tersine çevirir.', tags: ['gizle', 'göster'], examples: ['Işığı aç/kapa'] },

    // --- CAMERA & CINEMATICS (MAVİ) ---
    { name: 'Set Field Of View (FOV)', type: 'function', description: 'Kamera açısını genişletir/daraltır.', tags: ['kamera', 'açı'], examples: ['Dürbünle bakınca daralt'] },
    { name: 'Client Start Camera Shake', type: 'function', description: 'Ekranı sallar (Patlama etkisi).', tags: ['kamera', 'salla'], examples: ['Bomba patlayınca'] },
    { name: 'Play World Camera Shake', type: 'function', description: 'Dünyada bir noktada sarsıntı yaratır.', tags: ['kamera', 'sarsıntı'], examples: ['Dev yürüyünce'] },
    { name: 'Set View Target with Blend', type: 'function', description: 'Kamerayı başka bir aktöre geçirir.', tags: ['kamera', 'geçiş'], examples: ['Sinematik kameraya geç'] },
    { name: 'Get Player Camera Manager', type: 'function', description: 'Kamera yöneticisine erişir.', tags: ['kamera', 'yönetici'] },
    { name: 'Set Focus Distance', type: 'function', description: 'Netlik mesafesini ayarlar (DoF).', tags: ['kamera', 'netlik'], examples: ['Arkaplanı bulanıklaştır'] },
    { name: 'Create Level Sequence Player', type: 'function', description: 'Sinematik oynatıcı yaratır.', tags: ['sinematik', 'film'], examples: ['Ara sahne başlat'] },
    { name: 'Play (Sequence)', type: 'function', description: 'Sinematiği oynatır.', tags: ['oynat', 'film'] },
    { name: 'Pause (Sequence)', type: 'function', description: 'Sinematiği dondurur.', tags: ['durdur'] },
    { name: 'Stop (Sequence)', type: 'function', description: 'Sinematiği bitirir.', tags: ['bitir'] },

    // --- SPLINE & PATHS (YEŞİL) ---
    { name: 'Add Spline Point', type: 'function', description: 'Yola yeni bir nokta ekler.', tags: ['yol', 'spline'], examples: ['Karakterin rotasını uzat'] },
    { name: 'Clear Spline Points', type: 'function', description: 'Tüm noktaları siler.', tags: ['yol', 'sil'], examples: ['Rotayı sıfırla'] },
    { name: 'Get Location at Distance Along Spline', type: 'function', description: 'Yol üzerindeki belirli bir mesafedeki konumu verir.', tags: ['yol', 'konum'], examples: ['Yolun %50sinde neresi var?'] },
    { name: 'Get Rotation at Distance Along Spline', type: 'function', description: 'Yolun eğimini verir.', tags: ['yol', 'açı'], examples: ['Tren rayına göre dön'] },
    { name: 'Get Tangent at Distance Along Spline', type: 'function', description: 'Yolun gidiş yönünü verir.', tags: ['yol', 'yön'] },
    { name: 'Get Number of Spline Points', type: 'function', description: 'Kaç nokta var?', tags: ['sayı', 'nokta'] },
    { name: 'Set Spline Point Type', type: 'function', description: 'Noktanın yumuşaklığını (Curve) ayarlar.', tags: ['yol', 'mekanik'], examples: ['Keskin dönüş yap'] },

    // --- AI BLACKBOARD ADVANCED (GRİ) ---
    { name: 'Get Blackboard Value as Bool', type: 'function', description: 'AI hafızasındaki Switch\'i okur.', tags: ['ai', 'veri'], examples: ['Düşman beni gördü mü?'] },
    { name: 'Get Blackboard Value as Int', type: 'function', description: 'AI hafızasındaki sayıyı okur.', tags: ['ai', 'veri'] },
    { name: 'Get Blackboard Value as Float', type: 'function', description: 'AI hafızasındaki ondalıklıyı okur.', tags: ['ai', 'veri'] },
    { name: 'Get Blackboard Value as Vector', type: 'function', description: 'AI hafızasındaki konumu okur.', tags: ['ai', 'veri'], examples: ['Devriye noktası neresi?'] },
    { name: 'Get Blackboard Value as String', type: 'function', description: 'AI hafızasındaki yazıyı okur.', tags: ['ai', 'veri'] },
    { name: 'Get Blackboard Value as Name', type: 'function', description: 'AI hafızasındaki ismi okur.', tags: ['ai', 'veri'] },
    { name: 'Get Blackboard Value as Object', type: 'function', description: 'AI hafızasındaki aktörü okur.', tags: ['ai', 'veri'], examples: ['Kimi takip ediyorum?'] },
    { name: 'Set Blackboard Value as Bool', type: 'function', description: 'AI hafızasına kaydeder.', tags: ['ai', 'yaz'] },
    { name: 'Set Blackboard Value as Int', type: 'function', description: 'AI hafızasına kaydeder.', tags: ['ai', 'yaz'] },
    { name: 'Set Blackboard Value as Float', type: 'function', description: 'AI hafızasına kaydeder.', tags: ['ai', 'yaz'] },
    { name: 'Set Blackboard Value as String', type: 'function', description: 'AI hafızasına kaydeder.', tags: ['ai', 'yaz'] },
    { name: 'Set Blackboard Value as Enum', type: 'function', description: 'AI hafızasına durum (Enum) kaydeder.', tags: ['ai', 'yaz'], examples: ['Durum: Saldırı'] },
    { name: 'Clear Blackboard Value', type: 'function', description: 'Hafızayı siler.', tags: ['ai', 'sil'], examples: ['Hedefi unut'] },

    // --- PHYSICS CONSTRAINTS (TURKUAZ) ---
    { name: 'Set Angular Drive Mode', type: 'function', description: 'Dönme motorunu ayarlar.', tags: ['fizik', 'motor'], examples: ['Tekerleğin dönüş gücünü ayarla'] },
    { name: 'Set Linear Drive Params', type: 'function', description: 'İtme kuvvetini ayarlar.', tags: ['fizik', 'motor'] },
    { name: 'Break Constraint', type: 'function', description: 'Bağlantıyı koparır.', tags: ['kopar', 'bağ'], examples: ['Zinciri kır'] },
    { name: 'Set Constrained Components', type: 'function', description: 'Hangi parçaların bağlanacağını seçer.', tags: ['bağla'], examples: ['Römorku arabaya bağla'] },

    // --- UTILITIES EXTENDED (GRİ) ---
    { name: 'Get Resolution Scale Information', type: 'function', description: 'Ekran çözünürlük ölçeğini alır.', tags: ['ekran', 'ayar'], examples: ['Şu anki render kalitesi kaç?'] },
    { name: 'Set Resolution Scale', type: 'function', description: 'Çözünürlük ölçeğini değiştirir (Performans için).', tags: ['ekran', 'performans'], examples: ['%50 render scale'] },
    { name: 'Get Viewport Scale', type: 'function', description: 'Arayüz ölçeğini alır.', tags: ['hud', 'boyut'], examples: ['UI ne kadar büyük görünüyor?'] },
    { name: 'Class Is Child Of', type: 'function', description: 'Bu sınıf şundan mı türedi?', tags: ['kontrol', 'miras'], examples: ['Bu bir "Silah" türü mü?'] },
    { name: 'Actor Has Component', type: 'function', description: 'Bu parçaya sahip mi?', tags: ['kontrol', 'bileşen'], examples: ['Uçma motoru var mı?'] },
    { name: 'Get Components by Tag', type: 'function', description: 'Etiketli parçaları bulur.', tags: ['bul', 'etiket'], examples: ['"Silah" etiketli tüm parçaları bul'] },
    { name: 'Format String', type: 'function', description: 'Gelişmiş yazı biçimlendirme.', tags: ['yazı', 'format'] },
    { name: 'Text to Upper', type: 'function', description: 'Text\'i büyütür.', tags: ['yazı', 'case'] },
    { name: 'Text to Lower', type: 'function', description: 'Text\'i küçültür.', tags: ['yazı', 'case'] },

    // --- TRANSFORM & VECTORS EXTRA (YEŞİL) ---
    { name: 'Get Forward Vector (Rotator)', type: 'math', description: 'Açının önünü bulur.', tags: ['yön', 'açı'] },
    { name: 'Get Right Vector (Rotator)', type: 'math', description: 'Açının sağını bulur.', tags: ['yön', 'açı'] },
    { name: 'Get Up Vector (Rotator)', type: 'math', description: 'Açının yukarısını bulur.', tags: ['yön', 'açı'] },
    { name: 'Rotate Vector Around Axis', type: 'math', description: 'Vektörü bir eksen etrafında döndürür.', tags: ['döndür', 'eksen'], examples: ['Gezegen yörüngesi'] },
    { name: 'Mirror Vector by Normal', type: 'math', description: 'Vektörü bir yüzeye göre yansıtır.', tags: ['yansıt', 'ayna'], examples: ['Işın sektirme'] },
    { name: 'Project Vector on to Plane', type: 'math', description: 'Vektörü düzleme yapıştırır (Gölge gibi).', tags: ['izdüşüm', 'düzlem'], examples: ['Nişangahı duvara yapıştır'] },
    { name: 'Random Unit Vector', type: 'math', description: 'Rastgele bir yön (uzunluğu 1 olan) verir.', tags: ['rastgele', 'yön'], examples: ['Rastgele saçılma'] },
    { name: 'Random Unit Vector in Cone', type: 'math', description: 'Koni içinde rastgele yön verir.', tags: ['rastgele', 'koni'], examples: ['Mermi saçılması (Spread)'] },

    // --- GENERAL LOGIC (BEYAZ) ---
    { name: 'Select Object', type: 'flow', description: 'Koşula göre obje seçer.', tags: ['seç', 'obje'], examples: ['Dostsa bu silahı, düşmansa şu silahı ver'] },
    { name: 'Select Class', type: 'flow', description: 'Koşula göre sınıf seçer.', tags: ['seç', 'sınıf'], examples: ['Zorbaysa Boss, kolaysa Minion doğur'] },
    { name: 'Switch on Name', type: 'flow', description: 'İsme göre ayırır.', tags: ['seç', 'isim'], examples: ['Bone ismine göre efekt ver'] },
    { name: 'Switch on String (Case Sensitive)', type: 'flow', description: 'Büyük/Küçük harfe duyarlı ayrım.', tags: ['seç', 'hassas'], examples: ['Şifre kontrolü ("Admin" != "admin")'] },

    // --- COLLISION EXTRA (MAVİ) ---
    { name: 'Ignore Actor when Moving', type: 'function', description: 'Hareket ederken bu aktöre çarpma.', tags: ['çarpma', 'yoksay'], examples: ['Takım arkadaşının içinden geç'] },
    { name: 'Ignore Component when Moving', type: 'function', description: 'Bu parçaya çarpma.', tags: ['çarpma', 'yoksay'] },
    { name: 'Set Collision Response to Channel', type: 'function', description: 'Belirli bir kanala (Pawn, Wall) tepkiyi değiştirir.', tags: ['kollizyon', 'kanal'], examples: ['Duvarlardan geç'] },
    { name: 'Set Collision Response to All Channels', type: 'function', description: 'Toplu ayar yapar.', tags: ['kollizyon', 'toplu'] },
    { name: 'Set Collision Object Type', type: 'function', description: 'Objenin türünü (Pawn, Vehicle) değiştirir.', tags: ['tür', 'fizik'] },

    // --- LIST & ARRAY EXTRA (YEŞİL) ---
    { name: 'Reverse', type: 'function', description: 'Listeyi ters çevirir.', tags: ['ters', 'liste'], examples: ['Sondan başa git'] },
    { name: 'Set Array Elem', type: 'function', description: 'Elemanı değiştirir.', tags: ['değiştir'], examples: ['Güncelle'] },
    { name: 'Swap Array Elements', type: 'function', description: 'İki elemanın yerini değiştirir.', tags: ['takas'], examples: ['Envanterde yer değiş'] },
    { name: 'Append Array', type: 'function', description: 'Listeleri birleştirir.', tags: ['birleştir'], examples: ['Düşman listesine yenileri ekle'] },

    // --- PAPER 2D (MOR) ---
    { name: 'Get Sprite', type: 'function', description: '2D resmini alır.', tags: ['2d', 'sprite'], examples: ['Hangi resim görünüyor?'] },
    { name: 'Set Sprite', type: 'function', description: '2D resmini değiştirir.', tags: ['2d', 'değiş'], examples: ['Yürüyüş animasyonunu koy'] },
    { name: 'Set Flipbook', type: 'function', description: '2D animasyonunu değiştirir.', tags: ['2d', 'anim'], examples: ['Saldırı animasyonu'] },
    { name: 'Get Flipbook', type: 'function', description: 'Hangi animasyon oynuyor?', tags: ['2d', 'kontrol'], examples: ['Şu an zıplıyor mu?'] },
    { name: 'Set Sprite Color', type: 'function', description: 'Sprite rengini boyar.', tags: ['2d', 'renk'], examples: ['Hasar alınca kızar'] },

    // --- FINAL BATCH: MATH & UTILS ---
    { name: 'Ceil to Int', type: 'math', description: 'Yukarı yuvarla (Tamsayıya).', tags: ['yuvarla', 'int'], examples: ['4.1 -> 5', 'Puanı yukarı tamamla'] },
    { name: 'Floor to Int', type: 'math', description: 'Aşağı yuvarla (Tamsayıya).', tags: ['yuvarla', 'int'], examples: ['4.9 -> 4', 'Küsüratı at'] },
    { name: 'Round to Int', type: 'math', description: 'En yakına yuvarla (Tamsayıya).', tags: ['yuvarla', 'int'], examples: ['4.4 -> 4', '4.6 -> 5'] },
    { name: 'FMin', type: 'math', description: 'İki ondalıklıdan küçüğünü al.', tags: ['min', 'float'], examples: ['Can değeri 100\'ü geçmesin (Min(Can, 100))'] },
    { name: 'FMax', type: 'math', description: 'İki ondalıklıdan büyüğünü al.', tags: ['max', 'float'], examples: ['Can değeri 0\'ın altına düşmesin (Max(Can, 0))'] },
    { name: 'FClamp', type: 'math', description: 'Ondalıklıyı sınırla.', tags: ['sınır', 'float'], examples: ['Hızı 0 ile 600 arasında tut'] },
    { name: 'VSize', type: 'math', description: 'Vektör boyunu ölç.', tags: ['boy', 'vektör'], examples: ['Hızım kaç? (Velocity -> VSize)'] },
    { name: 'VSizeSq', type: 'math', description: 'Vektör boyunun karesini ölç.', tags: ['boy', 'vektör'], examples: ['Uzaklık kıyaslaması yap (Daha hızlıdır)'] },
    { name: 'Make Vector 2D', type: 'math', description: 'X, Y yapar (2 Boyutlu).', tags: ['vektör', '2d'], examples: ['UI konumu için'] },
    { name: 'Break Vector 2D', type: 'math', description: 'X, Y ayırır (2 Boyutlu).', tags: ['vektör', '2d'], examples: ['Ekran koordinatlarını oku'] },

    // --- GEOMETRY OVERLAPS (MAVİ) ---
    { name: 'Sphere Overlap Actors', type: 'function', description: 'Küre içindeki aktörleri bulur.', tags: ['bul', 'alan'], examples: ['Patlama alanındakileri bul'] },
    { name: 'Sphere Overlap Components', type: 'function', description: 'Küre içindeki parçaları bulur.', tags: ['bul', 'alan'] },
    { name: 'Box Overlap Actors', type: 'function', description: 'Kutu içindeki aktörleri bulur.', tags: ['bul', 'alan'] },
    { name: 'Box Overlap Components', type: 'function', description: 'Kutu içindeki parçaları bulur.', tags: ['bul', 'alan'] },
    { name: 'Capsule Overlap Actors', type: 'function', description: 'Kapsül içindeki aktörleri bulur.', tags: ['bul', 'alan'] },
    { name: 'Capsule Overlap Components', type: 'function', description: 'Kapsül içindeki parçaları bulur.', tags: ['bul', 'alan'] },

    // --- MOVEMENT EXTRA (YEŞİL) ---
    { name: 'Set Max Walk Speed', type: 'function', description: 'Yürüme hızını değiştirir.', tags: ['hız', 'yürü'], examples: ['Koşma hızı yap'] },
    { name: 'Set Jump Z Velocity', type: 'function', description: 'Zıplama gücünü değiştirir.', tags: ['zıpla', 'güç'], examples: ['Yükseğe zıpla'] },
    { name: 'Add Movement Input (Scale)', type: 'function', description: 'Yürüme komutu verir.', tags: ['yürü', 'input'], examples: ['W tuşu ile ileri git', 'Gamepad kolu ile yürü'] },
    { name: 'Get Gravity Z', type: 'function', description: 'Yerçekimi gücünü alır.', tags: ['yerçekimi'], examples: ['Düşüş hızını hesapla'] },

    // --- STRUCT BREAKING (LACİVERT) ---
    { name: 'Break Hit Result', type: 'function', description: 'Çarpışma detaylarını ayırır (Konum, İsim, Mesafe...).', tags: ['çarpma', 'ayır'], examples: ['Neresinden vurdum?'] },
    { name: 'Make Hit Result', type: 'function', description: 'Sanal çarpışma yaratır.', tags: ['çarpma', 'yap'], examples: ['Sahte mermi izi oluştur'] },
    { name: 'Break Key Event', type: 'function', description: 'Tuş olayını ayırır (Hangi tuş?).', tags: ['tuş', 'ayır'], examples: ['Basılan tuş "Enter" mı?'] },

    // --- UTILITIES (GRİ) ---
    { name: 'Get Object Name', type: 'function', description: 'Objenin sistem ismini verir.', tags: ['isim', 'id'] },
    { name: 'Get Display Name', type: 'function', description: 'Objenin görünen ismini verir.', tags: ['isim', 'görünen'], examples: ['Eşyanın adını ekranda göster'] },
    { name: 'Print Warning', type: 'function', description: 'Sarı renkli uyarı logu yazar.', tags: ['log', 'uyarı'], examples: ['"Mermi azaldı!" uyarısı', 'Eksik component uyarısı'] },
    { name: 'Print Error', type: 'function', description: 'Kırmızı renkli hata logu yazar.', tags: ['log', 'hata'], examples: ['"Dosya bulunamadı!" hatası', 'Kritik sistem hatası'] },
    { name: 'Get Game Instance', type: 'function', description: 'Oyun yöneticisine erişir.', tags: ['yönetici', 'instance'], examples: ['Global değişkenlere ulaş'] },

    // --- FINAL 30 NODES: POLISH ---
    { name: 'Bitwise AND', type: 'math', description: 'Bit düzeyinde VE işlemi.', tags: ['bit', 've'], examples: ['Maskeleme işlemi yap (Flags)'] },
    { name: 'Bitwise OR', type: 'math', description: 'Bit düzeyinde VEYA işlemi.', tags: ['bit', 'veya'], examples: ['Yeni bir bayrak (Flag) ekle'] },
    { name: 'Bitwise XOR', type: 'math', description: 'Bit düzeyinde XOR işlemi.', tags: ['bit', 'xor'], examples: ['Değeri tersine çevir (Toggle)'] },
    { name: 'Bitwise NOT', type: 'math', description: 'Bit düzeyinde tersleme.', tags: ['bit', 'not'], examples: ['Tüm bitleri ters çevir'] },
    { name: 'String to Vector', type: 'function', description: 'Yazı -> Vektör dönüştür.', tags: ['çevir', 'vektör'], examples: ['"10,20,30" -> Vector(10,20,30)'] },
    { name: 'String to Rotator', type: 'function', description: 'Yazı -> Rotator dönüştür.', tags: ['çevir', 'açı'], examples: ['"90,0,0" -> Rotator(90,0,0)'] },
    { name: 'Draw Debug Box (Solid)', type: 'function', description: 'İçi dolu test kutusu çizer.', tags: ['debug', 'kutu'], examples: ['Vurulabilir alanı (Hitbox) göster'] },
    { name: 'Draw Debug Sphere (Solid)', type: 'function', description: 'İçi dolu test küresi çizer.', tags: ['debug', 'küre'], examples: ['Patlama yarıçapını göster'] },
    { name: 'Get Platform User Name', type: 'function', description: 'Bilgisayar kullanıcısının adını alır.', tags: ['sistem', 'kimlik'], examples: ['"Hoşgeldin [KullanıcıAdı]" de'] },
    { name: 'Is Mobile Platform', type: 'function', description: 'Telefonda mı çalışıyor?', tags: ['mobil', 'platform'], examples: ['Dokunmatik kontrolleri aç'] },
    { name: 'Is Head Mounted Display Enabled', type: 'function', description: 'VR gözlüğü takılı mı?', tags: ['vr', 'kontrol'], examples: ['VR modunu başlat'] },
    { name: 'Get World Origin Location', type: 'function', description: 'Dünyanın 0 noktasını alır.', tags: ['dünya', 'merkez'], examples: ['Merkeze olan uzaklığı bul'] },
    { name: 'Set World Origin Location', type: 'function', description: 'Dünyanın merkezini kaydırır (Büyük haritalar için).', tags: ['dünya', 'merkez'], examples: ['Harita sınırına gelince merkezi taşı'] },
    { name: 'Get Physics Time Scaling', type: 'function', description: 'Fizik hızı çarpanını alır.', tags: ['fizik', 'zaman'], examples: ['Zaman ne kadar yavaş?'] },
    { name: 'Set Physics Time Scaling', type: 'function', description: 'Fizik zamanını yavaşlatır/hızlandırır.', tags: ['fizik', 'zaman'], examples: ['Matrix efekti'] },
    { name: 'Get Max Jump Height', type: 'function', description: 'Ne kadar yükseğe zıplayabilirim?', tags: ['zıpla', 'hesap'], examples: ['Duvarın boyunu zıplama gücüyle kıyasla'] },
    { name: 'Launch Character (Z Only)', type: 'function', description: 'Sadece yukarı fırlatır.', tags: ['zıpla', 'fırlat'], examples: ['Zıplama rampası'] },
    { name: 'Can Jump', type: 'function', description: 'Zıplayabilir miyim? (Havada mıyım?)', tags: ['zıpla', 'kontrol'], examples: ['Zıplama tuşuna basınca kontrol et'] },
    { name: 'Is Crouch', type: 'function', description: 'Eğiliyor muyum?', tags: ['eğil', 'kontrol'], examples: ['Havalandırma boşluğuna girerken bak'] },
    { name: 'Get Character Owner', type: 'function', description: 'Karakterin sahibini bulur.', tags: ['sahip'], examples: ['Multiplayer\'da kimin karakteri?'] },
    { name: 'Get Player Pawn', type: 'function', description: 'Oyuncunun karakterini bulur (Index ile).', tags: ['bul', 'karakter'], examples: ['Index 0 benim karakterim'] },
    { name: 'Get Player Controller', type: 'function', description: 'Oyuncunun beyin kontrolcüsünü bulur.', tags: ['bul', 'controller'], examples: ['Mouse imlecini açmak için eriş'] },
    { name: 'Get HUD', type: 'function', description: 'HUD sınıfına erişir.', tags: ['hud', 'arayüz'], examples: ['Ekrana crosshair çizmek için'] },
    { name: 'Get Player Camera Manager', type: 'function', description: 'Kamera yöneticisi.', tags: ['kamera'], examples: ['FOV değiştirmek için'] },
    { name: 'Restart Level', type: 'function', description: 'Bölümü baştan başlatır.', tags: ['reset', 'level'], examples: ['Ölünce bölümü yeniden başlat'] },
    { name: 'Exit Game', type: 'function', description: 'Oyunu kapatır.', tags: ['çıkış'], examples: ['"Oyundan Çık" butonuna basınca'] },
    { name: 'Get Current FPS', type: 'function', description: 'FPS değerini alır.', tags: ['fps', 'performans'], examples: ['Ayarlar menüsünde FPS göster'] },
    { name: 'Set Target FPS', type: 'function', description: 'FPS limitini ayarlar.', tags: ['fps', 'limit'], examples: ['60 FPS\'e sabitle'] },

    // --- END OF MASSIVE EXPANSION ---
];
