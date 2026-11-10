import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.route')
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.routes')
  },
  {
    path:'**',
    redirectTo:'dashboard'
  }

];
