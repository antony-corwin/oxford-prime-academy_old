import { Component } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { Location } from '@angular/common';

@Component({
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})

export class UserPage {
  pageTitle: string;
  user;

  path = ROUTER_UTILS.config.user;
  navItems = [
    {
      label: 'Profile',
      link: this.path.profile,
    },
    {
      label: 'Accounting',
      link: this.path.accounting,
    },
  ];

  constructor(private location: Location) {
    this.user = history.state.data;
    this.pageTitle = 'User';
    if (this.user.name) {
      this.pageTitle = this.user.name;
    }
  }

  ngOnInit(): void {
    console.log('user', this.user);
  }

  back(): void {
    this.location.back();
  }

  setPageTitle(value: any) {
    // this.pageTitle = value;
  }
}
