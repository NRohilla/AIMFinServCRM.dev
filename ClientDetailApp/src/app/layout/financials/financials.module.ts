import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { FinancialsRoutingModule } from './financials-routing.module';
import { FinancialsComponent } from './financials.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from '../../shared/app.material';
import { FinancialsQualificationDetailsComponent } from './components/app.financials.qualificationdetails';
import { FinancialsPersonalDetailsComponent } from './components/app.financials.personaldetails';
import { FinancialsloyementComponent } from './components/app.financials.employementdetails';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, FinancialsRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [FinancialsComponent, FinancialsQualificationDetailsComponent, FinancialsPersonalDetailsComponent, FinancialsloyementComponent]
})
export class FinancialsModule { }
