import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    repo: z.string().url(),
    category: z.string(),
    platform: z.string().optional(),
    requirements: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { tools };
