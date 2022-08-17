import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../core/layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'Home',
      },
      {
        path: 'Home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesModule {}
