import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, ApplicantRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [ApplicantComponent]
})
export class ApplicantModule { }