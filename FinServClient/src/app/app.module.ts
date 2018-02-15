import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LocalStorageModule, ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { GridModule } from '@progress/kendo-angular-grid';//https://www.telerik.com/kendo-angular-ui/components/grid/
import {PlunkerMaterialModule} from './app.angular.material';
import 'hammerjs';
import { appRoutes } from "./app.routes";

/*custom components and packages*/
import { AppRouteMasterComponent } from './components/shared/app.routemaster';
import { ApploginComponent } from "./components/shared/app.login";

/*custom services*/
import {AuthenticateService} from './services/app.authservice';
@NgModule({
    declarations: [
        AppRouteMasterComponent, ApploginComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpModule, appRoutes, BrowserAnimationsModule, PlunkerMaterialModule,
        LocalStorageModule.withConfig({
            prefix: 'Client',
            storageType: 'localStorage'
        }),
        ReactiveFormsModule,
    ],
    providers: [AuthenticateService],
    bootstrap: [AppRouteMasterComponent]
})
export class AppModule { }
