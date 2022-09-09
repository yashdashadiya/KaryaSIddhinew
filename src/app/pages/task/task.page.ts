import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/model/task';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'page-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss']
})
export class TaskPage implements OnInit {

  // <-- variables -->
  list: TaskModel[] = JSON.parse(localStorage.getItem("TaskList")!);
  totalTaks = localStorage.getItem("TotalTask");
  totalCompletedTask = localStorage.getItem("totalCompleted");
  pipeline = new DatePipe('en-US');
  today: Date = new Date();
  taskcompleted: boolean = false;

  // <-- constructor -->
  constructor(private TaskServiceService: TaskServiceService) {
  }

// <-- functions -->

  ngOnInit(): void {
  }

  AddNewTask($event: any): void {
    this.TaskServiceService.addNewTask($event);
    this.list.push($event);
  }

  updateStatus(id: any) {
    for (let i = 0; i < this.list.length; i++) {
      if (id == this.list[i].id) {
        this.list[i].status = false;
        localStorage.setItem("TaskList", JSON.stringify(this.list));
        this.totalCompletedTask = (parseInt(this.totalCompletedTask!) + 1).toString();
        localStorage.setItem("totalCompleted", this.totalCompletedTask);
        break;
      }
    }
  }

  // get filter(filterBy:String){
  //   switch(filterBy){
  //     case "Priority":
  //       return this.list.filter(x=>(x.priority==1 && !x.status==this.taskcompleted));
  //     case "Today":
  //       return this.list.filter(x=>(!x.status==this.taskcompleted && this.today.getDate()==parseInt(this.pipeline.transform(x.dueDate, 'dd')!) && this.today.getMonth()+1==parseInt(this.pipeline.transform(x.dueDate, 'MM')!) && this.today.getFullYear()==parseInt(this.pipeline.transform(x.dueDate, 'YYYY')!)));
  //     case "Leter":
  //       return this.list.filter(x=>(!x.status==this.taskcompleted && (this.today.getDate()!=parseInt(this.pipeline.transform(x.dueDate, 'dd')!) || this.today.getMonth()+1!=parseInt(this.pipeline.transform(x.dueDate, 'MM')!) || this.today.getFullYear()!=parseInt(this.pipeline.transform(x.dueDate, 'YYYY')!))));
  //   }
  // }

  get filterByPriority() {
    return this.list.filter(x => (x.priority == 1 && !x.status == this.taskcompleted));
  }

  get filterByToday() {
    return this.list.filter(x => (!x.status == this.taskcompleted && this.today.getDate() == parseInt(this.pipeline.transform(x.dueDate, 'dd')!) && this.today.getMonth() + 1 == parseInt(this.pipeline.transform(x.dueDate, 'MM')!) && this.today.getFullYear() == parseInt(this.pipeline.transform(x.dueDate, 'YYYY')!)));
  }

  get filterByLater() {
    return this.list.filter(x => (!x.status == this.taskcompleted && (this.today.getDate() != parseInt(this.pipeline.transform(x.dueDate, 'dd')!) || this.today.getMonth() + 1 != parseInt(this.pipeline.transform(x.dueDate, 'MM')!) || this.today.getFullYear() != parseInt(this.pipeline.transform(x.dueDate, 'YYYY')!))));
  }

}
