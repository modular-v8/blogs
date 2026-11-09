(() => {
  // This public collection address is not a password or API token.
  const site = 'https://bhavyap.goatcounter.com';

  // Only collect visits to the published blog, never local previews or forks.
  if (location.protocol !== 'https:' ||
      location.hostname !== 'modular-v8.github.io' ||
      !location.pathname.startsWith('/blogs/')) return;
  if (!site) return;
  if (document.querySelector('script[data-goatcounter]')) return;

  // Group /post/ and /post/index.html together and omit query parameters.
  window.goatcounter = {
    path: location.pathname.replace(/\/index\.html$/, '/')
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.setAttribute('data-goatcounter', `${site.replace(/\/$/, '')}/count`);
  document.head.appendChild(script);
})();
