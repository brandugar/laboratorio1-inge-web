import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class UserController {
  static async GetAll() {
    const users = await prisma.user.findMany({});
    return (req, res, next) => {
      res.json({ users: users });
    };
  }

  static async Get(req, res, next) {
    const id = String(req.params.id);

    if (!id) {
      return res
        .status(400)
        .json(new DefaultResponse(400, "Parametro Id requerido", null));
    } else {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });

      if (!user) {
        return res
        .status(400)
        .json(new DefaultResponse(400, "Registro no encontrado", user));
      }

      return res
        .status(200)
        .json(new DefaultResponse(200, "Ok", user));
    }
  }

  static Store(req, res, next) {
    //TODO: Implementacion
  }

  static Update(req, res, next) {
    //TODO: Implementacion
  }
}
