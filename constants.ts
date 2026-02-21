
import { TraditionalCure, Hospital } from './types';

export const TRADITIONAL_CURES: TraditionalCure[] = [
  {
    symptomKeywords: ['headache', 'tension', 'migraine', 'ራስ ምታት'],
    cureName: { en: 'Tenadam (Rue)', am: 'ጤናዳም' },
    amharicSymptom: 'ራስ ምታት',
    description: {
      en: 'Steep a few leaves of Tenadam in hot water to make tea. Known for calming properties and headache relief.',
      am: 'ጥቂት የጤናዳም ቅጠሎችን በሙቅ ውሃ ውስጥ ዘፍዝፎ እንደ ሻይ መጠጣት። ለራስ ምታት እና ለጭንቀት እፎይታ ይሰጣል።'
    }
  },
  {
    symptomKeywords: ['stomach', 'nausea', 'vomiting', 'የሆድ ቁርጠት', 'ማቅለሽለሽ'],
    cureName: { en: 'Zingibil (Ginger)', am: 'ዝንጅብል' },
    amharicSymptom: 'የሆድ ቁርጠት',
    description: {
      en: 'Boil fresh ginger slices in water for 10 minutes. Ginger is highly effective for soothing the digestive system.',
      am: 'ትኩስ የዝንጅብል ቁርጥራጮችን ለ10 ደቂቃ ያህል በውሃ ውስጥ ማፍላት። ዝንጅብል የምግብ መፈጨት ስርዓትን ለማረጋጋት በጣም ውጤታማ ነው።'
    }
  },
  {
    symptomKeywords: ['cough', 'flu', 'cold', 'ጉንፋን', 'ሳል'],
    cureName: { en: 'Bahir Zaf (Eucalyptus)', am: 'ባህር ዛፍ' },
    amharicSymptom: 'ጉንፋን',
    description: {
      en: 'Boil Eucalyptus (Bahir Zaf) leaves and inhale the steam (Tishiret) to clear your lungs and throat.',
      am: 'የባህር ዛፍ ቅጠልን አፍልቶ እንፋሎቱን መታጠን (ትሽረት)። ይህ ሳንባን እና ጉሮሮን ለማጽዳት ይረዳል።'
    }
  },
  {
    symptomKeywords: ['fever', 'high temperature', 'ትኩሳት'],
    cureName: { en: 'Cooling Compress and Lemon', am: 'ቀዝቃዛ መጭመቂያ እና ሎሚ' },
    amharicSymptom: 'ትኩሳት',
    description: {
      en: 'Apply a cool, damp cloth to the forehead and drink warm lemon water to lower body temperature.',
      am: 'ቀዝቃዛ እና እርጥብ ጨርቅ በግንባር ላይ ማድረግ እና የሰውነት ሙቀትን ለመቀነስ የሎሚ ውሃ መጠጣት።'
    }
  },
  {
    symptomKeywords: ['michi', 'cold sore', 'chills', 'ምች'],
    cureName: { en: 'Damakese (Wild Mint)', am: 'ዳማክሴ' },
    amharicSymptom: 'ምች',
    description: {
      en: 'Crush fresh Damakese leaves and inhale the aroma. It is the most effective traditional remedy for Michi.',
      am: 'ትኩስ የዳማክሴ ቅጠልን በማሸት ማሽተት። ለምች በጣም ውጤታማ የሆነ ባህላዊ መድሃኒት ነው።'
    }
  },
  {
    symptomKeywords: ['appetite', 'digestion', 'ባሲል', 'ዘቃቅቤ'],
    cureName: { en: 'Basil Leaf (Zekakibe)', am: 'ዘቃቅቤ' },
    amharicSymptom: 'የምግብ ፍላጎት',
    description: {
      en: 'Add fresh Basil leaves to your tea. It helps improve appetite and settle the stomach.',
      am: 'ትኩስ የዘቃቅቤ ቅጠሎችን በሻይ ውስጥ መጨመር። የምግብ ፍላጎትን ለመጨመር እና ሆድን ለማረጋጋት ይረዳል።'
    }
  }
];

export const HOSPITALS: Hospital[] = [
  // PUBLIC ADDIS ABABA
  { id: 'pb1', name: { en: 'Tikur Anbessa Hospital', am: 'ጥቁር አንበሳ ሆስፒታል' }, type: 'public', address: { en: 'Churchill Road', am: 'ቸርችል ጎዳና' }, coords: { lat: 9.0180, lng: 38.7510 }, specialties: { en: ['Oncology', 'Cardiac'], am: ['ካንሰር', 'ልብ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb2', name: { en: 'St. Paul Millennium Hospital', am: 'ቅዱስ ጳውሎስ ሆስፒታል' }, type: 'public', address: { en: 'Gullele', am: 'ጉለሌ' }, coords: { lat: 9.0480, lng: 38.7400 }, specialties: { en: ['Kidney', 'Maternity'], am: ['ኩላሊት', 'ወሊድ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb3', name: { en: 'Yekatit 12 Hospital', am: 'የካቲት 12 ሆስፒታል' }, type: 'public', address: { en: '6 Kilo', am: '6 ኪሎ' }, coords: { lat: 9.0340, lng: 38.7620 }, specialties: { en: ['Burn Center', 'General'], am: ['ቃጠሎ', 'አጠቃላይ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb4', name: { en: 'Menelik II Hospital', am: 'ዳግማዊ ምኒልክ ሆስፒታል' }, type: 'public', address: { en: 'Jan Meda', am: 'ጃን ሜዳ' }, coords: { lat: 9.0350, lng: 38.7680 }, specialties: { en: ['Eye Surgery', 'Trauma'], am: ['የዓይን ቀዶ ጥገና', 'አደጋ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb5', name: { en: 'Zewditu Memorial Hospital', am: 'ዘውዲቱ መታሰቢያ ሆስፒታል' }, type: 'public', address: { en: 'Filwuha', am: 'ፍልውሃ' }, coords: { lat: 9.0140, lng: 38.7610 }, specialties: { en: ['Maternity', 'Pediatrics'], am: ['ወሊድ', 'ህፃናት'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb6', name: { en: 'Ras Desta Damtew Hospital', am: 'ራስ ደስታ ዳምጠው ሆስፒታል' }, type: 'public', address: { en: 'Arat Kilo', am: 'አራት ኪሎ' }, coords: { lat: 9.0320, lng: 38.7550 }, specialties: { en: ['General', 'Dental'], am: ['አጠቃላይ', 'ጥርስ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb7', name: { en: 'Gandhi Memorial Hospital', am: 'ጋንዲ መታሰቢያ ሆስፒታል' }, type: 'public', address: { en: 'Stadium', am: 'ስታዲየም' }, coords: { lat: 9.0160, lng: 38.7560 }, specialties: { en: ['Maternity', 'Gynecology'], am: ['ወሊድ', 'ጽንስ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb8', name: { en: 'Tirunesh Beijing Hospital', am: 'ጥሩነሽ ቤጂንግ ሆስፒታል' }, type: 'public', address: { en: 'Akaki Kality', am: 'አቃቂ ቃሊቲ' }, coords: { lat: 8.8850, lng: 38.7850 }, specialties: { en: ['General', 'Orthopedics'], am: ['አጠቃላይ', 'አጥንት'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb9', name: { en: 'Amanuel Mental Hospital', am: 'አማኑኤል የአእምሮ ሆስፒታል' }, type: 'public', address: { en: 'Kera', am: 'ቄራ' }, coords: { lat: 9.0080, lng: 38.7350 }, specialties: { en: ['Mental Health'], am: ['አእምሮ ጤና'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb10', name: { en: 'St. Peter Hospital', am: 'ቅዱስ ጴጥሮስ ሆስፒታል' }, type: 'public', address: { en: 'Shiro Meda', am: 'ሽሮ ሜዳ' }, coords: { lat: 9.0650, lng: 38.7580 }, specialties: { en: ['Respiratory', 'TB'], am: ['ሳንባ', 'ቲቢ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb11', name: { en: 'Armed Forces Hospital', am: 'ጦር ኃይሎች ሆስፒታል' }, type: 'public', address: { en: 'Tor Hailoch', am: 'ጦር ኃይሎች' }, coords: { lat: 9.0220, lng: 38.7250 }, specialties: { en: ['General', 'Trauma'], am: ['አጠቃላይ', 'አደጋ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb12', name: { en: 'Federal Police Hospital', am: 'የፌደራል ፖሊስ ሆስፒታል' }, type: 'public', address: { en: 'Mexico', am: 'ሜክሲኮ' }, coords: { lat: 9.0110, lng: 38.7420 }, specialties: { en: ['General'], am: ['አጠቃላይ'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'pb13', name: { en: 'ALERT Hospital', am: 'አለርት ሆስፒታል' }, type: 'public', address: { en: 'Zenebework', am: 'ዘነበወርቅ' }, coords: { lat: 8.9950, lng: 38.7050 }, specialties: { en: ['Dermatology', 'Surgery'], am: ['ቆዳ', 'ቀዶ ጥገና'] }, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  
  // PUBLIC REGIONAL
  { id: 'pb14', name: { en: 'Adama Referral Hospital', am: 'አዳማ ሪፈራል ሆስፒታል' }, type: 'public', address: { en: 'Adama Town', am: 'አዳማ' }, coords: { lat: 8.5410, lng: 39.2680 }, specialties: { en: ['General', 'Emergency'], am: ['አጠቃላይ', 'ድንገተኛ'] }, city: { en: 'Adama', am: 'አዳማ' } },
  { id: 'pb15', name: { en: 'Felege Hiwot Hospital', am: 'ፈለገ ሕይወት ሆስፒታል' }, type: 'public', address: { en: 'Bahir Dar', am: 'ባሕር ዳር' }, coords: { lat: 11.5830, lng: 37.3820 }, specialties: { en: ['General', 'Surgery'], am: ['አጠቃላይ', 'ቀዶ ጥገና'] }, city: { en: 'Bahir Dar', am: 'ባሕር ዳር' } },
  { id: 'pb16', name: { en: 'Tibebe Ghion Hospital', am: 'ጥበበ ግዮን ሆስፒታል' }, type: 'public', address: { en: 'Bahir Dar', am: 'ባሕር ዳር' }, coords: { lat: 11.5600, lng: 37.3500 }, specialties: { en: ['Specialized'], am: ['ስፔሻላይዝድ'] }, city: { en: 'Bahir Dar', am: 'ባሕር ዳር' } },
  { id: 'pb17', name: { en: 'Gondar University Hospital', am: 'ጎንደር ዩኒቨርሲቲ ሆስፒታል' }, type: 'public', address: { en: 'Gondar', am: 'ጎንደር' }, coords: { lat: 12.6000, lng: 37.4660 }, specialties: { en: ['Referral'], am: ['ሪፈራል'] }, city: { en: 'Gondar', am: 'ጎንደር' } },
  { id: 'pb18', name: { en: 'Ayder Referral Hospital', am: 'አይደር ሪፈራል ሆስፒታል' }, type: 'public', address: { en: 'Mekelle', am: 'መቀሌ' }, coords: { lat: 13.4960, lng: 39.4890 }, specialties: { en: ['Emergency'], am: ['ድንገተኛ'] }, city: { en: 'Mekelle', am: 'መቀሌ' } },
  { id: 'pb19', name: { en: 'Hiwot Fana Hospital', am: 'ሕይወት ፋና ሆስፒታል' }, type: 'public', address: { en: 'Harar', am: 'ሐረር' }, coords: { lat: 9.3130, lng: 42.1280 }, specialties: { en: ['Maternity'], am: ['ወሊድ'] }, city: { en: 'Harar', am: 'ሐረር' } },
  { id: 'pb20', name: { en: 'Dil Chora Hospital', am: 'ድል ጮራ ሆስፒታል' }, type: 'public', address: { en: 'Dire Dawa', am: 'ድሬዳዋ' }, coords: { lat: 9.5930, lng: 41.8660 }, specialties: { en: ['General'], am: ['አጠቃላይ'] }, city: { en: 'Dire Dawa', am: 'ድሬዳዋ' } },
  { id: 'pb21', name: { en: 'Jimma University Hospital', am: 'ጅማ ዩኒቨርሲቲ ሆስፒታል' }, type: 'public', address: { en: 'Jimma', am: 'ጅማ' }, coords: { lat: 7.6760, lng: 36.8320 }, specialties: { en: ['Specialized'], am: ['ስፔሻላይዝድ'] }, city: { en: 'Jimma', am: 'ጅማ' } },
  { id: 'pb22', name: { en: 'Hawassa Referral Hospital', am: 'ሀዋሳ ሪፈራል ሆስፒታል' }, type: 'public', address: { en: 'Hawassa', am: 'ሀዋሳ' }, coords: { lat: 7.0500, lng: 38.4710 }, specialties: { en: ['General'], am: ['አጠቃላይ'] }, city: { en: 'Hawassa', am: 'ሀዋሳ' } },

  // PRIVATE (EXPANDED LIST)
  { id: 'p1', name: { en: 'St. Gabriel Hospital', am: 'ቅዱስ ገብርኤል ሆስፒታል' }, type: 'private', address: { en: 'Bole', am: 'ቦሌ' }, coords: { lat: 9.0012, lng: 38.7845 }, specialties: { en: ['Surgery', 'General'], am: ['ቀዶ ጥገና', 'አጠቃላይ'] }, minCost: 1500, maxCost: 15000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p2', name: { en: 'Hayat Hospital', am: 'ሀያት ሆስፒታል' }, type: 'private', address: { en: 'Bole Area', am: 'ቦሌ አካባቢ' }, coords: { lat: 8.9950, lng: 38.7890 }, specialties: { en: ['Cardiac', 'General'], am: ['ልብ', 'አጠቃላይ'] }, minCost: 2000, maxCost: 25000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p3', name: { en: 'Landmark Hospital', am: 'ላንድማርክ ሆስፒታል' }, type: 'private', address: { en: 'Mexico', am: 'ሜክሲኮ' }, coords: { lat: 9.0100, lng: 38.7450 }, specialties: { en: ['Neurology', 'Internal'], am: ['ነርቭ', 'ውስጥ ደዌ'] }, minCost: 3000, maxCost: 18000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p4', name: { en: 'Nordic Medical Centre', am: 'ኖርዲክ የህክምና ማዕከል' }, type: 'private', address: { en: 'Bole Atlas', am: 'ቦሌ አትላስ' }, coords: { lat: 9.0020, lng: 38.7860 }, specialties: { en: ['Emergency', 'Surgery'], am: ['ድንገተኛ', 'ቀዶ ጥገና'] }, minCost: 5000, maxCost: 50000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p5', name: { en: 'Myungsung (MCM) Hospital', am: 'ምዩንግሱንግ (ኤም.ሲ.ኤም) ሆስፒታል' }, type: 'private', address: { en: 'Gerji', am: 'ገርጂ' }, coords: { lat: 9.0050, lng: 38.8050 }, specialties: { en: ['General', 'Specialized'], am: ['አጠቃላይ', 'ስፔሻላይዝድ'] }, minCost: 3000, maxCost: 35000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p6', name: { en: 'Hallelujah General Hospital', am: 'ሃሌሉያ አጠቃላይ ሆስፒታል' }, type: 'private', address: { en: 'Gotera', am: 'ጎተራ' }, coords: { lat: 8.9910, lng: 38.7580 }, specialties: { en: ['Surgery', 'General'], am: ['ቀዶ ጥገና', 'አጠቃላይ'] }, minCost: 2500, maxCost: 22000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p7', name: { en: 'Addis Hiwot Hospital', am: 'አዲስ ሕይወት ሆስፒታል' }, type: 'private', address: { en: 'Bole', am: 'ቦሌ' }, coords: { lat: 9.0025, lng: 38.7830 }, specialties: { en: ['Maternity', 'General'], am: ['ወሊድ', 'አጠቃላይ'] }, minCost: 1800, maxCost: 16000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p8', name: { en: 'Kadisco Hospital', am: 'ካዲኮ ሆስፒታል' }, type: 'private', address: { en: 'Gerji', am: 'ገርጂ' }, coords: { lat: 9.0070, lng: 38.8010 }, specialties: { en: ['General'], am: ['አጠቃላይ'] }, minCost: 1200, maxCost: 10000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p9', name: { en: 'Amin General Hospital', am: 'አሚን አጠቃላይ ሆስፒታል' }, type: 'private', address: { en: 'Bole', am: 'ቦሌ' }, coords: { lat: 8.9980, lng: 38.7870 }, specialties: { en: ['General'], am: ['አጠቃላይ'] }, minCost: 1500, maxCost: 14000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } },
  { id: 'p10', name: { en: 'Zemzem General Hospital', am: 'ዘምዘም አጠቃላይ ሆስፒታል' }, type: 'private', address: { en: 'Mexico Area', am: 'ሜክሲኮ አካባቢ' }, coords: { lat: 9.0120, lng: 38.7400 }, specialties: { en: ['Surgery'], am: ['ቀዶ ጥገና'] }, minCost: 2200, maxCost: 19000, city: { en: 'Addis Ababa', am: 'አዲስ አበባ' } }
];
