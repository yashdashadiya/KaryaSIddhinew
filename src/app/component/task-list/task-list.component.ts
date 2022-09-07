import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mockTasks } from 'src/app/mock-task';
import { TaskModel } from 'src/app/model/task';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { CommonModule,NgSwitch } from '@angular/common';
// import { mockTasks } from '../mock-task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  formStatus: String = "close";
  taskTitle?: String ;
  taskDescription?: String;
  taskDue?: Date;
  taskPriority?: number;
  @Input() TaskType?:String;
  @Input() TaskList?:TaskModel[];
  @Output() addNewTask:EventEmitter<any>=new EventEmitter<any>();
  @Output() updateStatus:EventEmitter<any>=new EventEmitter<any>();
  mockTasks=mockTasks;

  constructor() { 
}
  ngOnInit(): void {

    // TaskType=this.TaskType;
    // this.mockT.push(this.obj);

  }

  generateTask() {
    debugger;
    // obj:TaskModel=new TaskModel(this.taskTitle,this.taskDescription,this.taskDue,true,this.taskPriority);
    this.addNewTask.emit({
      title: this.taskTitle,
      dueDate: this.taskDue,
      status: true,
      priority: this.taskPriority,
      description: this.taskDescription
    });
    // console.log(this.taskTitle);
    // console.log(this.taskDescription);
    // console.log(this.taskDue);
    // console.log(this.taskPriority);
    // this.taskDue = new Date("2019 08 04") ;
    // this.taskTitle = '';
    // this.taskDescription = '';
    // this.taskPriority = 3;
    this.closeTaskPage()
    
  }
  closeTaskPage() {
    this.taskDue = undefined;
    this.taskPriority = undefined;
    this.taskDescription = undefined;
    this.taskTitle = undefined;
    this.formStatus = "close";
  }
  
  openTaskPage(){
    console.log("statusbar open");
    this.formStatus="open";
  }
  markAsComplete(id:any){
    this.updateStatus.emit(id);
  }

  get filterByAge() {
    return this.TaskList!.filter( x => x.status);
  }
  // public addTask(obj:any){
  //   const tasklist=JSON.parse(localStorage.getItem("TaskList")!);
  //   tasklist.push(obj);
  // }
}
