import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  firstName: string = 'Adam';
  lastName: string = 'Levin';
  mi: string = 'married';
  suffix: string = '';
  relationships: string = 'spouse';
  gender: string = 'Male';
  dateOfBirth: Date = new Date();
  street: string = '27 street NY';
  city: string = 'New York';
  country: string = 'USA';
  email: string = 'adam@example.com';
  phone: string = '+12567898765';
  phoneType: string = 'Cell';
}
