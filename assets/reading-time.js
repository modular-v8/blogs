(() => {
  const header = document.querySelector('header.masthead, header.hero');
  const main = document.querySelector('main');
  if (!header || !main) return;

  // Include the introduction whether the header is inside or outside main.
  const roots = main.contains(header) ? [main] : [header, main];
  const excluded = [
    'script', 'style', 'noscript', 'template', 'nav', 'footer',
    'button', 'input', 'select', 'textarea', 'svg', 'canvas',
    '[hidden]', '[aria-hidden="true"]', '[data-reading-time-exclude]',
    '.masthead__kicker', '.kicker', '.reading-time',
    '.sources', '#sources', '#references', '.figure__src',
    '.figure__ph', '.placeholder'
  ].join(',');

  const text = roots.map(root => {
    // Count a copy so filtering never changes the article or its interactions.
    const copy = root.cloneNode(true);
    copy.querySelectorAll(excluded).forEach(element => element.remove());
    const walker = document.createTreeWalker(copy, NodeFilter.SHOW_TEXT);
    const parts = [];
    while (walker.nextNode()) parts.push(walker.currentNode.textContent);
    return parts.join(' ');
  }).join(' ');

  const words = text.match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu) || [];
  const minutes = Math.max(1, Math.ceil(words.length / 200));
  const estimate = document.createElement('p');
  estimate.className = 'reading-time label';
  const duration = document.createElement('span');
  duration.className = 'reading-time__duration';
  duration.textContent = `${minutes} min`;
  estimate.append(duration, ' read');
  estimate.title = 'Estimated reading time at 200 words per minute';

  const kicker = header.querySelector('.masthead__kicker, .kicker');
  if (kicker) kicker.insertAdjacentElement('afterend', estimate);
})();
