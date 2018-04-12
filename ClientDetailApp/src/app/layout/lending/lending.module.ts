import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LendingRoutingModule } from './lending-routing.module';
import { LendingComponent } from './lending.component';
import { PageHeaderModule } from '../../shared';
import {MaterialModule} from '../../shared/app.material';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LendingRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [LendingComponent]
})
export class LendingModule { }