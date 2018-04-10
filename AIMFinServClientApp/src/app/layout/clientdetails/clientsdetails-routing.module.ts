import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsDetailsComponent } from './clientsdetails.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule { }
