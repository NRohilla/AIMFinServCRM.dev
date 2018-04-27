import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployementComponent } from './employment.component';

const routes: Routes = [
    {
        path: '',
        component: EmployementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmploymentRoutingModule { }
