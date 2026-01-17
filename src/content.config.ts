import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { news };