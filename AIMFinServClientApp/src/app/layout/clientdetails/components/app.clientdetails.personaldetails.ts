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
    selector: `client-personal-details`,
    templateUrl: './app.clientdetails.personaldetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})

export class ClientsPersonalDetailsComponent extends AppBaseComponent implements OnInit {
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public _EditPersonalDetails: boolean = false;
    public _EditCommunicationDetails: boolean = false;
    public _LoggedInUserID: string = '';
    public ModifiedBy: string = '';

    public _ApplicantDetails = {
        AutoID: '',
        ApplicantID: '',
        Title: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        MaritalStatus: '',
        NoOfDependents: '',
        NZResidents: true,
        DNZResidents:'',
        CountryOfBirth: '',
        MobileNo: '',
        HomePhoneNo: '',
        WorkPhoneNo: '',
        EmailID: '',
        ApplicantTypeID: '',
        IsActive: '',
        CreatedBy: '',
        CreatedOn: '',
        ModifiedBy: '',
        ModifiedOn: '',
        ApplicantType: {},
    }
 
    public _ApplicantCommunicationDetails: {
        AutoID: '',
        CommunicationID: '',
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        Duration: '',
        Status: '',
        ApplicantID: '',
        MobileNo: '',
        HomePhoneNo: '',
        WorkPhoneNo: '',
        EmailID: '',
        CreatedBy:'',
        CreatedOn:'',
        ModifiedBy:'',
        ModifiedOn:''
    }

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) {
        super();
    }

    ngOnInit() {
        debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientDetailsSuccess(res), res => this.GetClientDetailsError(res));
            this._ClientsService.GetClientCommunicationDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientCommDetailsSuccess(res), res => this.GetClientCommDetailsError(res));
        }
    }

    GetClientDetailsSuccess(res) {
        debugger;
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._ApplicantDetails = this.trimObj(JSON.parse(res._body));
            if (this._ApplicantDetails.NZResidents == true) {
                this._ApplicantDetails.DNZResidents = "Yes";
            }
            else {
                this._ApplicantDetails.DNZResidents = "No";
            }

        }
    }
    GetClientDetailsError(res) { }

    GetClientCommDetailsSuccess(res) {
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._ApplicantCommunicationDetails = JSON.parse(res._body);
        }
    }
    GetClientCommDetailsError(res) { }

    EditPersonalDetails() {
        this._EditPersonalDetails = !this._EditPersonalDetails;
    }

    cancelEditDetails() {
        this._EditPersonalDetails = false;
        this._ClientsService.GetClientDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientDetailsSuccess(res), res => this.GetClientDetailsError(res));
    }

    EditCommunicationDetails() {
        this._EditCommunicationDetails = !this._EditCommunicationDetails;
    }

    UpdatePersonalDetails() {
        debugger;
        
        this._EditPersonalDetails = false;
        if (this._ApplicantDetails.NZResidents.toString() == "1") {
            this._ApplicantDetails.NZResidents = true;
        }
        else {
            this._ApplicantDetails.NZResidents = false;
        }
        this._ApplicantDetails.ModifiedBy = this._LocalStorageService.get("ApplicantID");
        this._ClientsService.UpdateClientPersonalDetails(this._ApplicantDetails).subscribe(res => this.updateclientPersonalSuccess(res), res => this.updateclientPersonalError(res));
    }
    updateclientPersonalSuccess(res) {}

    updateclientPersonalError(res) {}

    UpdateCommunicationDetails() {
        this._EditCommunicationDetails = false;
        this._ApplicantCommunicationDetails.ModifiedBy = this._LocalStorageService.get("ApplicantID");
        this._ClientsService.UpdateClientCommunicationDetails(this._ApplicantCommunicationDetails).subscribe(res => this.updateclientCommunicationSuccess(res), res => this.updateclientCommunicationError(res));
    }

    updateclientCommunicationSuccess(res) {
    }

    updateclientCommunicationError(res) {
        debugger;
    }

    AddClient() {

    }
}
