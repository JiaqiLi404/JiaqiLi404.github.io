(() => {
  if (!('IntersectionObserver' in window) || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

  const sections = document.querySelectorAll('.main--home .page__content > .home-card, .main--home .page__content > .home-grid');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('home-section-enter');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -32px' });

  for (const section of sections) observer.observe(section);
})();
