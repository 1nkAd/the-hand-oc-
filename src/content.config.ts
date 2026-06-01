import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const characters = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/characters" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    theme: z.enum(['gold', 'blood', 'cosmic', 'light']),
    race: z.string(),
    status: z.string(),
    quote: z.string().optional(),
    themeSong: z.string().optional(),
  })
});

export const collections = { characters };
