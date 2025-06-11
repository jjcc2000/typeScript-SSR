import express, { Request, Response, Express } from "express";
import "reflect-metadata"
import container from "./src/config/container";
import { TaskController } from "./src/task/task.controller";


const app: Express = express();
const task = container.get(TaskController);


app.get("/", (req: Request, res: Response) => {
    res.send("<h2> This is the home route</h2>");
});

app.post("/task", (req: Request, res: Response) => {
    const newTask = task.createtTask();
    res.json(newTask);
})

app.listen(3000, () => {
    console.log("Listen on 3000 port");
});