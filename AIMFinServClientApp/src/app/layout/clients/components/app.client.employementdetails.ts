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
    selector: `client-employement-details`,
    templateUrl: './app.client.employementdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ClientsEmployementComponent extends AppBaseComponent implements OnInit {
    //public _ViewApplicantDetails: boolean = false;
    //public _FormErrors;
    //public _FormErrorsDescription: string = '';
    //public _EditEmployementDetails: boolean = false;

    public _Operationtitle: string = "Add";    
    public _ClientEmploymentDetails = {};

    public _ClientEmployementDetailsObj= {
        EmployerName: '',
        SourceOfIncome: '',
        Duration: '',
        Income: '',
        ApplicantID: '',
        AutoID: '',
        EmploymentID: ''
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { super(); }

    ngOnInit() {

        this._ClientEmployementDetailsObj = {
            EmployerName: '',
            SourceOfIncome: '',
            Duration: '',
            Income: '',
            ApplicantID: '',
            AutoID: '',
            EmploymentID: ''
        };

        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null)
            this._ClientsService.GetClientEmploymentDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientDetailsSuccess(res), res => this.GetClientDetailsError(res));
    }

    GetClientDetailsSuccess(res) {
        if (res._body != null && res._body != undefined && res._body.toString().trim().length > 0) {
            this._ClientEmploymentDetails = this.trimObj(JSON.parse(res._body));
        }
    }

    GetClientDetailsError(res) { }



    GridSelectionChange(data, selection) {
        //this._EditCommunicationDetails = true;
        //this._Operationtitle = "Update";
        //var FetchedValues = data.data.data[selection.index];
        //this._ClientCommDetailsObj.AddressLine1 = FetchedValues.AddressLine1;
        //this._ClientCommDetailsObj.AddressLine2 = FetchedValues.AddressLine2;
        //this._ClientCommDetailsObj.AddressLine3 = FetchedValues.AddressLine3;
        //this._ClientCommDetailsObj.AddressType = FetchedValues.AddressType.toString();
        //this._ClientCommDetailsObj.AutoID = FetchedValues.AutoID;
        //this._ClientCommDetailsObj.CommunicationID = FetchedValues.CommunicationID;
        debugger;
    }

    //EditEmployementDetails() {
    //    this._EditEmployementDetails = !this._EditEmployementDetails;
    //}

    //UpdateEmployementDetails() {
    //    debugger;
    //    this._EditEmployementDetails = false;
    //    this._ClientsService.updateclientEmploymentdetails(this._ApplicantEmployementDetails).subscribe(res => this.updateclientEmploymentSuccess(res), res => this.updateclientEmploymentError(res));
    //}

    //updateclientEmploymentSuccess(res) { debugger; }
    //updateclientEmploymentError(res) { }
}
