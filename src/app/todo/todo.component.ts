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
  ngOnInit() : void{
    this.storage.init();
    this.tasks = this.storage.getTasks();
  }

  /**
   * Remove the tasks from the list
   *
   * @param id task index to remove
   */
  delete(id): void {
    this.storage.delete(id);
    this.tasks = this.storage.getTasks();
  }
}
