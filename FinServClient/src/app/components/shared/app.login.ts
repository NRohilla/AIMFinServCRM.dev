import { Component, Injectable, ViewChild } from '@angular/core';
//custom routing implemented
import { Router } from '@angular/router';
//for form validations and form related methods
import { Form, FormControl, Validators  } from '@angular/forms';
//for json mapping from to subscribe to observable collections
import 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from '../../../environments/environment';
import {AuthenticateService} from '../../services/app.authservice';
@Component({
    templateUrl: './app.login.html',
    providers: [AuthenticateService]
})
export class ApploginComponent {
    private _Password: string;
    private _Username: string;
    private _IsUsernameBlank: boolean = false;
    private _IsPasswordBlank: boolean = false;
    public _IsValidUsername: boolean = false;
    public _IsValidPassword: boolean = false;

    @ViewChild('loginForm') loginForm;
    myControl: FormControl = new FormControl();
    private _FormErrors;
    private _IsFormValid: boolean = true;
    public _FormErrorsDescription: string = '';
    public _ShowLoader: boolean = false;

    constructor(private router: Router,
        private _LocalStorageService: LocalStorageService,
        private _AuthenticateService: AuthenticateService) {
    }

    LoginVaidate() {
        this._ShowLoader = true;
        this._AuthenticateService.AuthenticateLogin(this._Username, this._Password)
            .subscribe(result => this.RequestSuccess(result), result => this.RequestError(result));
    }

    RequestSuccess(result) {
        debugger;
    }
    RequestError(err) {
        debugger;
    }

}
