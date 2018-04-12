import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            //{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'personal', loadChildren: './personal/personal.module#PersonalModule' },
            { path: 'communication', loadChildren: './communication/communication.module#CommunicationModule' },
            { path: 'lending', loadChildren: './lending/lending.module#LendingModule' },
            { path: 'financials', loadChildren: './financials/financials.module#FinancialsModule' },
            { path: 'employment', loadChildren: './employment/employment.module#EmploymentModule' },

            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'qualifications', loadChildren: './qualifications/qualifications.module#QualificationsModule' },
            

            //{ path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            //{ path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            //{ path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            //{ path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
