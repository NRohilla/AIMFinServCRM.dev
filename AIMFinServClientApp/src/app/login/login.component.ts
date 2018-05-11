import { Component, Injectable, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { routerTransition } from '../router.animations';
import { Form, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from '../../environments/environment';
import { AuthenticateService } from '../services/app.auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [AuthenticateService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class LoginComponent implements OnInit {
    location: Location;

    public _Password: string;
    public _Username: string;
    public _FormErrors;
    public IsLoggedIn: boolean = true;
    public _FormErrorsDescription: string = '';
    public ActivationCode: string = '';
    constructor(public router: Router, private _AuthenticateService: AuthenticateService, private _LocalStorageService: LocalStorageService, location: Location) {
        debugger;
        this.location = location;
    }

    ngOnInit() {
        debugger;
        this._LocalStorageService.clearAll();
    }

    LoginVaidate() {
        debugger;
        this._FormErrors = false;
        //this.IsLoggedIn = true;
        if (this._Username.length > 0 && this._Password.length > 0) {
            // this.IsLoggedIn = true;
            this._AuthenticateService.AuthenticateLogin(this._Username, this._Password)
                .subscribe(result => this.RequestSuccess(result), result => this.RequestError(result));
        } else {
            this._FormErrors = true;
            if (this._Username.length == 0)
                this._FormErrorsDescription = "Please enter Email Address"
            if (this._Password.length == 0)
                this._FormErrorsDescription = "Please enter Password"
        }
    }

    RequestSuccess(result) {
        //debugger;
        var resultReturned = JSON.parse(result._body);

        if (resultReturned._IsAuthenticated == false) {
            this._FormErrors = true;
            this._FormErrorsDescription = "Invalid Credentials!"
        }
        else {
            if (resultReturned._RoleDesc == "Client") {
                window.location.href = environment.baseClientAppURL + "/dashboard?LoggedInEmailId=" + this._Username;
            }

            if (resultReturned._RoleDesc == "Admin" || resultReturned._RoleDesc == "Employee") {
                debugger;
                this._LocalStorageService.set('LoggedInEmailId', this._Username);
                this._LocalStorageService.set('LoggedInUserId', resultReturned._UserID);
                this._LocalStorageService.set('ActivaitonCode', resultReturned.ActivaitonCode);
                localStorage.setItem('isLoggedin', resultReturned.IsLoggedIn);
                this.router.navigateByUrl('dashboard');
            }
        }
        localStorage.setItem('isLoggedin', resultReturned.IsLoggedIn);
    }

    RequestError(err) {
        debugger;
    }

    ResetFields() {
        this._Username = '';
        this._Password = '';
    }
}
