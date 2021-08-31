import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentGroupsPage } from '@pages/school/pages/student-groups/student-groups.page';



@NgModule({
  declarations: [
    StudentGroupsPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentGroupsPage,
        data: {
          title: 'Student Groups',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class StudentGroupsModule {
}
