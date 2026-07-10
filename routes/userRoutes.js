import express from 'express';
import {  loginUser, registerUser ,getUser, updateUser} from "../controllers/userController.js";
import { notAllowed } from '../utils/notAllowed.js';
import { fileCheck } from '../middleware/fileCheck.js';
import { userCheck } from '../middleware/userCheck.js';



const router = express.Router();
router.route('/profile').get(userCheck,getUser)
.patch(userCheck,fileCheck,updateUser).all(notAllowed);
router.route("/login").post(loginUser).all(notAllowed);
router.route("/register").post(fileCheck,registerUser).all(notAllowed);

export default router;