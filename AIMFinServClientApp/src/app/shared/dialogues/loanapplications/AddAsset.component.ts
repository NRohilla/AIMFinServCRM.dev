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
    public _ObjApplicationID = [];
    public _objAssetTypeID = [];
    public _AddAsset: boolean = true;
    public _EditViewDetails: boolean = false;

    public _AssetDetailsObj = {
        AutoID: '',
        AssetID: '',
        AssetTypeID: '',
        ApplicantID: '', 
        Description: '',
        NetValue: '',
        Ownership: '',
        _ApplicationID: {
            ApplicantID: '',
            _ApplicantTypeMasterID: {
                ApplicantType:''
            }
        },
        _AssetTypeID: {
            AssetTypeID: '',
            AssetType:''
        }
    }

    constructor(
        public dialogRef: MatDialogRef<AddAssetComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, ) { super();}

    ngOnInit() {
        this.GetApplicantTypes();
        this.GetAssetTypes();
        this._ClientsService.GetAddedAssetGrid().subscribe(res => this.GetAddedAssetGridSuccess(res), res => this.GetAddedAssetGridError(res));
    }

    AddAsset() {
        if (this._LocalStorageService.get("ApplicantID") != undefined) {
            this._AssetDetailsObj.ApplicantID = this._LocalStorageService.get("ApplicantID");
            this._AssetDetailsObj.AssetTypeID = this._AssetDetailsObj._AssetTypeID.AssetTypeID;
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
            NetValue: '',
            Ownership: '',
            _ApplicationID: {
                ApplicantID: '',
                _ApplicantTypeMasterID: {
                    ApplicantType: ''
                }
            },
            _AssetTypeID: {
                AssetTypeID: '',
                AssetType: ''
            }
        }
    }
    AddAssetError(res) { }

    GetAddedAssetGrid() {
        this._ClientsService.GetAddedAssetGrid().subscribe(res => this.GetAddedAssetGridSuccess(res), res => this.GetAddedAssetGridError(res));
    }
    GetAddedAssetGridSuccess(res) {
        this.gridData = JSON.parse(res._body);
        this.AddAssetform.reset();
    }
    GetAddedAssetGridError(res) { }

    GetApplicantTypes() {
        this._MasterService.GetApplicantTypes().subscribe(res => this.GetApplicantTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetApplicantTypesSuccess(res) {
        this._ObjApplicationID = JSON.parse(res._body);
    }
 
    GetAssetTypes() {
        this._MasterService.GetAssetsTypes().subscribe(res => this.GetAssetsTypeSuccess(res), error => this.errorMessage = <any>error);
    }
    GetAssetsTypeSuccess(res) {
        this._objAssetTypeID = JSON.parse(res._body);
    }

    ViewDetails(AssetID) {
        this._ViewDetails = true;
        this._AddAsset = false;
        this._EditViewDetails = false;
        this._LocalStorageService.set("AssetIDNoViewed", AssetID);
        this._ClientsService.GetAssetDetails(AssetID).subscribe(res => this.ViewDetailsSuccess(res), res => this.ViewDetailsError(res));
    }
    ViewDetailsSuccess(res) {
        this._AssetDetailsObj = JSON.parse(res._body);
    }
    ViewDetailsError(res) { }

    UpdateAssetDetails() {
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
