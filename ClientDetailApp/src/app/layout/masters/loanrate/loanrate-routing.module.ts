import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanrateComponent } from './loanrate.component';

const routes: Routes = [
    {
        path: '',
        component: LoanrateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanrateRoutingModule { }
