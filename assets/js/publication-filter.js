(() => {
  const layout = document.getElementById('publications-layout');
  const panel = document.getElementById('publication-filter');
  const controls = panel.querySelector('.publication-filter__buttons');
  const cards = Array.from(document.querySelectorAll('#publication-results .publication-card'));
  const tones = ['nlp', 'cv', 'ml', 'ubi'].map(tone => `venue-badge--${tone}`);
  const groups = new Map();

  for (const card of cards) {
    const { publicationGroup: name, publicationDate: date = '' } = card.dataset;
    if (!name) continue;

    if (!groups.has(name)) groups.set(name, { name, count: 0, latest: '' });
    const group = groups.get(name);
    const badge = card.querySelector('.venue-badge');
    group.count += 1;
    if (date > group.latest) group.latest = date;
    if (!group.tone && badge && name !== 'Others') {
      group.tone = tones.find(tone => badge.classList.contains(tone));
    }
  }

  if (!groups.size) return;

  const options = Array.from(groups.values()).filter(group => group.name !== 'Others');
  options.sort((a, b) => b.count - a.count || b.latest.localeCompare(a.latest) || a.name.localeCompare(b.name, 'en'));
  if (groups.has('Others')) options.push(groups.get('Others'));

  const spareTones = tones.filter(tone => !options.some(group => group.tone === tone));
  let activeGroup = '';
  const buttons = new Map();

  options.forEach(({ name, tone }, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'publication-filter__button';
    if (name !== 'Others') {
      button.classList.add(tone || spareTones.shift() || tones[index % tones.length]);
    }
    button.setAttribute('aria-controls', 'publication-results');
    button.setAttribute('aria-pressed', 'false');
    button.textContent = name;

    const clear = document.createElement('span');
    clear.className = 'publication-filter__clear';
    clear.setAttribute('aria-hidden', 'true');
    clear.textContent = '×';
    button.append(clear);
    buttons.set(name, button);
    controls.append(button);

    button.addEventListener('click', () => {
      if (activeGroup) buttons.get(activeGroup).setAttribute('aria-pressed', 'false');
      activeGroup = activeGroup === name ? '' : name;
      if (activeGroup) button.setAttribute('aria-pressed', 'true');
      for (const card of cards) {
        card.hidden = Boolean(activeGroup && card.dataset.publicationGroup !== activeGroup);
      }
    });
  });

  layout.classList.add('publications-layout--filter');
  panel.hidden = false;
})();
