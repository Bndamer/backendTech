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