import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './loan.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LoanRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [LoanComponent]
})
export class LoanModule { }