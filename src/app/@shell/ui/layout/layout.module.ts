import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { LayoutComponent } from './layout.component';
import { DashboardMenuModule } from '@shell/ui/dashboard-menu/dashboard-menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HeaderModule, FooterModule, DashboardMenuModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {
}
