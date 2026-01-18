import { Category, Stimulus, StimulusType } from './types';

// Supabase Configuration
export const SUPABASE_URL = "https://gqulzoctsltwxmzvofwv.supabase.co"; 
export const SUPABASE_KEY = "sb_publishable_alcHOMdoEOvJmuSvwEeeoQ_HnbodgT3";

// Bashkir Words
export const BASHKIR_WORDS = [
  "Юрта", "Сабантуй", "Тюбетейка", "Агидель", "Урал-Батыр", 
  "Бешмет", "Кумыс", "Курай", "Бешбармак"
];

// Russian Words
export const RUSSIAN_WORDS = [
  "Шапка-ушанка", "Квас", "Пельмени", "Балалайка", "Изба", 
  "Илья Муромец", "Волга", "Масленица", "Кокошник"
];

// Local Images
// We use string paths relative to the public/root directory.
// Ensure you have a folder named 'images' in your public directory containing these files.
// This prevents 'Module not found' errors if a file is missing during the build.
export const HORSE_IMAGES = [
  './images/horse_1.jpg',
  './images/horse_2.jpg',
  './images/horse_3.jpg',
  './images/horse_4.jpg',
  './images/horse_5.jpg',
  './images/horse_6.jpg',
  './images/horse_7.jpg',
  './images/horse_8.jpg'
];

export const COW_IMAGES = [
  './images/cow_1.jpg',
  './images/cow_2.jpg',
  './images/cow_3.jpg',
  './images/cow_4.jpg',
  './images/cow_5.jpg',
  './images/cow_6.jpg',
  './images/cow_7.jpg',
  './images/cow_8.jpg'
];

// Generate Stimuli Pool
export const STIMULI_POOL: Stimulus[] = [
  ...BASHKIR_WORDS.map((w, i) => ({ id: `bash_${i}`, content: w, type: StimulusType.WORD, category: Category.BASHKIR })),
  ...RUSSIAN_WORDS.map((w, i) => ({ id: `rus_${i}`, content: w, type: StimulusType.WORD, category: Category.RUSSIAN })),
  ...HORSE_IMAGES.map((url, i) => ({ id: `horse_${i}`, content: url, type: StimulusType.IMAGE, category: Category.HORSE })),
  ...COW_IMAGES.map((url, i) => ({ id: `cow_${i}`, content: url, type: StimulusType.IMAGE, category: Category.COW })),
];
