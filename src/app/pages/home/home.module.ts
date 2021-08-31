import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HeaderModule } from '@shell/ui/header/header.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        data: {
          title: 'Home',
          description:
            'Oxford Prime Academy',
          robots: 'index, follow',
        },
      },
    ]),
    HeaderModule,
  ],
})
export class HomeModule {}
