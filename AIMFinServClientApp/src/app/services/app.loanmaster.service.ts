import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class LoanMasterService {
    headers: Headers;
    options: RequestOptions;
    baseurl: string = '';

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
        this.baseurl = environment.baseAPIUrl;
    }

    GetAllLoanMasterDetails() {
        return this._http.get(this.baseurl + "LoanMaster/GetAllLoanMasterDetails", this.options);
    }

    GetLoanMasterDetails(lanno) {
        debugger;
        return this._http.get(this.baseurl + "LoanMaster/GetLoanMasterDetails?ClientID=" + lanno, this.options);
    }
}