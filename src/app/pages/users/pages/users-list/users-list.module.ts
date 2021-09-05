import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListPage } from '@pages/users/pages/users-list/users-list.page';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    UsersListPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersListPage,
        data: {
          title: 'Users list',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
    SharedModule,
    InputTextModule,
    TableModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    DropdownModule,
    FormsModule,
    DialogModule,
    CheckboxModule,
  ],
})
export class UsersListModule {
}
