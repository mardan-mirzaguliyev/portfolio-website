import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    repositoryUrl: z.string().url().optional(),
    logo: image().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
