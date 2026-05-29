export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href');
  if (!href || !href.startsWith('#')) return;
  e.preventDefault();
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset = 80;
  const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
