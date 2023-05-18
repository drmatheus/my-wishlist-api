import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Wishlist } from "../../entities";

import { TReturnWish } from "../../interfaces/wish.interface";
import { returnWishSchema } from "../../schemas";

export const patchWishesService = async (
  attWish: DeepPartial<Wishlist>,
  wishId: string
): Promise<TReturnWish> => {
  const wishesRepo: Repository<Wishlist> =
    AppDataSource.getRepository(Wishlist);

  await wishesRepo.update(wishId, attWish);

  const wish: Wishlist | null = await wishesRepo.findOne({
    where: { id: wishId },
  });

  return returnWishSchema.parse(wish);
};
