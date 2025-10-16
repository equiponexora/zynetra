const express = require('express');
const path = require('path');
const app = express();

// ✅ Servir los archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Puerto dinámico (Vercel asigna uno automáticamente)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Servidor Nexora activo en el puerto ${port}`));