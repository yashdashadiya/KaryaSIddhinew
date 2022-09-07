import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { from } from 'rxjs';
// import { mockTasks } from 'src/app/mock-task';
import { TaskModel } from 'src/app/model/task';
import { TaskServiceService } from 'src/app/task-service.service';
@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

})
export class HomePage implements OnInit {

  constructor(private TaskServiceService:TaskServiceService) { }

  @Input() sideBarStatus?: boolean;
  

  // sideBarStatusBool=this.sideBarStatus;

  // footerStatusBool=this.footerStatus;
  // list:TaskModel[]=mockTasks;
  // footerStatusBool:boolean=true;
  totalTaks=localStorage.getItem("TotalTask");
  totalCompletedTask=localStorage.getItem("totalCompleted");
  
  dateToday: number = Date.now();
  message: String = '';


  list: TaskModel[] = JSON.parse(localStorage.getItem("TaskList")!);



  ngOnInit(): void {

    // console.log(this.sideBarStatus);
    let date = new Date();
    let hours: Number = date.getHours();

    if (hours > 3 && hours < 12) {
      this.message = "Good Morning";
    }
    else if (hours > 11 && hours < 18) {
      this.message = "Good Afternoon";
    }
    else if (hours > 17 && hours < 20) {
      this.message = "Good Evening";
    }
    else {
      this.message = "sleep time";
    }
  }
  
  AddNewTask($event:any):void{
    this.TaskServiceService.addNewTask($event);
    this.list.push($event);

    this.totalTaks=localStorage.getItem("TotalTask");
    // console.log("event emit");
    // localStorage.setItem("TaskList",JSON.stringify(this.list));
  }
  
  updateStatus(id:any){
    for(let i=0;i<this.list.length;i++){
      if(id==this.list[i].id){
        this.list[i].status=false;
        localStorage.setItem("TaskList",JSON.stringify(this.list));
        this.totalCompletedTask=(parseInt(this.totalCompletedTask!)+1).toString();
        localStorage.setItem("totalCompleted",this.totalCompletedTask);
        break;
      }
    }
  }



  // footerStatus(){
  //   console.log(this.footerStatus);
  //   this.footerStatusBool=!this.footerStatusBool;
  // }
}
