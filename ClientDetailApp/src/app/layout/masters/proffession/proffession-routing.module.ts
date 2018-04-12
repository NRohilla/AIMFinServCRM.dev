import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProffessionComponent } from './proffession.component';

const routes: Routes = [
    {
        path: '',
        component: ProffessionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProffessionRoutingModule { }
