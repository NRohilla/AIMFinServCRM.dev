import { Component, Injectable, ViewChild, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Form, FormControl, Validators  } from '@angular/forms';
import 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from '../../environments/environment';
import {AuthenticateService} from '../services/app.authservice';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [AuthenticateService]
})
export class LoginComponent implements OnInit {
    private _Password: string;
    private _Username: string;
    private _FormErrors;
    public _FormErrorsDescription: string = '';
    constructor(public router: Router, private _AuthenticateService: AuthenticateService) {}

    ngOnInit() {}

    LoginVaidate() {
        this._AuthenticateService.AuthenticateLogin(this._Username, this._Password)
            .subscribe(result => this.RequestSuccess(result), result => this.RequestError(result));
    }

    RequestSuccess(result) {
        debugger;
        this.router.navigateByUrl('dashboard');
    }
    RequestError(err) {
        debugger;
    }
}
