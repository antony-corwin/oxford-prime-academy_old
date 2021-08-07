import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDashboardPage } from './admin-dashboard.page';

@NgModule({
  declarations: [AdminDashboardPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminDashboardPage,
        data: {
          title: 'Dashboard',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class AdminDashboardModule {
}
