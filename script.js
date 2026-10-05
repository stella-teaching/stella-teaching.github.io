const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
function closeMenu() {
  nav?.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
}
button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    closeMenu();
    button?.focus();
  }
});
window.addEventListener('pageshow', closeMenu);
// Preserve older links to the sections now available as separate pages.
if (location.pathname.endsWith('about.html')) {
  const pages = { '#my-philosophy': 'philosophy.html', '#my-strengths': 'strengths.html' };
  if (pages[location.hash]) location.replace(pages[location.hash]);
}
