import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TaskAddComponent} from "./task-add/task-add.component";
import {TaskViewComponent} from "./task-view/task-view.component";

const routes: Routes = [
  {
    // contains the whole todo list
    path: 'todo',
    component: TodoComponent
  },
  {
    // display the form to add a new task
    path: 'todo/add',
    component: TaskAddComponent,
    data: {title: 'Add new task'}
  },
  {
    // display the form to add a new task
    path: 'todo/task/:id',
    component: TaskViewComponent,
    data: {title: 'Task to do'}
  },
  {
    // display the form to add a new task
    path: 'todo/task/:id/edit',
    component: TaskAddComponent,
    data: {title: 'Task edition'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
