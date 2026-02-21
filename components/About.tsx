
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../translations';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">{t.aboutTitle}</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {t.aboutDesc1}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            {t.aboutDesc2}
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h4 className="text-red-800 font-bold mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {t.disclaimerLabel}
            </h4>
            <p className="text-red-700 text-sm italic">
              {lang === Language.EN 
                ? "This app is intended for informational purposes only. It is NOT a substitute for professional medical advice. Recommendations are based on mock data."
                : "ይህ መተግበሪያ ለመረጃ አገልግሎት ብቻ የታሰበ ነው። ለሙያዊ የህክምና ምክር ምትክ አይደለም። ምክሮች በናሙና መረጃ ላይ የተመሰረቱ ናቸው።"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
