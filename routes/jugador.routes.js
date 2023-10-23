const express = require("express");
const jugadorController = require("../controllers/jugador.controller");

const router = express.Router();

router.post("/api/jugador/crear", jugadorController.nuevoJugador);
router.post("/api/jugador/buscar", jugadorController.buscarJugador);
router.post("/api/jugador/actualizar", jugadorController.actualizarJugador);
router.post("/api/jugador/eliminar", jugadorController.actualizarJugador);


module.exports = router;