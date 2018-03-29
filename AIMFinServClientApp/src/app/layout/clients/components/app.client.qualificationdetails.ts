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
    selector: `client-qualification-details`,
    templateUrl: './app.client.qualificationdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})

export class ClientqualificationComponent extends AppBaseComponent implements OnInit {   
    public _EditQualificationDetails: boolean = false;

    public _Operationtitle: string = "Add";
    public _ClientQualificationDetails = [];
    public _TypeOfQualification = [];

    public _ClientQualificationDetailsObj = {
        AutoID: '',
        QualificationID: '',
        ApplicantID: '',
        TypeOfQualification: '',
        PassingYear: '',
        CourseName: '',
        UniversityName: '',
        _QualificationTypeDetail: {}       
    };

    errorMessage: "No Data"  

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, private _MasterService: MastersService) { super(); }

    ngOnInit() {

        this._ClientQualificationDetailsObj = {
            AutoID: '',
            QualificationID: '',
            ApplicantID: '',
            TypeOfQualification: '',
            PassingYear: '',
            CourseName: '',
            UniversityName: '',
            _QualificationTypeDetail: {}           
        };

        this.GetQualificationTypeDetails();

        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientQualificationDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientQualDetailsSuccess(res), res => this.GetClientQualDetailsError(res));
        }
    }    

    GetClientQualDetailsSuccess(res) {
        this._ClientQualificationDetails = this.trimObj(JSON.parse(res._body));
    }
    GetClientQualDetailsError(res) { }

    GetQualificationTypeDetails() {
        debugger;
        this._MasterService.GetQualificationTypes().subscribe(res => this.GetQualificationTypeDetailsSuccess(res), error => this.errorMessage = <any>error);
    }
    GetQualificationTypeDetailsSuccess(res) {
        debugger
        this._TypeOfQualification = JSON.parse(res._body);
    }

    GridSelectionChange(data, selection) {
        debugger;
        this._EditQualificationDetails = true;
        this._Operationtitle = "Update";
        var FetchedValues = data.data.data[selection.index];

        this._ClientQualificationDetailsObj.AutoID = FetchedValues.AutoID;
        this._ClientQualificationDetailsObj.ApplicantID = FetchedValues.ApplicantID;
        this._ClientQualificationDetailsObj.CourseName = FetchedValues.CourseName;        
        this._ClientQualificationDetailsObj.PassingYear = FetchedValues.PassingYear;
        this._ClientQualificationDetailsObj.QualificationID = FetchedValues.QualificationID;
        this._ClientQualificationDetailsObj.TypeOfQualification = FetchedValues.TypeOfQualification;        
        this._ClientQualificationDetailsObj.UniversityName = FetchedValues.UniversityName;
        this._ClientQualificationDetailsObj._QualificationTypeDetail = FetchedValues._QualificationTypeDetail;
    }

    AddQualificationDetails() {
        debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientQualificationDetailsObj.ApplicantID = this._LocalStorageService.get("ApplicantID").toString();
            this._ClientsService.SaveClientQualificationDetails(this._ClientQualificationDetailsObj).subscribe(res => this.AddQualificationDetailsSuccess(res), res => this.AddQualificationDetailsError(res));
        }
    }

    AddQualificationDetailsSuccess(res) {
        debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientQualificationDetails(<string>this._LocalStorageService.get("ApplicantID"))
                .subscribe(res => this.GetClientQualDetailsSuccess(res), res => this.GetClientQualDetailsError(res));
        }
        this.CancelAddEditQualificationDetails();
    }

    AddQualificationDetailsError(res) {
        debugger;
    }

    UpdateQualificationDetails() {
        debugger;

        this._ClientsService.UpdateClientQualificationDetails(this._ClientQualificationDetailsObj).subscribe(res => this.UpdateQualificationDetailsSuccess(res), res => this.UpdateQualificationDetailsError(res));
    }

    UpdateQualificationDetailsSuccess(res) {
        debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientQualificationDetails(<string>this._LocalStorageService.get("ApplicantID"))
                .subscribe(res => this.GetClientQualDetailsSuccess(res), res => this.GetClientQualDetailsError(res));
        }
        this.CancelAddEditQualificationDetails();
    }

    UpdateQualificationDetailsError(res) {
        debugger;
    }

    CancelAddEditQualificationDetails() {
        debugger;
        this._EditQualificationDetails = false;
        this._Operationtitle = "Add";
        this._ClientQualificationDetailsObj = {
            AutoID: '',
            QualificationID: '',
            ApplicantID: '',
            TypeOfQualification: '',
            PassingYear: '',
            CourseName: '',
            UniversityName: '',
            _QualificationTypeDetail: {}
        };
    }


}
