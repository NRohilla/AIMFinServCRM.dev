import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticateService {
    headers: Headers;
    options: RequestOptions;
    baseurl: string = '';

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
        this.baseurl = environment.baseAPIUrl;
    }

    AuthenticateLogin(UserEmailId, password) {
        debugger;
        return this._http.get(this.baseurl + "Auth/AuthenticateLogin?UserEmailId=" + UserEmailId + "&password=" + password, this.options);
    }
    //IsUserLoggedIn(IsLogged) {
    //    debugger;
    //    return this._http.post(this.baseurl + "Auth/AuthenticateLogin", this.options);
    //}
    LoggedOffUser(ActivationCode, IsLoggedIn) {
        debugger;
        return this._http.post(this.baseurl + "Auth/LoggedOffUser?ActivationCode=" + ActivationCode + "&IsLoggedIn=" + IsLoggedIn, this.options);
    }
}
