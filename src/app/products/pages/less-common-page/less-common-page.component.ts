import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-less-common-page',
  templateUrl: './less-common-page.component.html',
  styleUrl: './less-common-page.component.css'
})
export class LessCommonPageComponent {
  
  // i18nSelect Pipe Section
  public name: string = 'Damian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeCustomer(): void {
    this.name = 'Mary';
    this.gender = 'female';
  }

  // i18nPlural Pipe Section
  public customers: string[] = ['Damian', 'Mary', 'Frank', 'Marisel'];
  public customersMap = {
    '=0': 'no hay clientes',
    '=1': 'hay 1 cliente',
    'other': 'hay # clientes'
  }

  public removeCustomer(): void {
    this.customers.shift();
  }

  // KeyValue Pipe and Json Pipe Section
  public person = {
    name: 'Damian',
    age: 33,
    address: 'Kitchener, Ontario'
  }

  // Async Pipe Section
  public observableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 3000);
  });
}
