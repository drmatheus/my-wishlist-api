import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { returnUserSchema } from "../../schemas/";
import { TPostUser, TReturnUser } from "../../interfaces/user.interface";

export const postUsersService = async (
  newUser: TPostUser
): Promise<TReturnUser> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User = usersRepo.create(newUser);

  return returnUserSchema.parse(await usersRepo.save(user));
};
