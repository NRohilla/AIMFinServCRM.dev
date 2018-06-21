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
import { ClientsService } from '../../services/app.clients.service';
import { MastersService } from '../../services/app.masters.service';
import { NgModule } from '@angular/core';


@Component({
    templateUrl: './addloanapplication.component.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class AddLoanApplicationComponent implements OnInit {
    public _TypeOfLoanID = [];
    public _PurposeOfLoanID = [];
    public _RateTypeID = [];
    public _PropertyTypeID = [];
    public _StatusID = [];
    public _AdvisorID = [];

    @ViewChild("AddLoanApplicantform")
    AddLoanApplicantform: NgForm;

    public _ShowApprovalExpiryDate: boolean = false;
    public _ShowShiftedDuration: boolean = false;
    public _ShowCostOfProperty: boolean = false;
    public _ShowReasonForNotApproval: boolean = false;
    errorMessage: "No Data"
    public selectedStatus: string = '';

    public _AddLoanApplicationDetails = {
        AgeOfProperty: "",
        ApplicantID: "",
        ApprovalExpiryDate: "",
        AutoID: "",
        PurposeOfLoanID: "",
        AdvisorID: "",
        AdvisorGroup: "",
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
        _TypeOfLoanID: {
            ID: ''
        },
        _PurposeOfLoanID: {
            ID: ''
        },
        _RateTypeID: {
            ID: ''
        },
        _PropertyTypeID: {
            ID: ''
        },
        _AdvisorID: {
            AutoID: ''
        },
        _StatusID: {
            ID:'',
            Status: ''
        }
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService) {
    }

    ngOnInit() {
        this.GetLoanType();
        this.GetPurposeofloanType();
        this.GetLoanrateType();
        this.GetPropertyType();
        this.GetStatusType();
        this.GetAdvisorGroups();
        this.Conditions();
       
    }
    ViewDetails(obj){}

    AddLoanApplicationDetails() {
        debugger;
        this.formatvalues();
        console.log("theeeeee", this._LocalStorageService.get("LoanApplicationNo"))
        if (this._LocalStorageService.get("LoanApplicationNo") != undefined) {
            this._AddLoanApplicationDetails.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNo");
            console.log("the value pof this add loan application details", this._AddLoanApplicationDetails);
            this._ClientsService.AddLoanApplicationDetails(this._AddLoanApplicationDetails).subscribe(res => this.AddLoanApplicationDetailsSuccess(res), res => this.AddLoanApplicationDetailsError(res));
        }
    }

    Conditions() {
        if(this._AddLoanApplicationDetails.IsPreApproval == true)
            this._ShowApprovalExpiryDate = true;

        if(this._AddLoanApplicationDetails.IsShifted == true)
            this._ShowShiftedDuration = true;

        if(this._AddLoanApplicationDetails.IsPropertyDecided == true)
            this._ShowCostOfProperty = true;

        if(this._AddLoanApplicationDetails._StatusID.Status == "Approved")
            this._ShowReasonForNotApproval = true;
    }

    AddLoanApplicationDetailsSuccess(res) {
        this.formatvalues();
        this._AddLoanApplicationDetails = JSON.parse(res._body);
        this.AddLoanApplicantform.reset();
        this.router.navigateByUrl('loanapplications');
    }
    AddLoanApplicationDetailsError(res) { }

    GetLoanType() {
        this._MasterService.GetLoanTypes().subscribe(res => this.GetLoanTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLoanTypesSuccess(res) {
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._TypeOfLoanID = JSON.parse(res._body);
        }
    }

    GetPurposeofloanType() {
        this._MasterService.GetPurposeofloanTypes().subscribe(res => this.GetPurposeofloanTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetPurposeofloanTypesSuccess(res) {
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._PurposeOfLoanID = JSON.parse(res._body);
        }
    }

    GetLoanrateType() {
        this._MasterService.GetLoanrateTypes().subscribe(res => this.GetLoanrateTypeSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLoanrateTypeSuccess(res) {
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._RateTypeID = JSON.parse(res._body);
        }
    }

    GetPropertyType() {
        this._MasterService.GetPropertyTypes().subscribe(res => this.GetPropertyTypeSuccess(res), error => this.errorMessage = <any>error);
    }
    GetPropertyTypeSuccess(res) {
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._PropertyTypeID = JSON.parse(res._body);
        }
    }

    GetStatusType() {
        this._MasterService.GetStatusTypes().subscribe(res => this.GetStatusTypeSuccess(res), error => this.errorMessage = <any>error);
    }
    GetStatusTypeSuccess(res) {
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._StatusID = JSON.parse(res._body);
        }
    }
    GetAdvisorGroups() {
        this._MasterService.GetAdvisorGroups().subscribe(res => this.GetAdvisorGroupsSuccess(res), error => this.errorMessage = <any>error);
    }
    GetAdvisorGroupsSuccess(res) {
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._AdvisorID = JSON.parse(res._body);
        }
    }

    SwitchApproval() {
        this._ShowApprovalExpiryDate = false;
        if (this._AddLoanApplicationDetails.IsPreApproval == false) {
            this._ShowApprovalExpiryDate = !this._ShowApprovalExpiryDate;
        }
    }

    SwitchShifted() {
        this._ShowShiftedDuration = false;
        if (this._AddLoanApplicationDetails.IsShifted == false) {
            this._ShowShiftedDuration = !this._ShowShiftedDuration;
        }


    }

    SwitchCostOfProperty() {
        this._ShowCostOfProperty = false;
        if (this._AddLoanApplicationDetails.IsPropertyDecided == false)
            this._ShowCostOfProperty = !this._ShowCostOfProperty;
    }

    formatvalues() {
        if (this._AddLoanApplicationDetails.IsAnyGuarantor.toString() == "1") {
           this._AddLoanApplicationDetails.IsAnyGuarantor= true;
        }
        else {
            this._AddLoanApplicationDetails.IsAnyGuarantor = false;
        }

        if (this._AddLoanApplicationDetails.IsApplicationApproved.toString() == "1") {
            this._AddLoanApplicationDetails.IsApplicationApproved = true;
        }
        else {
            this._AddLoanApplicationDetails.IsApplicationApproved = false;
        }

        if (this._AddLoanApplicationDetails.IsPreApproval.toString() == "1") {
            this._AddLoanApplicationDetails.IsPreApproval = true;
        }
        else {
            this._AddLoanApplicationDetails.IsPreApproval = false;
        }

        if (this._AddLoanApplicationDetails.IsPropertyDecided.toString() == "1") {
            this._AddLoanApplicationDetails.IsPropertyDecided = true;
        }
        else {
            this._AddLoanApplicationDetails.IsPropertyDecided = false;
        }

        if (this._AddLoanApplicationDetails.IsShifted.toString() == "1") {
            this._AddLoanApplicationDetails.IsShifted = true;
        }
        else {
            this._AddLoanApplicationDetails.IsShifted = false;
        }
    }

    updateDiv(event) {
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

    CancelEditingDetails() {
        this.router.navigateByUrl('loanapplications');
    }
}


