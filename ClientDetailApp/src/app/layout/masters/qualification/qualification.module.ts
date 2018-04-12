import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, QualificationRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [QualificationComponent]
})
export class QualificationModule { }