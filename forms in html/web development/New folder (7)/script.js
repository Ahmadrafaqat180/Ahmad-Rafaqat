/* ============================================
   URBAN FOOD — MAIN SCRIPT
============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- PRELOADER ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', function () {
    setTimeout(() => preloader.classList.add('hide'), 400);
  });
  // fallback in case load event already fired
  setTimeout(() => preloader.classList.add('hide'), 2500);

  /* ---------- SET CURRENT YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  /* ---------- ACTIVE NAV LINK ON SCROLL (declared early so onScroll can use it) ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    let current = '';
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  function onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // navbar background
    if (scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // back to top button
    if (scrollY > 500) backToTop.classList.add('show');
    else backToTop.classList.remove('show');

    // scroll progress bar
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';

    updateActiveNavLink();
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- MOBILE MENU TOGGLE ---------- */
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navbar.classList.toggle('mobile-open');
  });

  // close mobile menu when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navbar.classList.remove('mobile-open');
    });
  });

  /* ---------- SCROLL REVEAL ANIMATIONS ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- HERO SLIDER ---------- */
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDotsContainer = document.getElementById('heroDots');
  let heroIndex = 0;

  heroSlides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('hero-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToHeroSlide(i));
    heroDotsContainer.appendChild(dot);
  });
  const heroDots = document.querySelectorAll('.hero-dot');

  function goToHeroSlide(index) {
    heroSlides[heroIndex].classList.remove('active');
    heroDots[heroIndex].classList.remove('active');
    heroIndex = index;
    heroSlides[heroIndex].classList.add('active');
    heroDots[heroIndex].classList.add('active');
  }

  function nextHeroSlide() {
    const next = (heroIndex + 1) % heroSlides.length;
    goToHeroSlide(next);
  }
  setInterval(nextHeroSlide, 5000);

  /* ---------- COUNTER ANIMATION ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1600;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString() + (target >= 1000 ? '+' : '');
    }
    requestAnimationFrame(update);
  }

  /* ---------- MENU FILTER ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      menuCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || filter === cat) {
          card.classList.remove('filtered-out');
        } else {
          card.classList.add('filtered-out');
        }
      });
    });
  });

  /* ---------- CUSTOMER REVIEWS SLIDER ---------- */
  const reviewCards = document.querySelectorAll('.review-card');
  const revDotsContainer = document.getElementById('revDots');
  const revPrev = document.getElementById('revPrev');
  const revNext = document.getElementById('revNext');
  let revIndex = 0;

  reviewCards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('rev-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToReview(i));
    revDotsContainer.appendChild(dot);
  });
  const revDots = document.querySelectorAll('.rev-dot');

  if (reviewCards.length) reviewCards[0].classList.add('active');

  function goToReview(index) {
    reviewCards[revIndex].classList.remove('active');
    revDots[revIndex].classList.remove('active');
    revIndex = (index + reviewCards.length) % reviewCards.length;
    reviewCards[revIndex].classList.add('active');
    revDots[revIndex].classList.add('active');
  }

  revNext.addEventListener('click', () => goToReview(revIndex + 1));
  revPrev.addEventListener('click', () => goToReview(revIndex - 1));
  setInterval(() => goToReview(revIndex + 1), 6000);

  /* ---------- CONTACT FORM (front-end demo) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formSuccess.classList.add('show');
      contactForm.reset();
      setTimeout(() => formSuccess.classList.remove('show'), 4000);
      // NOTE: connect this form to your backend / email service (e.g. Formspree,
      // EmailJS, or your own PHP/Node endpoint) to actually receive messages.
    });
  }

});