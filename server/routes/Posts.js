import express from "express";
import {
    createPost,
    deletePost,
    getAllPosts,
    getSinglePost,
    updatePost,
} from "../controllers/PostsC.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/singlePost/:id", getSinglePost);
router.post("/", auth, createPost);

router.delete("/:id", auth, deletePost);
router.put("/:id", auth, updatePost);

export default router;
