const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.nuevoTorneo = async (req, res) => {
    const torneo = req.body;
    const nuevoTorneo = await prisma.torneo.create({
        data: {
          nombre: torneo.nombre
        },
      });
    res.json(nuevoTorneo);
};

exports.actualizarTorneo = async (req, res) => {
    const torneo = req.body;
    const torneoActualizado= await prisma.torneo.update({
        where:{id:torneo.id},
        data: {
          nombre: torneo.nombre
        },
      });
    res.json(torneoActualizado);
};

exports.eliminarTorneo = async (req, res) => {
    const torneo = req.body;
    const torneoEliminado= await prisma.torneo.delete({where:{id:torneo.id},});
    res.json(torneoEliminado);
};

exports.getTorenos = async (req, res) => {
  var torneos = await prisma.torneo.findMany({
      include:{
          categorias:true
      }
  });
  res.json(torneos);
};


