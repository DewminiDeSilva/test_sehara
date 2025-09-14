// English only (two variants: normal + formal) to demonstrate language switcher
const i18n = {
  en: {
    'nav.about': 'About Us',
    'nav.features': 'Features',
    'nav.contact': 'Contact',
    'hero.title': 'Welcome to\nour company...',
    'hero.subtitle': 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,',
    'hero.cta.learn': 'Learn more',
    'hero.cta.contact': 'Contact',
    'about.title': 'About Us',
    'about.text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est',
    'news.title': 'Latest News',
    'news.read': 'Read',
    'testimonials.title': 'Testimonials',
    'contact.title': 'Contact Us',
    'footer.stay': 'Stay connected with'
  },
  en_formal: {
    'nav.about': 'About Us',
    'nav.features': 'Features',
    'nav.contact': 'Contact',
    'hero.title': 'Welcome to\nour company…',
    'hero.subtitle': 'We are pleased to introduce our company. Explore our features, recent updates, and ways to get in touch.',
    'hero.cta.learn': 'Learn more',
    'hero.cta.contact': 'Contact',
    'about.title': 'About Us',
    'about.text': 'We deliver value through reliable products and a customer-first approach, focusing on quality and continuous improvement.',
    'news.title': 'Latest News',
    'news.read': 'Read',
    'testimonials.title': 'Testimonials',
    'contact.title': 'Contact Us',
    'footer.stay': 'Stay connected with'
  }
};

function applyI18n(lang = 'en') {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = dict[key];
    if (typeof val === 'string') el.innerHTML = val.replace(/\n/g, '<br>');
  });
  localStorage.setItem('lang', lang);
}

function setupLangButtons(scope = document) {
  scope.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyI18n(btn.getAttribute('data-lang')));
  });
}

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const active = hamburger.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', active ? 'true' : 'false');
    mobileMenu.classList.toggle('show');
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Swiper: Latest News
const newsSwiper = new Swiper('.news-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  },
  pagination: { el: '.news-swiper .swiper-pagination', clickable: true }
});

// Swiper: Testimonials
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.testimonials-swiper .swiper-button-next',
    prevEl: '.testimonials-swiper .swiper-button-prev'
  }
});

// Boot
setupLangButtons(document);
applyI18n(localStorage.getItem('lang') || 'en');

// ===== News modal (vanilla ES6) =====
const modal = document.getElementById('newsModal');
const modalTitleEl = document.getElementById('newsModalTitle');
const modalContentEl = document.getElementById('newsModalContent');
let lastFocusedEl = null;

function openModal(title, html) {
  lastFocusedEl = document.activeElement;
  modalTitleEl.textContent = title || 'News';
  modalContentEl.innerHTML = html || '';
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal__close').focus();
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (lastFocusedEl) lastFocusedEl.focus();
}

// Open on "Read" click
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.news-read');
  if (!btn) return;

  e.preventDefault();
  const card = btn.closest('.news-card');
  const title = (card && card.dataset.title) || 'News';

  // Prefer hidden full content; fallback to preview text
  const fullHTML = card?.querySelector('.news-full')?.innerHTML
                || `<p>${card?.querySelector('.news-text')?.textContent || ''}</p>`;

  openModal(title, fullHTML);
});

// Close on overlay / close button
modal.addEventListener('click', (e) => {
  if (e.target.matches('[data-dismiss="modal"], .modal__overlay, .modal__close')) {
    closeModal();
  }
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
