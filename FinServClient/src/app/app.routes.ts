import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApploginComponent } from "./components/shared/app.login";
import {DashboardComponent} from './components/app.dashboard';

const appRoutePaths: Routes = [
    { path: '', component: ApploginComponent },
    { path: 'dashboard', component: DashboardComponent },
];
export const appRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutePaths);