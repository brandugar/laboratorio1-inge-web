import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class IssueCommentController {
  static async GetAll(res) {
    const issueComments = await prisma.issueComment.findMany({});
    return res.json({ issues: issueComments });
  }

  static Get(req, res) {
    //TODO: Implementacion
  }

  static async Store(req, res) {
    /* Request example
{
    "issueComment": {
        "comment": "",
        "userId": "1",
        "issueId": "1"
    }
}
    */

    try {
      if (res?.body?.issueComment) {
        return res.json(
          new DefaultResponse(400, "La informacion proporcionada no es valida")
        );
      }
      const issueComment = req.body.issueComment;
      const prismaResponse = await prisma.issueComment.create({
        data: issueComment,
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
