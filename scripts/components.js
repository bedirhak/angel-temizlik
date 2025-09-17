// Angel Temizlik - Header ve Footer Component Script
// Bu script tüm sayfalara eklenecek ve otomatik olarak header/footer ekleyecek

document.addEventListener('DOMContentLoaded', function () {
    createHeader();
    createFooter();
    addBodyPadding();

    // Window resize'da padding'i yeniden hesapla
    window.addEventListener('resize', addBodyPadding);
});

function createHeader() {
    const header = document.createElement('header');
    header.className = 'angel-header';
    header.innerHTML = `
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="top-bar-container">
                <div class="top-bar-contact">
                    <div class="top-contact-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:+905394873558">0539 487 35 58</a>
                    </div>
                    <div class="top-contact-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:+902323713113">0232 371 31 13</a>
                    </div>
                    <div class="top-contact-item">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:info@angeltemizlik.com">info@angeltemizlik.com</a>
                    </div>
                </div>
                
                <div class="top-bar-social">
                    <a href="https://facebook.com/angeltemizlik" target="_blank" class="social-link">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/angeltemizlik" target="_blank" class="social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/905394873558" target="_blank" class="social-link">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://linkedin.com/company/angeltemizlik" target="_blank" class="social-link">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Main Header -->
        <div class="main-header">
            <div class="header-container">
                <div class="logo-section">
                    <div class="logo">
                        <img src="assets/images/logoMavi.png" alt="Angel Temizlik" class="logo-image">
                        
                    </div>
                </div>
                
                <nav class="main-navigation">
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
                        <li><a href="ev-temizligi.html" class="nav-link">Ev Temizliği</a></li>
                        <li><a href="ofis-temizligi.html" class="nav-link">Ofis Temizliği</a></li>
                        <li><a href="hali-yikama.html" class="nav-link">Halı Yıkama</a></li>
                        <li class="dropdown">
                            <a href="#" class="nav-link dropdown-toggle">
                                Hizmetlerimiz <i class="fas fa-chevron-down"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="insaat-sonrasi-temizlik.html" class="dropdown-link">İnşaat Sonrası Temizlik</a></li>
                                <li><a href="fabrika-temizligi.html" class="dropdown-link">Fabrika Temizliği</a></li>
                                <li><a href="magaza-temizligi.html" class="dropdown-link">Mağaza Temizliği</a></li>
                                <li><a href="otel-temizligi.html" class="dropdown-link">Otel Temizliği</a></li>
                                <li><a href="yangin-sonrasi-temizlik.html" class="dropdown-link">Yangın Sonrası Temizlik</a></li>
                            </ul>
                        </li>
                        <li><a href="iletisim.html" class="nav-link">İletişim</a></li>
                    </ul>
                    
                    <div class="contact-info">
            
                        <a href="tel:+905394873558" class="cta-button">Hemen Ara</a>
                    </div>
                    
                    <div class="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </div>
    `;

    // Header'ı body'nin en başına ekle
    document.body.insertBefore(header, document.body.firstChild);

    // Mobile menu toggle functionality
    const mobileToggle = header.querySelector('.mobile-menu-toggle');
    const navMenu = header.querySelector('.nav-menu');

    mobileToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Dropdown menu functionality
    const dropdownToggle = header.querySelector('.dropdown-toggle');
    const dropdown = header.querySelector('.dropdown');

    // Dropdown toggle on click
    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Dropdown hover for desktop
    dropdown.addEventListener('mouseenter', function () {
        if (window.innerWidth > 768) {
            dropdown.classList.add('active');
        }
    });

    dropdown.addEventListener('mouseleave', function () {
        if (window.innerWidth > 768) {
            dropdown.classList.remove('active');
        }
    });

    // Aktif sayfa linkini vurgula
    highlightActiveLink();
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'angel-footer';
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <!-- Şirket Bilgileri -->
                <div class="footer-section company-info">
                    <div class="footer-logo">
                        <img src="assets/images/logoMavi.png" alt="Angel Temizlik" class="footer-logo-image">
                    </div>
                    <p class="company-description">
                        İzmir'in en güvenilir temizlik hizmeti. İzmir'in tüm ilçelerinde ev, ofis ve halı temizliğinde 
                        profesyonel çözümler sunuyoruz.
                    </p>
                    <div class="social-links">
                        <a href="https://facebook.com/angeltemizlik" target="_blank" class="social-link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com/angeltemizlik" target="_blank" class="social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/905394873558" target="_blank" class="social-link">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Hizmet Verdiğimiz İlçeler -->
                <div class="footer-section districts-info">
                    <h4>İzmir'de Hizmet Verdiğimiz İlçeler</h4>
                    <div class="districts-grid">
                        <div class="district-column">
                            <span>Konak</span>
                            <span>Karşıyaka</span>
                            <span>Bornova</span>
                            <span>Bayraklı</span>
                            <span>Buca</span>
                            <span>Çiğli</span>
                            <span>Gaziemir</span>
                            <span>Balçova</span>
                        </div>
                        <div class="district-column">
                            <span>Narlıdere</span>
                            <span>Güzelbahçe</span>
                            <span>Foça</span>
                            <span>Menemen</span>
                            <span>Aliağa</span>
                            <span>Bergama</span>
                            <span>Tire</span>
                            <span>Ödemiş</span>
                        </div>
                        <div class="district-column">
                            <span>Torbalı</span>
                            <span>Selçuk</span>
                            <span>Menderes</span>
                            <span>Urla</span>
                            <span>Çeşme</span>
                            <span>Seferihisar</span>
                            <span>Karaburun</span>
                            <span>+ Diğer İlçeler</span>
                        </div>
                    </div>
                </div>
                
                <!-- İletişim Bilgileri -->
                <div class="footer-section contact-info">
                    <h4>İletişim Bilgileri</h4>
                    <div class="contact-list">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <a href="tel:+905394873558">0539 487 35 58</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <a href="tel:+902323713113">0232 371 31 13</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:info@angeltemizlik.com">info@angeltemizlik.com</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>İzmir, Türkiye</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p>&copy; 2025 Angel Temizlik. Tüm hakları saklıdır.</p>
                    <div class="footer-bottom-links">
                        <a href="#" class="footer-link">Sakarya Digital Tarafından Hazırlanmıştır.</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Footer'ı body'nin en sonuna ekle
    document.body.appendChild(footer);
}

function addBodyPadding() {
    // Header ve footer yüksekliği için body'ye padding ekle
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        document.body.style.paddingTop = '70px'; // Mobile header yüksekliği
    } else {
        // Top bar (44px) + Main header (90px) = 134px
        document.body.style.paddingTop = '134px'; // Desktop header yüksekliği
    }

    document.body.style.paddingBottom = '0'; // Footer fixed değil
}

function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Scroll efekti için header'a class ekle
window.addEventListener('scroll', function () {
    const header = document.querySelector('.angel-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scroll Function - Anchor linkler için
document.addEventListener('DOMContentLoaded', function () {
    // Tüm anchor linkleri seç
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Header yüksekliğini hesaba kat
                const headerHeight = document.querySelector('.angel-header').offsetHeight;
                const offsetTop = targetElement.offsetTop - headerHeight - 20; // 20px extra padding

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});