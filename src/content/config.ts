import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
});

const restaurantes = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    address: z.string().optional(),
    category: z.enum(["Cafe", "Restaurante", "Bar"]).optional(),
  }),
});

const eventos = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    date: z.coerce.date(),
    location: z.string(),
  }),
});

const lugares = defineCollection({
  type: "content",
  schema: baseSchema,
});

const articulos = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    author: z.string().optional(),
  }),
});

export const collections = { restaurantes, eventos, lugares, articulos };
