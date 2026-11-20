(() => {
  const home = document.querySelector('.main--home');
  if (!home) return;

  const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  function applyMotion() {
    home.dataset.loops = motion.matches ? 'running' : 'stopped';
  }
  motion.addEventListener('change', applyMotion);

  const scenes = home.querySelectorAll('.home-hero__ink, .focus-comparison__panel');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) entry.target.classList.toggle('home-loop-visible', entry.isIntersecting);
    });
    for (const scene of scenes) observer.observe(scene);
  } else {
    for (const scene of scenes) scene.classList.add('home-loop-visible');
  }
  applyMotion();
})();

(() => {
  const masthead = document.querySelector('.masthead');
  const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  if (!masthead || !motion.matches) return;

  const bar = document.createElement('span');
  bar.className = 'home-reading-progress';
  bar.setAttribute('aria-hidden', 'true');
  masthead.append(bar);
  let scheduled = false;

  function updateProgress() {
    scheduled = false;
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
    bar.style.setProperty('--reading-progress', progress.toFixed(4));
  }

  function scheduleProgress() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateProgress);
  }

  window.addEventListener('scroll', scheduleProgress, { passive: true });
  window.addEventListener('resize', scheduleProgress);
  window.addEventListener('load', scheduleProgress, { once: true });
  updateProgress();
})();

(() => {
  const comparisons = new Map();
  let active = null;
  let pending = null;
  let placementFrame = 0;

  function positionPreview() {
    placementFrame = 0;
    if (!active || !active.details.open) return;
    const { row, panel } = active;
    const bounds = row.getBoundingClientRect();
    const height = panel.offsetHeight;
    row.classList.toggle('focus-row--preview-above',
      bounds.bottom + height > window.innerHeight && bounds.top - height > 80);
  }

  function schedulePlacement() {
    if (active && !placementFrame) placementFrame = requestAnimationFrame(positionPreview);
  }

  for (const row of document.querySelectorAll('.home-focus .focus-row')) {
    const details = row.querySelector('.focus-comparison');
    if (!details) continue;

    const record = { row, details, panel: details.querySelector('figure'), transient: false };
    comparisons.set(row.id, record);
    let waitingForMouse = false;

    row.addEventListener('pointerenter', event => {
      waitingForMouse = event.pointerType === 'mouse';
    });
    row.addEventListener('pointermove', event => {
      if (!waitingForMouse || event.pointerType !== 'mouse' || (!event.movementX && !event.movementY)) return;
      waitingForMouse = false;
      if (details.open) return;
      record.transient = true;
      details.open = true;
    });
    row.addEventListener('pointerleave', () => {
      waitingForMouse = false;
      if (record.transient) details.open = false;
      record.transient = false;
    });
    details.querySelector('summary').addEventListener('click', () => {
      record.transient = false;
    });
    details.addEventListener('toggle', () => {
      if (details.open) {
        if (active && active !== record) active.details.open = false;
        active = record;
        schedulePlacement();
      } else {
        if (active === record) active = null;
        row.classList.remove('focus-row--preview-above');
      }
    });
  }

  function showJumpPreview(record) {
    record.transient = false;
    record.details.open = true;
  }

  const arrival = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!pending || entry.target !== pending.row || !entry.isIntersecting) continue;
      const record = pending;
      cancelJump();
      showJumpPreview(record);
    }
  }, { rootMargin: '-68px 0px -80px' }) : null;

  function cancelJump() {
    if (arrival && pending) arrival.unobserve(pending.row);
    pending = null;
  }

  for (const link of document.querySelectorAll('.evidence-nav a[href^="#"]')) {
    link.addEventListener('click', event => {
      const record = comparisons.get(link.hash.slice(1));
      if (!record || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      cancelJump();
      if (arrival) {
        pending = record;
        arrival.observe(record.row);
      } else {
        showJumpPreview(record);
      }
    });
  }

  window.addEventListener('hashchange', () => {
    if (pending && window.location.hash !== `#${pending.row.id}`) cancelJump();
  });
  window.addEventListener('scroll', schedulePlacement, { passive: true });
  window.addEventListener('resize', schedulePlacement);
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    cancelJump();
    if (active) active.details.open = false;
  });
})();

(() => {
  if (!('IntersectionObserver' in window) || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

  const content = document.querySelectorAll([
    '.home-focus > h2', '.home-focus .focus-row',
    '.home-publications > .section-heading', '.home-publications .publication-card',
    '.home-news > h2', '.home-news .timeline__item',
    '.main--home .page__content > .home-grid',
    '.main--home .page__content > .home-card:not(.home-focus):not(.home-publications):not(.home-news)'
  ].join(', '));
  const observer = new IntersectionObserver(entries => {
    let delay = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.style.setProperty('--enter-delay', `${delay}ms`);
      entry.target.classList.add('home-section-enter');
      observer.unobserve(entry.target);
      delay = Math.min(delay + 65, 195);
    }
  }, { rootMargin: '0px 0px -32px' });

  for (const item of content) observer.observe(item);
})();
