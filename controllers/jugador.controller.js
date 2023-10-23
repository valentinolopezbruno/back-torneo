const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.nuevoJugador = async (req, res) => {
    const jugador = req.body;
    const nuevoJugador = await prisma.jugador.create({
        data: {
          roll: jugador.roll,
          nombre: jugador.nombre,
          dni: jugador.dni,
          imagen: jugador.imagen,
          equipo: {
            connect: {
              id: jugador.idEquipo
            },
          },
        },
      });
    res.json(nuevoJugador);
};

exports.actualizarJugador = async (req, res) => {
  const jugador = req.body;
  const jugadorActualizado = await prisma.jugador.update({
    where: { 
      id: jugador.id
     },
      data: {
        nombre: jugador.nombre,
        dni: jugador.dni
      },
    });
  res.json(jugadorActualizado);
};

exports.eliminarJugador = async (req, res) => {
  const jugador = req.body;
  console.log("jugador")
  console.log(req.body)

  const jugadorEliminado = await prisma.jugador.delete({  where: { id: jugador.id } });
  res.json(jugadorEliminado);
};

// Filtrar jugador por ID.
exports.buscarJugador = async (req, res) => {
  var jugador = req.body 
  var jugadorEncontrado = await prisma.jugador.findUnique({ where: { id: jugador.id }}  );
  res.json(jugadorEncontrado);
};
