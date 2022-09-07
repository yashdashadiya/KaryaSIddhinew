import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.scss']
})
export class TaskDisplayComponent implements OnInit {
  @Input() task?:any;
  @Output() markAsCompleteEvent:EventEmitter<any>=new EventEmitter<any>();
  date:any;
  today:Date=new Date();
  pipeline=new DatePipe('en-US');
  constructor() { }

  ngOnInit(): void {
    //display today and tomorrow in pace of date
    if(this.today.getDate()==parseInt(this.pipeline.transform(this.task.dueDate, 'dd')!) && this.today.getMonth()+1==parseInt(this.pipeline.transform(this.task.dueDate, 'MM')!) && this.today.getFullYear()==parseInt(this.pipeline.transform(this.task.dueDate, 'YYYY')!)){
      this.date="Today";
    }
    else if(this.today.getDate()==parseInt(this.pipeline.transform(this.task.dueDate, 'dd')!)-1 && this.today.getMonth()+1==parseInt(this.pipeline.transform(this.task.dueDate, 'MM')!) && this.today.getFullYear()==parseInt(this.pipeline.transform(this.task.dueDate, 'YYYY')!)){
      this.date="Tomorrow";
    }
    else if(parseInt(this.pipeline.transform(this.task.dueDate, 'dd')!)-this.today.getDate()<7 && this.today.getMonth()+1==parseInt(this.pipeline.transform(this.task.dueDate, 'MM')!) && this.today.getFullYear()==parseInt(this.pipeline.transform(this.task.dueDate, 'YYYY')!)){
      let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      console.log(parseInt(this.pipeline.transform(this.task.dueDate, 'dd')!));
      this.date=this.pipeline.transform(this.task.dueDate, 'EEEE')!;
    }
    else{
      this.date=this.pipeline.transform(this.task.dueDate, 'dd MMM yyyy');
    }

  }
  markAsComplete(){
    this.markAsCompleteEvent.emit();
  }

}
