export function typewriter(el: HTMLElement, intervalMs = 95): Promise<void> {
  // TypewriterText.astro wraps the target in .jw-type-wrap, hidden by
  // default (see global.css) so the full text can't flash visible before
  // typing starts. Revealing it here means every caller gets that for
  // free instead of having to remember to do it themselves.
  const wrap = el.closest<HTMLElement>('.jw-type-wrap');
  if (wrap) wrap.style.opacity = '1';

  const full = el.textContent ?? '';
  el.textContent = '';
  let i = 0;
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      i += 1;
      el.textContent = full.slice(0, i);
      if (i >= full.length) {
        clearInterval(interval);
        resolve();
      }
    }, intervalMs);
  });
}
