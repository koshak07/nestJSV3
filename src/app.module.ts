import { Module } from '@nestjs/common';
import { TaskController as TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';


@Module({
  imports: [TaskModule],

})
export class AppModule { }
