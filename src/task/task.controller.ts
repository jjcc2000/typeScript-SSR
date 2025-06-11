import { injectable } from "inversify"

@injectable()
export class TaskController {
    constructor() {
        // Initialize any dependencies or services here if needed
    }

    // Example method to handle a task
    public createtTask() {
        return {
            title: " This is the title",
            description: "This is the description",
        }
        // Add logic to process the task
    }
}