import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoanmasterRoutingModule } from './loanmaster-routing.module';
import { LoanmasterComponent } from './loanmaster.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LoanmasterRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [LoanmasterComponent]
})
export class LoanmasterModule { }