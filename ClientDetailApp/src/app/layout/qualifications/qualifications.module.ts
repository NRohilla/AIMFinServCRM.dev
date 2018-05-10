import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { QualificationsRoutingModule } from './qualifications-routing.module';
import { QualificationsComponent } from './qualifications.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from '../../shared/app.material';
import { QualificationsQualificationDetailsComponent } from './components/app.qualifications.qualificationdetails';
import { QualificationsPersonalDetailsComponent } from './components/app.qualifications.personaldetails';
import { QualificationsEloyementComponent } from './components/app.qualifications.employementdetails';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, QualificationsRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [QualificationsComponent, QualificationsQualificationDetailsComponent, QualificationsPersonalDetailsComponent, QualificationsEloyementComponent]
})
export class QualificationsModule { }
