import { Component } from '@angular/core';
import { SideBarStatusService } from './sidebar-status.service';
import { TaskServiceService } from './task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  inputs: ['sidebarstatus']
})
export class AppComponent {

  // <-- variables -->
  title = 'kraya-siddhi';
  sideBarStatus?: boolean;
  subscription: any;

  // <-- constructor -->
  constructor(private SideBarStatusService: SideBarStatusService, TaskService: TaskServiceService) {
    TaskService.firstTime();
    this.sideBarStatus = this.SideBarStatusService.sideBarStatus;
    this.subscription = SideBarStatusService.statusChange.subscribe((value: boolean | undefined) => { this.sideBarStatus = value; });

  }
  // <-- functions -->
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

