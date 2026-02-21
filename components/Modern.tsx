
import React, { useState, useEffect } from 'react';
import { HOSPITALS } from '../constants';
import { Hospital, Coordinates, Language } from '../types';
import { UI_STRINGS } from '../translations';

interface ModernProps {
  lang: Language;
}

const Modern: React.FC<ModernProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const [tab, setTab] = useState<'public' | 'private'>('public');
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [minBudget, setMinBudget] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(50000);
  const [symptomFilter, setSymptomFilter] = useState('');
  const [results, setResults] = useState<Hospital[]>([]);

  const cities = Array.from(new Set(HOSPITALS.map(h => h.city[lang])));

  const calculateDistance = (coord1: Coordinates, coord2: Coordinates) => {
    const R = 6371;
    const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
    const dLon = (coord2.lng - coord1.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
  };

  const handleLocationToggle = () => {
    if (userLocation || isDetecting) {
      // If already detecting or detected, stop and reset
      setUserLocation(null);
      setIsDetecting(false);
      setLocError(null);
      return;
    }

    if (!navigator.geolocation) {
      setLocError("Geolocation not supported");
      return;
    }

    setIsDetecting(true);
    setLocError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setIsDetecting(false);
        setSelectedCity(''); 
        setLocError(null);
      },
      (err) => {
        setLocError(t.locDenied);
        setIsDetecting(false);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  const processRecommendation = () => {
    let filtered = HOSPITALS.filter(h => h.type === tab);

    if (selectedCity && selectedCity !== '') {
      filtered = filtered.filter(h => h.city[lang] === selectedCity);
    }

    if (tab === 'private') {
      filtered = filtered.filter(h => 
        (h.minCost || 0) <= maxBudget && (h.maxCost || Infinity) >= minBudget
      );
    }

    if (symptomFilter.trim()) {
      const kw = symptomFilter.toLowerCase();
      filtered = filtered.filter(h => 
        h.specialties.en.some(s => s.toLowerCase().includes(kw)) ||
        h.specialties.am.some(s => s.toLowerCase().includes(kw)) ||
        h.name.en.toLowerCase().includes(kw) ||
        h.name.am.toLowerCase().includes(kw)
      );
    }

    if (userLocation) {
      filtered.sort((a, b) => {
        const distA = calculateDistance(userLocation, a.coords);
        const distB = calculateDistance(userLocation, b.coords);
        return distA - distB;
      });
    }

    setResults(filtered); 
  };

  useEffect(() => {
    processRecommendation();
  }, [tab, userLocation, selectedCity, minBudget, maxBudget, symptomFilter]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[2.5rem] p-6 md:p-12 mb-10 border border-slate-200 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <h2 className="text-4xl font-black text-slate-900 mb-2">{t.modernTitle}</h2>
        <p className="text-slate-500 mb-10 text-lg font-medium">{t.modernSubtitle}</p>

        <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] mb-10 shadow-inner">
          <button 
            onClick={() => setTab('public')}
            className={`flex-1 py-4 rounded-2xl font-black transition-all text-lg ${tab === 'public' ? 'bg-white text-blue-600 shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {t.publicTab}
          </button>
          <button 
            onClick={() => setTab('private')}
            className={`flex-1 py-4 rounded-2xl font-black transition-all text-lg ${tab === 'private' ? 'bg-white text-blue-600 shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {t.privateTab}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.locStatus}</label>
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={handleLocationToggle}
                className={`flex items-center justify-center gap-3 py-4 border-2 rounded-2xl font-black transition-all ${userLocation || isDetecting ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600'}`}
              >
                <svg className={`w-6 h-6 ${(isDetecting || userLocation) ? 'animate-pulse' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {isDetecting ? (lang === Language.EN ? 'Stop Detecting' : 'መፈለግ አቁም') : (userLocation ? t.locDetected : t.locEnable)}
              </button>
              
              <div className="relative">
                <select 
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    setUserLocation(null); 
                    setIsDetecting(false);
                  }}
                  className="w-full pl-5 pr-10 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl appearance-none font-bold text-slate-700 focus:ring-4 focus:ring-blue-500/10 outline-none cursor-pointer"
                >
                  <option value="">{t.locAllCities}</option>
                  {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
            {locError && <p className="text-xs text-red-500 font-bold italic">{locError}</p>}
          </div>

          <div className="space-y-4">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.labelSymptomOpt}</label>
            <input 
              type="text" 
              placeholder={lang === Language.EN ? "e.g. Surgery, Eye, Cardiac" : "ለምሳሌ፡ ቀዶ ጥገና፣ ዓይን፣ ልብ"}
              value={symptomFilter}
              onChange={(e) => setSymptomFilter(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 outline-none focus:ring-4 focus:ring-blue-500/10 font-bold text-slate-700 bg-slate-50"
            />
            {tab === 'private' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{t.labelMinBudget}</span>
                  <input type="number" value={minBudget} onChange={e => setMinBudget(parseInt(e.target.value) || 0)} className="w-full p-3 bg-white border border-slate-200 rounded-xl font-bold" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{t.labelMaxBudget}</span>
                  <input type="number" value={maxBudget} onChange={e => setMaxBudget(parseInt(e.target.value) || 0)} className="w-full p-3 bg-white border border-slate-200 rounded-xl font-bold" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center justify-between px-4 pb-4 border-b-2 border-slate-100">
           <h3 className="text-2xl font-black text-slate-900 tracking-tight">{t.topRecs}</h3>
           <span className="text-xs font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-full uppercase tracking-widest border border-blue-100 shadow-sm">
             {results.length} Matching Centers
           </span>
        </div>
        
        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-10">
            {results.map((hospital) => (
              <div 
                key={hospital.id} 
                className="group bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-500 flex flex-col md:flex-row md:items-center gap-10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-full w-3 bg-gradient-to-b from-blue-400 to-blue-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 shadow-inner">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    {userLocation && (
                      <div className="text-right bg-blue-50/50 p-4 rounded-2xl border border-blue-100 animate-in fade-in zoom-in duration-500">
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Distance</p>
                        <span className="text-blue-600 font-black text-2xl tracking-tighter">
                          {calculateDistance(userLocation, hospital.coords).toFixed(1)} KM
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{hospital.name[lang]}</h4>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <p className="text-lg font-bold text-slate-500">{hospital.address[lang]}, {hospital.city[lang]}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {hospital.specialties[lang].map(spec => (
                      <span key={spec} className="bg-slate-100 text-slate-600 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-slate-200 hover:bg-white hover:text-blue-600 hover:border-blue-600 transition-all cursor-default">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:w-72 gap-8 pt-8 md:pt-0 md:pl-10 border-t-2 md:border-t-0 md:border-l-2 border-slate-100 items-end justify-between self-stretch">
                  {hospital.type === 'private' ? (
                    <div className="text-right w-full">
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">{t.estCost}</p>
                      <div className="flex flex-col items-end">
                        <span className="font-black text-slate-900 text-3xl leading-none">{hospital.minCost?.toLocaleString()} - {hospital.maxCost?.toLocaleString()}</span>
                        <span className="text-xs font-black text-blue-600 uppercase tracking-widest mt-1">Ethiopian Birr (ETB)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-right w-full">
                      <span className="bg-emerald-600 text-white text-xs font-black px-6 py-3 rounded-2xl uppercase tracking-widest shadow-lg shadow-emerald-100 inline-block">Public Service</span>
                      <p className="text-[10px] text-emerald-500 font-black uppercase mt-2 tracking-widest">Government Support</p>
                    </div>
                  )}
                  
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hospital.name.en + ' ' + hospital.address.en + ' Ethiopia')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-4 px-10 py-6 bg-slate-900 text-white rounded-3xl font-black text-xl hover:bg-blue-600 active:scale-95 transition-all shadow-xl shadow-slate-200 hover:shadow-blue-200"
                  >
                    {t.directions}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-[3rem] p-24 text-center border-4 border-dashed border-slate-200">
            <div className="text-9xl mb-10 opacity-20 filter grayscale">🏥</div>
            <h3 className="text-3xl font-black text-slate-300 uppercase tracking-widest">{t.noResults}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modern;
