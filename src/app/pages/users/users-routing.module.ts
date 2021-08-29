import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { UsersPage } from '@pages/users/users.page';


const path = ROUTER_UTILS.config.users;

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
    data: {
      title: 'Users',
      robots: 'noindex, nofollow',
    },
    children: [
      {
        path: '',
        redirectTo: path.usersList,
        pathMatch: 'full',
      },
      {
        path: path.usersList,
        loadChildren: async () =>
          (await import('@pages/users/pages/users-list/users-list.module')).UsersListModule,
      },
      {
        path: path.invitation,
        loadChildren: async () =>
          (await import('@pages/users/pages/invitation/invitation.module')).InvitationModule,
      },
      {
        path: path.onlineRequest,
        loadChildren: async () =>
          (await import('@pages/users/pages/online-request/online-request.module')).OnlineRequestModule,
      },
      {
        path: path.documents,
        loadChildren: async () =>
          (await import('@pages/users/pages/documents/documents.module')).DocumentsModule,
      },
      {
        path: path.archive,
        loadChildren: async () =>
          (await import('@pages/users/pages/archive/archive.module')).ArchiveModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
