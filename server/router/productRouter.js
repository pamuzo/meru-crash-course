import express from "express";

import {
  createproduct,
  getAllproducts,
  updateProducte,
  deleteProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

// get all product
router.get("/", getAllproducts);

// create product
router.post("/", createproduct);

// update product

router.put("/:id", updateProducte);

// delete product

router.delete("/:id", deleteProduct);
export default router;
