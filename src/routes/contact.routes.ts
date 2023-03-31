import { Router } from "express";
import { createContactController, deleteContactController, listAllContactsController, listContactsController, updateAddressContactController, updateContactController } from "../controllers/contacts/contacts.controller";
import verifyAuthMiddleware from "../middlewares/verifyAyth.middleware";
import verifyDataMiddleware from "../middlewares/verifyData.middleware";
import verifyBodyUpdateMiddleware from "../middlewares/verifyBoryUpdate.middleware";
import { addressUpdateSerializer, contactRequestSerializer, contactUpdateSerializer } from "../serializers/contact.serializers";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailUserExists.middleware";
import createAddressMiddleware from "../middlewares/createAddress.middleware";
import verifyContactExistsMiddleware from "../middlewares/verifyContactsExists.middleware";

const contactRoutes = Router();

contactRoutes.post("", verifyAuthMiddleware, verifyDataMiddleware(contactRequestSerializer), createAddressMiddleware,createContactController);
contactRoutes.get("", verifyAuthMiddleware, listAllContactsController)
contactRoutes.get("/:id", verifyContactExistsMiddleware, verifyAuthMiddleware, listContactsController);
contactRoutes.patch("/:id", verifyContactExistsMiddleware, verifyAuthMiddleware, verifyBodyUpdateMiddleware, verifyEmailExistsMiddleware, verifyDataMiddleware(contactUpdateSerializer), updateContactController);
contactRoutes.delete("/:id", verifyContactExistsMiddleware, verifyAuthMiddleware, deleteContactController);
contactRoutes.patch("/:id/address", verifyContactExistsMiddleware, verifyAuthMiddleware, verifyDataMiddleware(addressUpdateSerializer), updateAddressContactController);

export default contactRoutes;