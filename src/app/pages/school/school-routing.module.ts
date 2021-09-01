import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { SchoolPage } from '@pages/school/school.page';


const path = ROUTER_UTILS.config.school;

const routes: Routes = [
  {
    path: '',
    component: SchoolPage,
    data: {
      title: 'School',
      robots: 'noindex, nofollow',
    },
    children: [
      {
        path: '',
        redirectTo: path.subjects,
        pathMatch: 'full',
      },
      {
        path: path.subjects,
        loadChildren: async () =>
          (await import('@pages/school/pages/subjects/subjects.module')).SubjectsModule,
      },
      {
        path: path.studentGroups,
        loadChildren: async () =>
          (await import('@pages/school/pages/student-groups/student-groups.module')).StudentGroupsModule,
      },
      {
        path: path.classRooms,
        loadChildren: async () =>
          (await import('@pages/school/pages/class-rooms/class-rooms.module')).ClassRoomsModule,
      },
      {
        path: path.calendar,
        loadChildren: async () =>
          (await import('@pages/school/pages/calendar/calendar.module')).CalendarModule,
      },
      {
        path: path.tuitionTerms,
        loadChildren: async () =>
          (await import('@pages/school/pages/tuition-terms/tuition-terms.module')).TuitionTermsModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRoutingModule {
}
