// Hero Slider Functionality
class HeroSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.slider-dot');
        this.autoSlideInterval = null;
        this.slideInterval = 4000; // 4 saniye

        this.init();
    }

    init() {
        // Slider varsa başlat
        if (this.slides.length > 0) {
            this.setupEventListeners();
            this.startAutoSlide();
        }
    }

    setupEventListeners() {
        // Dot'lara tıklama eventi
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        // Mouse hover durumunda otomatik geçişi durdur
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                this.stopAutoSlide();
            });

            heroSection.addEventListener('mouseleave', () => {
                this.startAutoSlide();
            });
        }

        // Touch events for mobile
        let startX = null;
        let startY = null;

        heroSection.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        heroSection.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;

            const diffX = startX - endX;
            const diffY = startY - endY;

            // Horizontal swipe detected
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next slide
                    this.nextSlide();
                } else {
                    // Swipe right - previous slide
                    this.prevSlide();
                }
            }

            startX = null;
            startY = null;
        });
    }

    goToSlide(slideIndex) {
        // Aktif slide'ı kaldır
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');

        // Yeni slide'ı aktif yap
        this.currentSlide = slideIndex;
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');

        // Auto slide'ı yeniden başlat
        this.restartAutoSlide();
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideInterval);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    restartAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}

// Sayfa yüklendiğinde slider'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});

// Sayfa görünürlük değiştiğinde (tab değiştirme) slider'ı kontrol et
document.addEventListener('visibilitychange', () => {
    const slider = window.heroSlider;
    if (slider) {
        if (document.hidden) {
            slider.stopAutoSlide();
        } else {
            slider.startAutoSlide();
        }
    }
});