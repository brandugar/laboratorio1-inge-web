import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class IssueController {
  static async GetAll(res) {
    const issues = await prisma.issue.findMany({});
    return res.json({ issues: issues });
  }

  static Get(req, res) {
    //TODO: Implementacion
  }

  static async Store(req, res) {

    /* Request example
{
    "issue": {
        "description": "Lorem  asd",
        "category": "Bug",
        "priority": "Low",
        "status": "NotAssigned",
        "hourEstimate": 1,
        "userId": "1",
        "dueDate": "1970-01-01 00:03:44",
        "closeDate": "1970-01-01 00:03:44",
        "projectId": "1"
    }
}

    */
    try {
      if (res?.body?.issue) {
        return res.json(
          new DefaultResponse(400, "La informacion proporcionada no es valida")
        );
      }
      const issue = req.body.issue;
      const prismaResponse = await prisma.issue.create({
        data: {
          description: issue.description,
          category: issue.category,
          priority: issue.priority,
          status: issue.status,
          hourEstimate: issue.hourEstimate,
          userId: issue.userId,
          dueDate: new Date(issue.dueDate),
          closeDate: new Date(issue.closeDate),
          projectId: issue.projectId
        },
      });

      return res.json(new DefaultResponse(200, "Ok", prismaResponse));
    } catch (error) {
      return res.json(new DefaultResponse(500, error.message, error));
    }
  }

  static Update(req, res) {
    //TODO: Implementacion
  }
}
