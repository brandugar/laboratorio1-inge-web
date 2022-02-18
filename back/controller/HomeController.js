export class HomeController {
  static async GetAll(req, res) {
    return res.json({
      response: {
        server_status: "running",
        routes: {
          enterprise: {
            all: "/enterprise",
            get: "/enterprise/:id",
            store: "/enterprise",
            update: "/enterprise/:id",
          },
          user: {
            all: "/user",
            get: "/user/:id",
            store: "/user",
            update: "/user/:id",
          },
          project: {
            all: "/project",
            get: "/project/:id",
            store: "/project",
            update: "/project/:id",
          },
          issue: {
            all: "/issue",
            get: "issue/:id",
            store: "/issue",
            update: "/issue/:id",
          },
          comments: {
            all: "/comment",
            get: "comment/:id",
            store: "/comment",
            update: "/comment/:id",
          },
        },
      },
    });
  }
}
