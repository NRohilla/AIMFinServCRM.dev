import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';
import {ClientSummaryComponent} from './components/app.client.summary'
import {ClientsPersonalDetailsComponent} from './components/app.client.personaldetails'
import {ClientscommunicationComponent} from './components/app.client.communicationdetails'
import {ClientsEmployementComponent} from './components/app.client.employementdetails'
import {ClientqualificationComponent} from './components/app.client.qualificationdetails'
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, ClientsRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [ClientsComponent, ClientSummaryComponent,ClientsPersonalDetailsComponent,ClientscommunicationComponent, ClientsEmployementComponent, ClientqualificationComponent]
})
export class ClientsModule { }
