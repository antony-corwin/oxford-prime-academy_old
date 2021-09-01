import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavModule } from '@shell/ui/dashboard-nav/dashboard-nav.module';
import { MatButtonModule } from '@angular/material/button';
import { SchoolPage } from '@pages/school/school.page';
import { SchoolRoutingModule } from '@pages/school/school-routing.module';

@NgModule({
  declarations: [SchoolPage],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    DashboardNavModule,
    MatButtonModule,
  ],
})
export class SchoolModule {
}
