import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { RelationshipRoutingModule } from './relationship-routing.module';
import { RelationshipComponent } from './relationship.component';
import { PageHeaderModule } from '../../../shared';
import {MaterialModule} from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, RelationshipRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [RelationshipComponent]
})
export class RelationshipModule { }