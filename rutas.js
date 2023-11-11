const express = require('express');
const path = require('path'); // Asegúrate de que esté incluido

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/Destacados.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Destacados.html'));
});

var port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
