import { Injectable } from '@angular/core';
import { Home } from '../home/home';

@Injectable()
export class HomeService {
  home: Home[] = [];

  constructor() {}

  

  createProduct(data: Home) {
    this. home= [...this.home, { ...data, id: this.home.length + 1 }];
    return this.getProducts();
  }

  deleteProductById(id: number) {
    this.home = this.home.filter((el) => el.id !== id);
    return this.getProducts();
  }

  updateProductById(id: number, data: Home) {
    this.home = this.home.map((el) => (el.id === id ? { ...el, ...data } : el));
    return this.getProducts();
  }

  // Suponiendo que tienes una función para obtener los productos
  private getProducts(): Home[] {
    return this.home;
  }
}
