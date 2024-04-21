import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../components/admin-header/admin-header.component';
import { AdminFooterComponent } from '../../components/admin-footer/admin-footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [AdminHeaderComponent, AdminFooterComponent, RouterOutlet],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss',
})
export class LayoutAdminComponent {}
