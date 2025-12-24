// @ts-ignore
import { defineCollection, z } from 'astro:content';


// Define Collection
const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const portfolio = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    year: z.date().optional(),
    demo: z.string().optional(),
  }),
});

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
  })
})

// Export Collections
export const collections = { posts, portfolio, categories };
