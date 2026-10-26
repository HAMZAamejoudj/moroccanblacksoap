'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import FlagIcon from '@/components/ui/FlagIcon';

const languages = [
  { code: 'en' as const, name: 'English' },
  { code: 'fr' as const, name: 'Français' },
  { code: 'ar' as const, name: 'العربية' },
];

const LanguageSwitcher = ({ light = false }: { light?: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathLang = pathname.split('/')[1];
  const currentLang = ['ar', 'fr'].includes(pathLang) ? pathLang : 'en';
  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    const segments = pathname.split('/').filter(Boolean);

    if (['ar', 'fr', 'en'].includes(segments[0])) {
      segments.shift();
    }

    segments.unshift(langCode);

    const newPath = `/${segments.join('/')}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity px-2.5 py-1.5 rounded-full focus:outline-none ${
          light ? 'hover:bg-white/10' : 'hover:bg-stone-100'
        }`}
        aria-label={`Select language: ${currentLanguage.name}`}
      >
        <FlagIcon
          code={currentLanguage.code}
          className="w-6 h-4 rounded-[3px] shadow-sm border border-stone-200/80 object-cover"
          title={currentLanguage.name}
        />
        <span className={`font-bold text-xs uppercase hidden sm:inline ${light ? 'text-white' : 'text-stone-700'}`}>
          {currentLanguage.code}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${light ? 'text-white' : 'text-stone-600'}`}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white border border-stone-200 shadow-xl z-50 overflow-hidden py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-stone-50 transition-colors text-stone-700 text-sm font-medium ${
                currentLang === lang.code
                  ? 'bg-secondary/10 text-primary font-bold'
                  : ''
              }`}
            >
              <FlagIcon
                code={lang.code}
                className="w-6 h-4 rounded-[3px] shadow-sm border border-stone-200/80 object-cover shrink-0"
                title={lang.name}
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
