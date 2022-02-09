import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class IssueCommentController {
  static async GetAll(req, res) {
    const issueComments = await prisma.issueComment.findMany({});
    return res.json({ issues: issueComments });
  }

  static async Get(req, res) {
    const id = String(req.params.id);

    if (!id) {
      return res
        .status(400)
        .json(new DefaultResponse(400, "Parametro Id requerido", null));
    } else {
      const comment = await prisma.issueComment.findUnique({
        where: {
          id: id,
        },
      });

      if (!comment) {
        return res
          .status(400)
          .json(new DefaultResponse(400, "Registro no encontrado", comment));
      }

      return res.status(200).json(new DefaultResponse(200, "Ok", comment));
    }
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

  static async Update(req, res) {
    const id = String(req.params.id);

    if (!id) {
      return res
        .status(400)
        .json(new DefaultResponse(400, "Parametro Id requerido", null));
    } else {
      try {
        const comment = req.body.issueComment;
        const updateIssueComment = await prisma.issueComment.update({
          where: {
            id: id,
          },
          data: comment,
        });
        return res.json(new DefaultResponse(200, "Ok", updateIssueComment));
      } catch (error) {
        return res.json(new DefaultResponse(500, error.message, error));
      }
    }
  }
}
