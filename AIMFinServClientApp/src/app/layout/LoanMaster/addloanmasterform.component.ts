import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { MastersService } from '../../services/app.masters.service';
import { LoanMasterService } from '../../services/app.loanmaster.service';
@Component({
    templateUrl: './addloanmaster.component.html',
    animations: [routerTransition()],
    providers: [LoanMasterService, MastersService]
})
export class AddLoanmasterComponent implements OnInit {
    public _TypeOfLoanID = [];
    public _PropertyTypeID = [];
    public _StatusID = [];
    public _GetLoanMasterData = [];
    errorMessage: "No Data"
    public _LoanMasterDetails = [];
    public _LoanApplicationDetails = [];
    public _RateTypeOffered = [];

    @ViewChild("AddLoanMaster")
    AddLoanMaster: NgForm;

    public _AddLoanMasterDetailsObj =
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
        AutoID: '',
        RateTypeID: '',
        _loanApplicationDetails: {
            AutoID: '',
            ApplicationFormNumber:''
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



    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _LoanService: LoanMasterService, private _MasterService: MastersService, public dialog: MatDialog) { }

    ngOnInit() {

        this._AddLoanMasterDetailsObj =
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
                AutoID: '',
                RateTypeID: '',
                _loanApplicationDetails: {
                    AutoID: '',
                    ApplicationFormNumber: ''
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
        this.GetApplicationFormNo();
        this.GetLoanType();
        this.GetPropertyType();
        this.GetStatusType();
        this.GetLoanrateTypes();
        
    }

    ViewDetails(obj){}

    GetApplicationFormNo() {
        this._MasterService.GetApplicationFormNo().subscribe(res => this.GetApplicationFormNoSuccess(res), error => this.errorMessage = <any>error);
    }

    GetApplicationFormNoSuccess(res) {
        this._LoanApplicationDetails = JSON.parse(res._body);
    }
    
    GetLoanType() {
        this._MasterService.GetLoanTypes().subscribe(res => this.GetLoanTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLoanTypesSuccess(res) {
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
    GetLoanrateTypes() {
        this._MasterService.GetLoanrateTypes().subscribe(res => this.GetLoanrateTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLoanrateTypesSuccess(res) {
        this._RateTypeOffered = JSON.parse(res._body);
    }


    AddLoanMasterDetails() {
        this._LoanService.AddLoanMasterDetails(this._AddLoanMasterDetailsObj).subscribe(res => this.AddLoanMasterDetailsSuccess(res), res => this.AddLoanMasterDetailsError(res));
    }

    AddLoanMasterDetailsSuccess(res) {
        this._AddLoanMasterDetailsObj = JSON.parse(res._body);
        this.AddLoanMaster.reset();
    }

    AddLoanMasterDetailsError(res) {
    }
    GetDataFromLoanAppError(res) { }

    updateData(event) {
        var AutoId = event.value;
        this._LoanService.GetDataFromLoanApp(AutoId).subscribe(res => this.GetDataFromLoanAppSuccess(res), res => this.GetDataFromLoanAppError(res));
    }
    GetDataFromLoanAppSuccess(res) {
        this._AddLoanMasterDetailsObj = JSON.parse(res._body)[0];
    }

    CancelEditingDetails() {
        this.router.navigateByUrl('loanmaster');
    }
}
