import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanapplicationsComponent } from './loanapplications.component';

const routes: Routes = [
    {
        path: '',
        component: LoanapplicationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanapplicationsRoutingModule { }
