import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import {ClientsService} from '../../services/app.clients.service';
import { MastersService } from '../../services/app.masters.service';
import {LoanMasterService} from '../../services/app.loanmaster.service';
import { LoanApplicationDetailDialog } from '../../shared/dialogues/loanapplications/LoanApplicationDetailDialog';
import { ClientDetailsDialog } from '../../shared/dialogues/clients/ClientDetailsDialog';
@Component({
    templateUrl: './loanmaster.component.html',
    animations: [routerTransition()],
    providers: [LoanMasterService, MastersService]
})
export class LoanmasterComponent implements OnInit {
    public _ViewApplicationDetails: boolean = false;    
    public _EditDetails: boolean = false;
    public _TypeOfLoanID = [];
    public _PropertyTypeID = [];
    public _StatusID = [];

    public _LoanMasterDetailsObj =
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
    public LoanMasterApplicantDetails = [];

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _LoanService: LoanMasterService, private _MasterService: MastersService, public dialog: MatDialog) { }

    ngOnInit() {        

        this._LoanMasterDetailsObj =
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
        this._LoanService.GetAllLoanMasterDetails().subscribe(res => this.GetAllLoanDetailSuccess(res), res => this.GetAllLoanDetailError(res));
        this._LoanService.GetLoanMasterGrid().subscribe(res => this.GetLoanMasterGridSuccess(res), res => this.GetLoanMasterGridError(res));
    }

    GetAllLoanDetailSuccess(Res) {
        debugger;
        this._LoanMasterDetails = JSON.parse(Res._body);
    }
    GetLoanMasterGridSuccess(res) {
        debugger;
        this.LoanMasterApplicantDetails = JSON.parse(res._body);
    }

    ViewApplicantDetails() {
        debugger;
        this.router.navigateByUrl('loanmaster/clients');
    }

    GetLoanMasterGridError(res) { }
    GetAllLoanDetailError(Res) { }

    ViewDetails(LANNumber) {
        debugger;
        this._ViewApplicationDetails = !this._ViewApplicationDetails;
        this._LoanService.GetLoanMasterDetails(LANNumber).subscribe(res => this.GetLoanMasterDetailsSuccess(res), res => this.GetLoanMasterDetailsError(res));
    }

    GetLoanMasterDetailsSuccess(res) {
        debugger;
        this._LoanMasterDetailsObj = JSON.parse(res._body);
    }

    GetLoanMasterDetailsError(res) { }

    GetLoanType() {
        debugger;
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
        this._LoanService.UpdateLoanMasterDetails(this._LoanMasterDetailsObj).subscribe(res => this.UpdateLoanMasterDetailsSuccess(res), res => this.UpdateLoanMasterDetailsError(res));
    }

    UpdateLoanMasterDetailsSuccess(res) {
        debugger;
        this._LoanService.GetAllLoanMasterDetails().subscribe(res => this.GetAllLoanDetailSuccess(res), res => this.GetAllLoanDetailError(res));
        this._EditDetails = true;
    }

    UpdateLoanMasterDetailsError(res) {
    }

    CancelEditingDetails() { this._EditDetails = false; }

    EditDetails() {
        this._EditDetails = true;       
    }
    AddLoanMasterForm() {
        this.router.navigateByUrl('loanmaster/addLoanMasterForm');
    }
}
