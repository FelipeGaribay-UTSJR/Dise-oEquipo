const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path'); // Módulo necesario para trabajar con rutas de archivos

require('dotenv').config();

// Configuración de express-session
app.use(session({
    secret: 'EquipoDiseño',
    resave: false,
    saveUninitialized: true
}));

// Rutas estáticas para servir archivos estáticos como tu archivo HTML
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
