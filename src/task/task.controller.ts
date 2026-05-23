import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import type { Task } from "generated/prisma/browser";
import { TaskService } from "./task.service";

@Controller()
export class TaskController {

    constructor(private readonly taskService: TaskService) {}

    @Get()
    async getAllTasks() {
        this.taskService.getAllTasks()
    }

    @Post()
    async createTask(@Body() data: Task) {
        this.taskService.createTask(data)
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string ) {
        this.taskService.getTaskById(Number(id))
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string ) {
        this.taskService.deleteTask(Number(id))
    }
}