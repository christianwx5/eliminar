import "reflect-metadata";
import {createConnection} from "typeorm";
import express, { Application, Request, Response } from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes";
import {Socios} from "./entity/Socios";


import  cors from 'cors';
import * as helmet from 'helmet';

createConnection().then(async connection => {

    // create express app
    const app: Application = express();

    app.use(cors());
    // app.use(helmet());
    
    app.use(express.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...
    app.set("port", process.env.PORT || 3002);
    //const port = process.env.PORT || 3002
    // start express server
    

    app.get("/", (_req: Request, res: Response) => {
        res.json({ message: "Hello world!" });
      });

    app.listen(app.get("port"), () => {
        console.log(`Server on http://localhost:${app.get("port")}/`);
      });

    // insert new users for test
    await connection.manager.save(connection.manager.create(Socios, {
        firstName: "Maria Moñito",
        lastName: "Me Conbido",
        title: "develop FUll-Stack",
        description: "Bla bla",
        startDate: "01/01/2022"
    }));
    await connection.manager.save(connection.manager.create(Socios, {
        firstName: "Jsse Manolo",
        lastName: "Cabeza Mango",
        title: "Conserje",
        description: "Bla bla",
        startDate: "01/02/2022"
    }));

    console.log("Express server has started on port 3002. Open http://localhost:3002/users to see results");

}).catch(error => console.log(error));
