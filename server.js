const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que sirve el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Puerto dinámico que Vercel usará
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Servidor Nexora activo en el puerto ${port}`));