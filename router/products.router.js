// routes/products.routes.js
import { Router } from "express";
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  deleteProductController,
} from "../controller/products.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/products
router.get("/", getAllProductsController,);

// GET /api/products/:id
router.get("/:id", getProductByIdController);

// POST /api/products/create
router.post("/create",authenticateToken, createProductController);

// DELETE /api/products/:id
router.delete("/:id",authenticateToken, deleteProductController);

export default router;
