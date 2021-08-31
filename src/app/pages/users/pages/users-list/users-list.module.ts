import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListPage } from '@pages/users/pages/users-list/users-list.page';
import { RouterModule } from '@angular/router';


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
  ],
})
export class UsersListModule {
}
