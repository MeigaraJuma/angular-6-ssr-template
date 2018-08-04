import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
export const router: Routes = [
    // home
    { path: '', loadChildren: './pages/home/home.module#HomeModule' },

    // static
    { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },

    // errors
    { path: '**', redirectTo: '' },

];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(router);
