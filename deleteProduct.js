/////////metodo DELETE con products////////////

export async function deleteProduct(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log("Producto eliminado:");
    console.log(data);
  } catch (error) {
    console.error("Error al eliminar producto:", error.message);
  }
}