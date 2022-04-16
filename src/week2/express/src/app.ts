import * as bodyParser from "body-parser";
import express, {Request as ExRequest, Response as ExResponse} from "express";
import swaggerUi from "swagger-ui-express";
import {RegisterRoutes} from "./routes";

export const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
        swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
});
RegisterRoutes(app);
