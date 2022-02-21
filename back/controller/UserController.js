import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class UserController {
  static async GetAll(req, res) {
    const users = await prisma.user.findMany({});
    return res.json({ users: users });
  }

  static async Get(req, res) {
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

      return res.status(200).json(new DefaultResponse(200, "Ok", user));
    }
  }

  static async Store(req, res) {
    console.log(req.body)
    try {
      if(res?.body.user){
        return res.json(
          new DefaultResponse(400, "No es posible crear el usuario: informacion no valida")
        );
      }
      const user = req.body.user;
      const prismaResponse = await prisma.user.create({
        data:{
          email: user.email,
          enterpriseID: user.enterpriseID,
          enterprise: user.enterprise,
          role: user.role,
          comments: user.comments,
          projectDev: user.projectDev,
          projectClt: user.projectClt,
          issue: user.issue
        },
      });
      return res.json(new DefaultResponse(200, "Ok", prismaResponse))
    } catch (error) {
      return res.json(new DefaultResponse(500, error.message, error));
    }
  }

  static Update(req, res) {
    //TODO: Implementacion
  }
}
