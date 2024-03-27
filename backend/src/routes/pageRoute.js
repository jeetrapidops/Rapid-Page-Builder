import express from "express";
import { createPageController, deletePage, getAllBlogs, getAllPages, getBlog, getPage, publishpageController, updatePage } from "../controllers/pageController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/createpage",requireSignIn,createPageController);
router.put("/updatePublish/:_id" ,requireSignIn, publishpageController)
router.get("/getAllPages" , requireSignIn , getAllPages)
router.get("/get/:_id" ,requireSignIn, getPage)
router.put("/update/:_id" ,requireSignIn, updatePage)
router.delete("/delete/:_id" ,requireSignIn, deletePage)
router.get("/getBlog/:url" , getBlog)
router.get("/getAllBlogs" , getAllBlogs)

 
export default router;