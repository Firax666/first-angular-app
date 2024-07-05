import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task/task.component';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {
  @Output() close = new EventEmitter<boolean>()
  @Output() submittedTask = new EventEmitter<Task>()
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";


  onTaskAddingCancel() {
    this.close.emit(false);
  }

  onTaskAddingSubmit() {
    this.close.emit(false);
    this.submittedTask.emit({
      id: "",
      userId: "",
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    })
  }
}
