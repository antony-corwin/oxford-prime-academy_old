import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { MatIconModule } from '@angular/material/icon';
import { AlertsIconsModule } from '@app/@shared/modules/icons/alerts-icons.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule,
    RouterModule,
    DropdownModule,
    FormsModule,
    AvatarModule, ButtonModule, SplitButtonModule, ToolbarModule, MenuModule, RippleModule, InputTextModule, BadgeModule, MatIconModule, AlertsIconsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
