import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ClientsRoutingModule, PageHeaderModule, GridModule],
    declarations: [ClientsComponent]
})
export class ClientsModule { }