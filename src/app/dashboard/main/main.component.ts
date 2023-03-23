import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'teamManager-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  items: MenuItem[] = [
    {
      label: 'Equipos',
      icon: 'pi pi-fw pi-id-card',
      items: [{
        label: 'Crear',
        icon: 'pi pi-fw pi-plus',
        command: () => { this.router.navigateByUrl('dashboard/team/create') }
      },
      {
        label: 'Administrar mis equipos',
        icon: 'pi pi-fw pi-briefcase'
      }
      ],
      command: () => { this.router.navigateByUrl('dashboard/team') }
    },
    {
      label: 'Jugadores',
      icon: 'pi pi-fw pi-user'
    },
    {
      label: 'Canchas',
      icon: 'pi pi-fw pi-calendar-minus'
    }
  ];

  constructor(private router: Router) { }
}


