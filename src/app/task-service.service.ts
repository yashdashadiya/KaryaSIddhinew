import { Injectable, OnInit } from '@angular/core';
import { TaskModel } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService implements OnInit{

  // <-- variables -->
  taskList:TaskModel[]=JSON.parse(localStorage.getItem("TaskList")!);

  constructor() { }

  // <-- functions -->
  ngOnInit(): void {
  }

  addNewTask(obj:TaskModel){
    obj.id = parseInt(localStorage.getItem("TotalTask")!);
    localStorage.setItem("TotalTask",(parseInt(localStorage.getItem("TotalTask")!)+1).toString())
    this.taskList.push(obj);
    localStorage.setItem("TaskList",JSON.stringify(this.taskList));
  }

  firstTime(){
    if(localStorage.getItem("TaskList")==null){
      this.taskList=[];
      localStorage.setItem("TotalTask","0");
      localStorage.setItem("TaskList",JSON.stringify(this.taskList));
      localStorage.setItem("totalCompleted","0");
      
    }
  }
}
