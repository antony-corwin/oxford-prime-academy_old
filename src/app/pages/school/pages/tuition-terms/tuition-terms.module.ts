import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuitionTermsPage } from '@pages/school/pages/tuition-terms/tuition-terms.page';


@NgModule({
  declarations: [
    TuitionTermsPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TuitionTermsPage,
        data: {
          title: 'Tuition Terms',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class TuitionTermsModule {
}
