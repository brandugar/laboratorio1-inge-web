//import pkg from "@prisma/client";

//const { PrismaClient } = pkg;

//const prisma = new PrismaClient();

export class ProjectController {
  static GetAll(req, res) {
    //const enterprises = await prisma.issue.findMany({});
    return res.json({ projects: "Projects list" });
  }

  static Get(req, res) {
    //TODO: Implementacion
  }

  static Store(req, res) {
    //TODO: Implementacion
  }

  static Update(req, res) {
    //TODO: Implementacion
  }
}
