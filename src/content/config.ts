// @ts-ignore
import { defineCollection, z } from 'astro:content';


// Define Collection
const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const portfolio = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Export Collections
export const collections = { posts, portfolio };
