import { Router } from "express";
import {
  postWishesController,
  patchWishesController,
  deleteWishesController,
  getWishesController,
} from "../controllers/wish.controllers";
import { verifyResquestData, verifyAuthetication } from "../middlewares/";
import { newWishSchema, patchWishSchema } from "../schemas/";

export const wishesRoutes: Router = Router();

wishesRoutes.post(
  "",
  verifyAuthetication,
  verifyResquestData(newWishSchema),
  postWishesController
);
wishesRoutes.patch(
  "/:id",
  verifyAuthetication,
  verifyResquestData(patchWishSchema),
  patchWishesController
);
wishesRoutes.delete("/:id", verifyAuthetication, deleteWishesController);

wishesRoutes.get("", verifyAuthetication, getWishesController);
