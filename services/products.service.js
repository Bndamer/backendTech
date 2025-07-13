// services/products.service.js
import {
  getAllProductsM,
  getProductByIdM,
  createProductM,
  deleteProductM,
} from "../models/products.model.js";

export{
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct
}

// Obtener todos los productos
const getAllProducts = async () => {
  return await getAllProductsM();
};

// Obtener producto por ID
const getProductById = async (id) => {
  return await getProductByIdM(id);
};

// Crear nuevo producto
const createProduct = async (productData) => {
  // Validación mínima opcional
  if (!productData.nombre || !productData.precio) {
    throw new Error("El producto debe tener nombre y precio");
  }
  return await createProductM(productData);
};

// Eliminar producto
const deleteProduct = async (id) => {
  return await deleteProductM(id);
};