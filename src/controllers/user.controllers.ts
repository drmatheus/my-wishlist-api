import { Request, Response } from "express";
import {
  TPatchUser,
  TPostUser,
  TReturnUser,
} from "../interfaces/user.interface";
import { postUsersService } from "../services";
import { patchUserService } from "../services";
import { DeepPartial } from "typeorm";
import { User } from "../entities";
import { deleteUsersService } from "../services";

export const postUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUserData: TPostUser = req.body;
  const newUser: TReturnUser = await postUsersService(newUserData);
  return res.status(201).json(newUser);
};

export const patchUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;
  const patchUserData: TPatchUser = req.body;
  const attUser: TReturnUser = await patchUserService(
    userId,
    patchUserData as DeepPartial<User>
  );

  return res.status(200).json(attUser);
};

export const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;
  await deleteUsersService(userId);
  return res.status(204).json();
};
