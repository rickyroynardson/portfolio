import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { places } from "./utils/places";

const place = z.string().refine((code) => code in places, {
	message: "Unknown place code, add its coordinates to src/utils/places.ts",
});

const travels = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/travels" }),
	schema: ({ image }) =>
		z.object({
			trip: z.string(),
			destination: z.string().length(2), // ISO 3166 alpha-2 country, e.g. "SG"
			summary: z.string().max(160).optional(),
			cover: image().optional(),
			draft: z.boolean().default(false),
			// in travel order: first leg = departure, last leg = return
			legs: z
				.array(
					z.object({
						date: z.coerce.date(),
						from: place, // airport / port code, e.g. "BTH"
						to: place,
						transport: z.string(), // airline or ferry name, e.g. "Scoot"
						duration: z.string().optional(), // e.g. "1h 20m"
					}),
				)
				.min(1),
		}),
});

export const collections = { travels };
