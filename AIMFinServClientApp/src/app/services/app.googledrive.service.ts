import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleDriveService {
    headers: Headers;
    options: RequestOptions;
    baseurl: string = '';
   
    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
        this.baseurl = environment.baseAPIUrl;
    }
  
    FileUpload(formData) {
        return this._http.post(this.baseurl + "GoogleDrive/FileUpload", formData);
    }

    GetDriveFiles(ApplicantID) {
        return this._http.get(this.baseurl + "GoogleDrive/GetDriveFiles?ApplicantID=" + ApplicantID, this.options);
    }

    DeleteFiles(file) {
        return this._http.post(this.baseurl + "GoogleDrive/DeleteFile", file, this.options);
    }

    DownloadFile(Id) {
        return this._http.get(this.baseurl + "GoogleDrive/DownloadFile?Id=" + Id, this.options);
    }
}
