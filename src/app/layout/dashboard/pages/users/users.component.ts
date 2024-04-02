import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from '../users/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  roles: any;
  totalItems: number = 0;
  pageSize: number = 10;
  displayedColumns: string[] = ['id', 'firstName', 'email', 'role'];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Naruto',
      lastName: 'Uzumaki',
      email: 'naru@mail.com',
      password: '123456',
      role: 'ADMIN',
    },
    {
      id: 2,
      firstName: 'Sasuke',
      lastName: 'Uchiha',
      email: 'sasu@mail.com',
      password: '123456',
      role: 'USER',
    },
  ];

  onPage(event: PageEvent): void {
    // Aquí puedes manejar el evento de cambio de página, si es necesario
    console.log(event);
  }

  onDeleteUser(user: User): void {
    const index = this.dataSource.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.dataSource.splice(index, 1);
    }
  }

  onUserSubmitted(userFormData: any): void {
    if (userFormData && userFormData.firstName && userFormData.lastName && userFormData.email && userFormData.role) {
      const newUser: User = {
        id: this.dataSource.length + 1,
        firstName: userFormData.firstName,
        lastName: userFormData.lastName,
        email: userFormData.email,
        role: userFormData.role,
        password: ''
      };
      this.dataSource.push(newUser);
    } else {
      console.error('Datos de usuario no válidos:', userFormData);
    }
  }
}
