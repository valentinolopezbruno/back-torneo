const express = require("express");
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: 'http://localhost:4200', // Reemplaza esto con el origen correcto de tu aplicación Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204, // Algunas respuestas HTTP exitosas no tienen contenido
};

app.use(cors(corsOptions));
app.use(express.json());

// JUGADOR
const jugadorRoutes = require('./routes/jugador.routes');
app.use('/', jugadorRoutes); 
// EQUIPO
const equipoRoutes = require('./routes/equipo.routes');
app.use('/', equipoRoutes); 
// TORNEO
const torneoRoutes = require('./routes/torneo.routes');
app.use('/', torneoRoutes); 



app.listen(PORT, () => {
  console.log("APP CORRIENDO: " + PORT);
});