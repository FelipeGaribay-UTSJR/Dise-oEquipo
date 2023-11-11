const express = require('express');
const session = require('express-session');
const app = express();

require('dotenv').config();

// Configuración de express-session
app.use(session({
    secret: 'EquipoDiseño',
    resave: false,
    saveUninitialized: true
  }));


var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
