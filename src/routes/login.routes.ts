import { Router } from "express";
import { verifyResquestData } from "../middlewares";
import { loginSchema } from "../schemas";
import { postLoginController } from "../controllers/login.controllers";
export const loginRoutes: Router = Router();
loginRoutes.post("", verifyResquestData(loginSchema), postLoginController);
