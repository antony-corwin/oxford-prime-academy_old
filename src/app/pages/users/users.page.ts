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
      link: 'users-list',
    },
    {
      label: 'Invitation',
      link: 'invitation',
    },
    {
      label: 'Online request',
      link: 'online-request',
    },
    {
      label: 'Documents',
      link: 'documents',
    },
    {
      label: 'Archive',
      link: 'archive',
    },
  ];

  setPageTitle(value: any) {
    this.pageTitle = value;
  }
}
