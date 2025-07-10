///////////////metodo GET un producto////////////////////
export async function getProduct(id) {

  try {
    const url = `https://fakestoreapi.com/products/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error al obtener producto :", error.message);
  }
}