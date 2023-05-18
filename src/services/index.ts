import { postUsersService } from "./user/user.create.service";
import { deleteUsersService } from "./user/user.delete.service";
import { patchUserService } from "./user/user.patch.service";
import { postWishesService } from "./wish/wish.create.service";
import { deleteWishesService } from "./wish/wish.delete.service";
import { patchWishesService } from "./wish/wish.patch.service";
import { getWishesService } from "./wish/wish.get.service";

export {
  postUsersService,
  patchUserService,
  deleteUsersService,
  deleteWishesService,
  postWishesService,
  patchWishesService,
  getWishesService,
};
