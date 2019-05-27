import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Task} from "../shared/models/task.model";
import {TaskStorageService} from "../task-storage.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task: Task;

  /**
   * Task id form field
   */
  id;

  /**
   * Task title form field
   */
  title = new FormControl('');

  /**
   *  Task note form field
   */
  note = new FormControl('');


  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {
  }

  /**
   * Load tasks on init
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.task = this.storage.get(params.get('id'));
      this.id = this.task.id;
      this.note.setValue(this.task.note);
      this.title.setValue(this.task.title);
    });
  }

  /**
   * Update the task and return to the list
   */
  updateTask() {
    this.task = this.storage.update(this.id, this.title.value, this.note.value);
    this.router.navigate(['/tasks'])
  }
}
