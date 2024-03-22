import express from "express";
import { testController, registerController, loginController } from "../controllers/authController.js";

const router = express.Router();

router.get("/test", testController);
router.post("/register",registerController);
router.post("/login",loginController);

export default router;  