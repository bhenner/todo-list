import {Injectable} from '@angular/core';

import {tasks} from '../assets/todo-list.json';
import {Task} from "../app/shared/models/task.model";


@Injectable({
  providedIn: 'root'
})
export class TaskReaderService {

  constructor() {
  }

  getTasks(): Task[] {
    return tasks;
  }
}
