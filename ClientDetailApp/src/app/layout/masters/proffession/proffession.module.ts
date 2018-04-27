import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ProffessionRoutingModule } from './proffession-routing.module';
import { ProffessionComponent } from './proffession.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, ProffessionRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [ProffessionComponent]
})
export class ProffessionModule { }