import { Component } from '@angular/core';
import { User } from '@pages/users/user.interface';
import { UserService } from '@pages/users/user.service';

@Component({
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})

export class UsersListPage {

  user: User = {};
  users: User[];
  selectedUsers: User[];
  filters: Array<any>;
  selectedRole: string;
  display: boolean;
  exportTypes: Array<any>;
  selectedExportTypes: Array<any>;

  constructor(private userService: UserService) {

    this.users = this.userService.getAllUsers();
    this.selectedUsers = [];
    this.filters = [
      {
        label: 'All',
        value: ''
      },
      {
        label: 'Student',
        value: 'Student'
      },      {
        label: 'Parent',
        value: 'Parent'
      },      {
        label: 'Teacher',
        value: 'Teacher'
      }
    ]
    this.selectedRole = '';
    this.display = false;

    this.exportTypes = [
      {
        name: 'Lorem Ipsum',
        key: 'lorem-ipsum'
      },
      {
        name: 'Lorem Ipsum',
        key: 'lorem-ipsum'
      },
      {
        name: 'Lorem Ipsum',
        key: 'lorem-ipsum'
      },
      {
        name: 'Lorem Ipsum',
        key: 'lorem-ipsum'
      },
      {
        name: 'Lorem Ipsum',
        key: 'lorem-ipsum'
      },
    ];
    this.selectedExportTypes = [];
  }

  showDialog() {
    this.display = true;
  }
}
