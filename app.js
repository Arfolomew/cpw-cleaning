/* ============================================
   Clear Point Window Cleaning — app.js
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ==========================================
  // 1. Sticky Nav — add shadow on scroll
  // ==========================================
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ==========================================
  // 2. Mobile Menu — hamburger toggle
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('menu-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMobileMenu);
  }

  // Close on nav link click
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // ==========================================
  // 3. Smooth Scroll — for anchor nav links
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // 4. Stats Counter — Intersection Observer
  // ==========================================
  const counters = document.querySelectorAll('.stats-counter');

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const duration = 1200;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(function () {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = Math.floor(current);
          }, stepTime);

          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  // ==========================================
  // 5. Service Area Accordions
  // ==========================================
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const chevron = this.querySelector('.accordion-chevron');
      const isOpen = content.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-content').forEach(function (c) {
        c.classList.remove('open');
      });
      document.querySelectorAll('.accordion-chevron').forEach(function (ch) {
        ch.classList.remove('rotated');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        content.classList.add('open');
        if (chevron) chevron.classList.add('rotated');
      }
    });
  });

  // ==========================================
  // 6. Gallery Lightbox
  // ==========================================
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  let galleryImages = [];
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  }

  if (lightbox) {
    // Build gallery array from all .lightbox-trigger images
    document.querySelectorAll('.lightbox-trigger').forEach(function (item, i) {
      const src = item.getAttribute('data-src') || item.querySelector('img').src;
      galleryImages.push(src);
      item.addEventListener('click', function () {
        openLightbox(i);
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
    if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

    // Close on overlay click (not image click)
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });
  }

  // ==========================================
  // 7. Video Hover Play
  // ==========================================
  document.querySelectorAll('.video-card').forEach(function (card) {
    const video = card.querySelector('video');
    if (!video) return;

    card.addEventListener('mouseenter', function () {
      video.play().catch(function () {});
    });

    card.addEventListener('mouseleave', function () {
      video.pause();
      video.currentTime = 0;
    });
  });

  // ==========================================
  // 8. Contact Form — Formspree fetch submit
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const successMsg = document.getElementById('form-success');
      const errorMsg = document.getElementById('form-error');

      if (btn) {
        btn.textContent = 'Sending…';
        btn.disabled = true;
      }

      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            contactForm.reset();
            if (successMsg) {
              successMsg.classList.remove('hidden');
              successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            if (errorMsg) errorMsg.classList.add('hidden');
            if (btn) {
              btn.textContent = 'Sent!';
              btn.style.background = '#1FC6C7';
            }
          } else {
            throw new Error('Server error');
          }
        })
        .catch(function () {
          if (errorMsg) errorMsg.classList.remove('hidden');
          if (successMsg) successMsg.classList.add('hidden');
          if (btn) {
            btn.textContent = 'Send My Request';
            btn.disabled = false;
          }
        });
    });
  }

  // ==========================================
  // 9. Scroll fade-up (optional enhancement)
  // ==========================================
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length > 0) {
    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

});
