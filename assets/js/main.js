/*!
 * Umer Daraz | Odoo Techno-Functional Consultant
 * Portfolio interactions: theme toggle, header state, scroll-to-top,
 * live local time, process status bar and active navigation link.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasObserver = 'IntersectionObserver' in window;

  /* ---------- Theme toggle (light / dark, remembered per visitor) ---------- */
  function initTheme() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    var STORAGE_KEY = 'ud-theme';

    function currentTheme() {
      return root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    function syncButton() {
      btn.setAttribute('aria-pressed', currentTheme() === 'dark' ? 'true' : 'false');
    }

    syncButton();
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage unavailable */ }
      syncButton();
    });
  }

  /* ---------- Header border + clear active link near the top ---------- */
  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle('scrolled', y > 8);
      if (y < 300) {
        document.querySelectorAll('.nav-links a[aria-current]').forEach(function (a) {
          a.removeAttribute('aria-current');
        });
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Brand and "Back to top" always return to the top ---------- */
  function initScrollTop() {
    document.querySelectorAll('.js-top').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Live local time in the contact card ---------- */
  function initClock() {
    var el = document.getElementById('clock');
    if (!el || !window.Intl) return;
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Karachi' });
    } catch (e) { return; }

    function tick() {
      el.textContent = 'My time now: ' + fmt.format(new Date()) + ' (GMT+5). Flexible hours for any time zone.';
    }
    tick();
    setInterval(tick, 30000);
  }

  /* ---------- Process status bar advances when it scrolls into view ---------- */
  function initProcess() {
    var steps = document.getElementById('steps');
    if (!steps) return;
    if (reduceMotion || !hasObserver) {
      steps.classList.add('run');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          steps.classList.add('run');
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(steps);
  }

  /* ---------- Highlight the nav link for the section in view ---------- */
  function initActiveNav() {
    if (!hasObserver) return;
    var links = {};
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = links[entry.target.id];
        if (!entry.isIntersecting || !link) return;
        Object.keys(links).forEach(function (id) { links[id].removeAttribute('aria-current'); });
        link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(links).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  initTheme();
  initHeader();
  initScrollTop();
  initYear();
  initClock();
  initProcess();
  initActiveNav();
})();
