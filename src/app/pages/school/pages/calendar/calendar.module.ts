import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentsPage } from '@pages/users/pages/documents/documents.page';
import { CalendarPage } from '@pages/school/pages/calendar/calendar.page';


@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarPage,
        data: {
          title: 'Calendar',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class CalendarModule {
}
