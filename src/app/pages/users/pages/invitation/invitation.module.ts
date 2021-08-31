import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvitationPage } from '@pages/users/pages/invitation/invitation.page';


@NgModule({
  declarations: [
    InvitationPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvitationPage,
        data: {
          title: 'Invitation',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class InvitationModule {
}
