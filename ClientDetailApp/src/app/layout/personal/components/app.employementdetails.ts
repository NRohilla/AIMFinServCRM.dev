import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {ClientsService} from '../../../services/app.clients.service';
@Component({
    selector: `employement-details`,
    templateUrl: './app.employementdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class EmployementComponent implements OnInit {
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public _EditEmployementDetails: boolean = false;

    public _ApplicantEmployementDetails: {
        EmployerName: '',
        SourceOfIncome: '',
        Income: '',
        ApplicantID: '',
        AutoID: '',
        EmploymentID: ''
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { }

    ngOnInit() {
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null)
            this._ClientsService.GetClientEmployementDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientDetailsSuccess(res), res => this.GetClientDetailsError(res));
    }

    GetClientDetailsSuccess(res) {
        if (res._body != null && res._body != undefined && res._body.toString().trim().length > 0) {
            debugger;
            this._ApplicantEmployementDetails = JSON.parse(res._body);
        }
    }

    GetClientDetailsError(res) { }

    EditEmployementDetails() {
        this._EditEmployementDetails = !this._EditEmployementDetails;
    }

    UpdateEmployementDetails() {
        debugger;
        this._EditEmployementDetails = false;
        this._ClientsService.updateclientEmploymentdetails(this._ApplicantEmployementDetails).subscribe(res => this.updateclientEmploymentSuccess(res), res => this.updateclientEmploymentError(res));
    }

    updateclientEmploymentSuccess(res) { debugger; }
    updateclientEmploymentError(res) { }
}