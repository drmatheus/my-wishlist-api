import { z } from "zod";

export const newUserSchema = z.object({
  first_name: z.string().max(20),
  last_name: z.string().max(20),
  email: z.string().email().max(35),
  password: z.string().max(32),
});

export const patchUserSchema = z.object({
  first_name: z.string().max(20).optional(),
  last_name: z.string().max(20).optional(),
  email: z.string().email().max(35).optional(),
  password: z.string().optional(),
});

export const returnUserSchema = newUserSchema
  .omit({
    password: true,
  })
  .extend({
    id: z.string(),
    createdAt: z.string(),
  });
