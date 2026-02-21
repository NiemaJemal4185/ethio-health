
import React from 'react';
import { AppSection, Language } from '../types';
import { UI_STRINGS } from '../translations';

interface HomeProps {
  onNavigate: (section: AppSection) => void;
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ onNavigate, lang }) => {
  const t = UI_STRINGS[lang];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
        {t.heroTitle} <span className="text-emerald-600">{t.heroSubtitle}</span>
      </h1>
      <p className="text-lg text-slate-600 mb-12 max-w-2xl">
        {t.heroDesc}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Traditional Card */}
        <div 
          onClick={() => onNavigate(AppSection.TRADITIONAL)}
          className="group cursor-pointer bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300 flex flex-col items-center text-center border-b-4 border-b-emerald-500"
        >
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">{t.tradCardTitle}</h3>
          <p className="text-slate-500 mb-6">{t.tradCardDesc}</p>
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors">
            {t.learnMore}
          </button>
        </div>

        {/* Modern Card */}
        <div 
          onClick={() => onNavigate(AppSection.MODERN)}
          className="group cursor-pointer bg-white p-8 rounded-3xl shadow-sm border border-blue-100 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 flex flex-col items-center text-center border-b-4 border-b-blue-500"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">{t.modCardTitle}</h3>
          <p className="text-slate-500 mb-6">{t.modCardDesc}</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
            {t.getRec}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
