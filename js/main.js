/* ============================================================
   DUNLAP GARDINER LLP — MAIN JAVASCRIPT
   ============================================================ */

'use strict';

// ── Navbar scroll behavior ──────────────────────────────────
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function updateNav() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  }

  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
})();

// ── Mobile hamburger menu ───────────────────────────────────
(function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

// ── Active nav link ─────────────────────────────────────────
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ── Scroll reveal ───────────────────────────────────────────
(function () {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(function (el) { observer.observe(el); });
})();

// ── Accordion (for criminal law page etc.) ──────────────────
(function () {
  document.querySelectorAll('.accordion-header').forEach(function (header) {
    header.addEventListener('click', function () {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('open');
      });

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
})();

// ── Contact form validation & submit ───────────────────────
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(function (field) {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
      }
    });

    if (!valid) {
      showFormMessage(form, 'Please fill in all required fields.', 'error');
      return;
    }

    const emailField = form.querySelector('[type="email"]');
    if (emailField && !isValidEmail(emailField.value)) {
      emailField.style.borderColor = '#c0392b';
      showFormMessage(form, 'Please enter a valid email address.', 'error');
      return;
    }

    // Simulate success (no backend)
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Sending…';
      btn.disabled = true;
    }

    setTimeout(function () {
      form.reset();
      if (btn) {
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }
      showFormMessage(form, 'Thank you! Your message has been received. We\'ll be in touch shortly.', 'success');
    }, 1200);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormMessage(form, text, type) {
    let msg = form.querySelector('.form-message');
    if (!msg) {
      msg = document.createElement('div');
      msg.className = 'form-message';
      form.appendChild(msg);
    }
    msg.textContent = text;
    msg.style.cssText = [
      'padding: .9rem 1.25rem',
      'border-radius: 4px',
      'font-size: .875rem',
      'margin-top: 1rem',
      'font-weight: 500',
      type === 'success'
        ? 'background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0;'
        : 'background: #fef2f2; color: #991b1b; border: 1px solid #fecaca;'
    ].join(';');

    if (type === 'success') {
      setTimeout(function () { msg.remove(); }, 6000);
    }
  }
})();

// ── Smooth counter animation ────────────────────────────────
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let start = 0;
      const duration = 1500;
      const step = target / (duration / 16);

      function tick() {
        start = Math.min(start + step, target);
        el.textContent = Math.floor(start) + suffix;
        if (start < target) requestAnimationFrame(tick);
      }
      tick();
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) { observer.observe(el); });
})();

// ── Sticky header active section highlight ──────────────────
(function () {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const id = entry.target.id;
      const link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (link) {
        link.classList.toggle('active', entry.isIntersecting);
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(function (s) { observer.observe(s); });
})();
