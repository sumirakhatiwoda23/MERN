import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct
} from '../controllers/productController.js';

const router = express.Router();

router.route('/')
.get(getProducts)
.post(createProduct)
.patch(updateProduct)
.delete(deleteProduct)

router.route('/:id').get(getProducts).patch(updateProduct).delete(deleteProduct);

export default router