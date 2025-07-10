///////////metodo GET todos los productos//////////////

export async function getAllProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(" Error al obtener productos:", error.message);
  }
}