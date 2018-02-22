import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ClientsService {
    headers: Headers;
    options: RequestOptions;
    baseurl: string = '';

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
        this.baseurl = environment.baseAPIUrl;
    }

    GetAllClients() {
        return this._http.get(this.baseurl + "Clients/GetAllClients", this.options);
    }

    GetClientDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientDetails?ClientID=" + ClientID , this.options);
    }

    GetClientCommunicationDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientCommunicationDetails?ClientID=" + ClientID, this.options);
    }

    GetClientEmployementDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientEmployementDetails?ClientID=" + ClientID, this.options);
    }
}