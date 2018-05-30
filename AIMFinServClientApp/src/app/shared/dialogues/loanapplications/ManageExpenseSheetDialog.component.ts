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

import { NgStyle } from '@angular/common';

@Component({
    templateUrl: './ManageExpenseSheetDialog.component.html',
    providers: [ClientsService, MastersService]
})
export class ManageExpenseSheetDialog {
    @ViewChild("AddExpenseform")
    AddExpenseform: NgForm;

    constructor(
        public dialogRef: MatDialogRef<ManageExpenseSheetDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, ) {
    }

    // For Ngx Table
    @ViewChild('myTable') table: any;
    groups = [];
    editing = {};
    rows = [];

    public _EditViewDetails: boolean = false;
    public _AddExpense: boolean = true;
    public _ViewDetails: boolean = false;
    public _objExpenseTypeID = [];
    public _ObjApplicantNames = [];
    errorMessage: "No Data"
    public LoanApplicationNo: string = '';
    public _ValidationClass: boolean = false;

    public _ManageExpenseSheetDetails = {
        ExpenseID: '',
        ExpenseTypeID: '',
        ExpenseType: '',
        ApplicantID: '',
        Description: '',
        Frequency: '',
        NetAmount: '',
        FirstName: '',
        _ApplicationID: {
            FirstName: ''
        }
    };

    ngOnInit() {
        debugger;
        this.GetExpenseTypes();
        if (this._LocalStorageService.get("LoanApplicationNo") != undefined)
        {
            this.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNo");
            this.GetApplicants(this.LoanApplicationNo);
        }
        this.GetAddedExpenseSheetGrid();
        this._ValidationClass = true;
    }

    // Start - To Load Expense Sheet Grid
    GetAddedExpenseSheetGrid() {
        debugger;
        this._ClientsService.GetAddedExpenseSheetGrid(this.LoanApplicationNo).subscribe(res => this.GetAddedExpenseSheetGridSuccess(res), res => this.GetAddedExpenseSheetGridError(res));
    }

    GetAddedExpenseSheetGridSuccess(res) {
        debugger;
        this.rows = JSON.parse(res._body);
    }
    GetAddedExpenseSheetGridError(res) { }
    //End -  To Load Expense Sheet Grid

    //Start - To Add Expense Sheet Data
    AddExpenseSheet() {
        debugger;
        this._ClientsService.AddExpenseSheet(this._ManageExpenseSheetDetails).subscribe(res => this.AddExpenseSheetSuccess(res), res => this.AddExpenseSheetError(res));
    }
    AddExpenseSheetSuccess(res) {
        debugger;
        this._ManageExpenseSheetDetails = JSON.parse(res._body);
        this._ClientsService.GetAddedExpenseSheetGrid(this.LoanApplicationNo).subscribe(res => this.GetAddedExpenseSheetGridSuccess(res), res => this.GetAddedExpenseSheetGridError(res));
        this._ManageExpenseSheetDetails = {
            ExpenseID: '',
            ExpenseTypeID: '',
            ExpenseType: '',
            ApplicantID: '',
            Description: '',
            Frequency: '',
            NetAmount: '',
            FirstName: '',
            _ApplicationID: {
                FirstName: ''
            }
        }
       // this.AddExpenseform.reset();
    }
    AddExpenseSheetError(res) { }
    //End - To Add Expense Sheet Data

    //Start - To view expense details
    ViewDetails(row: any) {
        debugger;
        this._ViewDetails = true;
        this._AddExpense = false;
        this._EditViewDetails = false;
        this._LocalStorageService.set("ExpenseViewed", row.ExpenseID);
        this._ClientsService.GetExpenseSheetDetails(row.ExpenseID).subscribe(res => this.ViewDetailsSuccess(res), res => this.ViewDetailsError(res));
    }
    ViewDetailsSuccess(res) {
        debugger;
        this._ManageExpenseSheetDetails = JSON.parse(res._body);
    }
    ViewDetailsError(res) { }
    //End - To view expense details

    //Start - to update expense data
    UpdateExpenseSheetDetails() {
        debugger;
        this._ClientsService.UpdateExpenseSheetDetails(this._ManageExpenseSheetDetails).subscribe(res => this.UpdateExpenseSheetDetailsSuccess(res), res => this.UpdateExpenseSheetDetailsError(res));
    }
    UpdateExpenseSheetDetailsSuccess(res) {
        debugger;
        this._AddExpense = true;
        this.AddExpenseform.reset();
        this._EditViewDetails = false;
        this._ViewDetails = false;
        this._ClientsService.GetAddedExpenseSheetGrid(this.LoanApplicationNo).subscribe(res => this.AddExpenseSheetSuccess(res), res => this.AddExpenseSheetError(res));
        this._ValidationClass = true;
    }
    UpdateExpenseSheetDetailsError(res) { }

     //End - to update expense data

    GetExpenseTypes() {
        debugger;
        this._MasterService.GetExpenseTypes().subscribe(res => this.GetExpenseTypesSuccess(res), error => this.errorMessage = <any>error);
        this._ValidationClass = true;
    }
    GetExpenseTypesSuccess(res) {
        this._objExpenseTypeID = JSON.parse(res._body);
    }

    GetApplicants(LoanApplicationNo) {
        debugger;
        this._MasterService.GetApplicantNames(this.LoanApplicationNo).subscribe(res => this.GetApplicantsNameSuccess(res), error => this.errorMessage = <any>error);
    }
    GetApplicantsNameSuccess(res) {
        this._ObjApplicantNames = JSON.parse(res._body);
        this._ValidationClass = true;
    }
    EditDetails() {
        this._ViewDetails = false;
        this._EditViewDetails = true;
    }

  
//Start - Ngx Table
    getGroupRowHeight(group, rowHeight) {
        let style = {};

        style = {
            height: (group.length * 40) + 'px',
            width: '100%'
        };

        return style;
    }

    toggleExpandGroup(group) {
        debugger;
        console.log('Toggled Expand Group!', group);
        this.table.groupHeader.toggleExpandGroup(group);
    }

    onDetailToggle(event) {
        debugger;
        console.log('Detail Toggled', event);
    }

//End - Ngx Table


    onNoClick(): void {
        this.dialogRef.close();
    }

}
