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
import {AppBaseComponent} from '../../../shared/app.basecomponent';

@Component({
    selector: `client-communication-details`,
    templateUrl: './app.client.communicationdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ClientscommunicationComponent extends AppBaseComponent implements OnInit {
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public _EditPersonalDetails: boolean = false;
    public _EditCommunicationDetails: boolean = false;

    public _ApplicantCommunicationDetails: {
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        ApplicantID: '',
        _AddressTypeMaster: {}
    }

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { super(); }

    ngOnInit() {
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientCommunicationDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientCommDetailsSuccess(res), res => this.GetClientCommDetailsError(res));
        }
    }

    GetClientDetailsError(res) { }

    GetClientCommDetailsSuccess(res) {
        debugger;
        this._ApplicantCommunicationDetails = this.trimObj(JSON.parse(res._body));
    }
    GetClientCommDetailsError(res) { }
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
        this._ClientsService.UpdateClientCommunicationDetails(this._ApplicantCommunicationDetails).subscribe(res => this.updateclientCommunicationSuccess(res), res => this.updateclientCommunicationError(res));
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