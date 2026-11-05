// Certifications & achievements shown on the homepage.
//
// To add one, append an object to the array below. The section sorts itself:
// in-progress items first, then newest `date` first — array order doesn't matter.
//
// ⚠️ The entries below are PLACEHOLDERS — replace titles, dates and
// credential URLs with your own before deploying.

export type AchievementCategory =
  | 'Data Science'
  | 'Machine Learning'
  | 'Web Development'
  | 'Professional Certification';

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  /** Completion month as 'YYYY-MM' (or 'YYYY-MM-DD'). For in-progress items, the start or expected date. */
  date: string;
  category: AchievementCategory;
  /** Public verification page — opens in a new tab */
  credentialUrl: string;
  /** 2–3 core skills; shown as tags */
  skills: string[];
  /** Highlights the card with the brand accent */
  featured?: boolean;
  /** Omit for completed items */
  status?: 'in-progress';
}

export const achievements: Achievement[] = [
  {
    id: 'google-advanced-data-analytics',
    title: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    date: '2026-04',
    category: 'Data Science',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/REPLACE_ME',
    skills: ['Python', 'Regression Modelling', 'Exploratory Data Analysis'],
    featured: true,
  },
  {
    id: 'machine-learning-specialization',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online / Coursera',
    date: '2025-11',
    category: 'Machine Learning',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/REPLACE_ME',
    skills: ['Supervised Learning', 'Neural Networks', 'scikit-learn'],
  },
  {
    id: 'text-mining-with-r',
    title: 'Text Mining with R',
    issuer: 'DataCamp',
    date: '2025-06',
    category: 'Data Science',
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
