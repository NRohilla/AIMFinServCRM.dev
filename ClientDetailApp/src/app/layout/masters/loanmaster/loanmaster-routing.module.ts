import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanMasterComponent } from './loanmaster.component';

const routes: Routes = [
    {
        path: '',
        component: LoanMasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanMasterRoutingModule { }
