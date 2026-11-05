// Social / profile links — shared by the About section and the Contact page.
// ⚠️ X and LinkedIn are PLACEHOLDERS — replace `yourusername` with your real handles.

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'X',          handle: '@yourusername',   href: 'https://x.com/yourusername' },
  { label: 'LinkedIn',   handle: 'in/yourusername', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Newsletter', handle: 'Visage Quant',    href: 'https://visagequant.substack.com' },
];

export const NEWSLETTER_URL = 'https://visagequant.substack.com';
