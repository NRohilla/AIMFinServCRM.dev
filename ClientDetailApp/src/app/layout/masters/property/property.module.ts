import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, PropertyRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [PropertyComponent]
})
export class PropertyModule { }