import { Component } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils/router.utils';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})

export class UsersPage {
  pageTitle = 'Users';
  path = ROUTER_UTILS.config.users;
  navItems = [
    {
      label: 'Users',
      link: this.path.usersList,
    },
    {
      label: 'Invitation',
      link: this.path.invitation,
    },
    {
      label: 'Online request',
      link: this.path.onlineRequest,
    },
    {
      label: 'Documents',
      link: this.path.documents,
    },
    {
      label: 'Archive',
      link: this.path.archive,
    },
  ];

  setPageTitle(value: any) {
    this.pageTitle = value;
  }
}
