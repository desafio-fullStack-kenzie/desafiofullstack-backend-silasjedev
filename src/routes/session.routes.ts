import { Router } from "express";
import sessionUserController from "../controllers/session/sessionUser.controller";
import verifyDataMiddleware from "../middlewares/verifyData.middleware";
import verifyUserIsActiveMiddleware from "../middlewares/verifyUserIsActive.middleware";
import sessionUserSerializer from "../serializers/session.serializers";

const sessionRoutes = Router();

sessionRoutes.post("", verifyDataMiddleware(sessionUserSerializer), verifyUserIsActiveMiddleware, sessionUserController)

export default sessionRoutes;