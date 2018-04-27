import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurposeofloanComponent } from './purposeofloan.component';

const routes: Routes = [
    {
        path: '',
        component: PurposeofloanComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurposeofloanRoutingModule { }
