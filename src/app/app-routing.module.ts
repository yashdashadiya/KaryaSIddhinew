import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { TaskPage } from './pages/task/task.page';
// import { sideBarStatus } from './app.component/sideBarStatus';

const routes: Routes = [{path:'home',component:HomePage},{path:'task',component:TaskPage}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
