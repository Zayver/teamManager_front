import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'teamManager-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  items: MenuItem[] = [
    {
      label: 'File',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          { label: 'Project' },
          { label: 'Other' },
        ]
      },
      { label: 'Open' },
      { label: 'Quit' }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      ]
    }
  ];
}


