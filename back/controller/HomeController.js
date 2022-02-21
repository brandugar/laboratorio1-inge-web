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
            auth: "/auth",
            all: "/user",
            get: "/user/:id",
            store: "/user",
            update: "/user/:id",
            byEnterpriseId: "/enterprise/:id/users"
          },
          project: {
            all: "/project",
            get: "/project/:id",
            store: "/project",
            update: "/project/:id",
            byEnterpriseId: '/enterprise/:id/projects'
          },
          issue: {
            all: "/issue",
            get: "/issue/:id",
            store: "/issue",
            update: "/issue/:id",
            byProjectId: "/project/:id/issues",
            byUserId: "/user/:id/issues"
          },
          comments: {
            all: "/comment",
            get: "/comment/:id",
            store: "/comment",
            update: "/comment/:id",
            byIssueId: "/issue/:id/comments"
          }
        },
      },
    });
  }
}
