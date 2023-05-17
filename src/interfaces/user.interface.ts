import { newUserSchema, patchUserSchema, returnUserSchema } from "../schemas";
import { z } from "zod";

export type TPostUser = z.infer<typeof newUserSchema>;
export type TReturnUser = z.infer<typeof returnUserSchema>;
export type TPatchUser = z.infer<typeof patchUserSchema>;
