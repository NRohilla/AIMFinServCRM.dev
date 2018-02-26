import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoanrateRoutingModule } from './loanrate-routing.module';
import { LoanrateComponent } from './loanrate.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LoanrateRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [LoanrateComponent]
})
export class LoanrateModule { }