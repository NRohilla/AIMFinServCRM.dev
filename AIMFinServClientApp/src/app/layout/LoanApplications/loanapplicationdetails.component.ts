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
import { ManageApplicantDialog } from '../../shared/dialogues/loanapplications/ManageApplicantDialog';
import { ManageExpenseSheetDialog } from '../../shared/dialogues/loanapplications/ManageExpenseSheetDialog.component';
import { GoogleService } from '../../services/app.googleservices.service';

@Component({
    templateUrl: './loanapplicationdetails.component.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService, GoogleService]
})
export class LoanapplicationdetailsComponent implements OnInit {

    public _Loantypes: any;
    public _ViewApplicationDetails: boolean = false;
    public gridData: any[];
    public _EditDetails: boolean = false;
    public _ShowApprovalExpiryDate: boolean = false;
    public _ShowShiftedDuration: boolean = false;
    public _ShowCostOfProperty: boolean = false;
    public _ShowReasonForNotApproval: boolean = false;
    public selectedStatus: string = '';
    public LoanApplicantGrid: any[];
    public _LoanAppNo: string = "";

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
        FirstName: "",
        MiddleName: "",
        LastName: "",
        MobileNo: "",
        EmailID: "",
        Title:"",
        ApplicantType: "",
        _Applicant: {},
        _TypeOfLoanID: {},
        _PurposeOfLoanID: {},
        _RateTypeID: {},
        _PropertyTypeID: {},
        _StatusID: {
            Status: ''
        }
    };

    public _TypeOfLoanID = [];
    public _PurposeOfLoanID = [];
    public _RateTypeID = [];
    public _PropertyTypeID = [];
    public _StatusID = [];

    errorMessage: "No Data"

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, private _GoogleService: GoogleService, public dialog: MatDialog, private _MasterService: MastersService) {
    }

    ngOnInit() {
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
            FirstName: "",
            MiddleName: "",
            LastName: "",
            MobileNo: "",
            EmailID: "",
            Title: "",
            ApplicantType: "",
            _TypeOfLoanID: {},
            _PurposeOfLoanID: {},
            _RateTypeID: {},
            _PropertyTypeID: {},
            _StatusID: {
                Status: ''
            }
        };
        this.GetLoanType();
        this.GetPurposeofloanType();
        this.GetLoanrateType();
        this.GetPropertyType();
        this.GetStatusType();
        debugger;
        this._LoanAppNo = this._LocalStorageService.get("LoanApplicationNo");
        this._ClientsService.GetLoanApplicationDetails(this._LoanAppNo).subscribe(res => this.GetLoanApplicationDetailsSuccess(res), res => this.GetLoanApplicationDetailsError(res));
    }

    GetLoanApplicationDetailsSuccess(res) {
        debugger;
        this._LoanApplicationDetails = JSON.parse(res._body);
        console.log(this._LoanApplicationDetails);
        this._ClientsService.GetAllApplicantsByLoanID(this._LoanAppNo).subscribe(res => this.GetAllClientsGridSuccess(res), res => this.GetAllClientsGridError(res));
    }
    GetLoanApplicationDetailsError(res) { }
   
    GetAllClientsGridSuccess(res) {
        this.LoanApplicantGrid = JSON.parse(res._body);
    }
    GetAllClientsGridError(res) { }

    ManageExpenseSheet() {
        let dialogRef = this.dialog.open(ManageExpenseSheetDialog, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }


    AssignApplicant() {
        let dialogRef = this.dialog.open(ManageApplicantDialog, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ManageGuarantor(): void {
        let dialogRef = this.dialog.open(AddGuarantorDialog, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    ManageAssetandLiability(): void {
        let dialogRef = this.dialog.open(ManageAssetAndLiabilityDialog, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    GetAllLoanApplicationError(Res) { }

   GetAllLoanApplicationDetailSuccess(res) {
        this._LoanApplicationDetails = JSON.parse(res._body);

        if (this._LoanApplicationDetails.IsPreApproval == true)
            this._ShowApprovalExpiryDate = true;

        if (this._LoanApplicationDetails.IsShifted == true)
            this._ShowShiftedDuration = true;

        if (this._LoanApplicationDetails.IsPropertyDecided == true)
            this._ShowCostOfProperty = true;

        if (this._LoanApplicationDetails._StatusID.Status == "Approved")
            this._ShowReasonForNotApproval = true;

    }

    GetAllLoanApplicationDetailError(res) { }

    openDialog(): void {
        let dialogRef = this.dialog.open(LoanApplicationDetailDialog, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    UpdateLoanApplicationDetails() {
        this._EditDetails = false;
        this.formatvalues();
        this._ClientsService.UpdateLoanApplicationDetails(this._LoanApplicationDetails).subscribe(res => this.updateLoanApplicationSuccess(res), res => this.updateLoanApplicationError(res));

    }

    updateLoanApplicationSuccess(res) {
        debugger;
        this._ClientsService.GetAllLoanApplications().subscribe(res => this.GetAllLoanApplicationSuccess(res), res => this.GetAllLoanApplicationError(res));

        this._ViewApplicationDetails = !this._ViewApplicationDetails;
    }

    updateLoanApplicationError(res) { }

    CancelEditingDetails() { this._EditDetails = false; }

    EditDetails() { this._EditDetails = true; }

    formatvalues() {

        if (this._LoanApplicationDetails.IsAnyGuarantor.toString() == "1") {
            //true;
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

    GetAllLoanApplicationSuccess(Res) {
        this.gridData = JSON.parse(Res._body);
        console.log(this.gridData)
       
    }
    GetAllClientsSuccess(Res) {
        this.gridData = JSON.parse(Res._body);
    }

    GetAllClientsError(Res) { }

    GetLoanType() {
        this._MasterService.GetLoanTypes().subscribe(res => this.GetLoanTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLoanTypesSuccess(res) {
        this._TypeOfLoanID = JSON.parse(res._body);
    }

    GetPurposeofloanType() {
        this._MasterService.GetPurposeofloanTypes().subscribe(res => this.GetPurposeofloanTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetPurposeofloanTypesSuccess(res) {
        this._PurposeOfLoanID = JSON.parse(res._body);
    }

    GetLoanrateType() {
        this._MasterService.GetLoanrateTypes().subscribe(res => this.GetLoanrateTypeSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLoanrateTypeSuccess(res) {
        this._RateTypeID = JSON.parse(res._body);
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

    SwitchApproval() {
        debugger;
        this._ShowApprovalExpiryDate = false;
        if (this._LoanApplicationDetails.IsPreApproval == false)
            this._ShowApprovalExpiryDate = true;
    }

    SwitchShifted() {
        this._ShowShiftedDuration = false;
        if (this._LoanApplicationDetails.IsShifted == false)
            this._ShowShiftedDuration = true;
    }

    SwitchCostOfProperty() {
        this._ShowCostOfProperty = false;
        if (this._LoanApplicationDetails.IsPropertyDecided == false)
            this._ShowCostOfProperty = true;
    }


    updateDiv(event) {
        debugger;
        for (var i = 0; i < this._StatusID.length; i++) {
            if (this._StatusID[i].ID == event.value) {
                this.selectedStatus = this._StatusID[i].Status;

                if (this.selectedStatus == "Not Approved") {
                    this._ShowReasonForNotApproval = true;
                }
                else {
                    this._ShowReasonForNotApproval = false;
                }


            }
        }


    }

    AddLoanAplicationForm() {
        debugger;
        this.router.navigateByUrl('loanapplications/addloanaaplication');
    }
    ViewApplicantDetails(ApplicantID) {
        debugger;
        this._LocalStorageService.set("ApplicantID", ApplicantID);
        this.router.navigateByUrl('clientdetails');
    }
    ViewDetails() {
        this.router.navigateByUrl('loanapplications');
    }

   

}
