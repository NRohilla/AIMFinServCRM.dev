import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { PurposeofloanRoutingModule } from './purposeofloan-routing.module';
import { PurposeofloanComponent } from './purposeofloan.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, PurposeofloanRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [PurposeofloanComponent]
})
export class PurposeofloanModule { }