import { Container } from "inversify";
import { TaskController } from "../task/task.controller";

const container: Container = new Container();

container.bind(TaskController).toSelf().inSingletonScope();


export default container;