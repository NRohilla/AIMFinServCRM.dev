import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { EmploymentRoutingModule } from './employment-routing.module';
import { EmployementComponent } from './employment.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, EmploymentRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [EmployementComponent]
})
export class EmploymentModule { }
