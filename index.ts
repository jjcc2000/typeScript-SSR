import express, { Request, Response, Express } from "express";
import "reflect-metadata"
import { TaskRouter } from "./src/task/task.router";
import container from "./src/config/container";

const app: Express = express();

// Get the TaskRouter class, not "router"
const taskRouterInstance = container.get(TaskRouter);

app.use("/task", taskRouterInstance.router);

app.get("/", (req: Request, res: Response) => {
    res.send("<h2> This is the home route</h2>");
});

app.listen(3000, () => {
    console.log("Listen on 3000 port");
});