import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Wishlist } from "../../entities";

export const deleteWishesService = async (wishId: string): Promise<void> => {
  const wishesRepo: Repository<Wishlist> =
    AppDataSource.getRepository(Wishlist);

  await wishesRepo.delete({ id: wishId });
};
