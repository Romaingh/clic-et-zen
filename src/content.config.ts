import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Collection pour la FAQ
const faq = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/faq" }),
	schema: z.object({
		title: z.string(),
		order: z.number()
	})
});

// Collection pour les Prestations / Services
const services = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/services" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		target: z.enum(['particulier', 'professionnel']),
		icon: z.union([image(), z.string()]),
		order: z.number(),
		features: z.array(z.string())
	})
});

export const collections = {
	faq,
	services
};
