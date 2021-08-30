import { Component, OnInit } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils/router.utils';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent implements OnInit {
  path = ROUTER_UTILS.config;

  menuItems = [
    {
      iconName: 'home-alt',
      label: 'Home',
      link: this.path.base.home,
    },
    {
      iconName: 'cloud',
      label: 'CMS',
      link: this.path.cms,
    },
    {
      iconName: 'film',
      label: 'Videos',
      link: this.path.videos,
    },
    {
      iconName: 'user-list',
      label: 'Users',
      link: this.path.users.root,
    },
    {
      iconName: 'graduation-hat',
      label: 'School',
      link: this.path.school.root,
    },
    {
      iconName: 'dollar',
      label: 'Billing',
      link: this.path.billing,
    },
    {
      iconName: 'clipboard',
      label: 'Reports',
      link: this.path.reports,
    },
    {
      iconName: 'calculator',
      label: 'Accounting',
      link: this.path.accounting,
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
