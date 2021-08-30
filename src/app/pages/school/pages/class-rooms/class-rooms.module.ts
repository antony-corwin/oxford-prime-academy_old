import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClassRoomsPage } from '@pages/school/pages/class-rooms/class-rooms.page';


@NgModule({
  declarations: [
    ClassRoomsPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClassRoomsPage,
        data: {
          title: 'Class Rooms',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class ClassRoomsModule {
}
