import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Dummy } from './pages/dummy/dummy';
import { NotFound } from './pages/not-found/not-found';
import { Profile } from './pages/profile/profile';
import { AccountInfo } from './pages/account-info/account-info';

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
        loadComponent: () => import('./pages/dummy/dummy').then(c => c.Dummy),
    },
    {
        path: '**',
        component: NotFound
    },
];
