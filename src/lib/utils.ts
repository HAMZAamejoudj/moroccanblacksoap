export function getLocalizedHref(path: string, lang: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}
