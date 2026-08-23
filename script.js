/* ===========================================================
   Harshada Talele — Portfolio scripts
   =========================================================== */

/* ---------- 1. Theme toggle (remembers your choice) ---------- */
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) { /* storage blocked */ }
  if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);

  toggle.addEventListener('click', function () {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });
})();

/* ---------- 2. Mobile menu ---------- */
(function () {
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-open');
    links.classList.toggle('is-open');
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      burger.classList.remove('is-open');
      links.classList.remove('is-open');
    });
  });
})();

/* ---------- 3. Sticky nav shadow + active link ---------- */
(function () {
  const nav = document.getElementById('nav');
  const links = Array.from(document.querySelectorAll('.nav__links a'));
  const sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 10);

    const pos = window.scrollY + 120;
    let activeIndex = -1;
    sections.forEach(function (sec, i) {
      if (sec.offsetTop <= pos) activeIndex = i;
    });
    links.forEach(function (a, i) { a.classList.toggle('is-active', i === activeIndex); });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- 4. Typing effect in the hero ---------- */
(function () {
  const el = document.getElementById('typed');
  const words = [
    'B.Sc IT Student',
    'Web Developer',
    'Python Programmer',
    'Generative AI Explorer'
  ];

  let wordIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const word = words[wordIndex];
    charIndex += deleting ? -1 : 1;
    el.textContent = word.slice(0, charIndex);

    let delay = deleting ? 45 : 90;

    if (!deleting && charIndex === word.length) {
      delay = 1800;            // pause at the end of a word
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }
    setTimeout(tick, delay);
  }
  tick();
})();

/* ---------- 5. Reveal on scroll ---------- */
(function () {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      setTimeout(function () { entry.target.classList.add('is-visible'); }, i * 90);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  items.forEach(function (el) { io.observe(el); });
})();

/* ---------- 6. Contact form ---------- */
(function () {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  /* To receive real emails: create a free form at https://formspree.io
     and paste your endpoint below, e.g. 'https://formspree.io/f/xxxxxxx' */
  const ENDPOINT = '';

  function setNote(text, type) {
    note.textContent = text;
    note.className = 'form-note' + (type ? ' ' + type : '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameEl = form.elements['name'];
    const emailEl = form.elements['email'];
    const msgEl = form.elements['message'];

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = msgEl.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    [nameEl, emailEl, msgEl].forEach(function (f) { f.classList.remove('is-error'); });

    if (!name)    { nameEl.classList.add('is-error');  return setNote('Please enter your name.', 'err'); }
    if (!emailOk) { emailEl.classList.add('is-error'); return setNote('Please enter a valid email address.', 'err'); }
    if (!message) { msgEl.classList.add('is-error');   return setNote('Please write a short message.', 'err'); }

    if (!ENDPOINT) {
      // No backend configured — open the visitor's mail app instead.
      const subject = encodeURIComponent('Portfolio enquiry from ' + name);
      const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
      window.location.href = 'mailto:harshadatalele2706@gmail.com?subject=' + subject + '&body=' + body;
      setNote('Opening your email app…', 'ok');
      return;
    }

    setNote('Sending…');
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed');
        form.reset();
        setNote('Thank you! Your message has been sent.', 'ok');
      })
      .catch(function () {
        setNote('Something went wrong. Please email me directly.', 'err');
      });
  });
})();

/* ---------- 7. Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
