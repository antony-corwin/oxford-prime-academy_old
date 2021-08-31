import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDashboardPage } from './admin-dashboard.page';
import { DashboardMenuModule } from '@shell/ui/dashboard-menu/dashboard-menu.module';

@NgModule({
  declarations: [AdminDashboardPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminDashboardPage,
        data: {
          title: 'AdminDashboard',
          robots: 'noindex, nofollow',
        },
      },
    ]),
    DashboardMenuModule,
  ],
})
export class AdminDashboardModule {
}
