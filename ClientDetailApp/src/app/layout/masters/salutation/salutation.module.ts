import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { SalutationRoutingModule } from './salutation-routing.module';
import { SalutationComponent } from './salutation.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, SalutationRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [SalutationComponent]
})
export class SalutationModule { }