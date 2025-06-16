import { Router, Request, Response } from "express";
import { injectable, inject } from "inversify";

import { TaskController } from "./task.controller";

export const taskRouter: Router = Router();


@injectable()
export class TaskRouter {
    public router: Router;
    constructor(@inject(TaskController) private taskController: TaskController) {
        this.router = taskRouter;
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.post("/create", (req: Request, res: Response) => {
            const newTask = this.taskController.createtTask();
            res.json(newTask);
        });
    }
}