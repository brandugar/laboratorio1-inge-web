import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient(); //TODO: Validar si se puede utilizar una instacia unica y no instanciar por cada peticion.

export class EnterpriseController {
  static async GetAll(req, res) {
    const enterprises = await prisma.enterprise.findMany({});
    return res.json({ enterprises: enterprises });
  }

  static async Get(req, res) {
    const id = String(req.params.id);

    if (!id) {
      return res
        .status(400)
        .json(new DefaultResponse(400, "Parametro Id requerido", null));
    } else {
      const enterprise = await prisma.enterprise.findUnique({
        where: {
          id: id,
        },
      });

      if (!enterprise) {
        return res
          .status(400)
          .json(new DefaultResponse(400, "Registro no encontrado", enterprise));
      }

      return res.status(200).json(new DefaultResponse(200, "Ok", enterprise));
    }
  }

  static async Store(req, res) {
    /* Request example

{
    "enterprise":{
        "name" : "Lab1"
    }
}

    */
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

  static async Update(req, res) {
    const id = String(req.params.id);

    if (!id) {
      return res
        .status(400)
        .json(new DefaultResponse(400, "Parametro Id requerido", null));
    } else {
      try {
        const enterprise = req.body.enterprise;
        const updateEnterprise = await prisma.enterprise.update({
          where: {
            id: id,
          },
          data: enterprise,
        });
        return res.json(new DefaultResponse(200, "Ok", updateEnterprise));
      } catch (error) {
        return res.json(new DefaultResponse(500, error.message, error));
      }
    }
  }
}
