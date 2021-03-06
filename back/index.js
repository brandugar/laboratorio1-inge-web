import express from "express";
import cors from "cors";
import { router } from "./routes/router.js";
import bodyParser from "body-parser";

const app = express();

var port = process.env.PORT || 8080;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
