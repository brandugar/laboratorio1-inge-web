import pkg from "@prisma/client";
import DefaultResponse from "../Models/DefaultResponse.js";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class UserController {
  static async Auth(req, res) {
    try {
      const email = req.body.email;

      if (!email) {
        return res
          .status(400)
          .json(new DefaultResponse(400, "Parametro email requerido", null));
      } else {
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          return res
            .status(400)
            .json(new DefaultResponse(400, "Registro no encontrado", user));
        }

        return res.status(200).json(new DefaultResponse(200, "Ok", user));
      }
    } catch (error) {
      return res.json(new DefaultResponse(500, error.message, error));
    }
  }

  static async GetAll(req, res) {
    const users = await prisma.user.findMany({});
    return res.json({ users: users });
  }

  static async GetByEnterprise(req, res) {
    try {
      const id = String(req.params.id);
      const users = await prisma.user.findMany({
        where: {
          enterpriseId: id,
        },
      });

      return res.json({ users: users });
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
        const user = await prisma.user.findUnique({
          where: {
            id: id,
          },
        });

        if (!user) {
          return res
            .status(400)
            .json(new DefaultResponse(400, "Registro no encontrado", user));
        }

        return res.status(200).json(new DefaultResponse(200, "Ok", user));
      }
    } catch (error) {
      return res.json(new DefaultResponse(500, error.message, error));
    }
  }

  static async Store(req, res) {
    /* Request example
{
    "user": {
        "id": "as",
        "email": "name",
        "role": "Administrador",
        "enterpriseId": "123"
    }
}
    */
    try {
      if (res?.body?.user) {
        return res.json(
          new DefaultResponse(400, "La informacion proporcionada no es valida")
        );
      }
      const user = req.body.user;
      const prismaResponse = await prisma.user.create({
        data: user,
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
        const user = req.body.user;
        const updateUser = await prisma.user.update({
          where: {
            id: id,
          },
          data: user,
        });
        return res.json(new DefaultResponse(200, "Ok", updateUser));
      } catch (error) {
        return res.json(new DefaultResponse(500, error.message, error));
      }
    }
  }
}
