import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, ClientsRoutingModule, PageHeaderModule, GridModule],
    declarations: [ClientsComponent]
})
export class ClientsModule { }
