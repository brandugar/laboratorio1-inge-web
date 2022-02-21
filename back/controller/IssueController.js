import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class IssueController {
  static async GetAll(req, res){
    const issues = await prisma.issue.findMany({});
    return res.json({ issues: issues });
  }
  
  static async GetByProject(req, res) {
    try {
      const id = String(req.params.id);
      const issues = await prisma.issue.findMany({
        where: {
          projectId: id,
        },
      });
      
      return res.json({ issues: issues });
    } catch (error) {
      return res.json(new DefaultResponse(500, error.message, error));
    }
  }

  static async GetByUser(req, res) {
    try {
      const id = String(req.params.id);
      const issues = await prisma.issue.findMany({
        where: {
          userId: id,
        },
      });
      
      return res.json({ issues: issues });
    } catch (error) {
      return res.json(new DefaultResponse(500, error.message, error));
    }
  }

  static async Get(req, res) {
    try {
      const id = String(req.params.id);
      if (!id) {
        return res
          .status(400)
          .json(new DefaultResponse(400, "Parametro Id requerido", null));
      } else {
        const issue = await prisma.issue.findUnique({
          where: {
            id: id,
          },
        });

        if (!issue) {
          return res
            .status(400)
            .json(new DefaultResponse(400, "Registro no encontrado", issue));
        }

        return res.status(200).json(new DefaultResponse(200, "Ok", issue));
      }
    } catch (error) {
      return res.json(new DefaultResponse(500, error.message, error));
    }
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
          projectId: issue.projectId,
        },
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
        const issue = req.body.issue;
        const updateIssue = await prisma.issue.update({
          where: {
            id: id,
          },
          data: {
            description: issue.description,
            category: issue.category,
            priority: issue.priority,
            status: issue.status,
            hourEstimate: issue.hourEstimate,
            userId: issue.userId,
            dueDate: new Date(issue.dueDate),
            closeDate: new Date(issue.closeDate),
            projectId: issue.projectId,
          },
        });
        return res.json(new DefaultResponse(200, "Ok", updateIssue));
      } catch (error) {
        return res.json(new DefaultResponse(500, error.message, error));
      }
    }
  }
}
