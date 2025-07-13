import { argv } from "process";
import { newProduct } from "./postProduct.js";
import { getAllProducts } from "./getAllProducts.js";
import { getProduct } from "./getProduct.js";
import { deleteProduct } from "./deleteProduct.js";


async function main() {
  const [,, metodo, path, title, price, category] = argv;

  if (metodo === "GET" && path === "products") {
    await getAllProducts();
  } else if (metodo === "GET" && path?.startsWith("products/")) {
    const [, id] = path.split("/");
    await getProduct(id);
  } else if (metodo === "POST" && path === "products") {
    await newProduct({ title, price, category });
  } else if (metodo === "DELETE" && path?.startsWith("products/")) {
    const [, id] = path.split("/");
    await deleteProduct(id);
  } else {
    console.log("Comando no reconocido.");
  }
}

main();


////////////////////////////configuracion del server//////////////////////////////////////////////////

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config(); // Carga variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas (se configurarán más adelante)
import productRoutes from "./router/products.router.js";
import authRoutes from "./router/auth.router.js";

app.use("/api/products", productRoutes);
app.use("/auth", authRoutes);

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});