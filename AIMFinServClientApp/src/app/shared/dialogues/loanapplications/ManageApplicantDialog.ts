import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppBaseComponent } from '../../../shared/app.basecomponent';
import { ClientsService } from '../../../services/app.clients.service';
import { MastersService } from '../../../services//app.masters.service';
import { NgForm } from '@angular/forms';
@Component({
    templateUrl: './ManageApplicantDialog.component.html',
    providers: [ClientsService, MastersService]
})
export class ManageApplicantDialog {
    constructor(
        public dialogRef: MatDialogRef<ManageApplicantDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, ) { }

    public _ApplicantID = [];
    public _ShowDetails: boolean = false;
    public ApplicantID: string = '';
    public LoanApplicationNo: string = '';

    public _ManageApplicantDetails = {
        ApplicantID: '',
        Title: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        NZResidents: true,
        CountryOfBirth: '',
        EmailID: '',
        MobileNo: '',
        AutoID: '',
        WorkPhoneNo: '',
        HomePhoneNo: ''

    };

    public FormatNZResidents() {
        if (this._ManageApplicantDetails.NZResidents.toString() == "1") {
            this._ManageApplicantDetails.NZResidents = true;
        }
        else {
            this._ManageApplicantDetails.NZResidents = false;
        }
    }

    ngOnInit() {
        this._ManageApplicantDetails = {
            ApplicantID: '',
            Title: '',
            FirstName: '',
            MiddleName: '',
            LastName: '',
            Gender: '',
            DateOfBirth: '',
            NZResidents: true,
            CountryOfBirth: '',
            EmailID: '',
            MobileNo: '',
            AutoID: '',
            WorkPhoneNo:'',
            HomePhoneNo:''

        }
        if (this._LocalStorageService.get("LoanApplicationNo") != undefined) {
            debugger;
            this.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNo");
            this.GetApplicantNames(this.LoanApplicationNo);
        }
    }


    GetAllApplicants() {
        debugger;
        this._ClientsService.GetApplicantDetails(this._ManageApplicantDetails.AutoID).subscribe(res => this.GetAllApplicantsSuccess(res), res => this.GetAllApplicantsSuccessError(res));
        this._ShowDetails = !this._ShowDetails;
    }
    GetAllApplicantsSuccess(res) {
        debugger;
        this._ManageApplicantDetails = JSON.parse(res._body);
    }
    GetAllApplicantsSuccessError(res) {}


    //Drop Down for Assign Applicant 
    GetApplicantNames(LoanApplicationNo) {
        debugger;
        this._MasterService.GetApplicantNames(this.LoanApplicationNo).subscribe(res => this.GetApplicantsSuccess(res), res => this.GetApplicantsError(res));
    }
    GetApplicantsSuccess(res) {
        if (res._body != null || res._body != undefined || res._body.toString().trim().length > 0) {
            debugger;
            this._ApplicantID = JSON.parse(res._body);
        }
    }
    GetApplicantsError(res) { }
    onNoClick(): void {
        this.dialogRef.close();
        debugger;
    }

}
