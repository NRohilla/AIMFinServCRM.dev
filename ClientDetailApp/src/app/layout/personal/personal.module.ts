import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';
import {PersonalDetailsComponent} from './components/app.personaldetails'
import {EmployementComponent} from './components/app.employementdetails'
import {CommunicationComponent} from './components/app.communicationdetails'
import {QualificationComponent} from './components/app.qualificationdetails'
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, PersonalRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [PersonalComponent, PersonalDetailsComponent, EmployementComponent, CommunicationComponent, QualificationComponent]
})
export class PersonalModule { }