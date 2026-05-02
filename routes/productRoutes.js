import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct
} from '../controllers/productController.js';
import { notAllowed } from '../utils/notAllowed.js';
import { fileCheck } from '../middleware/fileCheck.js';

const router = express.Router();

router.route('/')
.get(getProducts)
.post(fileCheck,createProduct)
.all(notAllowed)

router.route('/:id').get(getProducts).patch(updateProduct).delete(deleteProduct);

export default router