import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanmasterComponent } from './loanmaster.component';
import { AddLoanmasterComponent } from './addloanmasterform.component';

const routes: Routes = [
    {
        path: '',
        component: LoanmasterComponent
    },
    {
        path: 'addLoanMasterForm',
        component: AddLoanmasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanmasterRoutingModule { }
