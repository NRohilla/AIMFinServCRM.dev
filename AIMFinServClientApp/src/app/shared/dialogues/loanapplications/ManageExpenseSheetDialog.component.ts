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
    templateUrl: './ManageExpenseSheetDialog.component.html',
    providers: [ClientsService, MastersService]
})
export class ManageExpenseSheetDialog {
    @ViewChild("AddExpenseform")
    AddExpenseform: NgForm;

    constructor(
        public dialogRef: MatDialogRef<ManageExpenseSheetDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, ) { }

    public gridData: any[];
    public _EditViewDetails: boolean = false;
    public _AddExpense: boolean = true;
    public _ViewDetails: boolean = false;
    public _objExpenseTypeID = [];
    public _ObjApplicantNames = [];
    errorMessage: "No Data"
    public LoanApplicationNo: string = '';

    public _ManageExpenseSheetDetails = {
        ExpenseID:'',
        ExpenseTypeID:'',
        ExpenseType:'',
      ApplicantID:'',
     Description:'',
     Frequency:'',
     NetAmount: '',
     FirstName:'',
     _ApplicationID: {
         FirstName:''
     }
    };


    ngOnInit() {
        this.GetExpenseTypes();
        this.GetApplicants();
        debugger;
        if (this._LocalStorageService.get("LoanApplicationNo") != undefined) {
            this.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNo");
            this._ClientsService.GetAddedExpenseSheetGrid(this.LoanApplicationNo).subscribe(res => this.GetAddedExpenseSheetGridSuccess(res), res => this.GetAddedExpenseSheetGridError(res));
        }
        
    }

    AddExpenseSheet() {
        debugger;
            this._ClientsService.AddExpenseSheet(this._ManageExpenseSheetDetails).subscribe(res => this.AddExpenseSheetSuccess(res), res => this.AddExpenseSheetError(res));
        
    }
    AddExpenseSheetSuccess(res) {
        debugger;
        this._ManageExpenseSheetDetails = JSON.parse(res._body);
        this._ClientsService.GetAddedExpenseSheetGrid(this.LoanApplicationNo).subscribe(res => this.GetAddedExpenseSheetGridSuccess(res), res => this.GetAddedExpenseSheetGridError(res));
    }
    AddExpenseSheetError(res) { }

    GetAddedExpenseSheetGridSuccess(res) {
        this.gridData = JSON.parse(res._body);
    }
    GetAddedExpenseSheetGridError(res) { }

    ViewDetails(ApplicantID) {
        this._ViewDetails = true;
        this._AddExpense = false;
        this._EditViewDetails = false;
        this._LocalStorageService.set("ApplicantIDNoViewed", ApplicantID);
        this._ClientsService.GetExpenseSheetDetails(ApplicantID).subscribe(res => this.ViewDetailsSuccess(res), res => this.ViewDetailsError(res));
    }
    ViewDetailsSuccess(res) {
        this._ManageExpenseSheetDetails = JSON.parse(res._body);
    }
    ViewDetailsError(res) { }

    UpdateExpenseSheetDetails() {
        this._ClientsService.UpdateExpenseSheetDetails(this._ManageExpenseSheetDetails).subscribe(res => this.UpdateExpenseSheetDetailsSuccess(res), res => this.UpdateExpenseSheetDetailsError(res));
    }
    UpdateExpenseSheetDetailsSuccess(res) {
        debugger;
        this._AddExpense = true;
        this.AddExpenseform.reset();
        this._EditViewDetails = false;
        this._ViewDetails = false;
        this._ClientsService.GetAddedExpenseSheetGrid(this.LoanApplicationNo).subscribe(res => this.AddExpenseSheetSuccess(res), res => this.AddExpenseSheetError(res));
    }
    UpdateExpenseSheetDetailsError(res) { }

    GetExpenseTypes() {
        this._MasterService.GetExpenseTypes().subscribe(res => this.GetExpenseTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetExpenseTypesSuccess(res) {
        this._objExpenseTypeID = JSON.parse(res._body);
    }

    GetApplicants() {
        this._MasterService.GetApplicants().subscribe(res => this.GetApplicantsNameSuccess(res), error => this.errorMessage = <any>error);
    }
    GetApplicantsNameSuccess(res) {
        this._ObjApplicantNames = JSON.parse(res._body);
    }
    EditDetails() {
        this._ViewDetails = false;
        this._EditViewDetails = true;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }


}
