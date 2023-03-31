import { Router } from "express";
import { createUserController, deleteUserController, listAllUsersController, listUserController, updateImageController, updateUserController } from "../controllers/users/users.controller";
import verifyAdminMiddleware from "../middlewares/verifyAdmin.middleware";
import verifyAuthMiddleware from "../middlewares/verifyAyth.middleware";
import verifyBodyUpdateMiddleware from "../middlewares/verifyBoryUpdate.middleware";
import verifyDataMiddleware from "../middlewares/verifyData.middleware";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailUserExists.middleware";
import verifyOwnerOrAdminMiddleware from "../middlewares/verifyOwnerOrAdmin.middleware";
import verifyUserExistsMiddleware from "../middlewares/verifyUserExists.middleware";
import { imageUpdateSerializer, userRequestSerializer, userUpdateSerializer } from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post("", verifyDataMiddleware(userRequestSerializer), verifyEmailExistsMiddleware, createUserController);
userRoutes.get("", verifyAuthMiddleware, verifyAdminMiddleware, listAllUsersController);
userRoutes.get("/:id", verifyUserExistsMiddleware, verifyAuthMiddleware, verifyOwnerOrAdminMiddleware, listUserController);
userRoutes.patch("/:id", verifyUserExistsMiddleware, verifyAuthMiddleware, verifyOwnerOrAdminMiddleware,verifyBodyUpdateMiddleware, verifyEmailExistsMiddleware, verifyDataMiddleware(userUpdateSerializer), updateUserController);
userRoutes.delete("/:id", verifyUserExistsMiddleware, verifyAuthMiddleware, verifyOwnerOrAdminMiddleware, deleteUserController)
userRoutes.patch("/:id/image", verifyUserExistsMiddleware, verifyAuthMiddleware, verifyOwnerOrAdminMiddleware, verifyDataMiddleware(imageUpdateSerializer), updateImageController)

export default userRoutes;