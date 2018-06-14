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
import {MastersService } from '../../../services/app.masters.service';
import {AppBaseComponent} from '../../../shared/app.basecomponent';

@Component({
    selector: `client-employement-details`,
    templateUrl: './app.clientdetails.employementdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class ClientsEmployementComponent extends AppBaseComponent implements OnInit {
    

    public _EditEmployementDetails: boolean = false;
    public _Operationtitle: string = "Add";    
    public _ClientEmploymentDetails = [];
    public _TypeOfProfession = [];
    public _TypeOfEmployment= [];

    public _ClientEmploymentDetailsObj= {
        EmployerName: '',        
        Duration: '',
        Income: '',
        ApplicantID: '',
        AutoID: '',        
        EmploymentID: '',
        Status: '',
        _ProfessionTypeDetail: {ID:''},
        _EmploymentTypeDetail: {
            ID:''
        }
    };
    errorMessage: "No Data"
    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, private _MasterService: MastersService) { super(); }

    ngOnInit() {

        this._ClientEmploymentDetailsObj = {
            EmployerName: '',            
            Duration: '',
            Income: '',
            ApplicantID: '',
            AutoID: '',            
            EmploymentID: '',
            Status: '',
            _ProfessionTypeDetail: { ID: ''},
            _EmploymentTypeDetail: {
                ID: ''
            }
        };

        this.GetEmploymentTypeDetails();
        this.GetProfessionTypeDetails();

        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null)
            //debugger;
            this._ClientsService.GetClientEmploymentDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientEmploymentDetailsSuccess(res), res => this.GetClientEmploymentDetailsError(res));
    }

    GetClientEmploymentDetailsSuccess(res) {
        //debugger;
        if (res._body != null && res._body != undefined && res._body.toString().trim().length > 0) {
            this._ClientEmploymentDetails = this.trimObj(JSON.parse(res._body));            
        }
    }

    GetClientEmploymentDetailsError(res) { }

    GetEmploymentTypeDetails() {
        //debugger;
        this._MasterService.GetEmploymentTypes().subscribe(res => this.GetEmploymentTypeDetailsSuccess(res), error => this.errorMessage = <any>error);
    }
    GetEmploymentTypeDetailsSuccess(res) {
        debugger
        this._TypeOfEmployment = JSON.parse(res._body);
    }

    GetProfessionTypeDetails() {
        //debugger;
        this._MasterService.GetProfessionTypes().subscribe(res => this.GetProfessionTypeDetailsSuccess(res), error => this.errorMessage = <any>error);
    }
    GetProfessionTypeDetailsSuccess(res) {
        debugger
        this._TypeOfProfession = JSON.parse(res._body);
    }


    GridSelectionChange(data, event) {
        //debugger;
        this._EditEmployementDetails = true;
        this._Operationtitle = "Update";
        var FetchedValues = this._ClientEmploymentDetails[event.index];        
        this._ClientEmploymentDetailsObj.EmployerName = FetchedValues.EmployerName;
        this._ClientEmploymentDetailsObj.Duration = FetchedValues.Duration;
        this._ClientEmploymentDetailsObj.Income = FetchedValues.Income;
        this._ClientEmploymentDetailsObj._ProfessionTypeDetail = FetchedValues._ProfessionTypeDetail;
        this._ClientEmploymentDetailsObj._EmploymentTypeDetail = FetchedValues._EmploymentTypeDetail;
        this._ClientEmploymentDetailsObj.AutoID = FetchedValues.AutoID;
        this._ClientEmploymentDetailsObj.Status = FetchedValues.Status;
        this._ClientEmploymentDetailsObj.EmploymentID = FetchedValues.EmploymentID;        
    }


    AddEmploymentDetails() {
        //debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientEmploymentDetailsObj.ApplicantID = this._LocalStorageService.get("ApplicantID").toString();
            this._ClientsService.SaveClientEmploymentDetails(this._ClientEmploymentDetailsObj).subscribe(res => this.AddEmploymentDetailsSuccess(res), res => this.AddEmploymentDetailsError(res));
        }
    }

    AddEmploymentDetailsSuccess(res) {
        //debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientEmploymentDetails(<string>this._LocalStorageService.get("ApplicantID"))
                .subscribe(res => this.GetClientEmploymentDetailsSuccess(res), res => this.GetClientEmploymentDetailsError(res));
        }
        this.CancelAddEditEmploymentDetails();
    }

    AddEmploymentDetailsError(res) {
        //debugger;
    }

    UpdateEmploymentDetails() {
        debugger;
        this._ClientsService.UpdateClientEmploymentdetails(this._ClientEmploymentDetailsObj).subscribe(res => this.UpdateEmploymentDetailsSuccess(res), res => this.UpdateEmploymentDetailsError(res));
    }

    UpdateEmploymentDetailsSuccess(res) {
        //debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientEmploymentDetails(<string>this._LocalStorageService.get("ApplicantID"))
                .subscribe(res => this.GetClientEmploymentDetailsSuccess(res), res => this.GetClientEmploymentDetailsError(res));
        }
        this.CancelAddEditEmploymentDetails();
    }

    UpdateEmploymentDetailsError(res) {
        ////debugger;
    }

    CancelAddEditEmploymentDetails() {
        ////debugger;
        this._EditEmployementDetails = false;
        this._Operationtitle = "Add";
        this._ClientEmploymentDetailsObj = {
            EmployerName: '',            
            Duration: '',
            Income: '',
            ApplicantID: '',
            AutoID: '',            
            EmploymentID: '',
            Status: '',
            _ProfessionTypeDetail: { ID: ''},
            _EmploymentTypeDetail: { ID: ''}
        };            
    }
    
}
