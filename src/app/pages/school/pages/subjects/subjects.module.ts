import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubjectsPage } from '@pages/school/pages/subjects/subjects.page';


@NgModule({
  declarations: [
    SubjectsPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubjectsPage,
        data: {
          title: 'Subjects',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class SubjectsModule {
}
