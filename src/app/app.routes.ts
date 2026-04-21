import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';
import { Dummy } from './dummy/dummy';
import { NotFound } from './not-found/not-found';
import { Profile } from './profile/profile';
import { AccountInfo } from './account-info/account-info';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'profile',
        component: Profile,
        children: [
            {
                path: ':id/:name',
                component: Profile
            },
            {
                path: 'account_info',
                component: AccountInfo
            },
        ],
    },

    {
        path: 'dummy',
        // component: Dummy
        // lazy loading
        loadComponent: () => import('./dummy/dummy').then(c => c.Dummy),
    },
    {
        path: '**',
        component: NotFound
    },
];
