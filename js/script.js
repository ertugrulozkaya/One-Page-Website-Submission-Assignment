// Galeri resimleri için dizi
const galleryImages = [
    {
        src: 'img/image1.jpg',
        alt: 'Nature',
        caption: 'Beautiful nature landscape'
    },
    {
        src: 'img/image2.jpg',
        alt: 'Architecture',
        caption: 'Modern architecture building'
    },
    {
        src: 'img/image3.jpg',
        alt: 'Technology',
        caption: 'Technology and innovation'
    },
    {
        src: 'img/image4.jpg',
        alt: 'Food',
        caption: 'Delicious food photography'
    },
    {
        src: 'img/image5.jpg',
        alt: 'Travel',
        caption: 'Exploring beautiful destinations'
    },
    {
        src: 'img/image6.jpg',
        alt: 'People',
        caption: 'People in their environment'
    }
];

// Geçerli görüntülenen resim indeksi
let currentImageIndex = 0;

// Lightbox açma fonksiyonu
function openLightbox(index) {
    // Resmin indeksini ayarla
    currentImageIndex = index;
    
    // Lightbox'ı görünür yap
    document.getElementById('lightbox').style.display = 'block';
    
    // Resmi güncelle
    updateLightboxImage();
}

// Lightbox kapatma fonksiyonu
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Resmi değiştirme fonksiyonu (ileri-geri)
function changeImage(direction) {
    // Yeni indeksi hesapla (döngüsel olarak)
    currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
    
    // Resmi güncelle
    updateLightboxImage();
}

// Lightbox içindeki resmi güncelleme
function updateLightboxImage() {
    const image = galleryImages[currentImageIndex];
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Resim ve yazıyı ayarla
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    lightboxCaption.textContent = image.caption;
}

// Klavye olaylarını dinle
document.addEventListener('keydown', function(event) {
    if (document.getElementById('lightbox').style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'Escape') {
            closeLightbox();
        }
    }
});

// Lightbox dışına tıklanınca kapatma
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

// İletişim formu gönderildiğinde
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form gönderildi! Bu bir demo olduğu için gerçekten gönderilmedi.');
    this.reset();
});

// Navigasyon bağlantıları için yumuşak kaydırma
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 