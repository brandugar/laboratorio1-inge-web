import express from "express";
import { EnterpriseController } from "../controller/EnterpriseController.js";
import { UserController } from "../controller/UserController.js";
import { ProjectController } from "../controller/ProjectController.js";
import { IssueController } from "../controller/IssueController.js";
import { IssueCommentController } from "../controller/IssueCommentController.js";

const router = express.Router();

router.get("/enterprise", (req, res) =>  EnterpriseController.GetAll(req, res));
router.get("/project", (req, res) =>  ProjectController.GetAll(req, res));
router.get("/user", (req, res) =>  UserController.GetAll(req, res));
router.get("/issue", (req, res) => IssueController.GetAll(req, res));
router.get("/comment", (req, res) => IssueCommentController.GetAll(req, res));

//router.get("/enterprise/:id", (req, res) => EnterpriseController.Get(req, res));
//router.get("/project/:id", (req, res) => ProjectController.Get(req, res));
router.get("/user/:id", (req, res) => UserController.Get(req, res));
//router.get("/issue/:id", (req, res) => IssueController.Get(req, res));


router.post("/enterprise", (req, res) => EnterpriseController.Store(req, res));
router.post("/comment", (req, res) => IssueCommentController.Store(req, res));
router.post("/issue", (req, res) => IssueController.Store(req, res));

export { router };
