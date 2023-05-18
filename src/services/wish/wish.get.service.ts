import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Wishlist } from "../../entities";

import { TReturnWish } from "../../interfaces/wish.interface";
import { returnWishlistSchema } from "../../schemas";

export const getWishesService = async (
  userId: string
): Promise<TReturnWish[]> => {
  const wishesRepo: Repository<Wishlist> =
    AppDataSource.getRepository(Wishlist);

  const wish: Wishlist[] | null = await wishesRepo.find({
    where: { user: { id: userId } },
  });

  return returnWishlistSchema.parse(wish);
};
