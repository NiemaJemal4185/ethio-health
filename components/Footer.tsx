
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 md:px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">
            {lang === Language.EN ? 'Ethiopian Health Advisor' : 'የኢትዮጵያ የጤና አማካሪ'}
          </h3>
          <p className="text-sm">{t.footerTagline}</p>
        </div>
        <div className="md:text-right">
          <p className="text-xs leading-relaxed max-w-md ml-auto">
            {t.footerLegal}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
