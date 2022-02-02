import express, { Application, Request, Response } from "express";


import "reflect-metadata";
import {createConnection} from "typeorm";
import * as bodyParser from "body-parser";
import {Routes} from "./routes";
import {Socios} from "./entity/Socios";


import  cors from 'cors';
import  helmet from 'helmet';




const app: Application = express();
app.use(cors());
app.use(helmet());

app.use(express.json());

app.set("port", process.env.PORT || 3000);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello world! mercoles 4" });
});

app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}/`);
});