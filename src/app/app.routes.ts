import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main/home/home.component').then((m) => m.HomeComponent),
  },
];
