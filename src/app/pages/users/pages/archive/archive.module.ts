import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArchivePage } from '@pages/users/pages/archive/archive.page';


@NgModule({
  declarations: [
    ArchivePage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArchivePage,
        data: {
          title: 'Archive',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class ArchiveModule {
}
