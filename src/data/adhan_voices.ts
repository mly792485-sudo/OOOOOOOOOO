/*
 * Audio metadata for the bundled adhan.
 * The shipped recording is a CC0/Public Domain "Beautiful adhan" recording
 * published by its author on Wikimedia Commons. It is intentionally not
 * attributed to a named sheikh without a verifiable source.
 */
export interface AdhanVoiceOption {
  id: string;
  nameAr: string;
  nameEn: string;
  muezzin: string;
  description: string;
  audioUrls: string[];
  nativeFile: string;
}

export const BUNDLED_ADHAN_ID = 'bundled-cc0';
export const BUNDLED_ADHAN_FILE = 'adhan.wav';

export const ADHAN_VOICES_LIST: AdhanVoiceOption[] = [
  {
    id: BUNDLED_ADHAN_ID,
    nameAr: 'أذان جميل موثّق (يعمل دون إنترنت)',
    nameEn: 'Beautiful Adhan (Offline)',
    muezzin: 'تسجيل Adam-synagda — CC0 / Public Domain',
    description: 'تسجيل أذان منشور على Wikimedia Commons بترخيص CC0، مناسب للتشغيل والإشعارات دون اتصال. ليس منسوبًا إلى شيخ بعينه.',
    audioUrls: [],
    nativeFile: BUNDLED_ADHAN_FILE,
  },
];
