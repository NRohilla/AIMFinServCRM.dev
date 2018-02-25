import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LiabilityRoutingModule } from './liability-routing.module';
import { LiabilityComponent } from './liability.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LiabilityRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [LiabilityComponent]
})
export class LiabilityModule { }