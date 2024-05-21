import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Task {
  id: number;
  TeammemberDetails: string;
  clientInformation: {
    name: string;
    projectName: string;
    email: string;
  };
  title: string;
  createdDate: string;
  Completeddate: string;
  status: string;
  priority: string;
  newTeammemberDetails: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  selectedClient: any;
  taskOptions: string[] = [];
  teamMembers: string[] = [];
  currentUser = { username: 'user123' }; // Assuming currentUser is obtained from authentication

  private dummyTasks: Task[] = [
    { id: 1, TeammemberDetails: 'user123', clientInformation: { name: 'Client 1', projectName: 'Project 1', email: 'client1@example.com' }, title: 'Task 1', createdDate: '2024-05-01', Completeddate: '2024-06-01', status: 'Pending', priority: 'Low', newTeammemberDetails: '' },
    { id: 2, TeammemberDetails: 'satish', clientInformation: { name: 'Client 2', projectName: 'Project 2', email: 'client2@example.com' }, title: 'Task 2', createdDate: '2024-05-02', Completeddate: '2024-06-02', status: 'Completed', priority: 'High', newTeammemberDetails: '' },
    { id: 3, TeammemberDetails: 'john', clientInformation: { name: 'Client 3', projectName: 'Project 3', email: 'client3@example.com' }, title: 'Task 3', createdDate: '2024-05-03', Completeddate: '2024-06-03', status: 'Pending', priority: 'Medium', newTeammemberDetails: '' },
    { id: 4, TeammemberDetails: 'hemanth', clientInformation: { name: 'Client 1', projectName: 'Project 1', email: 'client1@example.com' }, title: 'Task 4', createdDate: '2024-05-01', Completeddate: '2024-06-01', status: 'Pending', priority: 'Low', newTeammemberDetails: '' },
    { id: 5, TeammemberDetails: 'ajay', clientInformation: { name: 'Client 2', projectName: 'Project 2', email: 'client2@example.com' }, title: 'Task 5', createdDate: '2024-05-02', Completeddate: '2024-06-02', status: 'Completed', priority: 'High', newTeammemberDetails: '' },
    { id: 6, TeammemberDetails: 'vamsi', clientInformation: { name: 'Client 3', projectName: 'Project 3', email: 'client3@example.com' }, title: 'Task 6', createdDate: '2024-05-03', Completeddate: '2024-06-03', status: 'Pending', priority: 'Medium', newTeammemberDetails: '' },
    { id: 7, TeammemberDetails: 'harshitha', clientInformation: { name: 'Client 1', projectName: 'Project 1', email: 'client1@example.com' }, title: 'Task 7', createdDate: '2024-05-01', Completeddate: '2024-06-01', status: 'Pending', priority: 'Low', newTeammemberDetails: '' },
    { id: 8, TeammemberDetails: 'usha', clientInformation: { name: 'Client 2', projectName: 'Project 2', email: 'client2@example.com' }, title: 'Task 8', createdDate: '2024-05-02', Completeddate: '2024-06-02', status: 'Completed', priority: 'High', newTeammemberDetails: '' },
    { id: 9, TeammemberDetails: 'praneetha', clientInformation: { name: 'Client 3', projectName: 'Project 3', email: 'client3@example.com' }, title: 'Task 9', createdDate: '2024-05-03', Completeddate: '2024-06-03', status: 'Pending', priority: 'Medium', newTeammemberDetails: '' },
    // Add more tasks...
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(filterParams: any = {}) {
    const itemsPerPage = 5;
    const startIndex = (this.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let filteredTasks = this.dummyTasks;

    if (filterParams.status) {
      filteredTasks = this.dummyTasks.filter(task => task.status === filterParams.status);
    }

    this.tasks = filteredTasks.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
    this.taskOptions = [...new Set(filteredTasks.map(task => task.title))];
    this.teamMembers = [...new Set(filteredTasks.map(task => task.TeammemberDetails))];
  }

  onFilterChanged(filterParams: any) {
    this.currentPage = 1;
    this.loadTasks(filterParams);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadTasks();
    }
  }

  onStatusChange(task: Task) {
    console.log(`Status of task ${task.id} changed to ${task.status}`);
  }

  onPriorityChange(task: Task) {
    console.log(`Priority of task ${task.id} changed to ${task.priority}`);
  }

  viewDetails(taskId: number) {
    this.router.navigate(['/task', taskId]);
  }

  showClientDetails(task: Task) {
    this.selectedClient = task.clientInformation;
    console.log('Client Information:', this.selectedClient);
  }

  showClientDetailsHeader() {
    console.log('Clicked on client information header');
  }

  onTaskTitleChange(task: Task) {
    console.log(`Task title of task ${task.id} changed to ${task.title}`);
  }

  reassignTask(task: Task) {
    console.log(`Task ${task.id} reassigned to ${task.newTeammemberDetails}`);
  }
}
