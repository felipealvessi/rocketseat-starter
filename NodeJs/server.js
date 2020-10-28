const express = require('express');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi')

// Primeira rota
app.get('/', (req, res) => {
  res.send("Hello Felipe");
})

app.listen(3001);