import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfilePage } from '@pages/user/pages/profile/profile.page';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePage,
        data: {
          title: 'Profile',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
    AccordionModule,
    InputTextModule,
    InputTextareaModule,
  ],
})
export class ProfileModule {
}
