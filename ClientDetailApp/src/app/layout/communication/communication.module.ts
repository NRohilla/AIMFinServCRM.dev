import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './communication.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, CommunicationRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [CommunicationComponent]
})
export class CommunicationModule { }