import { Injectable } from '@angular/core';

@Injectable()
export class UsersMockService {
  constructor() {
   
  }

  getUsers() {
    console.log('Se obtuvieron los usuarios falsos');
    return ['Lucas', 'Rodolfo', 'Matias', 'Josefina'];
  }
}