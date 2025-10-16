const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos (HTML, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Puerto dinámico para Vercel o 3000 localmente
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Servidor Nexora en marcha en el puerto ${port}`);
});