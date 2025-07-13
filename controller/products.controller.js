// controllers/products.controller.js
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../services/products.service.js";

export{
    getAllProductsController,
    getProductByIdController,
    createProductController,
    deleteProductController
}

// GET /api/products
const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/products/:id
const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: "Producto no encontrado" });
  }
};

// POST /api/products/create
const createProductController = async (req, res) => {
  try {
    const newProduct = await createProduct(req.body);
    res.status(201).json({ message: "Producto creado", id: newProduct.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE /api/products/:id
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProduct(id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(404).json({ error: "Producto no encontrado" });
  }
};
