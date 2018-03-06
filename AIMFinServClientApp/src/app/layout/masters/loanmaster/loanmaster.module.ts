import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoanMasterRoutingModule } from './loanmaster-routing.module';
import { LoanMasterComponent } from './loanmaster.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LoanMasterRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [LoanMasterComponent]
})
export class LoanMasterModule { }