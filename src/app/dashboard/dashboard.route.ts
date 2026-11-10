import { Routes } from '@angular/router';
import DashboardPage from './pages/dashboard-page/dashboard-page';


const routes:Routes = [

  {
    path:'',
    component:DashboardPage,
    children:[
      {
        path:'trending',
        loadComponent:()=>import('./pages/trending-page/trending-page')
      },
      {
        path:'search',
        loadComponent:()=>import('./pages/search-page/search-page')
      },
      {
        path:'search-by/:key',
        loadComponent:()=>import('./pages/search-by/search-by')
      },
      {
        path:'**',
        redirectTo:'trending'
      }
    ]
  },

]

export default routes;
