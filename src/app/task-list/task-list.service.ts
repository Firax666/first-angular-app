import { Injectable } from "@angular/core";
import { Task } from "./task/task.component";

@Injectable({providedIn: 'root'})
export class TaskListService {
    
  taskList = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Learn basics of angular',
      summary: "Finish course Angular - the complete guide on Udemy.com.",
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn basics of java',
      summary: "Finish course Java - the complete guide on Udemy.com.",
      dueDate: '2024-07-31'
    }
  ]

  getUserTasks(userId: string) {
    return this.taskList.filter((task) => task.userId === userId);
  }

  removeTask(taskId: string) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }

  addTask(task: Task, userId: string) {
    task.id = this.findNextTaskId();
    task.userId = userId;
    this.taskList.push(task);
  }

  
  findNextTaskId(): string {
    var idNo = 0;
    for (const task of this.taskList) {
      const matchId = task.id.match(/^t(\d+)$/);
      if(!matchId)
        continue;
      const curIdNo = parseInt(matchId[1]);
      if(idNo < curIdNo)
        idNo = curIdNo
    }
    console.log(idNo);
    return "t"+(idNo+1);
  }


}