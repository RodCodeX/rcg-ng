import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./layout/layout-admin/layout-admin.component').then(c => c.LayoutAdminComponent),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./pages/authentication/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: () => import('./pages/authentication/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
