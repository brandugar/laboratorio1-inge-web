//import pkg from "@prisma/client";

//const { PrismaClient } = pkg;

//const prisma = new PrismaClient();

export class IssueCommentController {
  static GetAll(res) {
    //const enterprises = await prisma.issue.findMany({});
    return res.json({ issues: "Issues list" });
  }

  static Get(req, res, next) {
    //TODO: Implementacion
  }

  static Store(req, res, next) {
    //TODO: Implementacion
  }

  static Update(req, res, next) {
    //TODO: Implementacion
  }
}
