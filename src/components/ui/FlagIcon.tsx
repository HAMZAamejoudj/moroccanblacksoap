import US from 'country-flag-icons/react/3x2/US';
import FR from 'country-flag-icons/react/3x2/FR';
import MA from 'country-flag-icons/react/3x2/MA';

type FlagCode = 'en' | 'fr' | 'ar';

const FLAG_COMPONENTS = {
  en: US,
  fr: FR,
  ar: MA,
};

type FlagIconProps = {
  code: FlagCode;
  className?: string;
  title?: string;
};

const FlagIcon = ({ code, className = 'w-5 h-auto rounded-sm', title }: FlagIconProps) => {
  const Flag = FLAG_COMPONENTS[code];
  return <Flag className={className} title={title} aria-hidden={title ? undefined : true} />;
};

export default FlagIcon;
