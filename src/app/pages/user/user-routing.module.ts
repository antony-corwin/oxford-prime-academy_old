import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';
import { UserPage } from '@pages/user/user.page';

const path = ROUTER_UTILS.config.user;

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    data: {
      title: 'User',
      robots: 'noindex, nofollow',
    },
    children: [
      {
        path: '',
        redirectTo: path.profile,
        pathMatch: 'full',
      },
      {
        path: path.profile,
        loadChildren: async () =>
          (await import('@pages/user/pages/profile/profile.module')).ProfileModule,
      },
      {
        path: path.accounting,
        loadChildren: async () =>
          (await import('@pages/user/pages/accounting/accounting.module')).AccountingModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
