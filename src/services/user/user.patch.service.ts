import { DeepPartial, Repository } from "typeorm";
import { TReturnUser } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { returnUserSchema } from "../../schemas";

export const patchUserService = async (
  userId: string,
  userData: DeepPartial<User>
): Promise<TReturnUser> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  await usersRepo.update(userId, userData);

  const attUser: User | null = await usersRepo.findOne({
    where: { id: userId },
  });

  return returnUserSchema.parse(attUser);
};
