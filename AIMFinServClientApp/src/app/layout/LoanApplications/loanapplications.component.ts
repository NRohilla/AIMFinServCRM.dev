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

@Component({
    templateUrl: './loanapplications.component.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class LoanapplicationsComponent implements OnInit {
   
    public _Loantypes: any;
    public _ViewApplicationDetails: boolean = false;
    public gridData: any[];
    public _EditDetails: boolean = false;
    public _LoanApplicationDetails = {
        AgeOfProperty: "",
        ApplicantID: "",
        ApprovalExpiryDate: "",
        AutoID: "",
        PurposeOfLoanID:"",
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
        LoanTerm: "",
        ModifiedBy: "",
        ModifiedOn: "",
        Priority: "",
        PropertyType: "",
        PropertyUsedFor: "",
        RateType: "",
        ReasonForNotApproval: "",
        ShiftedDuration: "",
        Status: "",
        TypeOfLoan: "",
        _Applicant: {},
        _StatusID: {},
        _PropertyTypeID: {},
        _RateTypeID: {},
        _PurposeOfLoanID: {},
        TypeOfLoanID: {}
        

    };

    public _TypeOfLoanID = [];
    errorMessage:"No Data"

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog,private _MasterService: MastersService) {

        
    }

    ngOnInit() {
        this._ClientsService.GetAllLoanApplications().subscribe(res => this.GetAllLoanApplicationSuccess(res), res => this.GetAllLoanApplicationError(res));
        this._LoanApplicationDetails = {
            AgeOfProperty: "",
            ApplicantID: "",
            ApprovalExpiryDate: "",
            AutoID: "",
            PurposeOfLoanID:"",
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
            LoanTerm: "",
            ModifiedBy: "",
            ModifiedOn: "",
            Priority: "",
            PropertyType: "",
            PropertyUsedFor: "",
            RateType: "",
            ReasonForNotApproval: "",
            ShiftedDuration: "",
            Status: "",
            TypeOfLoan: "",
            _Applicant: {},
            _StatusID: {},
            _PropertyTypeID: {},
            _RateTypeID: {},
            _PurposeOfLoanID: {},
               TypeOfLoanID: {}
        };
        this.GetLoanType();
    }
    //location: any;
    GetAllLoanApplicationSuccess(Res) {
        this.gridData = JSON.parse(Res._body);
    }

    GetLoanType() {
        debugger;
        this._MasterService.GetLoanTypes().subscribe(res => this.GetLoanTypesSuccess(res), error => this.errorMessage = <any>error);
    }

    GetLoanTypesSuccess(res) {
        debugger
        this._TypeOfLoanID = JSON.parse(res._body);
    }
    GetAllLoanApplicationError(Res) { }

    ViewDetails(LoanApplicationNo) {
        this._LocalStorageService.set("LoanApplicationNoViewed", LoanApplicationNo);
        this._ViewApplicationDetails = !this._ViewApplicationDetails;
        this._ClientsService.GetLoanApplicationDetails(LoanApplicationNo).subscribe(res => this.GetAllLoanApplicationDetailSuccess(res), res => this.GetAllLoanApplicationDetailError(res));
    }

    GetAllLoanApplicationDetailSuccess(res) {
        this._LoanApplicationDetails = JSON.parse(res._body);
    }

    GetAllLoanApplicationDetailError(res) { }

    openDialog(): void {
        let dialogRef = this.dialog.open(LoanApplicationDetailDialog, {
            //data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.animal = result;
        });
    }

    UpdateLoanApplicationDetails() {
        debugger;
        this._EditDetails = false;
        this.formatvalues();
        this._ClientsService.UpdateLoanApplicationDetails(this._LoanApplicationDetails).subscribe(res => this.updateLoanApplicationSuccess(res), res => this.updateLoanApplicationError(res));

    }

    updateLoanApplicationSuccess(res) {
        this._ClientsService.GetAllLoanApplications().subscribe(res => this.GetAllLoanApplicationSuccess(res), res => this.GetAllLoanApplicationError(res));
        this._ViewApplicationDetails = !this._ViewApplicationDetails;
    }

    updateLoanApplicationError(res) { }

    CancelEditingDetails() { this._EditDetails = false; }

    EditDetails() { this._EditDetails = true; }

    formatvalues() {

        if (this._LoanApplicationDetails.IsAnyGuarantor.toString() == "1") {
            true;
        }
        else {
            this._LoanApplicationDetails.IsAnyGuarantor = false;
        }

        if (this._LoanApplicationDetails.IsApplicationApproved.toString() == "1") {
            this._LoanApplicationDetails.IsApplicationApproved = true;
        }
        else {
            this._LoanApplicationDetails.IsApplicationApproved = false;
        }

        if (this._LoanApplicationDetails.IsPreApproval.toString() == "1") {
            this._LoanApplicationDetails.IsPreApproval = true;
        }
        else {
            this._LoanApplicationDetails.IsPreApproval = false;
        }

        if (this._LoanApplicationDetails.IsPropertyDecided.toString() == "1") {
            this._LoanApplicationDetails.IsPropertyDecided = true;
        }
        else {
            this._LoanApplicationDetails.IsPropertyDecided = false;
        }

        if (this._LoanApplicationDetails.IsShifted.toString() == "1") {
            this._LoanApplicationDetails.IsShifted = true;
        }
        else {
            this._LoanApplicationDetails.IsShifted = false;
        }
    }
}
