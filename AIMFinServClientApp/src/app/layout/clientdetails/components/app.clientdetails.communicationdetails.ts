import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClientsService } from '../../../services/app.clients.service';
import { AppBaseComponent } from '../../../shared/app.basecomponent';
import {MastersService} from '../../../services/app.masters.service';

@Component({
    selector: `client-communication-details`,
    templateUrl: './app.clientdetails.communicationdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class ClientscommunicationComponent extends AppBaseComponent implements OnInit {
    public _AddressType = []
    public _EditCommunicationDetails: boolean = false;
    public _Operationtitle: string = "Add";
    public _ClientCommDetailsObj = {
        AddressLine1: "",
        AddressLine2: "",
        AddressLine3: "",
        AddressType: "",
        AutoID: "",
        ApplicantID: "",
        Country: "",
        ZipCode: "",
        CommunicationID: "",
        _AddressTypeDetail:{
            ID:''
}
    };
    public _ClientCommunicationDetails = [];

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, private _MastersServices: MastersService) {
        super();
    }

    ngOnInit() {
        this._ClientCommDetailsObj = {
            AddressLine1: "",
            AddressLine2: "",
            AddressLine3: "",
            AddressType: "",
            AutoID: "",
            ApplicantID: "",
            Country: "",
            ZipCode: "",
            CommunicationID: "",
            _AddressTypeDetail:{
            ID:''
}
        };
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientCommunicationDetails(<string>this._LocalStorageService.get("ApplicantID"))
                .subscribe(res => this.GetClientCommDetailsSuccess(res), res => this.GetClientCommDetailsError(res));
            this._MastersServices.GetAddressTypes()
                .subscribe(res => this.GetAddressTypeSuccess(res), res => this.GetAddressTypeError(res));

        }
    }

    GetAddressTypeSuccess(res) {
        if (res._body != null || res._body != undefined) {
            this._AddressType = this.trimObj(JSON.parse(res._body));
        }

    }
    GetAddressTypeError(res) {}

    GetClientCommDetailsSuccess(res) {
        //debugger;
        if (res._body != null || res._body != undefined ) {
            this._ClientCommunicationDetails = this.trimObj(JSON.parse(res._body));
        }
    }
    GetClientCommDetailsError(res) { }


    UpdateCommunicationDetails() {
        //debugger;

        this._ClientsService.UpdateClientCommunicationDetails(this._ClientCommDetailsObj).subscribe(res => this.updateclientCommunicationSuccess(res), res => this.updateclientCommunicationError(res));
    }

    GridSelectionChange(data, event) {
        debugger;
        this._EditCommunicationDetails = true;
        this._Operationtitle = "Update";
        if (this._ClientCommunicationDetails != undefined) {
            var FetchedValues = this._ClientCommunicationDetails[event.index];
            console.log(FetchedValues)
            if (FetchedValues != undefined) {
                this._ClientCommDetailsObj.AddressLine1 = FetchedValues.AddressLine1;
                this._ClientCommDetailsObj.AddressLine2 = FetchedValues.AddressLine2;
                this._ClientCommDetailsObj.AddressLine3 = FetchedValues.AddressLine3;
                this._ClientCommDetailsObj.Country = FetchedValues.Country;
                this._ClientCommDetailsObj.ZipCode = FetchedValues.ZipCode;
                this._ClientCommDetailsObj._AddressTypeDetail = FetchedValues._AddressTypeDetail;
                this._ClientCommDetailsObj.AutoID = FetchedValues.AutoID;
                this._ClientCommDetailsObj.CommunicationID = FetchedValues.CommunicationID;
            }
        }
    }

    updateclientCommunicationSuccess(res) {
        //debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientCommunicationDetails(<string>this._LocalStorageService.get("ApplicantID"))
                .subscribe(res => this.GetClientCommDetailsSuccess(res), res => this.GetClientCommDetailsError(res));
        }
        this.CancelAddEditCommunicationDetails();
    }

    updateclientCommunicationError(res) {
        //debugger;
    }

    AddCommunicationDetails() {
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientCommDetailsObj.ApplicantID = this._LocalStorageService.get("ApplicantID").toString();
            this._ClientsService.SaveClientCommunicationDetails(this._ClientCommDetailsObj).subscribe(res => this.AddClientCommunicationSuccess(res), res => this.AddClientCommunicationError(res));
        }
    }

    AddClientCommunicationSuccess(res) {
        //debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientCommunicationDetails(<string>this._LocalStorageService.get("ApplicantID"))
                .subscribe(res => this.GetClientCommDetailsSuccess(res), res => this.GetClientCommDetailsError(res));
        }
        this.CancelAddEditCommunicationDetails();
    }

    AddClientCommunicationError(res) {
        //debugger;
    }

    CancelAddEditCommunicationDetails() {
        //debugger;
        this._EditCommunicationDetails = false;
        this._Operationtitle = "Add";
        this._ClientCommDetailsObj = {
            AddressLine1: "",
            AddressLine2: "",
            AddressLine3: "",
            AddressType: "",
            AutoID: "",
            ApplicantID: "",
            Country: "",
            ZipCode: "",
            CommunicationID: "",
            _AddressTypeDetail:{
            ID:''
}
        };
    }
}
