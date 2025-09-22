'use client';

interface LanguageSwitcherProps {
  currentLocale: string;
  onChangeLocale: (locale: string) => void;
}

export const LanguageSwitcher = ({ currentLocale, onChangeLocale }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onChangeLocale('fa')}
        className={`px-3 py-1 rounded-md transition-all duration-200 ${
          currentLocale === 'fa'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        فارسی
      </button>
      <button
        onClick={() => onChangeLocale('en')}
        className={`px-3 py-1 rounded-md transition-all duration-200 ${
          currentLocale === 'en'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        English
      </button>
    </div>
  );
};