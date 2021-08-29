import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnlineRequestPage } from '@pages/users/pages/online-request/online-request.page';


@NgModule({
  declarations: [
    OnlineRequestPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OnlineRequestPage,
        data: {
          title: 'Online request',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class OnlineRequestModule {
}
