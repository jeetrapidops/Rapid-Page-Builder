import express from "express";
import { createPageController } from "../controllers/pageController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";




//router object
const router = express.Router();

// router.get("/test", testController);
router.post("/createpage",requireSignIn,createPageController);


export default router;  