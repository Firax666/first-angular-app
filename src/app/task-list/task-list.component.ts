import { Component, Input, Type } from '@angular/core';
import { Task, TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent{
  @Input() name?: string;
  @Input({required: true}) selectedUserId!: string;
  @Input() taskCreatorOpen?: boolean;
  
  constructor(private taskListService: TaskListService) {}

  get selectedUserTasks() {
    return this.taskListService.getUserTasks(this.selectedUserId);
  }

  onCompleteTask(taskId: string) {
    this.taskListService.removeTask(taskId);
  }

  addNewTask() {
    this.taskCreatorOpen = true;
  }
  onTaskAddingClosing() {
    this.taskCreatorOpen = false;
  }

  onTaskCreated(task: Task) {
    this.taskListService.addTask(task, this.selectedUserId);
  }

}
