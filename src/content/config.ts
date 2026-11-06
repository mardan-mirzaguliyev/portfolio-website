import { defineCollection, z } from 'astro:content';

// Content here is edited by hand or through the Decap CMS admin at /admin
// (field definitions: public/admin/config.yml — keep the two in step).

// The CMS can save a cleared optional field as "" or null — treat both as "not set"
const blankToUndefined = (v: unknown) => (v === '' || v === null ? undefined : v);
const optional = <T extends z.ZodTypeAny>(schema: T) => z.preprocess(blankToUndefined, schema.optional());

export const CERTIFICATION_CATEGORIES = ['Data Science', 'Teaching & Linguistics', 'Web Development'] as const;
export type CertificationCategory = (typeof CERTIFICATION_CATEGORIES)[number];

const certifications = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    issuer: z.string(),
    /** 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD'. Unquoted YAML dates/years are normalised back to that string. */
    date: z
      .union([z.string(), z.number(), z.date()])
      .transform((v) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v)))
      .pipe(z.string().regex(/^\d{4}(-\d{2}(-\d{2})?)?$/, 'Use YYYY, YYYY-MM or YYYY-MM-DD')),
    category: z.enum(CERTIFICATION_CATEGORIES),
    /** Original certificate scan — thumbnails are generated from it; the lightbox shows it untouched */
    image: optional(image()),
    /** Public verification page — opens in a new tab */
    credentialUrl: optional(z.string().url()),
    /** Certificate number, shown when there's no verification page */
    credentialId: optional(z.string()),
    skills: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    liveUrl: optional(z.string().url()),
    repositoryUrl: optional(z.string().url()),
    logo: optional(image()),
    /** PDF under public/, e.g. '/assets/docs/lesson-plan.pdf' — embedded on the project page and linked from the card */
    document: optional(z.string().regex(/^\/.+\.pdf$/i, 'Use a site path ending in .pdf, e.g. /assets/docs/file.pdf')),
    pubDate: optional(z.coerce.date()),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: optional(z.coerce.date()),
    cover: optional(image()),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { certifications, projects, blog };
