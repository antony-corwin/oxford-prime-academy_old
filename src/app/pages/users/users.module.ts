import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavModule } from '@shell/ui/dashboard-nav/dashboard-nav.module';
import { UsersPage } from '@pages/users/users.page';
import { MatButtonModule } from '@angular/material/button';
import { UsersRoutingModule } from '@pages/users/users-routing.module';

@NgModule({
  declarations: [UsersPage],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DashboardNavModule,
    MatButtonModule,
  ],
})
export class UsersModule {
}
