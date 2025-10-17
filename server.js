const express = require('express');
const path = require('path');
const helmet = require('helmet'); // <-- 1. Importar helmet
const app = express();

// Middleware de seguridad
app.use(helmet()); // <-- 2. Usar helmet (¡así de fácil!)

// Define el puerto que usará Vercel o 3000 en local
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que responde con el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor Zynetra activo en el puerto ${port}`);
});