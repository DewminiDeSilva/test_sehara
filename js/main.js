// English only (two variants: normal + formal) to demonstrate language switcher
const i18n = {
  en: {
    'nav.about': 'About Us',
    'nav.features': 'Features',
    'nav.contact': 'Contact',
    'hero.title': 'Welcome to\nour company...',
    'hero.subtitle': 'We help businesses turn ideas into real resultscombining modern tech, clear strategy, and friendly support so you can launch faster, grow smarter, and delight your customers',
    'hero.cta.learn': 'Learn more',
    'hero.cta.contact': 'Contact',
    'about.title': 'About Us',
    'about.text': 'We’re a team of designers, engineers, and strategists who turn ideas into practical digital products. We focus on clear communication, thoughtful design, and reliable engineering so your business can launch faster and grow with confidence. From discovery to delivery, we work as partners—measuring results and improving continuously.',
    'news.title': 'Latest News',
     'news.read': 'Read',

    'news.items.0.title':   'ProductCon London recap',
    'news.items.0.preview': 'Highlights from our talk at ProductCon London…',
    'news.items.0.full':    '<p>We shared how small, high-leverage changes in onboarding improved activation by 18%.</p><p>The slides and recording are available for registered attendees.</p>',

    'news.items.1.title':   'New workspace opens',
    'news.items.1.preview': 'We’ve opened a new collaboration space to support our growing team…',
    'news.items.1.full':    '<p>The hub includes dedicated rooms for research interviews and hands-on testing.</p><p>Tours are available by appointment.</p>',

    'news.items.2.title':   'Quarterly results',
    'news.items.2.preview': 'Q2 highlights: performance, customer stories, and what’s next…',
    'news.items.2.full':    '<p>We delivered improved reliability and faster release cycles across core products.</p><p>Read the full report for metrics and upcoming roadmap items.</p>',
    'news.read': 'Read',
    'testimonials.title': 'Testimonials',
     'testimonials.items.0.text':
      'Working with this team turned our ideas into reality fast. Clear communication, solid engineering, and measurable results.',
    'testimonials.items.0.author': '- Sarah Bennett',
    'testimonials.items.0.role': 'Head of Operations',

    'testimonials.items.1.text':
      'The product quality and support have been excellent. We launched on time and saw improvements from day one.',
    'testimonials.items.1.author': '- Daniel Ruiz',
    'testimonials.items.1.role': 'Product Manager',

    'testimonials.items.2.text':
      'Reliable, professional, and easy to work with. They simplified our processes and helped us scale confidently.',
    'testimonials.items.2.author': '- Priya Nair',
    'testimonials.items.2.role': 'Founder & CEO',
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
    'about.text': 'We are a multidisciplinary team delivering reliable, scalable digital solutions. Our approach combines rigorous discovery, user-centered design, and robust engineering to accelerate delivery and reduce risk. We collaborate closely with stakeholders from inception to launch, ensuring measurable outcomes and long-term value.',
    'news.title': 'Latest News',
     'news.items.0.title':   'ProductCon London — Summary',
    'news.items.0.preview': 'Key insights from our presentation at ProductCon London…',
    'news.items.0.full':    '<p>Our presentation outlined targeted improvements to onboarding that yielded an 18% increase in activation.</p><p>Slide materials and the session recording are available to registered participants.</p>',

    'news.items.1.title':   'Opening of New Workspace',
    'news.items.1.preview': 'We have inaugurated a new collaboration space to accommodate team growth…',
    'news.items.1.full':    '<p>The facility provides dedicated rooms for research interviews and usability testing.</p><p>Guided visits may be arranged upon request.</p>',

    'news.items.2.title':   'Quarterly Results',
    'news.items.2.preview': 'Q2 summary: performance achievements, client highlights, and forthcoming initiatives…',
    'news.items.2.full':    '<p>We delivered improved system reliability and accelerated release cadence across core offerings.</p><p>The complete report includes detailed metrics and the upcoming roadmap.</p>',
    'news.read': 'Read',
    'testimonials.title': 'Testimonials',
     'testimonials.items.0.text':
      'The team demonstrated exemplary professionalism—translating our requirements into a robust solution with clear reporting and timely delivery.',
    'testimonials.items.0.author': '- Sarah Bennett',
    'testimonials.items.0.role': 'Head of Operations',

    'testimonials.items.1.text':
      'Product quality and support have been consistently superior. Milestones were met as scheduled, and performance gains were immediate.',
    'testimonials.items.1.author': '- Daniel Ruiz',
    'testimonials.items.1.role': 'Product Manager',

    'testimonials.items.2.text':
      'Engagement was conducted with diligence and precision. Our workflows were streamlined, enabling sustainable growth.',
    'testimonials.items.2.author': '- Priya Nair',
    'testimonials.items.2.role': 'Founder & CEO',
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

function closeMenu(){
  hamburger.classList.remove('is-active');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded','false');
  document.body.classList.remove('menu-open');
}

if (hamburger && mobileMenu){
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('menu-open', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
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

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.news-read');
  if (!btn) return;
  e.preventDefault();

  const card = btn.closest('.news-card');
  const title = card?.querySelector('.news-title')?.textContent?.trim() || 'News';
  const fullHTML = card?.querySelector('.news-full')?.innerHTML
                || `<p>${card?.querySelector('.news-text')?.textContent || ''}</p>`;
  openModal(title, fullHTML);
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
