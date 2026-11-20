for (const row of document.querySelectorAll('.home-focus .focus-row')) {
  const comparison = row.querySelector('.focus-comparison');
  if (!comparison) continue;

  let openedByPointer = false;
  row.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse' || comparison.open) return;
    comparison.open = true;
    openedByPointer = true;
  });
  row.addEventListener('pointerleave', () => {
    if (openedByPointer) comparison.open = false;
    openedByPointer = false;
  });
  comparison.querySelector('summary').addEventListener('click', () => {
    openedByPointer = false;
  });
  comparison.addEventListener('toggle', () => {
    const bounds = row.getBoundingClientRect();
    const height = comparison.querySelector('figure').offsetHeight;
    row.classList.toggle('focus-row--preview-above', comparison.open &&
      bounds.bottom + height > window.innerHeight && bounds.top - height > 80);
  });
}

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  for (const comparison of document.querySelectorAll('.focus-comparison[open]')) {
    comparison.open = false;
  }
});

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
