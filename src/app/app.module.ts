import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskListComponent } from './component/task-list/task-list.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
// import { TaskRoutingModule } from './task-routing.module';
import { HomePage } from './pages/home/home.page';
import { TaskPage } from './pages/task/task.page';
import { FooterComponent } from './component/footer/footer.component';
import { SideBarStatusService } from './sidebar-status.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskServiceService } from './task-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TaskListComponent,
    SideBarComponent,
    HomePage,
    TaskPage, 
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SideBarStatusService,TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
