import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountingPage } from '@pages/user/pages/accounting/accounting.page';


@NgModule({
  declarations: [
    AccountingPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountingPage,
        data: {
          title: 'Accounting',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class AccountingModule {
}
