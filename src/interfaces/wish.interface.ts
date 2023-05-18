import { z } from "zod";
import { newWishSchema, patchWishSchema, returnWishSchema } from "../schemas";

export type TPostWish = z.infer<typeof newWishSchema>;
export type TPatchWish = z.infer<typeof patchWishSchema>;
export type TReturnWish = z.infer<typeof returnWishSchema>;
