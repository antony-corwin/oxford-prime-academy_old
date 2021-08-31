import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentsPage } from '@pages/users/pages/documents/documents.page';


@NgModule({
  declarations: [
    DocumentsPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DocumentsPage,
        data: {
          title: 'Documents',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class DocumentsModule {
}
