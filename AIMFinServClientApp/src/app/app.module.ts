import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GridModule } from '@progress/kendo-angular-grid';
import 'hammerjs';
import { LocalStorageModule, ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LoanApplicationDetailDialog } from './shared/dialogues/loanapplications/LoanApplicationDetailDialog';
import { AddGuarantorDialog } from './shared/dialogues/loanapplications/AddGuarantorDialog';
import {ClientDetailsDialog} from './shared/dialogues/clients/ClientDetailsDialog';
import {ApplicantPersonalDetailsComponent} from './layout/LoanApplications/components/app.applicant.personaldetails';
import {ApplicantEmployementComponent} from './layout/LoanApplications/components/app.applicant.employementdetails';
import { ApplicantQualificationDetailsComponent } from './layout/LoanApplications/components/app.applicant.qualificationdetails';
import { ApplicantCommunicationDetailsComponent } from './layout/LoanApplications/components/app.applicant.communicationdetails';
import { ManageAssetAndLiabilityDialog } from './shared/dialogues/loanapplications/ManageAssetandLiabilityDialog';
import { AddAssetComponent } from './shared/dialogues/loanapplications/AddAsset.component';
import { AddLiabilityComponent } from './shared/dialogues/loanapplications/AddLiability.component';
import { ManageApplicantDialog } from './shared/dialogues/loanapplications/ManageApplicantDialog';
import { ManageExpenseSheetDialog } from './shared/dialogues/loanapplications/ManageExpenseSheetDialog.component';
import { MasterEmployementComponent } from './layout/LoanMaster/components/app.master.employementdetails';
import { MasterQualificationDetailsComponent } from './layout/LoanMaster/components/app.master.qualificationdetails';
import { MasterPersonalDetailsComponent } from './layout/LoanMaster/components/app.master.personaldetails';
import { ClientSummaryDialog } from './shared/dialogues/clients/ClientSummaryDialog';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




//this is test
import {MaterialModule} from './shared/app.material';
// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    //return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
//test
@NgModule({
    imports: [
        GridModule,
        MaterialModule,
        FormsModule,
        HttpModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxDatatableModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        ReactiveFormsModule,
        LocalStorageModule.withConfig({
            prefix: 'AIMFinServ',
            storageType: 'localStorage'
        })
    ],
    declarations: [AppComponent,
        LoanApplicationDetailDialog,
        ApplicantPersonalDetailsComponent,
        ApplicantEmployementComponent,
        ApplicantQualificationDetailsComponent,
        ApplicantCommunicationDetailsComponent,
        ClientDetailsDialog,
        AddGuarantorDialog,
        ManageAssetAndLiabilityDialog,
        AddAssetComponent,
        AddLiabilityComponent,
        ManageApplicantDialog,
        ManageExpenseSheetDialog,
        MasterEmployementComponent,
        MasterQualificationDetailsComponent,
        MasterPersonalDetailsComponent,
        ClientSummaryDialog
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent],
    entryComponents: [LoanApplicationDetailDialog, ClientDetailsDialog, AddGuarantorDialog, ManageAssetAndLiabilityDialog, ManageApplicantDialog, ManageExpenseSheetDialog, MasterEmployementComponent, MasterQualificationDetailsComponent, MasterPersonalDetailsComponent, ClientSummaryDialog]
})
export class AppModule { }
