// testFirebase.js
import { db } from "./src/data.js";
import { collection, getDocs } from "firebase/firestore";

async function testConnection() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log("Conexión exitosa. Productos encontrados:");
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error("Error al conectar con Firestore:", error);
  }
}

testConnection();