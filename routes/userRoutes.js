import express from 'express';
import {  loginUser, registerUser ,getUser, updateUser} from "../controllers/userController.js";
import { notAllowed } from '../utils/notAllowed.js';
import { fileCheck, updateFileCheck } from '../middleware/fileCheck.js';
import { userCheck } from '../middleware/userCheck.js';
import { loginSchema, registerSchema, validators } from '../utils/validator.js';

const router = express.Router();
router.route('/profile').get(userCheck,getUser)
.patch(userCheck,updateFileCheck,updateUser).all(notAllowed);
router.route("/login").post(validators.body(loginSchema),loginUser).all(notAllowed);
router.route("/register").post(validators.body(registerSchema),fileCheck,registerUser).all(notAllowed);

export default router;