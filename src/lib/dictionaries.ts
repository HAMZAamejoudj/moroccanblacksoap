type DictionaryLoader = () => Promise<any>;

interface DictionaryGroup {
  common: DictionaryLoader;
  home: DictionaryLoader;
  about: DictionaryLoader;
  benefits: DictionaryLoader;
  'bulk-order': DictionaryLoader;
  'private-label': DictionaryLoader;
  blog: DictionaryLoader;
  faq: DictionaryLoader;
  contact: DictionaryLoader;
}

const dictionaries: Record<string, DictionaryGroup> = {
  en: {
    common: () => import('../locales/en/common.json').then((module) => module.default),
    home: () => import('../locales/en/home.json').then((module) => module.default),
    about: () => import('../locales/en/about.json').then((module) => module.default),
    benefits: () => import('../locales/en/benefits.json').then((module) => module.default),
    'bulk-order': () => import('../locales/en/bulk-order.json').then((module) => module.default),
    'private-label': () => import('../locales/en/private-label.json').then((module) => module.default),
    blog: () => import('../locales/en/blog.json').then((module) => module.default),
    faq: () => import('../locales/en/faq.json').then((module) => module.default),
    contact: () => import('../locales/en/contact.json').then((module) => module.default),
  },
  fr: {
    common: () => import('../locales/fr/common.json').then((module) => module.default),
    home: () => import('../locales/fr/home.json').then((module) => module.default),
    about: () => import('../locales/fr/about.json').then((module) => module.default),
    benefits: () => import('../locales/fr/benefits.json').then((module) => module.default),
    'bulk-order': () => import('../locales/fr/bulk-order.json').then((module) => module.default),
    'private-label': () => import('../locales/fr/private-label.json').then((module) => module.default),
    blog: () => import('../locales/fr/blog.json').then((module) => module.default),
    faq: () => import('../locales/fr/faq.json').then((module) => module.default),
    contact: () => import('../locales/fr/contact.json').then((module) => module.default),
  },
  ar: {
    common: () => import('../locales/ar/common.json').then((module) => module.default),
    home: () => import('../locales/ar/home.json').then((module) => module.default),
    about: () => import('../locales/ar/about.json').then((module) => module.default),
    benefits: () => import('../locales/ar/benefits.json').then((module) => module.default),
    'bulk-order': () => import('../locales/ar/bulk-order.json').then((module) => module.default),
    'private-label': () => import('../locales/ar/private-label.json').then((module) => module.default),
    blog: () => import('../locales/ar/blog.json').then((module) => module.default),
    faq: () => import('../locales/ar/faq.json').then((module) => module.default),
    contact: () => import('../locales/ar/contact.json').then((module) => module.default),
  },
};

export type Locale = keyof typeof dictionaries;
export type Page = keyof DictionaryGroup;

export const getDictionary = async <T extends Page>(locale: string, page: T): Promise<any> => {
  const loc = dictionaries[locale] ? locale : 'en';
  const loadDictionary = dictionaries[loc][page] || dictionaries['en'][page];
  return await loadDictionary();
};
