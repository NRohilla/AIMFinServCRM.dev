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
    public _ObjApplicationID = [];
    public _objLiabilityTypeID = [];
    public _AddLiability: boolean = true;
    public _EditViewDetails: boolean = false;

    public _LiabilityDetailsObj = {
        AutoID: '',
        LiabilityID: '',
        LiabilityTypeID: '',
        ApplicantID: '',
        Description: '',
        NetValue: '',
        Ownership: '',
        _ApplicationID: {
            ApplicantID: '',
            _ApplicantTypeMasterID: {
                ApplicantType: ''
            }
        },
        _LiabilityID: {
            LiabilityTypeID	: '',
            LiabilityType: ''
        }
    }

    constructor(
        public dialogRef: MatDialogRef<AddLiabilityComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, )
        {  }

    ngOnInit() {
        this.GetApplicantTypes();
        this.GetLiabilityTypes();
        this._ClientsService.GetAddedLiabilityGrid().subscribe(res => this.GetAddedLiabilityGridSuccess(res), res => this.GetAddedLiabilityGridError(res));
    }

    AddLiability() {
        if (this._LocalStorageService.get("ApplicantID") != undefined) {
            this._LiabilityDetailsObj.ApplicantID = this._LocalStorageService.get("ApplicantID");
            this._ClientsService.AddLiability(this._LiabilityDetailsObj).subscribe(res => this.AddLiabilitySuccess(res), res => this.AddLiabilityError(res));
        }
    }
    AddLiabilitySuccess(res) {
        this._LiabilityDetailsObj = JSON.parse(res._body);
        this.GetAddedLiabilityGrid();
        this._LiabilityDetailsObj = {
            AutoID: '',
            LiabilityID: '',
            LiabilityTypeID: '',
            ApplicantID: '',
            Description: '',
            NetValue: '',
            Ownership: '',
            _ApplicationID: {
                ApplicantID: '',
                _ApplicantTypeMasterID: {
                    ApplicantType: ''
                }
            },
            _LiabilityID: {
                LiabilityTypeID: '',
                LiabilityType: ''
            }
        }
    }
    AddLiabilityError(res) { }

    GetAddedLiabilityGrid() {
        this._ClientsService.GetAddedLiabilityGrid().subscribe(res => this.GetAddedLiabilityGridSuccess(res), res => this.GetAddedLiabilityGridError(res));
    }
    GetAddedLiabilityGridSuccess(res) {
        this.gridData = JSON.parse(res._body);
        this.AddLiabilityform.reset();
    }
    GetAddedLiabilityGridError(res) { }

    GetApplicantTypes() {
        this._MasterService.GetApplicantTypes().subscribe(res => this.GetApplicantTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetApplicantTypesSuccess(res) {
        this._ObjApplicationID = JSON.parse(res._body);
    }

    GetLiabilityTypes() {
        this._MasterService.GetLiabilityTypes().subscribe(res => this.GetLiabilityTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetLiabilityTypesSuccess(res) {
        this._objLiabilityTypeID = JSON.parse(res._body);
    }

    ViewDetails(LiabilityID) {
        this._ViewDetails = true;
        this._AddLiability = false;
        this._EditViewDetails = false;
        this._LocalStorageService.set("LiabilityIDNoViewed", LiabilityID);
        this._ClientsService.GetLiabilityDetails(LiabilityID).subscribe(res => this.ViewDetailsSuccess(res), res => this.ViewDetailsError(res));
    }
    ViewDetailsSuccess(res) {
        this._LiabilityDetailsObj = JSON.parse(res._body);
    }
    ViewDetailsError(res) { }

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

    EditDetails() {
        this._ViewDetails = false;
        this._EditViewDetails = true;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }



}
