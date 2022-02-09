import express from "express";
import { EnterpriseController } from "../controller/EnterpriseController.js";
import { UserController } from "../controller/UserController.js";
import { ProjectController } from "../controller/ProjectController.js";
import { IssueController } from "../controller/IssueController.js";

const router = express.Router();

router.get("/enterprise", await EnterpriseController.GetAll());
router.get("/project", await ProjectController.GetAll());
router.get("/user", await UserController.GetAll());
router.get("/issue", await IssueController.GetAll());

//router.get("/enterprise/:id", (req, res, next) => EnterpriseController.Get(req, res, next));
//router.get("/project/:id", (req, res, next) => ProjectController.Get(req, res, next));
router.get("/user/:id", (req, res, next) => UserController.Get(req, res, next));
//router.get("/issue/:id", (req, res, next) => IssueController.Get(req, res, next));


router.post("/enterprise", async (req) => await EnterpriseController.Store(req));

export { router };
