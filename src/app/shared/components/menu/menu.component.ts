import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] | undefined;

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Built-in Pipes',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Text & Dates',
                        icon: 'pi pi-align-left',
                        routerLink: ['']
                    },
                    {
                        label: 'Numbers',
                        icon: 'pi pi-dollar',
                        routerLink: ['numbers']
                    },
                    {
                        label: 'Less Common',
                        icon: 'pi pi-globe',
                        routerLink: ['less-common']
                    },
                ]
            },
            {
                label: 'Custom Pipes',
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Order',
                        icon: 'pi pi-sort-amount-up',
                        routerLink: ['custom']
                    }
                ]
            }
        ];
    }
}
