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
import { ClientsService } from '../../services/app.clients.service';
import { LoanApplicationDetailDialog } from '../../shared/dialogues/loanapplications/LoanApplicationDetailDialog';
import { MastersService } from '../../services/app.masters.service';
import { AddGuarantorDialog } from '../../shared/dialogues/loanapplications/AddGuarantorDialog';
import { ManageAssetAndLiabilityDialog } from '../../shared/dialogues/loanapplications/ManageAssetandLiabilityDialog';
import { ManageExpenseSheetDialog } from '../../shared/dialogues/loanapplications/ManageExpenseSheetDialog.component';

@Component({
    templateUrl: './loanapplications.component.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class LoanapplicationsComponent implements OnInit {

    public gridData: any[];
    public _LoanApplicationDetails = {
        AgeOfProperty: "",
        ApplicantID: "",
        ApprovalExpiryDate: "",
        AutoID: "",
        PurposeOfLoanID: "",
        CashInHand: "",
        CostOfProperty: "",
        CreatedBy: "",
        CreatedOn: "",
        FinanceRequired: "",
        Frequency: "",
        IsAnyGuarantor: false,
        IsApplicationApproved: false,
        IsPreApproval: false,
        IsPropertyDecided: false,
        IsShifted: false,
        LoanApplicationNo: "",
        ApplicationFormNumber: "",
        LoanTerm: "",
        ModifiedBy: "",
        ModifiedOn: "",
        Priority: "",
        PropertyType: "",
        PropertyUsedFor: "",
        ReasonForNotApproval: "",
        ShiftedDuration: "",
        _Applicant: {},
        _TypeOfLoanID: {},
        _PurposeOfLoanID: {},
        _RateTypeID: {},
        _PropertyTypeID: {},
        _StatusID: {
            Status: ''
        }
    };

    errorMessage: "No Data"

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService) {


    }

    ngOnInit() {
        this._ClientsService.GetAllLoanApplications().subscribe(res => this.GetAllLoanApplicationSuccess(res), res => this.GetAllLoanApplicationError(res));
        this._LoanApplicationDetails = {
            AgeOfProperty: "",
            ApplicantID: "",
            ApprovalExpiryDate: "",
            AutoID: "",
            PurposeOfLoanID: "",
            CashInHand: "",
            CostOfProperty: "",
            CreatedBy: "",
            CreatedOn: "",
            FinanceRequired: "",
            Frequency: "",
            IsAnyGuarantor: false,
            IsApplicationApproved: false,
            IsPreApproval: false,
            IsPropertyDecided: false,
            IsShifted: false,
            LoanApplicationNo: "",
            ApplicationFormNumber: "",
            LoanTerm: "",
            ModifiedBy: "",
            ModifiedOn: "",
            Priority: "",
            PropertyType: "",
            PropertyUsedFor: "",
            ReasonForNotApproval: "",
            ShiftedDuration: "",
            _Applicant: {},
            _TypeOfLoanID: {},
            _PurposeOfLoanID: {},
            _RateTypeID: {},
            _PropertyTypeID: {},
            _StatusID: {
                Status: ''
            }

        };
    }
    GetAllLoanApplicationError(res) { }
   
    GetAllLoanApplicationSuccess(Res) {
        this.gridData = JSON.parse(Res._body);
    }
    ViewDetails(LoanApplicationNo) {
        this._LocalStorageService.set("LoanApplicationNo", LoanApplicationNo);
        this.router.navigateByUrl('loanapplications/loanapplicationdetails');
    }
    
    AddLoanAplicationForm() {
        this.router.navigateByUrl('loanapplications/addloanaaplication');
    }
        
}
