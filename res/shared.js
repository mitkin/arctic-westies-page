// Inject shared navbar and footer
(function() {
  // Load and inject navbar
  fetch('res/navbar.html')
    .then(response => response.text())
    .then(html => {
      const nav = document.createElement('div');
      nav.innerHTML = html;
      document.body.insertBefore(nav.firstElementChild, document.body.firstChild);
      if (nav.children.length > 1) document.body.insertBefore(nav.firstElementChild, document.body.firstChild);
      setUpNavigation();
      markCurrentPage();
    })
    .catch(err => console.error('Failed to load navbar:', err));

  // Load and inject footer
  fetch('res/footer.html')
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
      if (href && href.includes(currentPage)) {
        link.classList.add('active');
      }
    });
  }
})();
