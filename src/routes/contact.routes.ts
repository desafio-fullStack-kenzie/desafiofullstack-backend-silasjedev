import { Router } from "express";

const contactRoutes = Router();

contactRoutes.post("")
contactRoutes.get("")
contactRoutes.get("/:id")
contactRoutes.patch("/:id")
contactRoutes.delete("/:id")
contactRoutes.patch("/:id/address")

export default contactRoutes;