const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getEquiposJugadores = async (req, res) => {
    var jugadores = await prisma.equipo.findMany({
        include:{
            jugadores:true
        }
    });
    res.json(jugadores);
};