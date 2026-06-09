import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
});

const restaurantes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/restaurantes" }),
  schema: baseSchema.extend({
    address: z.string().optional(),
    category: z.enum(["Cafe", "Restaurante", "Bar"]).optional(),
  }),
});

const eventos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/eventos" }),
  schema: baseSchema.extend({
    date: z.coerce.date(),
    location: z.string(),
  }),
});

const lugares = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lugares" }),
  schema: baseSchema,
});

const articulos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articulos" }),
  schema: baseSchema.extend({
    author: z.string().optional(),
  }),
});

export const collections = { restaurantes, eventos, lugares, articulos };
