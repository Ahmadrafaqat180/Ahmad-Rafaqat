// ============================================================
// Submariner showcase — interaction layer
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const ROLEX_URL = 'https://www.rolex.com/watches/submariner/m126610lv-0002';

  /* ----------------------------------------------------------
     1. Watch image → opens the official Rolex page.
        The <a> tag already handles navigation (target="_blank"),
        this just adds a short visual "ripple" so the click feels
        acknowledged before the new tab opens.
  ---------------------------------------------------------- */
  const watchLink = document.getElementById('watchLink');
  const watchImage = document.getElementById('watchImage');

  if (watchLink && watchImage) {
    watchLink.addEventListener('click', () => {
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.inset = '0';
      ripple.style.borderRadius = '50%';
      ripple.style.border = '2px solid var(--green-glow)';
      ripple.style.animation = 'ripple 0.6s ease-out forwards';
      ripple.style.pointerEvents = 'none';
      watchLink.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 650);
    });
  }

  // Ripple keyframes injected once, so style.css stays free of
  // animations that only ever fire from a user click.
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple {
      from { transform: scale(1);   opacity: 0.9; }
      to   { transform: scale(1.25); opacity: 0; }
    }
  `;
  document.head.appendChild(rippleStyle);

  /* ----------------------------------------------------------
     2. Spec rows reveal in sequence as they enter the viewport.
        A single, restrained scroll-triggered moment rather than
        motion on every element.
  ---------------------------------------------------------- */
  const specRows = document.querySelectorAll('.spec-row');

  if ('IntersectionObserver' in window && specRows.length) {
    specRows.forEach((row, i) => {
      row.style.opacity = '0';
      row.style.transform = 'translateY(14px)';
      row.style.transition = `opacity 0.6s ease ${i * 70}ms, transform 0.6s ease ${i * 70}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    specRows.forEach(row => observer.observe(row));
  }

  /* ----------------------------------------------------------
     3. Footer CTA button shares the same destination as the
        watch image, kept in one place so both stay in sync.
  ---------------------------------------------------------- */
  const acquireButton = document.getElementById('acquireButton');
  if (acquireButton) {
    acquireButton.setAttribute('href', ROLEX_URL);
  }

});