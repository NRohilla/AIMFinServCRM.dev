﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalutationComponent } from './salutation.component';

const routes: Routes = [
    {
        path: '',
        component: SalutationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalutationRoutingModule { }
