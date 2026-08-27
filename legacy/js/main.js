// Builds the signature pixel-cluster motif (echoes the brand's ID-badge crop) wherever a
// <div id="pixelGrid"> is present.
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('pixelGrid');
  if (grid) {
    const mask = [
      0,0,1,0,0,
      0,1,1,1,0,
      1,1,1,1,1,
      0,1,1,1,0,
      0,0,1,0,0
    ];
    const colors = ['blue','green','orange'];
    let ci = 0;
    mask.forEach((on, i) => {
      const cell = document.createElement('div');
      cell.className = 'px ' + (on ? colors[ci++ % colors.length] : 'ghost');
      cell.style.animationDelay = (i * 0.035) + 's';
      grid.appendChild(cell);
    });
  }

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.cssText += open ? '' : 'position:absolute; top:100%; left:0; right:0; background:#FAF9F5; flex-direction:column; padding:20px 32px; gap:16px; border-bottom:1px solid rgba(26,26,46,.08);';
    });
  }
});
