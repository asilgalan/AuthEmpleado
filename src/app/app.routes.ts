import { Routes } from '@angular/router';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';
import { NotAuthenticatedGuard } from './auth/guards/notauthenticated.guard';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./auth/pages/home/home').then(c => c.Home)
    },
    {
        path:"login",
        loadComponent: () => import('./auth/pages/login.page/login.page').then(c => c.LoginPageComponent), 
      
    },

    {
        path:'empleados',
        loadComponent:() => import('./auth/pages/empleados/empleados').then(re => re.Empleados),
        canMatch:[
            AuthenticatedGuard
        ]

    },
    {
        path:'**',
        redirectTo:''
    }
];
