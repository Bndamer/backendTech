
//////////metodo POST producto nuevo///////////
export async function newProduct({ title, price, category }) {
  const product = {
    title,
    price: parseFloat(price),
    category,
  };

  try {
    const response = await fetch(`https://fakestoreapi.com/products`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    console.log("Producto creado:");
    console.log(data);
  } catch (error) {
    console.error("Error al crear producto:", error.message);
  }
}