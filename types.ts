
export enum AppSection {
  HOME = 'home',
  TRADITIONAL = 'traditional',
  MODERN = 'modern',
  ABOUT = 'about'
}

export enum Language {
  EN = 'en',
  AM = 'am'
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Hospital {
  id: string;
  name: { en: string; am: string };
  type: 'public' | 'private';
  address: { en: string; am: string };
  coords: Coordinates;
  specialties: { en: string[]; am: string[] };
  minCost?: number;
  maxCost?: number;
  city: { en: string; am: string };
}

export interface TraditionalCure {
  symptomKeywords: string[];
  cureName: { en: string; am: string };
  description: { en: string; am: string };
  amharicSymptom: string;
}
