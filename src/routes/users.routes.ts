import { Router } from "express";
import {
  deleteUsersController,
  patchUsersController,
  postUsersController,
} from "../controllers/user.controllers";
import {
  verifyResquestData,
  verifyEmailUnique,
  verifyAuthetication,
} from "../middlewares/";
import { newUserSchema, patchUserSchema } from "../schemas/";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  verifyEmailUnique,
  verifyResquestData(newUserSchema),
  postUsersController
);
usersRoutes.patch(
  "",
  verifyAuthetication,
  verifyEmailUnique,
  verifyResquestData(patchUserSchema),
  patchUsersController
);
usersRoutes.delete("", verifyAuthetication, deleteUsersController);
