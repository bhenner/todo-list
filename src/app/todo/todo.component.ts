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
  loadTasks(): Task[] {
    return this.taskReaderService.getTasks();
  }

  /**
   * Load tasks on init
   */
  ngOnInit() {
    this.tasks = this.loadTasks();
    console.log('Initialized tasks');
    console.log(this.tasks);
  }

  delete(index): boolean {

    let remaining_tasks: Task[] = [];

    console.log('Try to remove task #' + index);

    for (let i = 0; i < this.tasks.length; i++) {

      console.log(this.tasks[i]);

      console.log(i)
      if (i == index) {
        console.log('skkiped');
        continue;
      }

      remaining_tasks.push(this.tasks[i]);
    }

    this.tasks = remaining_tasks;

    return true;


  }

}
