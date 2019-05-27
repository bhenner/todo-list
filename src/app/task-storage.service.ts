import {Injectable} from '@angular/core';

import {init_tasks} from '../assets/todo-list.json';
import {Task} from "../app/shared/models/task.model";


@Injectable({
  providedIn: 'root'
})
export class TaskStorageService implements OnInit {

  tasks: Task[];

  constructor() {
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  /**
   * Remove the tasks from the list
   *
   * @param index task index to remove
   */
  delete(index) {

    let remaining_tasks: Task[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      // we found the task to remove, we do not include it in our new array
      if (i == index) {
        continue;
      }

      remaining_tasks.push(this.tasks[i]);
    }
    this.tasks = remaining_tasks;
    return true;
  }


  add(title, note) {


  }

  update(index, Task: task) {

  }

  /**
   * Load tasks from json files
   */
  init() {
    this.tasks = init_tasks;
  }
}
