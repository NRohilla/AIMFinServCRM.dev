import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './employment.component';

const routes: Routes = [
    {
        path: '',
        component: EmploymentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmploymentRoutingModule { }
