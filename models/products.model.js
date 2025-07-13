// models/products.model.js
import { db } from "../src/data.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

export{
getAllProductsM,
getProductByIdM,
createProductM,
deleteProductM
}

const collectionName = "products";

// Obtener todos los productos// metodo get///
const getAllProductsM = async () => {
  const snapshot = await getDocs(collection(db, collectionName));
  const products = [];
  snapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

// Obtener un producto por ID //get by id//
const getProductByIdM = async (id) => {
  const ref = doc(db, collectionName, id);
  const docSnap = await getDoc(ref);
  if (!docSnap.exists()) throw new Error("Producto no encontrado");
  return { id: docSnap.id, ...docSnap.data() };
};

// Crear un nuevo producto // metodo POST//
const createProductM = async (productData) => {
  const docRef = await addDoc(collection(db, collectionName), productData);
  return { id: docRef.id };
};

// Eliminar un producto por ID //metodo DELETE//
const deleteProductM = async (id) => {
  const ref = doc(db, collectionName, id);
  await deleteDoc(ref);
};