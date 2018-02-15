import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApploginComponent } from "./components/shared/app.login";

const appRoutePaths: Routes = [
    { path: '', component: ApploginComponent },
];
export const appRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutePaths);