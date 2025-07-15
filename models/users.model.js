// models/users.model.js
import { Db } from "../src/data.js";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

export{ getUserByEmail,createUser};

// Referencia a la colección
const usersRef = collection(db, "users");

// Buscar usuario por email
 const getUserByEmail = async (email) => {
  const q = query(usersRef, where("email", "==", email));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const userDoc = snapshot.docs[0];
  return { id: userDoc.id, ...userDoc.data() };
};

// Crear nuevo usuario
const createUser = async (userData) => {
  const docRef = await addDoc(usersRef, userData);
  return { id: docRef.id };
};