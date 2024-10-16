import { Routes } from '@angular/router';

export default [
  {
    path: 'task-list',
    loadComponent: () => import('./task-list/task-list.component'),
  },
] as Routes;
