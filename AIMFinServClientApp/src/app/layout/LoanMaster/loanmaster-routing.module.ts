import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanmasterComponent } from './loanmaster.component';
import { AddLoanmasterComponent } from './addloanmasterform.component';
import { ClientsComponent } from '../clients/clients.component';

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
        path: 'clients',
        loadChildren: './clients/clients.module#ClientsModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanmasterRoutingModule { }
