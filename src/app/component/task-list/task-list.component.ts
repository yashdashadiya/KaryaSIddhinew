import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mockTasks } from 'src/app/mock-task';
import { TaskModel } from 'src/app/model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  // <-- inputs and outputs -->
  @Input() TaskHeading?: String;
  @Input() TaskList?: TaskModel[];
  @Output() addNewTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateStatus: EventEmitter<any> = new EventEmitter<any>();

  // <-- variables -->
  formStatus: String = "close";
  taskTitle?: String;
  taskDescription?: String;
  taskDue?: Date;
  taskPriority?: number;

  // <-- constructor -->
  constructor() {

  }

  //<-- functions -->
  ngOnInit(): void {
  }

  generateTask() {
    this.addNewTask.emit({
      title: this.taskTitle,
      dueDate: this.taskDue,
      status: true,
      priority: this.taskPriority,
      description: this.taskDescription
    });
    this.closeTaskPage()
  }

  closeTaskPage() {
    this.taskDue = undefined;
    this.taskPriority = undefined;
    this.taskDescription = undefined;
    this.taskTitle = undefined;
    this.formStatus = "close";
  }

  openTaskPage() {
    this.formStatus = "open";
  }

  markAsComplete(id: any) {
    this.updateStatus.emit(id);
  }

  // getter
  get filterByStatus() {
    return this.TaskList!.filter(x => x.status);
  }
}
