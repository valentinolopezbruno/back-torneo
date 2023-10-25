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


exports.editarEquipo = async (req, res) => {
    var equipo = req.body
    
    var equipoEditado = await prisma.equipo.update({
        where:{id:equipo.id},
        data:{
            nombre:equipo.nombre,
            localidad:equipo.localidad,
            descripcion:equipo.descripcion,
            
        }
    });
    res.json(equipoEditado);
};