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
    selector: `add-asset-component`,
    templateUrl: './AddAsset.component.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class AddAssetComponent extends AppBaseComponent implements OnInit{ 

    @ViewChild("AddAssetform")
    AddAssetform: NgForm;

    errorMessage: "No Data"
    public _ViewDetails: boolean = false;
    public gridData: any[];
    public _ObjApplicantNames = [];
    public _objAssetTypeID = [];
    public _AddAsset: boolean = true;
    public _EditViewDetails: boolean = false;
    public LoanApplicationNo: string='';
    public _AssetDetailsObj = {
        AutoID: '',
        AssetID: '',
        AssetTypeID: '',
        ApplicantID: '', 
        Description: '',
        FirstName:'',
        NetValue: '',
        Ownership: '',
        LoanApplicationNo: '',
        AssetType: '',
        _ApplicationID: {},
        _AssetTypeID: {}
    }

    constructor(
        public dialogRef: MatDialogRef<AddAssetComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, ) { super();}

    ngOnInit() {
        debugger;
        if (this._LocalStorageService.get("LoanApplicationNoViewed") != undefined) {
            this.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNoViewed");
            this.GetApplicantNames(this.LoanApplicationNo);
            this._ClientsService.GetAddedAssetGrid(this.LoanApplicationNo).subscribe(res => this.GetAddedAssetGridSuccess(res), res => this.GetAddedAssetGridError(res));
        }
        this.GetAssetTypes();
    }

    AddAsset() {
        if (this._LocalStorageService.get("ApplicantID") != undefined) {
            this._AssetDetailsObj.ApplicantID = this._LocalStorageService.get("ApplicantID");
            this._ClientsService.AddAsset(this._AssetDetailsObj).subscribe(res => this.AddAssetSuccess(res), res => this.AddAssetError(res));
        }
    }
    AddAssetSuccess(res) {
        this._AssetDetailsObj = JSON.parse(res._body);
        this.GetAddedAssetGrid();
        this._AssetDetailsObj = {
            AutoID: '',
            AssetID: '',
            AssetTypeID: '',
            ApplicantID: '',
            Description: '',
            FirstName: '',
            NetValue: '',
            Ownership: '',
            LoanApplicationNo: '',
            AssetType:'',
            _ApplicationID: {},
            _AssetTypeID: {}
        }
    }
    AddAssetError(res) { }

    GetAddedAssetGrid() {
        if (this._LocalStorageService.get("LoanApplicationNoViewed") != undefined) {
            this._AssetDetailsObj.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNoViewed");
            this._ClientsService.GetAddedAssetGrid(this.LoanApplicationNo).subscribe(res => this.GetAddedAssetGridSuccess(res), res => this.GetAddedAssetGridError(res));
        }
    }
    GetAddedAssetGridSuccess(res) {
        this.gridData = JSON.parse(res._body);
        this.AddAssetform.reset();
    }
    GetAddedAssetGridError(res) { }

    GetApplicantNames(LoanApplicationNo) {
        debugger;
        this._MasterService.GetApplicantNames(this.LoanApplicationNo).subscribe(res => this.GetApplicantNamesSuccess(res), error => this.errorMessage = <any>error);
        
    }
    GetApplicantNamesSuccess(res) {
        this._ObjApplicantNames = JSON.parse(res._body);
    }
 
    GetAssetTypes() {
        this._MasterService.GetAssetsTypes().subscribe(res => this.GetAssetsTypeSuccess(res), error => this.errorMessage = <any>error);
    }
    GetAssetsTypeSuccess(res) {
        this._objAssetTypeID = JSON.parse(res._body);
    }

    ViewDetails(ApplicantID) {
        this._ViewDetails = true;
        this._AddAsset = false;
        this._EditViewDetails = false;
        this._LocalStorageService.set("ApplicantID", ApplicantID);
        this._ClientsService.GetAssetDetails(ApplicantID).subscribe(res => this.ViewDetailsSuccess(res), res => this.ViewDetailsError(res));
    }
    ViewDetailsSuccess(res) {
        this._AssetDetailsObj = JSON.parse(res._body);
    }
    ViewDetailsError(res) { }

    UpdateAssetDetails() {
        debugger;
        this._ClientsService.UpdateAssetDetails(this._AssetDetailsObj).subscribe(res => this.UpdateAssetDetailsSuccess(res), res => this.UpdateAssetDetailsError(res));
    }
    UpdateAssetDetailsSuccess(res) {
        this._AddAsset = true;
        this.AddAssetform.reset();
        this._EditViewDetails = false;
        this._ViewDetails = false;
        this.GetAddedAssetGrid();
    }
    UpdateAssetDetailsError(res) { }

    EditDetails() {
        this._ViewDetails = false;
        this._EditViewDetails = true;
    }
 
    onNoClick(): void {
        this.dialogRef.close();
    }



}
