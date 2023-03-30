import { Router } from "express";
import { createContactController, deleteContactController, listAllContactsController, listContactsController, updateAddressContactController, updateContactController } from "../controllers/contacts/contacts.controller";
import verifyAuthMiddleware from "../middlewares/verifyAyth.middleware";
import verifyDataMiddleware from "../middlewares/verifyData.middleware";
import verifyOwnerOrAdminMiddleware from "../middlewares/verifyOwnerOrAdmin.middleware";
import verifyUserExistsMiddleware from "../middlewares/verifyUserExists.middleware";
import verifyBodyUpdateMiddleware from "../middlewares/verifyBoryUpdate.middleware";
import { addressUpdateSerializer, contactRequestSerializer, contactUpdateSerializer } from "../serializers/contact.serializers";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailUserExists.middleware";

const contactRoutes = Router();

contactRoutes.post("", verifyDataMiddleware(contactRequestSerializer), createContactController);
contactRoutes.get("", verifyAuthMiddleware, verifyOwnerOrAdminMiddleware, listAllContactsController)
contactRoutes.get("/:id", verifyUserExistsMiddleware, verifyAuthMiddleware, verifyOwnerOrAdminMiddleware, listContactsController);
contactRoutes.patch("/:id", verifyUserExistsMiddleware, verifyAuthMiddleware, verifyOwnerOrAdminMiddleware, verifyBodyUpdateMiddleware, verifyEmailExistsMiddleware, verifyDataMiddleware(contactUpdateSerializer), updateContactController);
contactRoutes.delete("/:id", verifyUserExistsMiddleware, verifyAuthMiddleware, verifyOwnerOrAdminMiddleware, deleteContactController);
contactRoutes.patch("/:id/address", verifyUserExistsMiddleware, verifyAuthMiddleware, verifyOwnerOrAdminMiddleware, verifyDataMiddleware(addressUpdateSerializer), updateAddressContactController);

export default contactRoutes;