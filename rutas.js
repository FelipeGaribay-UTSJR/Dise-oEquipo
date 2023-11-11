var ruta = require('express');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  app.get("/Destacados.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Destacados.html'));
});

module.exports = ruta;