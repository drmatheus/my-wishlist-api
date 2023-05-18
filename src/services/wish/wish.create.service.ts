import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Wishlist } from "../../entities";

import { TPostWish, TReturnWish } from "../../interfaces/wish.interface";
import { returnWishSchema } from "../../schemas";

export const postWishesService = async (
  newWish: TPostWish,
  userId: string
): Promise<TReturnWish> => {
  const wishesRepo: Repository<Wishlist> =
    AppDataSource.getRepository(Wishlist);

  const wish: Wishlist = wishesRepo.create({
    ...newWish,
    user: { id: userId },
  } as Wishlist);

  newWish = await wishesRepo.save(wish);
  return returnWishSchema.parse(newWish);
};
