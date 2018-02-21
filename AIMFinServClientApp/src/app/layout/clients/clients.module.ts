import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';
import {ClientsPersonalDetailsComponent} from './components/app.client.personaldetails'
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, ClientsRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [ClientsComponent, ClientsPersonalDetailsComponent]
})
export class ClientsModule { }