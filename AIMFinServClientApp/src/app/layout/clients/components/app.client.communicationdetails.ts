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
    //public _ViewApplicantDetails: boolean = false;
    //public _FormErrors;
    //public _FormErrorsDescription: string = '';
    //public _EditPersonalDetails: boolean = false;
    public _EditCommunicationDetails: boolean = false;


    public _Operationtitle: string = "Add";
    public _ClientCommDetailsObj: {};
    public _ClientCommunicationDetails: {
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

    GetClientCommDetailsSuccess(res) {
        debugger;
        this._ClientCommunicationDetails = this.trimObj(JSON.parse(res._body));
    }
    GetClientCommDetailsError(res) { }

       
    UpdateCommunicationDetails() {
        debugger;
        this._EditCommunicationDetails = false;
        this._ClientsService.UpdateClientCommunicationDetails(this._ClientCommunicationDetails).subscribe(res => this.updateclientCommunicationSuccess(res), res => this.updateclientCommunicationError(res));
    }

    GridSelectionChange(data, selection) {
        debugger;
        this._Operationtitle = "Update";
        this._ClientCommDetailsObj = data.data.data[selection.index];
    }
    updateclientCommunicationSuccess(res) {
        debugger;
    }

    updateclientCommunicationError(res) {
        debugger;
    }

    AddClient() {  }



    
    //GetApplicantSuccess(res) {
    //    debugger;
    //    this._ApplicantTypes = JSON.parse(res._body);

    //}
    //GetApplicantError(res) { }

    //SwitchStatus(ID) {
    //    debugger;
    //    this._MastersService.SwitchApplicantEntityStatus(ID).subscribe(res => this.SwitchApplicantSuccess(res), res => this.SwitchApplicantError(res));
    //}
    //SwitchApplicantSuccess(res) { this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res)); }
    //SwitchApplicantError(res) { }

    //UpdateApplicantType() {
    //    this._MastersService.UpdateApplicantEntity(this._ApplicantObj).subscribe(res => this.UpdateApplicantSuccess(res), res => this.UpdateApplicantError(res));
    //}
    //UpdateApplicantSuccess(res) {
    //    this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res));
    //    this.CancelApplicantType();
    //}
    //UpdateApplicantError(res) { }

    //GridSelectionChange(data, selection) {
    //    debugger;
    //    this._Operationtitle = "Update";
    //    this._ApplicantObj = data.data.data[selection.index];
    //}
    //CancelApplicantType() {
    //    debugger;
    //    this._Operationtitle = "Add";
    //    this._ApplicantObj = {
    //        ApplicantType: "",
    //        ApplicantTypeID: "",
    //        IsActive: ""
    //    };
    //}

    //AddApplicantType() {
    //    debugger;
    //    this._MastersService.AddApplicantEntity(this._ApplicantObj).subscribe(res => this.AddApplicantSuccess(res), res => this.AddApplicantError(res));
    //}
    //AddApplicantSuccess(res) {
    //    this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res));
    //    this.CancelApplicantType();
    //}
    //AddApplicantError(res) { }
}