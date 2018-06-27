import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import {ClientsService} from '../../services/app.clients.service';
import { MastersService } from '../../services/app.masters.service';
import { LoanMasterService } from '../../services/app.loanmaster.service';
import { LoanApplicationDetailDialog } from '../../shared/dialogues/loanapplications/LoanApplicationDetailDialog';
import { ClientDetailsDialog } from '../../shared/dialogues/clients/ClientDetailsDialog';
@Component({
    templateUrl: './loandetails.component.html',
    animations: [routerTransition()],
    providers: [LoanMasterService, MastersService]
})
export class LoanDetails implements OnInit {
    public _EditDetails: boolean = false;
    public _TypeOfLoanID = [];
    public _PropertyTypeID = [];
    public _StatusID = [];
    public _LANNumber: string = "";
    public _LoanApplicationNumber: string = "";
    public LoanMasterApplicantDetails: any[];

    public _LoanDetailsObj =
    {
        LANNumber: '',
        LoanApplicationNo: '',
        ROIOffered: '',
        LoanTermOffered: '',
        RateTypeOffered: '',
        FrequencyOffered: '',
        LoanValueRatio: '',
        LoanAmountOffered: '',
        LoanTypeID: '',
        ClientID: '',
        StatusID: '',
        EMIStartDay: '',
        EMIStartMonth: '',
        LoanProcessingFee: '',
        AnyLegalCharges: '',
        NoOfEMI: '',
        Loanprovider: '',
        PropertyCost: '',
        PropertyTypeID: '',
        FinanceDate: '',
        SettlementDate: '',
        ApplicationFormNumber: '',
        LoanType: '',
        PropertyType: '',
        Status: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        MobileNo: '',
        EmailID: '',
        ApplicantType: '',
        _loanApplicationDetails: {
            ApplicationFormNumber: '',
            LoanApplicationNo: ''
        },
        _propertyTypeDetails: {
            PropertyType: '',
        },
        _typeOfLoanDetails: {
            LoanType: '',
        },
        _typeOfStatusDetails: {
            Status: '',
        }

    };


    errorMessage: "No Data"

    public _LoanMasterDetails = [];
    public LoanApplicationNo: string = '';
    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _LoanService: LoanMasterService, private _MasterService: MastersService, public dialog: MatDialog) { }

    ngOnInit() {
        this._LoanDetailsObj =
            {
                LANNumber: '',
                LoanApplicationNo: '',
                ROIOffered: '',
                LoanTermOffered: '',
                RateTypeOffered: '',
                FrequencyOffered: '',
                LoanValueRatio: '',
                LoanAmountOffered: '',
                LoanTypeID: '',
                ClientID: '',
                StatusID: '',
                EMIStartDay: '',
                EMIStartMonth: '',
                LoanProcessingFee: '',
                AnyLegalCharges: '',
                NoOfEMI: '',
                Loanprovider: '',
                PropertyCost: '',
                PropertyTypeID: '',
                FinanceDate: '',
                SettlementDate: '',
                ApplicationFormNumber: '',
                LoanType: '',
                PropertyType: '',
                Status: '',
                FirstName: '',
                MiddleName: '',
                LastName: '',
                MobileNo: '',
                EmailID: '',
                ApplicantType: '',
                _loanApplicationDetails: {
                    ApplicationFormNumber: '',
                    LoanApplicationNo: ''
                },
                _propertyTypeDetails: {
                    PropertyType: '',
                },
                _typeOfLoanDetails: {
                    LoanType: '',
                },
                _typeOfStatusDetails: {
                    Status: '',
                }
               
            };

        this.GetLoanType();
        this.GetPropertyType();
        this.GetStatusType();
        debugger;
        this._LANNumber = this._LocalStorageService.get("LANNumber");
        this._LoanService.GetLoanMasterDetails(this._LANNumber).subscribe(res => this.GetLoanMasterDetailsSuccess(res), res => this.GetLoanMasterDetailsError(res));
    }

    GetLoanMasterGridSuccess(Res) {
        if (JSON.parse(Res._body) != null || JSON.parse(Res._body) != undefined) {
            this.LoanMasterApplicantDetails = JSON.parse(Res._body);
        }
    }
    ViewApplicantDetails(ApplicantID) {
        debugger;
        this._LocalStorageService.set("ApplicantID", ApplicantID);
        this.router.navigateByUrl('clientdetails');
    }
    GetLoanMasterGridError(res) { }

    GetAllLoanDetailError(Res) { }
    GetLoanMasterDetailsSuccess(res) {
        //debugger;
        this._LoanDetailsObj = JSON.parse(res._body);
        this._LoanApplicationNumber = this._LoanDetailsObj.LoanApplicationNo;
        console.log(this._LoanDetailsObj.LoanApplicationNo)
        this._LoanService.GetLoanMasterGrid(this._LoanApplicationNumber).subscribe(res => this.GetLoanMasterGridSuccess(res), res => this.GetLoanMasterGridError(res));
    }
    GetLoanMasterDetailsError(res) { }

    GetLoanType() {
        //debugger;
        this._MasterService.GetLoanTypes().subscribe(res => this.GetLoanTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLoanTypesSuccess(res) {
        debugger
        this._TypeOfLoanID = JSON.parse(res._body);
    }

    GetPropertyType() {
        this._MasterService.GetPropertyTypes().subscribe(res => this.GetPropertyTypeSuccess(res), error => this.errorMessage = <any>error);
    }
    GetPropertyTypeSuccess(res) {
        this._PropertyTypeID = JSON.parse(res._body);
    }

    GetStatusType() {
        this._MasterService.GetStatusTypes().subscribe(res => this.GetStatusTypeSuccess(res), error => this.errorMessage = <any>error);
    }
    GetStatusTypeSuccess(res) {
        this._StatusID = JSON.parse(res._body);
    }

    UpdateLoanMasterDetails() {
        debugger;
        this._LoanService.UpdateLoanMasterDetails(this._LoanDetailsObj).subscribe(res => this.UpdateLoanMasterDetailsSuccess(res), res => this.UpdateLoanMasterDetailsError(res));
    }

    UpdateLoanMasterDetailsSuccess(res) {
        debugger;
        //this._LoanService.GetAllLoanMasterDetails().subscribe(res => this.GetAllLoanDetailSuccess(res), res => this.GetAllLoanDetailError(res));
        this._EditDetails = !this._EditDetails;
        this._LoanService.GetLoanMasterDetails(this._LANNumber).subscribe(res => this.GetLoanMasterDetailsSuccess(res), res => this.GetLoanMasterDetailsError(res));
        //this._LoanDetailsObj = {
        //    LANNumber: '',
        //    LoanApplicationNo: '',
        //    ROIOffered: '',
        //    LoanTermOffered: '',
        //    RateTypeOffered: '',
        //    FrequencyOffered: '',
        //    LoanValueRatio: '',
        //    LoanAmountOffered: '',
        //    LoanTypeID: '',
        //    ClientID: '',
        //    StatusID: '',
        //    EMIStartDay: '',
        //    EMIStartMonth: '',
        //    LoanProcessingFee: '',
        //    AnyLegalCharges: '',
        //    NoOfEMI: '',
        //    Loanprovider: '',
        //    PropertyCost: '',
        //    PropertyTypeID: '',
        //    FinanceDate: '',
        //    SettlementDate: '',
        //    ApplicationFormNumber: '',
        //    LoanType: '',
        //    PropertyType: '',
        //    Status: '',
        //    FirstName: '',
        //    MiddleName: '',
        //    LastName: '',
        //    MobileNo: '',
        //    EmailID: '',
        //    ApplicantType: '',
        //    _loanApplicationDetails: {
        //        ApplicationFormNumber: '',
        //        LoanApplicationNo: ''
        //    },
        //    _propertyTypeDetails: {
        //        PropertyType: '',
        //    },
        //    _typeOfLoanDetails: {
        //        LoanType: '',
        //    },
        //    _typeOfStatusDetails: {
        //        Status: '',
        //    }
        //}
    }
    GetAllLoanDetailSuccess(res) {
        debugger;
        this._LoanDetailsObj = JSON.parse(res._body);
    }
    UpdateLoanMasterDetailsError(res) {
    }

    CancelEditingDetails() {
        this._EditDetails = false;
        this._LANNumber = this._LocalStorageService.get("LANNumber");
        this._LoanService.GetLoanMasterDetails(this._LANNumber).subscribe(res => this.GetLoanMasterDetailsSuccess(res), res => this.GetLoanMasterDetailsError(res));
    }

    EditDetails() {
        this._EditDetails = true;
    }
    ViewDetails() {
        this.router.navigateByUrl('loanmaster');
    }
}
