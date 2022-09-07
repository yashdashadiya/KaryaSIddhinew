import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarStatusService } from './sidebar-status.service';
import { TaskServiceService } from './task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  inputs:['sidebarstatus']
})
export class AppComponent {
  title = 'kraya-siddhi';
  sideBarStatus?:boolean;
  subscription: any;
  // _subscription: any;
  // private _subscription: any;
  constructor(private SideBarStatusService:SideBarStatusService,TaskService:TaskServiceService){
    TaskService.firstTime();
    this.sideBarStatus=this.SideBarStatusService.sideBarStatus;
    this.subscription = SideBarStatusService.statusChange.subscribe((value: boolean | undefined) => {this.sideBarStatus = value;});

  }
  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this.subscription.unsubscribe();
   }
  // changStatusOfSideBar(){
  //   this.sideBarStatus=!this.sideBarStatus;
  // }

  
}

