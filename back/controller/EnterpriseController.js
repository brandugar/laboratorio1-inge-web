import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient(); //TODO: Validar si se puede utilizar una instacia unica y no instanciar por cada peticion.

export class EnterpriseController {
  static async GetAll(req, res) {
    const enterprises = await prisma.enterprise.findMany({});
    return res.json({ enterprises: enterprises });
  }

  static Get(req, res, next) {
    //TODO: Implementacion
  }

  static async Store(req, res) {
    try {
      if (res?.body?.enterprise) {
        return res.json(
          new DefaultResponse(400, "La informacion proporcionada no es valida")
        );
      }
      const enterprise = req.body.enterprise;
      const prismaResponse = await prisma.enterprise.create({
        data: enterprise,
      });

      return res.json(new DefaultResponse(200, "Ok", prismaResponse));
    } catch (error) {
      return res.json(new DefaultResponse(500, error.message, error));
    }
  }

  static Update(req, res, next) {
    //TODO: Implementacion
  }
}
