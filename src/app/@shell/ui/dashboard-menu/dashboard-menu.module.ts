import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuComponent } from './dashboard-menu.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from '@app/@shared/modules/icons/icons.module';
import { OtherIconsModule } from '@app/@shared/modules/icons/other-icons.module';
import { MultimediaIconsModule } from '@app/@shared/modules/icons/multimedia-icons.module';
import { DevicesIconsModule } from '@app/@shared/modules/icons/devices-icons.module';
import { ContentIconsModule } from '@app/@shared/modules/icons/content-icons.module';


@NgModule({
  declarations: [
    DashboardMenuComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    IconsModule,
    DevicesIconsModule,
    ContentIconsModule,
    MultimediaIconsModule,
    OtherIconsModule,
  ],
  exports: [
    DashboardMenuComponent,
  ],
})
export class DashboardMenuModule {
}
