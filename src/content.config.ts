import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    // A string coerced into a date
    date: z.coerce.date(),
    categories: z.array(z.string()),
    description: z.string().or(z.null()),
    author: z.string(),
  }),
});

export const collections = { blog };
