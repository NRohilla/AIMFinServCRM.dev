import { Component, Inject, ViewChild, Output, Input, AfterViewChecked, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ClientsService } from '../../../services/app.clients.service';
import { MastersService } from '../../../services/app.masters.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { EventEmitter } from 'events';

@Component({
    templateUrl: './communicationDeleteDialog.html',
    providers: [ClientsService, MastersService]
})
export class CommunicationDeleteDialog {

    public _EditcommunicationDetails: boolean = false;
    public _ComId: string = '';
    public _successMessage: boolean = false;
    public _Sure: boolean = false;

    public yesClicked: boolean = true;
  
    constructor(
        public dialogRef: MatDialogRef<CommunicationDeleteDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, private _LocalStorageService: LocalStorageService, private _MasterService: MastersService, private _ClientsService: ClientsService, public dialog: MatDialog, private _location: Location) {
        this._EditcommunicationDetails = data.isEdit;
        debugger;
        this._ComId = data.CommunicationID;
    }

    deleteAddress() {
        debugger;
        this._ClientsService.DeleteCommAddress(this._ComId).subscribe(res => this.DeleteCommAddressSuccess(res), res => this.DeleteCommAddressError(res));
    }

    DeleteCommAddressSuccess(res) {
        debugger;
        this._successMessage = true;
        setTimeout(() => {
            debugger;            
            this.onNoClick();
        }, 2000);
    }
   
    DeleteCommAddressError(res) { }

    onNoClick(): void {
        this.dialogRef.close(true);
    }
 
}

