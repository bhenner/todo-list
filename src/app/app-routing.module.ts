import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TaskAddComponent} from "./task-add/task-add.component";
import {TaskViewComponent} from "./task-view/task-view.component";
import {TaskEditComponent} from "./task-edit/task-edit.component";

const routes: Routes = [
  {
    // contains the whole todo list
    path: 'tasks',
    component: TodoComponent
  },
  {
    // display the form to add a new task
    path: 'tasks/add',
    component: TaskAddComponent,
    data: {title: 'Add new task'}
  },
  {
    // display the form to add a new task
    path: 'tasks/:id',
    component: TaskViewComponent,
    data: {title: 'Task to do'}
  },
  {
    // display the form to add a new task
    path: 'tasks/:id/edit',
    component: TaskEditComponent,
    data: {title: 'Task edition'}
  },
  // Always go on /tasks path
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
