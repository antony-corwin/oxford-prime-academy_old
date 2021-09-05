import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: Record<string, unknown>;
  edit: boolean = false;

  fakeData = {
    firstName: 'ваыва',
    surname:  'вавава',
    email: 'user_6@oxfordprime.com',
    role: 'Parent',
    status: 'Active',
    phone: '380685062303',
    country: 'Ukraine',
    city: 'Kyiv',
    address: 'Kyiv Ulitsa',
    postCode: '04111',
    gender: 'Male',
    prefix: 'Mr',
    passportId: '123',
    nationalIdentificationNumber: '12345678',
    countryOfIssue: 'Ukraine'
  }

  constructor() {
    this.user = history.state.data;
    this.user = this.fakeData;
  }

  ngOnInit(): void {
    console.log('user', this.user);
  }
}
