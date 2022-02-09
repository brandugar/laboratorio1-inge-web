import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();  //TODO: Validar si se puede utilizar una instacia unica y no instanciar por cada peticion.

export class EnterpriseController {
  static async GetAll() {
    const enterprises = await prisma.enterprise.findMany({});
    return (req, res, next) => {
      res.json({ enterprises: enterprises });
    };
  }

  static Get(req, res, next) {
    //TODO: Implementacion
  }

  static Store(req, res, next) {
    //TODO: Implementacion
  }

  static Delete(req, res, next) {
    //TODO: Implementacion
  }

  static Update(req, res, next) {
    //TODO: Implementacion
  }
}
