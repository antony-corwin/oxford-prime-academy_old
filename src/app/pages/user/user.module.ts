import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserPage } from '@pages/user/user.page';
import { DashboardNavModule } from '@shell/ui/dashboard-nav/dashboard-nav.module';

@NgModule({
  declarations: [UserPage],
  imports: [CommonModule,DashboardNavModule, UserRoutingModule],
})
export class UserModule {
}
