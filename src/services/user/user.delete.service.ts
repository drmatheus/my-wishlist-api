import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

export const deleteUsersService = async (userId: string): Promise<void> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  await usersRepo.delete({ id: userId });
};
