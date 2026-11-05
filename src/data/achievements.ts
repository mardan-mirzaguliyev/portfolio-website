// Certifications & achievements shown on the homepage.
//
// To add one, append an object to the array below. The section sorts itself:
// in-progress items first, then newest `date` first — array order doesn't matter.
//
// Certificate images: drop the original file in public/assets/certificates/
// and point `imageUrl` at it, e.g. '/assets/certificates/my-cert.png'.
// Until the file exists the card shows a placeholder frame and the build
// prints a warning naming the missing file.
//
// ⚠️ The entries below are PLACEHOLDERS — replace titles, dates, images and
// credential URLs with your own before deploying.

export type AchievementCategory =
  | 'Data Science'
  | 'Machine Learning'
  | 'Web Development'
  | 'Cloud Engineering'
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
  /** Public verification page — opens in a new tab */
  credentialUrl: string;
  /** 2–4 core skills; shown as tags */
  skills: string[];
  /** Highlights the card with the brand accent */
  featured?: boolean;
  /** Omit for completed items */
  status?: 'in-progress';
}

export const achievementsData: Achievement[] = [
  {
    id: 'google-advanced-data-analytics',
    title: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    date: '2026-04',
    category: 'Data Science',
    imageUrl: '/assets/certificates/google-advanced-data-analytics.png',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/REPLACE_ME',
    skills: ['R', 'Python', 'EDA', 'Statistical Analysis'],
    featured: true,
  },
  {
    id: 'machine-learning-specialization',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online / Coursera',
    date: '2025-11',
    category: 'Machine Learning',
    imageUrl: '/assets/certificates/machine-learning-specialization.png',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/REPLACE_ME',
    skills: ['Supervised Learning', 'Neural Networks', 'scikit-learn'],
  },
  {
    id: 'text-mining-with-r',
    title: 'Text Mining with R',
    issuer: 'DataCamp',
    date: '2025-06',
    category: 'Data Science',
    imageUrl: '/assets/certificates/text-mining-with-r.png',
    credentialUrl: 'https://www.datacamp.com/statement-of-accomplishment/course/REPLACE_ME',
    skills: ['R', 'tidytext', 'Sentiment Analysis'],
  },
  {
    id: 'meta-full-stack',
    title: 'Meta Full-Stack Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    date: '2026-09',
    category: 'Web Development',
    credentialUrl: 'https://www.coursera.org/professional-certificates/REPLACE_ME',
    skills: ['React', 'Node.js', 'REST APIs'],
    status: 'in-progress',
  },
];
