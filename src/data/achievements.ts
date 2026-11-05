// Certifications & achievements shown on the homepage.
//
// To add one, append an object to the array below. The section sorts itself:
// in-progress items first, then newest `date` first — array order doesn't matter.
//
// Certificate images: drop the original file in public/assets/certificates/
// and point `imageUrl` at it, e.g. '/assets/certificates/my-cert.jpg'.
// Until the file exists the card shows a placeholder frame and the build
// prints a warning naming the missing file.

export type AchievementCategory =
  | 'Data Science'
  | 'Machine Learning'
  | 'Web Development'
  | 'Cloud Engineering'
  | 'Teaching & Linguistics'
  | 'Professional Certification';

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  /** 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD'. For in-progress items, the start or expected date. */
  date: string;
  category: AchievementCategory;
  /** Original certificate image, as a path under public/ — opens full size in the lightbox */
  imageUrl?: string;
  /** Public verification page — opens in a new tab. Omit if the issuer has none; set credentialId instead. */
  credentialUrl?: string;
  /** Certificate / credential number, shown on the card */
  credentialId?: string;
  /** 2–4 core skills; shown as tags */
  skills: string[];
  /** Highlights the card with the brand accent */
  featured?: boolean;
  /** Omit for completed items */
  status?: 'in-progress';
}

// Titles, issuers, dates and links are taken from the certificate images themselves.
export const achievementsData: Achievement[] = [
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    date: '2022-06-04',
    category: 'Data Science',
    imageUrl: '/assets/certificates/google-data-analytics.jpg',
    credentialUrl: 'https://coursera.org/verify/professional-cert/HZ3F7SM29SAB',
    skills: ['R', 'SQL', 'Tableau', 'Spreadsheets'],
    featured: true,
  },
  {
    id: 'tesol-certificate',
    title: 'TESOL Certificate — Teaching English to Speakers of Other Languages',
    issuer: 'Arizona State University — Global Launch',
    date: '2026-10',
    category: 'Teaching & Linguistics',
    imageUrl: '/assets/certificates/tesol.jpg',
    credentialId: 'a09Vy00000P1jg5IAB',
    skills: ['Second Language Acquisition', 'Lesson Design', 'Assessment', 'Pedagogy'],
    featured: true,
  },
];
