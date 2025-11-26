
(function () {
  'use strict';

  function initNavbarAutohide() {
    const nav = document.getElementById('siteNavbar');
    if (!nav) return;
    let lastScroll = window.scrollY || document.documentElement.scrollTop;
   
    nav.classList.remove('auto-hidden');
    let isHidden = false;

    window.addEventListener('scroll', () => {
      const current = window.scrollY || document.documentElement.scrollTop;
      if (current < lastScroll && current < 50) {
        if (!isHidden) { nav.classList.add('auto-hidden'); isHidden = true; }
      } else {
        if (isHidden) { nav.classList.remove('auto-hidden'); isHidden = false; }
      }
      lastScroll = current <= 0 ? 0 : current;
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbarAutohide);
  } else {
    initNavbarAutohide();
  }

})();
