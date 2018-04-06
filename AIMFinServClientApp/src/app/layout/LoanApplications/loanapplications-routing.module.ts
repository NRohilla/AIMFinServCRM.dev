import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanapplicationsComponent } from './loanapplications.component';
import { AddLoanApplicationComponent } from './addloanapplication.component';


const routes: Routes = [
    {
        path: '',
        component: LoanapplicationsComponent
    }
   ,
    {
        path: 'addloanaaplication',
        component: AddLoanApplicationComponent
    }
];
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanapplicationsRoutingModule { }

