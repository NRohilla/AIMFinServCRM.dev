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
import 'hammerjs';
import { LocalStorageModule, ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {DialogOverviewExampleDialog} from './shared/dialogues/loanapplications/Popup';
import {ApplicantPersonalDetailsComponent} from './layout/LoanApplications/components/app.applicant.personaldetails';
import {ApplicantEmployementComponent} from './layout/LoanApplications/components/app.applicant.employementdetails';
import {ApplicantQualificationDetailsComponent} from './layout/LoanApplications/components/app.applicant.qualificationdetails';

import {MaterialModule} from './shared/app.material';
// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    //return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
//Test Staging Checking
@NgModule({
    imports: [
        MaterialModule,
        FormsModule,
        HttpModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
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
    declarations: [AppComponent, DialogOverviewExampleDialog,  ApplicantPersonalDetailsComponent, ApplicantEmployementComponent, ApplicantQualificationDetailsComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent],
    entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
