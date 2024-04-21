import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
      },
      {
        label: 'Work',
        icon: 'pi pi-fw pi-briefcase',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
      },
      {
        label: 'Exit',
        icon: 'pi pi-fw pi-sign-out',
        routerLink:'/login'
      }
      
    ];
  }
}
