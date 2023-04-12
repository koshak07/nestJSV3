import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskService as TaskService } from './task.service';



@Controller()
export class TaskController {
    constructor(private testServise: TaskService) {

    }
    @Get()
    getTask(): ITask[] {
        return this.testServise.getTask()
    }
    @Get(':id')
    getTaskById(@Param('id') id: number): ITask {
        return this.testServise.getTaskById(id)
    }
    @Post('task')
    createTask(@Body('task') task: string): ITask {
        return this.testServise.createTask(task)
    }

}
