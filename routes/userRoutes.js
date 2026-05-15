import express from 'express';
import { loginUser, registerUser } from "../controllers/userController.js";
import { notAllowed } from '../utils/notAllowed.js';




const router = express.Router();
router.route("/login").post(loginUser).all(notAllowed);
router.route("/register").post(registerUser).all(notAllowed);

export default router;