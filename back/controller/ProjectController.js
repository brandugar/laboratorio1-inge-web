import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class ProjectController {
  static async GetAll(req, res) {
    const projects = await prisma.project.findMany({});
    return res.json({ projects: projects });
  }

  static async Get(req, res) {
    const id = String(req.params.id);

    if (!id) {
      return res
        .status(400)
        .json(new DefaultResponse(400, "Parametro Id requerido", null));
    } else {
      const project = await prisma.project.findUnique({
        where: {
          id: id,
        },
      });

      if (!issue) {
        return res
          .status(400)
          .json(new DefaultResponse(400, "Registro no encontrado", project));
      }

      return res.status(200).json(new DefaultResponse(200, "Ok", issue));
    }
  }

  static async Store(req, res) {
    /* Request example
{
    "project": {
        "id": "as",
        "name": "name",
        "description": "Lorem asd",
        "clientEnterpriseId": "123"
    }
}

    */
    try {
      if (res?.body?.project) {
        return res.json(
          new DefaultResponse(400, "La informacion proporcionada no es valida")
        );
      }
      const project = req.body.project;
      const prismaResponse = await prisma.project.create({
        data: project,
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
        const project = req.body.project;
        const updateProject = await prisma.project.update({
          where: {
            id: id,
          },
          data: project,
        });
        return res.json(new DefaultResponse(200, "Ok", updateProject));
      } catch (error) {
        return res.json(new DefaultResponse(500, error.message, error));
      }
    }
  }
}
