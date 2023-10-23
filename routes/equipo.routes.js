const express = require("express");
const equipoController = require("../controllers/equipo.controller");

const router = express.Router();

router.get("/api/equipo/jugadores", equipoController.getEquiposJugadores);


module.exports = router;