// controllers/auth.controller.js
import { Db } from "../src/data.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";



export { login,register};

const db = Db;


/////////////////////LOGIN///////////////////////////////
const login = async (req, res) => {
  console.log("Body recibido:", req.body);
  const { email, password } = req.body;

  try {
    const usersRef = collection(db, "users");
const q = query(usersRef, where("email", "==", email));
const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const doc = snapshot.docs[0];
    const user = doc.data();

    const passwordOk = await bcrypt.compare(password, user.password);

    if (!passwordOk) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const token = jwt.sign(
      {
        id: doc.id,
        email: user.email,
        rol: user.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

///////////////////REGISTRO//////////////////////////
 const register = async (req, res) => {
  console.log("Body recibido:", req.body);
  const { email, password, rol } = req.body;

  try {
    // Buscar si ya existe ese email
    const usersRef = collection(db, "users");
const q = query(usersRef, where("email", "==", email));
const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const newUser = {
      email,
      password: hashedPassword,
      rol: rol || "normalUser",
    };

const docRef = await addDoc(usersRef, newUser);

    res.status(201).json({ message: "Usuario registrado", id: docRef.id });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};