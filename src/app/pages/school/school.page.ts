import { Component } from '@angular/core';
import { ROUTER_UTILS } from '@core/utils/router.utils';

@Component({
  templateUrl: './school.page.html',
  styleUrls: ['./school.page.scss'],
})

export class SchoolPage {
  pageTitle = 'School';
  path = ROUTER_UTILS.config.school;
  navItems = [
    {
      label: 'Subjects',
      link: this.path.subjects,
    },
    {
      label: 'Student Groups',
      link: this.path.studentGroups,
    },
    {
      label: 'Class Rooms',
      link: this.path.classRooms,
    },
    {
      label: 'Calendar',
      link: this.path.calendar,
    },
    {
      label: 'Tuition Terms',
      link: this.path.tuitionTerms,
    },
  ];

  setPageTitle(value: any) {
    this.pageTitle = value;
  }
}
