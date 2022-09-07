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
},
// {
//     title:'Reward Kazoo Points ',
//     dueDate:'27th Aug 2022',
//     status:true,
//     priority:3,
//     description :'Reward Kazoo points for the Jul 2022 townhall’ winners'
// },
// {
//     title:'task2',
//     dueDate:'today',
//     status:false,
//     priority:1,
//     description :'this is discription 2 of task and bla s cdjcnjdk jfhsd kjfh'
// },
]