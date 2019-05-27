import {Component, OnInit} from '@angular/core';
import {TaskStorageService} from "../task-storage.service";
import {Task} from "../shared/models/task.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: Task[];

  constructor(private storage: TaskStorageService) {
  }

  /**
   * Load tasks on init
   */
  ngOnInit() {
    this.storage.init();
    this.tasks = this.storage.getTasks();
  }

  /**
   * Remove the tasks from the list
   *
   * @param index task index to remove
   */
  delete(index): boolean {
    this.storage.delete(index);
    this.tasks = this.storage.getTasks();
  }
}
