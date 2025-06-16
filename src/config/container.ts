import { Container } from "inversify";
import { TaskController } from "../task/task.controller";
import { TaskRouter } from "../task/task.router";

const container = new Container();

container.bind(TaskController).toSelf().inSingletonScope();
container.bind(TaskRouter).toSelf().inSingletonScope();

export default container;