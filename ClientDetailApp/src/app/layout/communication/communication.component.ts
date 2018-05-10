import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClientsService } from '../../services/app.clients.service';
import { CommunicationDialog } from './communicationDialog/communicationDialog';
import { CommunicationDeleteDialog } from './communicationDialog/communicationDeleteDialog';
declare var jquery: any;
declare var $: any;

@Component({
    templateUrl: './communication.component.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class CommunicationComponent implements OnInit {
    public _EditcommunicationDetails: boolean = false;
    public ApplicantID: string = '';
    items: any;
    public data: any;

    public CommunicationDetails: any = [];

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog) { }

    ngOnInit() {

        debugger;
        this.GetAddresses();

        $(document).ready(function () {
            $(".content-section").parent().parent().parent().parent().parent().css("background", "#ffffff");
        });
    }

    GetAddresses() {
        debugger;
        this.ApplicantID = this._LocalStorageService.get("LoggedInApplicantId");
        this._ClientsService.GetAddresses(this.ApplicantID).subscribe(res => this.GetCommunicationDetailsByAppIDSuccess(res), res => this.GetCommunicationDetailsByAppIDError(res));
    }
    GetCommunicationDetailsByAppIDSuccess(res) {
        debugger;
        this.CommunicationDetails = JSON.parse(res._body);
    }
    GetCommunicationDetailsByAppIDError(res) {
    }

    UpdateDetails() {
        debugger;
        this._ClientsService.UpdateCommunicationDetailsByAppID(this.CommunicationDetails).subscribe(res => this.UpdateCommunicationDetailsByAppIDSuccess(res), res => this.UpdateCommunicationDetailsByAppIDError(res));
    }
    UpdateCommunicationDetailsByAppIDSuccess(res) {
        debugger;
        this._EditcommunicationDetails = false;
        this._ClientsService.GetCommunicationDetailsByAppID(this.ApplicantID).subscribe(res => this.GetCommunicationDetailsByAppIDSuccess(res), res => this.GetCommunicationDetailsByAppIDError(res));

    }
    openDialog(ComId, data): void {
        debugger;
        if (data != undefined) {
            this.EditcommunicationDetails();
            var dialogRef = this.dialog.open(CommunicationDialog, { data: { CommunicationID: ComId, isEdit: data } });
        }
        else {
            dialogRef = this.dialog.open(CommunicationDialog, { data: { CommunicationID: ComId, isEdit: data } });
        }

        dialogRef.afterClosed().subscribe(result => {
            debugger;
            setTimeout(() => {
                this.GetAddresses();
            }, 1000);
            console.log('The dialog was closed');
        });
    }


    deleteDialog(ComId, data): void {
        if (data != undefined) {
            var dialogRef = this.dialog.open(CommunicationDeleteDialog, { data: { CommunicationID: ComId, isEdit: data } });
        }
        else {
            dialogRef = this.dialog.open(CommunicationDeleteDialog, { data: { CommunicationID: ComId, isEdit: data } });
        }

        dialogRef.afterClosed().subscribe(result => {
            setTimeout(() => {
                debugger;
                this.GetAddresses();
            }, 1000);
            console.log('The dialog was closed');
        });
    }
    UpdateCommunicationDetailsByAppIDError(res) { }

    DeleteComAdress(CommunicationID) {
        debugger;
        this._ClientsService.DeleteCommAddress(CommunicationID).subscribe(res => this.DeleteCommAddressSuccess(res), res => this.DeleteCommAddressError(res));
    }

    DeleteCommAddressSuccess(res) {
        debugger;
        alert("Record deleted");
        this.GetAddresses();
    }

    DeleteCommAddressError(res) { }

    CancelEditingDetails() { this._EditcommunicationDetails = false; }

    EditcommunicationDetails() { this._EditcommunicationDetails = true; }
}
