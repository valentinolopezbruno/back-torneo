const express = require("express");
const torneoController = require("../controllers/torneo.controller");

const router = express.Router();

router.get("/api/torneo", torneoController.getTorenos);
router.post("/api/torneo/crear", torneoController.nuevoTorneo);
router.post("/api/torneo/actualizar", torneoController.actualizarTorneo);
router.post("/api/torneo/eliminar", torneoController.eliminarTorneo);


module.exports = router;