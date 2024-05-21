import { Component, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChange = new EventEmitter<any>();

  filterParams: any = {};

  applyFilter() {
    // Populate filterParams based on user input
    // For example, filterParams could be something like { status: 'Pending' }
    this.filterChange.emit(this.filterParams);
  }
}
