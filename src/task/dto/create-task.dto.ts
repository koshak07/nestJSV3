import { PartialType } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator';
import { Task } from '../task.entity';
import { Status } from '../task.interface';

export class CreateTaskDto {
    @IsString()
    task: string;
    @IsOptional()
    @IsString({ each: true })
    tags?: string[]
    status?: Status
}