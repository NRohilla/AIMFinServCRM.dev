import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ManageuserRoutingModule } from './manageuser-routing.module';
import { ManageuserComponent } from './manageuser.component';
import { PageHeaderModule } from '../../../shared';
import { MaterialModule } from '../../../shared/app.material';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ManageuserRoutingModule, PageHeaderModule, GridModule, MaterialModule, FormsModule],
    declarations: [ManageuserComponent]
  
})
export class ManageuserModule { }
