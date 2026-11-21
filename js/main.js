/**
 * IEEE Student Branch – Sri Sairam College of Engineering, Bengaluru
 * Flagship Executive Portal Interactivity & Motion Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initMobileNav();
  initHeroParallaxAndImageFallback();
  initAnimatedCounters();
  initSpotlightCarousel();
  initChaptersShowcase();
  initChapterModal();
  initActivitiesTabsAndModal();
  initScrollRevealAnimations();
  initBackToTopButton();
  initQuickInquiryForm();
});

/* ============================================================
   1. SCROLL PROGRESS INDICATOR
   ============================================================ */
function initScrollProgressBar() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/* ============================================================
   2. MOBILE NAVIGATION
   ============================================================ */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navBar = document.querySelector('.primary-nav-bar');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const expanded = navMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', expanded);
    });
  }

  // Sticky nav shadow
  if (navBar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    }, { passive: true });
  }
}

/* ============================================================
   3. HERO PARALLAX & REAL CAMPUS IMAGE FALLBACK
   ============================================================ */
function initHeroParallaxAndImageFallback() {
  const heroLayer = document.getElementById('hero-bg-layer');
  if (!heroLayer) return;

  const primaryUrl = 'https://assets.collegedunia.com/public/reviewPhotos/553450/15120_SAIRAM_NEW.jpg';
  const fallbackUrl = 'https://imgs.search.brave.com/Vc_BfO8l-SDkAGI0ttvC8MXYdkxjoHMlT5f41Eg1ozU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY29sbGVnZWR1/bmlhLmNvbS9wdWJs/aWMvcmV2aWV3UGhv/dG9zLzU1MzQ1MC8x/NTEyMF9TQUlSQU1f/TkVXLmpwZw';

  // Test primary image; fallback if fails
  const imgTester = new Image();
  imgTester.onerror = () => {
    heroLayer.style.backgroundImage = `linear-gradient(105deg, rgba(0, 22, 48, 0.88) 0%, rgba(0, 48, 96, 0.72) 55%, rgba(0, 29, 61, 0.42) 100%), url('${fallbackUrl}')`;
  };
  imgTester.src = primaryUrl;

  // Gentle Parallax on Desktop
  if (window.matchMedia('(min-width: 860px) and (prefers-reduced-motion: no-preference)').matches) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < 650) {
        heroLayer.style.transform = `translateY(${scrollY * 0.18}px)`;
      }
    }, { passive: true });
  }
}

/* ============================================================
   4. ANIMATED COUNT-UP METRICS RIBBON
   ============================================================ */
function initAnimatedCounters() {
  const ribbon = document.getElementById('metrics-ribbon');
  if (!ribbon) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        const counters = ribbon.querySelectorAll('.counter-number');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 1600; // ms
          const startVal = target > 1000 ? target - 50 : 0;
          const startTime = performance.now();

          function updateCounter(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startVal + (target - startVal) * easeOut);
            counter.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(ribbon);
}

/* ============================================================
   5. INTERACTIVE CHAPTER SHOWCASE CAROUSEL (SPOTLIGHT)
   ============================================================ */
function initSpotlightCarousel() {
  const container = document.getElementById('spotlight-slides-container');
  const dotsContainer = document.getElementById('carousel-dots-row');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');

  if (!container || !window.IEEE_DATA || !window.IEEE_DATA.FEATURED_SPOTLIGHTS) return;

  const spotlights = window.IEEE_DATA.FEATURED_SPOTLIGHTS;
  let currentIndex = 0;
  let autoTimer = null;

  // Render Slides
  container.innerHTML = '';
  dotsContainer.innerHTML = '';

  spotlights.forEach((item, idx) => {
    const slide = document.createElement('div');
    slide.className = `spotlight-slide ${idx === 0 ? 'active' : ''}`;
    slide.setAttribute('data-index', idx);
    slide.innerHTML = `
      <div class="spotlight-slide-content">
        <div style="flex-shrink: 0; background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 4px; padding: 6px 12px; height: 64px; display: flex; align-items: center; justify-content: center;">
          <img src="assets/logos/${item.code}.png" 
               alt="${item.name} Official Logo" 
               style="max-height: 52px; max-width: 140px; width: auto; height: auto; object-fit: contain;">
        </div>
        <div class="spotlight-info">
          <h3>
            <span>${item.name}</span>
            <span class="slide-code-badge">${item.code} • ${item.sbcCode}</span>
          </h3>
          <div class="slide-tagline">${item.tagline}</div>
          <p class="slide-highlight">${item.highlight}</p>
        </div>
        <div>
          <button type="button" class="btn-hero-primary spotlight-modal-btn" data-code="${item.code}" style="padding: 10px 20px; font-size: 13px; white-space: nowrap;">
            Chapter Scope →
          </button>
        </div>
      </div>
    `;
    container.appendChild(slide);

    // Render Dot
    const dot = document.createElement('button');
    dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => {
      goToSlide(idx);
      resetAutoTimer();
    });
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    const slides = container.querySelectorAll('.spotlight-slide');
    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    currentIndex = (index + spotlights.length) % spotlights.length;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoTimer();
    });
  }

  function startAutoTimer() {
    autoTimer = setInterval(nextSlide, 5000);
  }

  function resetAutoTimer() {
    clearInterval(autoTimer);
    startAutoTimer();
  }

  // Pause on hover
  const carouselWrap = document.querySelector('.spotlight-carousel-wrap');
  if (carouselWrap) {
    carouselWrap.addEventListener('mouseenter', () => clearInterval(autoTimer));
    carouselWrap.addEventListener('mouseleave', () => startAutoTimer());
  }

  startAutoTimer();

  // Attach modal handlers for spotlight buttons
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.spotlight-modal-btn');
    if (!btn) return;
    const code = btn.getAttribute('data-code');
    const targetChapter = window.IEEE_DATA.CHAPTERS.find(c => c.ieeeCode === code) || 
      (code === 'WIE' ? {
        name: window.IEEE_DATA.WIE_GROUP.name,
        ieeeCode: 'WIE',
        sbcCode: window.IEEE_DATA.WIE_GROUP.sbaCode,
        category: 'Affinity Group',
        domain: 'Women in STEM, Leadership, Mentoring & Diversity Outreach',
        description: window.IEEE_DATA.WIE_GROUP.description
      } : null);

    if (targetChapter) {
      openChapterModal(targetChapter);
    }
  });
}

/* ============================================================
   6. CHAPTERS SHOWCASE (3-COLUMN RESPONSIVE GRID)
   ============================================================ */
function initChaptersShowcase() {
  const grid = document.getElementById('chapters-showcase-grid');
  if (!grid || !window.IEEE_DATA) return;

  const { CHAPTERS } = window.IEEE_DATA;

  function renderCards(items) {
    grid.innerHTML = '';
    if (items.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: #64748B; background: #fff; border: 1px dashed #CBD5E1; border-radius: 6px;">No matching IEEE society or council found. Try another search term.</div>';
      return;
    }

    items.forEach((item, index) => {
      const isCouncil = (item.category === 'Technical Council');
      const card = document.createElement('div');
      card.className = `society-sairam-card sairam-scroll-reveal ${isCouncil ? 'council' : ''}`;
      card.style.transitionDelay = `${(index % 4) * 80}ms`;
      card.setAttribute('data-code', item.ieeeCode);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View details for ${item.name}`);
      
      card.innerHTML = `
        <div class="society-logo-box">
          <img src="assets/logos/${item.ieeeCode}.png" 
               alt="${item.name} Official Logo" 
               class="society-card-logo" 
               loading="lazy">
        </div>
        <div class="society-card-info">
          <div class="society-card-name">${item.name}</div>
          <div class="society-card-badges">
            <span class="society-badge-ieee">${item.ieeeCode}</span>
            <span class="society-badge-sbc">${item.sbcCode}</span>
          </div>
          <div class="society-card-action">
            <span class="btn-society-view">Explore Chapter Scope →</span>
          </div>
        </div>
      `;
      
      card.addEventListener('click', () => {
        openChapterModal(item);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openChapterModal(item);
        }
      });
      
      grid.appendChild(card);
    });

    triggerRevealForCards();
  }

  renderCards(CHAPTERS);

  // Filter Buttons
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const searchInput = document.getElementById('chapter-search-input');

  function applyFilters() {
    const activeBtn = document.querySelector('.filter-tab-btn.active');
    const filterType = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = CHAPTERS.filter(item => {
      let matchesType = true;
      if (filterType === 'society') matchesType = (item.category === 'Society');
      if (filterType === 'council') matchesType = (item.category === 'Technical Council');
      if (filterType === 'joint') matchesType = (item.sbcCode === 'SBC60209825D');

      let matchesSearch = true;
      if (query) {
        const text = `${item.name} ${item.ieeeCode} ${item.sbcCode} ${item.domain}`.toLowerCase();
        matchesSearch = text.includes(query);
      }

      return matchesType && matchesSearch;
    });

    renderCards(filtered);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
}

function triggerRevealForCards() {
  const cards = document.querySelectorAll('#chapters-showcase-grid .sairam-scroll-reveal, #chapters-showcase-grid .reveal-init');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}

/* ============================================================
   7. CHAPTER DETAIL MODAL
   ============================================================ */
function initChapterModal() {
  const modal = document.getElementById('chapter-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  });
}

function openChapterModal(item) {
  const modal = document.getElementById('chapter-modal');
  if (!modal || !item) return;

  const modalLogo = document.getElementById('modal-logo');
  if (modalLogo) {
    modalLogo.src = `assets/logos/${item.ieeeCode}.png`;
    modalLogo.alt = `${item.name} Official Logo`;
  }

  document.getElementById('modal-title').textContent = item.name;
  document.getElementById('modal-ieee-code').textContent = item.ieeeCode;
  document.getElementById('modal-sbc-code').textContent = item.sbcCode;
  document.getElementById('modal-category').textContent = item.category;
  document.getElementById('modal-domain').textContent = item.domain;
  document.getElementById('modal-desc').textContent = item.description;

  modal.classList.add('show');
}

function attachModalTriggers() {
  const triggers = document.querySelectorAll('.view-detail-btn');
  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      const item = window.IEEE_DATA.CHAPTERS.find(c => c.ieeeCode === code) || 
        (window.IEEE_DATA.WIE_GROUP && window.IEEE_DATA.WIE_GROUP.ieeeCode === code ? {
          name: window.IEEE_DATA.WIE_GROUP.name,
          ieeeCode: window.IEEE_DATA.WIE_GROUP.ieeeCode,
          sbcCode: window.IEEE_DATA.WIE_GROUP.sbaCode,
          category: window.IEEE_DATA.WIE_GROUP.category,
          domain: 'Women in STEM, Leadership, Mentoring & Diversity Outreach',
          description: window.IEEE_DATA.WIE_GROUP.description,
          remoteLogo: window.IEEE_DATA.WIE_GROUP.remoteLogo,
          localLogo: window.IEEE_DATA.WIE_GROUP.localLogo,
          logo: window.IEEE_DATA.WIE_GROUP.logo
        } : null);
      if (item) {
        openChapterModal(item);
      }
    });
  });
}

/* ============================================================
   8. ACTIVITIES & EVENTS TABS & MODAL
   ============================================================ */
function initActivitiesTabsAndModal() {
  const tabs = document.querySelectorAll('.event-tab-btn');
  const cards = document.querySelectorAll('.event-editorial-card');
  const eventModal = document.getElementById('event-detail-modal');

  // Category Filtering
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat');

      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Event modal triggers
  if (eventModal && window.IEEE_DATA && window.IEEE_DATA.ACTIVITIES_EVENTS) {
    const closeBtn = eventModal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => eventModal.classList.remove('show'));
    }
    eventModal.addEventListener('click', (e) => {
      if (e.target === eventModal) eventModal.classList.remove('show');
    });

    document.querySelectorAll('.btn-event-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const eventId = btn.getAttribute('data-event-id');
        const ev = window.IEEE_DATA.ACTIVITIES_EVENTS.find(item => item.id === eventId);
        if (!ev) return;

        document.getElementById('event-modal-title').textContent = ev.title;
        document.getElementById('event-modal-date').textContent = ev.date;
        document.getElementById('event-modal-category').textContent = ev.categoryLabel;
        document.getElementById('event-modal-venue').textContent = ev.details.venue;
        document.getElementById('event-modal-speakers').textContent = ev.details.chiefGuest || ev.details.speakers || ev.details.proctors;
        document.getElementById('event-modal-schedule').textContent = ev.details.schedule;
        document.getElementById('event-modal-desc').textContent = ev.excerpt;

        eventModal.classList.add('show');
      });
    });
  }
}

/* ============================================================
   9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ============================================================ */
function initScrollRevealAnimations() {
  const elements = document.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .sairam-scroll-reveal');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   10. FLOATING BACK TO TOP BUTTON
   ============================================================ */
function initBackToTopButton() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 380) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ============================================================
   11. QUICK INQUIRY FORM
   ============================================================ */
function initQuickInquiryForm() {
  const form = document.getElementById('quick-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inquiry-name').value.trim();
    const email = document.getElementById('inquiry-email').value.trim();
    const msg = document.getElementById('inquiry-msg').value.trim();

    if (!name || !email || !msg) {
      alert('Please fill out all required fields.');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'SUBMITTING...';

    setTimeout(() => {
      alert('Thank you! Your message has been received by the IEEE SSCE Student Branch executive committee.');
      form.reset();
      btn.disabled = false;
      btn.textContent = 'SUBMIT INQUIRY';
    }, 800);
  });
}
