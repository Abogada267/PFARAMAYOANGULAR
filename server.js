const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.post('/api/cursos/actualizar-por-nombre', (req, res) => {
  const { nombre, datosActualizados } = req.body;

  
  res.status(200).json({ message: 'Curso actualizado exitosamente' });
});


app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

