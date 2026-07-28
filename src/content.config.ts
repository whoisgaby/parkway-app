import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const restaurantes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/restaurantes" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      address: z.string().optional(),
      category: z.enum(["Cafe", "Restaurante", "Bar"]).optional(),
    }),
});

const eventos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/eventos" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      date: z.coerce.date(),
      location: z.string(),
    }),
});

const lugares = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lugares" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});

const articulos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articulos" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      author: z.string().optional(),
    }),
});

export const collections = { restaurantes, eventos, lugares, articulos };
