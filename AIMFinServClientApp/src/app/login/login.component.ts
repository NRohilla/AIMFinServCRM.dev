import { Component, Injectable, ViewChild, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Form, FormControl, Validators  } from '@angular/forms';
import 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from '../../environments/environment';
import {AuthenticateService} from '../services/app.auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [AuthenticateService]
})
export class LoginComponent implements OnInit {
    public _Password: string;
    public _Username: string;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    constructor(public router: Router, private _AuthenticateService: AuthenticateService, private _LocalStorageService: LocalStorageService) { }

    ngOnInit() { }

    LoginVaidate() {
        this._FormErrors = false;
        if (this._Username.trim().length > 0 && this._Password.trim().length > 0) {
            this._AuthenticateService.AuthenticateLogin(this._Username, this._Password)
                .subscribe(result => this.RequestSuccess(result), result => this.RequestError(result));
        } else {
            this._FormErrors = true;
            if (this._Username.trim().length == 0)
                this._FormErrorsDescription = "Please enter email address"
            if (this._Password.trim().length == 0)
                this._FormErrorsDescription = "Please enter password"
        }
    }

    RequestSuccess(result) {
        debugger;
        if (result._body == "false") {
            this._FormErrors = true;
            this._FormErrorsDescription = "Invalid Credentials!"
        } else {
            this._LocalStorageService.set('LoggedInEmailId', this._Username.trim());
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigateByUrl('dashboard');
        }
    }

    RequestError(err) {
        debugger;
    }

    ResetFields() {
        this._Username = '';
        this._Password = '';
    }
}
