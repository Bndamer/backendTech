# 🧁 API REST - Apapacho

Este proyecto es una API REST para la gestión de productos de una tienda de alfajores artesanales. Implementa autenticación con Firebase, encriptación de contraseñas con bcrypt y protección con tokens JWT.

---

##  Tecnologías

- Node.js
- Express
- Firebase (Firestore)
- JWT
- bcryptjs
- dotenv
- CORS

---

##  Instalación

```bash
npm install

Rutas de Autenticación:

POST /auth/register
Registra un nuevo usuario.

POST /auth/login
Devuelve un token JWT si las credenciales son válidas.


Rutas de Productos
Nota: Estas rutas pueden ser protegidas con JWT.

GET /api/products
Devuelve todos los productos.

GET /api/products/:id
Devuelve un producto por ID.

POST /api/products/create
Crea un nuevo producto (se espera body en JSON).

DELETE /api/products/:id
Elimina un producto por ID.


Manejo de Errores
404 - Ruta no encontrada

401 - Credenciales inválidas

500 - Error interno del servidor

Autor
Brian Nicolás Damer – TP Backend – Apapacho