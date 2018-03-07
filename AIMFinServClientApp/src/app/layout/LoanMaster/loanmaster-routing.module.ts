import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanmasterComponent } from './loanmaster.component';

const routes: Routes = [
    {
        path: '',
        component: LoanmasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanmasterRoutingModule { }
