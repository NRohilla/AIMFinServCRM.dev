import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ClientsRoutingModule } from './clientsdetails-routing.module';
import { ClientsDetailsComponent } from './clientsdetails.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';
import {ClientSummaryComponent} from './components/app.clientdetails.summary'
import {ClientsPersonalDetailsComponent} from './components/app.clientdetails.personaldetails'
import {ClientscommunicationComponent} from './components/app.clientdetails.communicationdetails'
import {ClientsEmployementComponent} from './components/app.clientdetails.employementdetails'
import {ClientqualificationComponent} from './components/app.clientdetails.qualificationdetails'
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, ClientsRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [ClientsDetailsComponent, ClientSummaryComponent,ClientsPersonalDetailsComponent,ClientscommunicationComponent, ClientsEmployementComponent, ClientqualificationComponent]
})
export class ClientsDetailsModule { }
