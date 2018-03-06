import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanGuarantorComponent } from './loanguarantor.component';

const routes: Routes = [
    {
        path: '',
        component: LoanGuarantorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanGuarantorRoutingModule { }
