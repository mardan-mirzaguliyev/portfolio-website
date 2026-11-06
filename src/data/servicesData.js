// Service offerings shown in the homepage Services section — edit, reorder or add entries freely.
// `icon` is the inner markup of a 24×24 stroke icon (rendered with stroke="currentColor").

/**
 * @typedef {Object} Service
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 */

/** @type {Service[]} */
export const services = [
  {
    title: 'Entrance Exam Preparation',
    description:
      'Tailored coaching, strategic test-taking methodologies, and rigorous practice designed to help students ace university and school entrance exams.',
    icon: '<path d="M9 11l3 3 8-8" /><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />',
  },
  {
    title: 'General English',
    description:
      'Comprehensive language training covering reading, writing, listening, and speaking through the Communicative Approach to build real-world fluency.',
    icon: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l.9-4.6A8 8 0 1 1 21 12z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />',
  },
  {
    title: 'English for IT Professionals',
    description:
      'Specialized communication training for developers, data analysts, and tech teams, focusing on technical terminology, workplace collaboration, and documentation.',
    icon: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />',
  },
];
