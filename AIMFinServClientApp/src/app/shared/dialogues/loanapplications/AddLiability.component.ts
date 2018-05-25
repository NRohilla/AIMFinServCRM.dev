import { Component, Inject, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClientsService } from '../../../services/app.clients.service';
import { MastersService } from '../../../services/app.masters.service';
import { AppBaseComponent } from '../../app.basecomponent';

@Component({
    selector: `add-liability-component`,
    templateUrl: './AddLiability.component.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class AddLiabilityComponent implements OnInit {

    @ViewChild("AddLiabilityform")
    AddLiabilityform: NgForm;

    errorMessage: "No Data"
    public _ViewDetails: boolean = false;
    public gridData=[];
    public _ObjApplicantNames = [];
    public _objLiabilityTypeID = [];
    public _AddLiability: boolean = true;
    public _EditViewDetails: boolean = false;
    public LoanApplicationNo: string = '';
    public _ValidationClass: boolean = false;

    public _LiabilityDetailsObj = {
        AutoID: '',
        LiabilityID: '',
        LiabilityTypeID: '',
        LoanApplicationNo:'',
        ApplicantID: '',
        Description: '',
        FirstName: '',
        NetValue: '',
        Ownership: '',
        LiabilityType: '',
        _ApplicationID: {},
        _LiabilityID: {}
    }

    constructor(
        public dialogRef: MatDialogRef<AddLiabilityComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, )
        {  }

    ngOnInit() {
        debugger;
        if (this._LocalStorageService.get("LoanApplicationNo") != undefined) {
            this.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNo");
            this.GetApplicantNames(this.LoanApplicationNo);
        }
        this._ClientsService.GetAddedLiabilityGrid(this.LoanApplicationNo).subscribe(res => this.GetAddedLiabilityGridSuccess(res), res => this.GetAddedLiabilityGridError(res));
        this.GetLiabilityTypes();
    }

    //Start- Grid Liability
    GetAddedLiabilityGrid()
    {
        this._ClientsService.GetAddedLiabilityGrid(this.LoanApplicationNo).subscribe(res => this.GetAddedLiabilityGridSuccess(res), res => this.GetAddedLiabilityGridError(res));
    }
    GetAddedLiabilityGridSuccess(res)
    {
        this.gridData = JSON.parse(res._body);
        //this.AddLiabilityform.reset();
    }
    GetAddedLiabilityGridError(res) { }
    //End - Liability Grid

    //Start - Add Liability
    AddLiability()
    {
            this._ClientsService.AddLiability(this._LiabilityDetailsObj).subscribe(res => this.AddLiabilitySuccess(res), res => this.AddLiabilityError(res));
    }
    AddLiabilitySuccess(res)
    {
        this._LiabilityDetailsObj = JSON.parse(res._body);
        this._LiabilityDetailsObj = {
            AutoID: '',
            LiabilityID: '',
            LiabilityTypeID: '',
            LoanApplicationNo:'',
            ApplicantID: '',
            Description: '',
            FirstName: '',
            NetValue: '',
            Ownership: '',
            LiabilityType: '',
            _ApplicationID: {},
            _LiabilityID: {}
        }
        this.GetAddedLiabilityGrid();
        this._ValidationClass = true;
    }
    AddLiabilityError(res) { }
    // End - Liability

    //Start- View Details 
    ViewDetails(LiabilityID) {
        this._ViewDetails = true;
        this._AddLiability = false;
        this._EditViewDetails = false;
       // this._LocalStorageService.set("LiabilityIDNoViewed", LiabilityID);
        this._ClientsService.GetLiabilityDetails(LiabilityID).subscribe(res => this.ViewDetailsSuccess(res), res => this.ViewDetailsError(res));
    }
    ViewDetailsSuccess(res) {
        this._LiabilityDetailsObj = JSON.parse(res._body);
    }
    ViewDetailsError(res) { }
    //End - View Details

    // Start - Update Details
    EditDetails() {
        this._ViewDetails = false;
        this._EditViewDetails = true;
    }
    UpdateLiabilityDetails() {
        this._ClientsService.UpdateLiabilityDetails(this._LiabilityDetailsObj).subscribe(res => this.UpdateLiabilityDetailsSuccess(res), res => this.UpdateLiabilityDetailsError(res));
    }
    UpdateLiabilityDetailsSuccess(res) {
        this._AddLiability = true;
        this.AddLiabilityform.reset();
        this._EditViewDetails = false;
        this._ViewDetails = false;
        this.GetAddedLiabilityGrid();
    }
    UpdateLiabilityDetailsError(res) { }
    //End - Update Details

    GetApplicantNames(LoanApplicationNo) {
        debugger;
        this._MasterService.GetApplicantNames(this.LoanApplicationNo).subscribe(res => this.GetApplicantNamesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetApplicantNamesSuccess(res) {
        debugger;
        this._ObjApplicantNames = JSON.parse(res._body);
    }
    GetLiabilityTypes() {
        this._MasterService.GetLiabilityTypes().subscribe(res => this.GetLiabilityTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLiabilityTypesSuccess(res) {
        this._objLiabilityTypeID = JSON.parse(res._body);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
