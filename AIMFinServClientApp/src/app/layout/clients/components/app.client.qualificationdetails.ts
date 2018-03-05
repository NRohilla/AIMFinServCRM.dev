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
    selector: `client-qualification-details`,
    templateUrl: './app.client.qualificationdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ClientqualificationComponent implements OnInit {
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public _EditPersonalDetails: boolean = false;
    public _EditCommunicationDetails: boolean = false;

    public _ApplicantQualificationDetails: {
        AutoID: '',
        QualificationID: '',
        ApplicantID: '',
        TypeOfQualification: '',
        PassingYear: '',
        CourseName: '',
        UniversityName: '',
        _QualificationTypeMaster: {}
    }

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { }

    ngOnInit() {
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientQualificationDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientQualDetailsSuccess(res), res => this.GetClientQualDetailsError(res));
        }
    }

    GetClientDetailsError(res) { }

    GetClientQualDetailsSuccess(res) {
        debugger;
        this._ApplicantQualificationDetails = JSON.parse(res._body);
    }
    GetClientQualDetailsError(res) { }
    EditPersonalDetails() {
        this._EditPersonalDetails = !this._EditPersonalDetails;
    }

    EditCommunicationDetails() {
        this._EditCommunicationDetails = !this._EditCommunicationDetails;
    }

    updateclientPersonalSuccess(res) {
        debugger;
    }

    updateclientPersonalError(res) {
        debugger;
    }

    UpdateCommunicationDetails() {
        debugger;
        this._EditCommunicationDetails = false;
        this._ClientsService.UpdateClientCommunicationDetails(this._ApplicantQualificationDetails).subscribe(res => this.updateclientCommunicationSuccess(res), res => this.updateclientCommunicationError(res));
    }

    updateclientCommunicationSuccess(res) {
        debugger;
    }

    updateclientCommunicationError(res) {
        debugger;
    }

    AddClient() {

    }
}