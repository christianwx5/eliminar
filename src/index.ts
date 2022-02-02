import express, { Application, Request, Response } from "express";


import "reflect-metadata";
import {createConnection} from "typeorm";
import * as bodyParser from "body-parser";
import {Routes} from "./routes";
import {Socios} from "./entity/Socios";


import  cors from 'cors';
import * as helmet from 'helmet';



const app: Application = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello world! mercoles 3" });
});

app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}/`);
});