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
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
            { path: 'loanapplications', loadChildren: './LoanApplications/clients.module#ClientsModule' },

            { path: 'master-applicant', loadChildren: './masters/applicant/applicant.module#ApplicantModule' },
            { path: 'master-assets', loadChildren: './masters/assets/assets.module#AssetsModule' },
            { path: 'master-employment', loadChildren: './masters/employment/employment.module#EmploymentModule' },
            { path: 'master-expense', loadChildren: './masters/expense/expense.module#ExpenseModule' },
            { path: 'master-liability', loadChildren: './masters/liability/liability.module#LiabilityModule' },
            { path: 'master-loan', loadChildren: './masters/loan/loan.module#LoanModule' },
            { path: 'master-loanrate', loadChildren: './masters/loanrate/loanrate.module#LoanrateModule' },
            { path: 'master-proffession', loadChildren: './masters/proffession/proffession.module#ProffessionModule' },
            { path: 'master-property', loadChildren: './masters/property/property.module#PropertyModule' },
            { path: 'master-purposeofloan', loadChildren: './masters/purposeofloan/purposeofloan.module#PurposeofloanModule' },
            { path: 'master-qualification', loadChildren: './masters/qualification/qualification.module#QualificationModule' },
            { path: 'master-relationship', loadChildren: './masters/relationship/relationship.module#RelationshipModule' },
            { path: 'master-salutation', loadChildren: './masters/salutation/salutation.module#SalutationModule' },

            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
