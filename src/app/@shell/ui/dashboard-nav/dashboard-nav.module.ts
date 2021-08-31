import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavComponent } from './dashboard-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardNavComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [DashboardNavComponent],
})
export class DashboardNavModule {
}
