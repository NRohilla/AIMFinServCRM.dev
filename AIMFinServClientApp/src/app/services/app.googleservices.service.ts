import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleService {
    headers: Headers;
    options: RequestOptions;
    baseurl: string = '';

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
        this.baseurl = environment.baseAPIUrl;
    }

    //SendEmail()
    //{
    //    debugger;
    //    return this._http.post(this.baseurl + "GoogleServices/SendEmail", this.options);
    //}

    GenerateUserTemplate(UserGuid) {
        debugger;
        return this._http.post(this.baseurl + "GoogleServices/GenerateUserTemplate?UserGuid=" + UserGuid, this.options);
    }
    GeneratePasswordTemplate(UserGuid) {
        debugger;
        return this._http.post(this.baseurl + "GoogleServices/GeneratePasswordTemplate?UserGuid=" + UserGuid, this.options);
    }


}
