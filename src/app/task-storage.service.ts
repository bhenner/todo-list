import {Injectable} from '@angular/core';

import {init_tasks} from '../assets/todo-list.json';
import {Task} from "../app/shared/models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  tasks: Task[] = [];

  /**
   * Whether data have already been loaded from storage
   */
  initialized: boolean = false;

  constructor() {
  }

  /**
   * Returns all tasks
   */
  getTasks(): Task[] {
    this.init();
    return this.tasks;
  }

  /**
   * Remove the tasks from the list
   *
   * @param index task index to remove
   */
  delete(id) {
    let remaining_tasks: Task[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      var current_task = this.tasks[i];

      // we found the task to remove, we do not include it in our new array
      if (id == current_task.id) {
        console.log('Skipping tash[' + current_task.title + ']');
        continue;
      }

      remaining_tasks.push(this.tasks[i]);
    }
    this.tasks = remaining_tasks;
    return true;
  }

  /**
   * Return the task based in the given id
   *
   * @param id
   */
  get(id): Task {

    this.init();

    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      // we found the task to remove, we do not include it in our new array
      if (task.id != id) {
        continue;
      }
      return task;
    }

    return null;
  }

  /**
   * Create a new task based on the given data (+ generate a new id)
   * @param title
   * @param note
   */
  add(title, note) {
    let task = new Task(title, note, this.getHighestId() + 1);
    this.tasks.push(task);
  }

  /**
   * Update the task and return it
   *
   * @param id
   * @param title
   * @param note
   *
   * @return Task
   */
  update(id, title: string, note: string): Task {

    let task = this.get(id);
    task.title = title;
    task.note = note;

    return task;
  }

  /**
   * Load tasks from json file
   */
  init() {
    if (this.initialized) {
      console.log('Already initialized');
      return;
    }
    console.log('Loading data from json file');

    for (let i = 0; i < init_tasks.length; i++) {
      this.tasks.push(
        new Task(
          init_tasks[i]['title'],
          init_tasks[i]['note'],
          init_tasks[i]['id'])
      );
    }

    this.initialized = true;
  }

  /**
   * Returns highest task id from our list.
   */
  getHighestId(): number {
    let highest: number = 0;
    this.init();
    this.tasks.forEach(function (current_task: Task) {

      if (current_task.id < highest) {
        return;
      }

      highest = current_task.id;
    });

    return highest;
  }
}
