import { Component, OnInit } from '@angular/core';
import { mockTasks } from 'src/app/mock-task';
import { TaskModel } from 'src/app/model/task';
@Component({
  selector: 'page-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss']
})
export class TaskPage implements OnInit {

  constructor() { }

  list:TaskModel[]=mockTasks;
  ngOnInit(): void {
  }

}
