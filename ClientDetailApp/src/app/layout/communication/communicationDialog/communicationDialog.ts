import { Component, Inject, ViewChild, Output, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ClientsService } from '../../../services/app.clients.service';
import { MastersService } from '../../../services/app.masters.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { EventEmitter } from 'events';

@Component({
    templateUrl: './communicationDialog.html',
    providers: [ClientsService, MastersService]
})
export class CommunicationDialog {

    public _EditcommunicationDetails: boolean = false;
    public _ComId: string = '';
    public _AddressType = [];
    public errorMessage: string = '';
    public ApplicantID: string = '';

    @ViewChild("AddEditAddressform")
    AddEditAddressform: NgForm;

    public CommunicationDialogDetails =
    {
        AutoID: '',
        CommunicationID: '',
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        Duration: '',
        Status: '',
        Country: '',
        ZipCode: '',
        AddressType: '',
        ApplicantID: '',
        ID: 1,
        Type: '',
    }

    constructor(
        public dialogRef: MatDialogRef<CommunicationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, private _LocalStorageService: LocalStorageService, private _MasterService: MastersService, private _ClientsService: ClientsService, public dialog: MatDialog, private _location: Location) {
        this._EditcommunicationDetails = data.isEdit;
        this._ComId = data.CommunicationID;
    }

    ngOnInit() {
        this.CommunicationDialogDetails =
            {
                AutoID: '',
                CommunicationID: '',
                AddressLine1: '',
                AddressLine2: '',
                AddressLine3: '',
                Duration: '',
                Status: '',
                Country: '',
                ZipCode: '',
                AddressType: '',
                ApplicantID: '',
                ID: 1,
                Type: '',
            }
        this.GetAddressType();
        if (this._ComId !== undefined) {
            this._GetModelPopUpdata(this._ComId);
        }
    }

    _GetModelPopUpdata(_ComId) {
        this._EditcommunicationDetails = true;
        this._ClientsService.GetCommEditdata(_ComId).subscribe(res => this.GetCommEditdataSuccess(res), res => this.GetCommEditdataError(res));
    }

    AddNewAddress() {
        this.CommunicationDialogDetails.ApplicantID = this._LocalStorageService.get("LoggedInApplicantId");
        this._ClientsService.AddNewAddressByAppID(this.CommunicationDialogDetails).subscribe(res => this.AddNewAddressByAppIDSuccess(res), res => this.AddNewAddressByAppIDError(res));
    }

    AddNewAddressByAppIDSuccess(res) {
        this.CommunicationDialogDetails = JSON.parse(res._body);
        this.onNoClick();
    }

    AddNewAddressByAppIDError(res) { }

    GetAddressType() {
        this._MasterService.GetAddressTypes().subscribe(res => this.GetAddressTypesSuccess(res), error => this.errorMessage = <any>error);
    }

    GetAddressTypesSuccess(res) {
        if (JSON.parse(res._body) != null || JSON.parse(res._body) != undefined) {
            this._AddressType = JSON.parse(res._body);
        }
    }

    GetCommEditdataSuccess(res) {
        this.CommunicationDialogDetails = JSON.parse(res._body);
    }
    GetCommEditdataError(res) { }

    onNoClick(): void {
        debugger;
       // this.router.navigateByUrl('communication');
        this.dialogRef.close();
    }

    UpdateDetails() { }

    CancelEditingDetails() { }

}

