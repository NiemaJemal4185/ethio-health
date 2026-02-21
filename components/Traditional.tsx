
import React, { useState } from 'react';
import { TRADITIONAL_CURES } from '../constants';
import { TraditionalCure, Language } from '../types';
import { UI_STRINGS } from '../translations';

interface TraditionalProps {
  lang: Language;
}

const Traditional: React.FC<TraditionalProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const [symptoms, setSymptoms] = useState('');
  const [severity, setSeverity] = useState(5);
  const [recommendation, setRecommendation] = useState<TraditionalCure | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    const lowerInput = symptoms.toLowerCase();
    const match = TRADITIONAL_CURES.find(cure => 
      cure.symptomKeywords.some(keyword => lowerInput.includes(keyword.toLowerCase()))
    );

    setRecommendation(match || null);
    setHasSearched(true);
  };

  const getSeverityColor = (val: number) => {
    if (val <= 3) return 'bg-emerald-500';
    if (val <= 7) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getSeverityEmoji = (val: number) => {
    if (val <= 3) return '😌';
    if (val <= 7) return '😟';
    return '😫';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-emerald-50 rounded-[2.5rem] p-6 md:p-12 mb-8 border border-emerald-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-200/20 rounded-full -mr-24 -mt-24 blur-3xl" />
        <h2 className="text-3xl font-black text-emerald-900 mb-2">{t.tradTitle}</h2>
        <p className="text-emerald-700 mb-10">{t.tradSubtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label className="block text-sm font-black text-emerald-900 mb-3 uppercase tracking-widest">
              {t.labelSymptoms}
            </label>
            <input
              type="text"
              required
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full px-6 py-5 rounded-2xl border-2 border-emerald-100 focus:ring-8 focus:ring-emerald-500/10 outline-none transition-all text-xl font-bold bg-white"
              placeholder={lang === Language.EN ? "Enter symptoms..." : "ምልክቶችን እዚህ ያስገቡ..."}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <label className="text-sm font-black text-emerald-900 uppercase tracking-widest">
                {t.labelSeverity}
              </label>
              <div className="flex items-center gap-4">
                 <span className="text-4xl transform transition-transform hover:scale-125 duration-300">
                   {getSeverityEmoji(severity)}
                 </span>
                 <div className={`text-3xl font-black text-white px-6 py-2 rounded-2xl shadow-xl ${getSeverityColor(severity)} transition-all duration-500`}>
                   {severity}
                 </div>
              </div>
            </div>
            
            <div className="relative h-4 group">
              <div className="absolute top-0 left-0 w-full h-full bg-slate-200 rounded-full shadow-inner" />
              <div 
                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out shadow-lg ${getSeverityColor(severity)}`}
                style={{ width: `${(severity / 10) * 100}%` }}
              />
              <input
                type="range"
                min="1"
                max="10"
                value={severity}
                onChange={(e) => setSeverity(parseInt(e.target.value))}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-emerald-600 rounded-full shadow-2xl pointer-events-none transition-all duration-300 group-hover:scale-110"
                style={{ left: `calc(${(severity / 10) * 100}% - 16px)` }}
              />
            </div>
            
            <div className="flex justify-between mt-4 px-1">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Mild</span>
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Extreme</span>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-6 bg-emerald-600 text-white font-black rounded-3xl hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-2xl shadow-emerald-200 text-2xl uppercase tracking-widest"
          >
            {t.btnFindCure}
          </button>
        </form>
      </div>

      {hasSearched && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          {recommendation ? (
            <div className="bg-white rounded-[3rem] p-10 border-2 border-emerald-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full -mr-20 -mt-20" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                  !
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                   {recommendation.amharicSymptom}
                </h3>
              </div>

              <div className="bg-emerald-50/50 p-10 rounded-[2rem] mb-8 border border-emerald-100">
                <h4 className="font-black text-emerald-800 text-2xl mb-4 flex items-center gap-3">
                   <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                   {recommendation.cureName[lang]}
                </h4>
                <p className="text-slate-800 leading-relaxed text-xl">{recommendation.description[lang]}</p>
              </div>
              
              <div className={`flex items-start gap-6 p-8 rounded-[2rem] border-2 ${severity > 7 ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}>
                <div className={`p-4 rounded-2xl shadow-sm ${severity > 7 ? 'bg-red-600 text-white' : 'bg-amber-500 text-white'}`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <strong className={`text-xl font-black uppercase tracking-widest ${severity > 7 ? 'text-red-900' : 'text-amber-900'}`}>{t.disclaimerLabel}</strong>
                  <p className={`text-lg font-medium mt-1 ${severity > 7 ? 'text-red-800' : 'text-amber-800'}`}>
                    {lang === Language.EN ? 'This is traditional advice; consult a health center if it is severe.' : 'ይህ ባህላዊ ምክር ነው፤ ህመሙ ከባድ ከሆነ ጤና ጣቢያ ያማክሩ።'}
                  </p>
                  {severity > 7 && (
                    <div className="mt-4 p-4 bg-red-600 text-white rounded-2xl font-black text-center shadow-lg transform rotate-1">
                      {t.severeWarning(severity)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-slate-200 shadow-xl">
              <div className="text-8xl mb-8 grayscale opacity-30">🌿</div>
              <h3 className="text-3xl font-black text-slate-800 mb-4">{t.noMatch}</h3>
              <p className="text-slate-400 text-xl max-w-sm mx-auto font-bold">{t.noMatchDesc}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Traditional;
