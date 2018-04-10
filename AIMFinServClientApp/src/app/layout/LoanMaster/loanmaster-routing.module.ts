import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanmasterComponent } from './loanmaster.component';
import { AddLoanmasterComponent } from './addloanmasterform.component';
import { LoanDetails } from './loandetails.component';
const routes: Routes = [
    {
        path: '',
        component: LoanmasterComponent
    },
    {
        path: 'addLoanMasterForm',
        component: AddLoanmasterComponent
    },
    {
        path: 'loanDetails',
        component: LoanDetails
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanmasterRoutingModule { }
