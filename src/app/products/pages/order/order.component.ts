import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ''
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Green Lantern', canFly: true, color: Color.green },
    { name: 'Flash', canFly: false, color: Color.red }
  ];

  public orderBy?: keyof Hero;

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public setOrderBy(orderBy: keyof Hero): void {
    this.orderBy = orderBy;
  }
}
