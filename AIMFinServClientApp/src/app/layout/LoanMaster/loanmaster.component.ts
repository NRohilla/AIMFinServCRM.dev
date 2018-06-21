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
    public LoanMasterApplicantDetails = [];
    public LoanApplicationNo: string = '';
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
        this._LoanService.GetAllLoanMasterDetails().subscribe(res => this.GetAllLoanDetailSuccess(res), res => this.GetAllLoanDetailError(res));
    }

    GetAllLoanDetailSuccess(Res) {
        if (JSON.parse(Res._body) != null || JSON.parse(Res._body) != undefined) {

            debugger;
            //this._LocalStorageService.set("LoanApplicationNo", this.LoanApplicationNo);
            this._LoanMasterDetails = JSON.parse(Res._body);
            //this._LoanMasterDetailsObj = JSON.parse(Res._body);
        }
    }
    GetAllLoanDetailError(Res) { }

    ViewDetails(LANNumber) {
        debugger;
        this._LocalStorageService.set("LANNumber", LANNumber);
        this.router.navigateByUrl('loanmaster/loanDetails');
       
    }

    AddLoanMasterForm() {
        this.router.navigateByUrl('loanmaster/addLoanMasterForm');
    }
}
