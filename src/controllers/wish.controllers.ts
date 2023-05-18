import { Request, Response } from "express";
import {
  TPatchWish,
  TPostWish,
  TReturnWish,
} from "../interfaces/wish.interface";
import {
  deleteWishesService,
  getWishesService,
  patchWishesService,
  postWishesService,
} from "../services";
import { DeepPartial } from "typeorm";
import { Wishlist } from "../entities";

export const postWishesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const wish: TPostWish = req.body;
  const userId: string = res.locals.userId;

  const newWish: TReturnWish = await postWishesService(wish, userId);
  return res.status(201).json(newWish);
};

export const patchWishesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const patchWishData: TPatchWish = req.body;
  const wishId: string = req.params.id;
  const attWish: TReturnWish = await patchWishesService(
    patchWishData as DeepPartial<Wishlist>,
    wishId
  );
  return res.status(200).json(attWish);
};

export const deleteWishesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const wishId: string = req.params.id;
  await deleteWishesService(wishId);
  return res.status(204).json();
};

export const getWishesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;
  const wishlist: TReturnWish[] = await getWishesService(userId);
  return res.status(200).json(wishlist);
};
