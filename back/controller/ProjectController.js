//import pkg from "@prisma/client";

//const { PrismaClient } = pkg;

//const prisma = new PrismaClient();

export class ProjectController {
  static GetAll() {
    //const enterprises = await prisma.issue.findMany({});
    return (req, res, next) => {
      res.json({ projects: "Projects list" });
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
