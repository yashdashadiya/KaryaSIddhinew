// import { TaskModel } from 'src/app/model/task.ts';
import { TaskModel } from "./model/task"
export const sidebarvisibilitystatus:boolean=true;
export const mockTasks:TaskModel[]=[{
    title:'Complete budgeting for FY 2023',
    dueDate:new Date("Dec 08 2019"),
    status:true,
    priority:1,
    description :'Budgeting for FY 2023. This is required by the Finance department. A further longer description Is possible.'
},
{
    title:'Complete wireframes',
    dueDate:new Date('27th Aug 2022'),
    status:false,
    priority:2,
    description :'Wireframes required to be created in plain CSS & HTML and JavaScript.'
}]