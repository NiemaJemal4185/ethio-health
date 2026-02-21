
import React from 'react';
import { AppSection, Language } from '../types';
import { UI_STRINGS } from '../translations';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  language: Language;
  onToggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, language, onToggleLanguage }) => {
  const t = UI_STRINGS[language];

  const navItems = [
    { id: AppSection.HOME, label: t.navHome },
    { id: AppSection.TRADITIONAL, label: t.navTraditional },
    { id: AppSection.MODERN, label: t.navModern },
    { id: AppSection.ABOUT, label: t.navAbout },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-16 bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-50 px-4 md:px-6 rounded-2xl flex items-center justify-between transition-all duration-300">
      <div 
        className="flex items-center gap-2 cursor-pointer group" 
        onClick={() => onNavigate(AppSection.HOME)}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-transform duration-300">
          <span className="text-white font-black text-sm uppercase">EH</span>
        </div>
        <span className="font-black text-slate-800 hidden sm:inline tracking-tight">
          {language === Language.EN ? 'ETHIO HEALTH' : 'የጤና አማካሪ'}
        </span>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex bg-slate-100/50 p-1 rounded-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 md:px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                activeSection === item.id 
                  ? 'bg-white text-emerald-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={onToggleLanguage}
          className="flex items-center justify-center w-10 h-10 bg-slate-900 text-white rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200"
          title="Toggle Language"
        >
          <span className="text-[10px] font-black uppercase">
            {language === Language.EN ? 'አማ' : 'EN'}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
