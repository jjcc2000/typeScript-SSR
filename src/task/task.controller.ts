import { injectable } from "inversify"

@injectable()
export class TaskController {
    constructor() {
    }

    public createtTask() {
        return {
            title: " This is the title",
            description: "This is the description",
        }
    }
}