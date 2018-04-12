import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './employment.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, EmploymentRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [EmploymentComponent]
})
export class EmploymentModule { }