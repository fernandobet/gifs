import { Routes } from '@angular/router';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';


const routes:Routes=[

  {
    path:'',
    children:[
      {
        path:'login',
        component:LoginPage
      },
      {
        path:'register',
        component:RegisterPage
      },
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
]


export default routes;
