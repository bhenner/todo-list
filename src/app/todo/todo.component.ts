import {Component, OnInit} from '@angular/core';
import {TaskReaderService} from "../task-reader.service";
import {Task} from "../shared/models/task.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: Task[];


  constructor(private taskReaderService: TaskReaderService) {
  }

  /**
   * retrieve tasks through the reader
   */
  getTasks(): Task[] {
    return this.taskReaderService.getTasks();
  }

  /**
   * Load tasks on init
   */
  ngOnInit() {
    this.tasks = this.getTasks();
    console.log('Initialized tasks');
    console.log(this.tasks);
  }

}
