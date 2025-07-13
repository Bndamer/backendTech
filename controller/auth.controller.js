// controllers/auth.controller.js
import jwt from "jsonwebtoken";

export {
    login
}

// Usuarios simulados (hardcodeados)
const users = [
  {
    id: "1",
    email: "admin@apapacho.com",
    password: "123456", // ⚠️ Solo para pruebas
    rol: "admin",
  },
  {
    id: "2",
    email: "cliente@correo.com",
    password: "abc123",
    rol: "cliente",
  },
];

const login = (req, res) => {
  const { email, password } = req.body;

  // Buscar usuario
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  // Generar JWT
  const token = jwt.sign(
    { id: user.id, email: user.email, rol: user.rol },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};
