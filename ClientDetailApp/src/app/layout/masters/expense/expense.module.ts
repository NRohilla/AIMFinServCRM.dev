import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, ExpenseRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [ExpenseComponent]
})
export class ExpenseModule { }