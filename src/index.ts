import express from "express"
import bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./Infrastructure/data-source.js"
import { Routes } from "./routes.js"
import { InversifyExpressServer } from "inversify-express-utils"
import { UserController } from "./controller/UserController.js"
import 'reflect-metadata';
import { Container } from "inversify"
// Your other imports and initialization code
// comes here after you imported the reflect-metadata package!
import { myContainer } from "../inversify.config.js"
import "./controller/UserController.ts"
AppDataSource.initialize().then(async () => {
    const container = new Container();
    container.load(myContainer);
    // create express app;
    let server = new InversifyExpressServer(container);
    server.setConfig((app) => {
        // add body parser
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
    });

    let app = server.build();
    app.listen(3000)
    // const app = express()
    // app.use(bodyParser.json())

    // // register express routes from defined application routes
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next)
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result)
    //         }
    //     })
    // })

    // // setup express app here
    // // ...
    // // start express server
    // app.listen(3000)




}).catch(error => console.log(error))
