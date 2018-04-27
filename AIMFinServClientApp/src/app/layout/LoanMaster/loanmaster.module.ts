import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoanmasterRoutingModule } from './loanmaster-routing.module';
import { LoanmasterComponent } from './loanmaster.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from '../../shared/app.material';
import { AddLoanmasterComponent } from './addloanmasterform.component';
import { LoanDetails } from './loandetails.component';
//import { ClientsPersonalDetailsComponent } from '../../layout/clients/components/app.client.personaldetails';
//import { ClientqualificationComponent } from '../../layout/clients/components/app.client.qualificationdetails';
//import { ClientsEmployementComponent } from '../../layout/clients/components/app.client.employementdetails';
//import { ClientscommunicationComponent } from '../../layout/clients/components/app.client.communicationdetails';


import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LoanmasterRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [LoanmasterComponent, AddLoanmasterComponent, LoanDetails  /*ClientsPersonalDetailsComponentClientqualificationComponent, ClientsEmployementComponent, ClientscommunicationComponent*/]
})
export class LoanmasterModule { }
