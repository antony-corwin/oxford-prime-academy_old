import { Component, OnInit } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils/router.utils';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {
  path = ROUTER_UTILS.config.adminDashboard;

  menuItems = [
    {
      iconName: 'home-alt',
      label: 'Home',
      link: ''
    },
    {
      iconName: 'cloud',
      label: 'CMS',
      link: 'cms'
    },
    {
      iconName: 'film',
      label: 'Videos',
      link: 'videos'
    },
    {
      iconName: 'user-list',
      label: 'Users',
      link: 'users'
    },
    {
      iconName: 'graduation-hat',
      label: 'School',
      link: 'school'
    },
    {
      iconName: 'dollar',
      label: 'Billing',
      link: 'billing'
    },
    {
      iconName: 'clipboard',
      label: 'Reports',
      link: 'reports'
    },
    {
      iconName: 'calculator',
      label: 'Accounting',
      link: 'accounting'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
