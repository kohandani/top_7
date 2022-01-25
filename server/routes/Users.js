import express from "express";
import {
    deleteUser,
    getAllUsers,
    signIn,
    signUp,
    updateUser,
} from "../controllers/UsersC.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", signIn);
router.post("/register", signUp);
router.get("/", auth, getAllUsers);
router.delete("/:id", auth, deleteUser);
router.patch("/:id", auth, updateUser);

export default router;
