import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoanGuarantorRoutingModule } from './loanguarantor-routing.module';
import { LoanGuarantorComponent } from './loanguarantor.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LoanGuarantorRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [LoanGuarantorComponent]
})
export class LoanGuarantorModule { }