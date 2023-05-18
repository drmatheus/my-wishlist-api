import { string, z } from "zod";

export const newWishSchema = z.object({
  bought: z.boolean().optional(),
  url: string(),
  name: string().max(32),
});

export const patchWishSchema = z.object({
  bought: z.boolean().optional(),
  url: string().optional(),
  name: string().max(32).optional(),
});

export const returnWishSchema = newWishSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  bought: z.boolean(),
});

export const returnWishlistSchema = z.array(returnWishSchema);
