import { postLoginService } from "../services/login/login.service";
import { Request, Response } from "express";

export const postLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: any = req.body;

  const token = await postLoginService(loginData);

  return res.status(200).send(token);
};
