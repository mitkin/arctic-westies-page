// Inject shared navbar and footer
(function() {
  const storageKey = 'aw-theme';
  const assetVersion = '20260511';

  function getPreferredTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    const label = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
    const icon = theme === 'light' ? '☾' : '☀';
    const logoSrc = theme === 'light' ? 'res/aw-simple-black.svg' : 'res/aw-simple-white.svg';

    ['themeSwitch', 'themeSwitchMobile'].forEach(id => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
      const iconEl = btn.querySelector('.theme-switch-icon');
      if (iconEl) iconEl.textContent = icon;
    });

    document.querySelectorAll('.nav-logo-mark').forEach(logo => {
      logo.setAttribute('src', logoSrc);
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  }

  function setUpThemeSwitches() {
    ['themeSwitch', 'themeSwitchMobile'].forEach(id => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('click', toggleTheme);
    });
    applyTheme(getPreferredTheme());
  }

  applyTheme(getPreferredTheme());

  // Load and inject navbar
  fetch(`res/navbar.html?v=${assetVersion}`, { cache: 'no-store' })
    .then(response => response.text())
    .then(html => {
      const navContainer = document.createElement('div');
      navContainer.innerHTML = html;

      const fragment = document.createDocumentFragment();
      while (navContainer.firstElementChild) {
        fragment.appendChild(navContainer.firstElementChild);
      }
      document.body.insertBefore(fragment, document.body.firstChild);

      setUpNavigation();
      setUpThemeSwitches();
      markCurrentPage();
    })
    .catch(err => console.error('Failed to load navbar:', err));

  // Load and inject footer
  fetch(`res/footer.html?v=${assetVersion}`, { cache: 'no-store' })
    .then(response => response.text())
    .then(html => {
      const footer = document.createElement('div');
      footer.innerHTML = html;
      document.body.appendChild(footer.firstElementChild);
    })
    .catch(err => console.error('Failed to load footer:', err));

  // Set up navigation event listeners
  function setUpNavigation() {
    const hamburger = document.getElementById('navHamburger');
    const menu = document.getElementById('navMobileMenu');
    
    if (!hamburger || !menu) return;

    function toggle() {
      const open = menu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggle);
    const closeBtn = document.getElementById('navMobileClose');
    if (closeBtn) closeBtn.addEventListener('click', toggle);

    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));
  }

  // Mark current page in navigation
  function markCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a, .nav-mobile-menu a');
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      const linkTarget = href.split('#')[0];
      if (linkTarget === currentPage) {
        link.classList.add('active');
      }
    });
  }
})();
