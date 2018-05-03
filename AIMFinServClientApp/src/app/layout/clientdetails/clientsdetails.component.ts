import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {ClientsService} from '../../services/app.clients.service';
import {ClientDetailsDialog} from '../../shared/dialogues/clients/ClientDetailsDialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Location } from '@angular/common';
@Component({
    templateUrl: './clientsdetails.component.html',
    styleUrls:
    [
        './clientsdetails.component.scss',
    ],
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ClientsDetailsComponent implements OnInit {
    public animal: string;
    public name: string;
    public _EditPersonalDetails: boolean = false;
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public gridData: any[];

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog, private _location: Location) { }

    ngOnInit() {
        this._ClientsService.GetAllClients().subscribe(res => this.GetAllClientsSuccess(res), res => this.GetAllClientsError(res));
    }

    GetAllClientsSuccess(Res) {
        this.gridData = JSON.parse(Res._body);
    }

    GetAllClientsError(Res) { }

    ViewClientDetails(ApplicantID, value) {
        //this._LocalStorageService.set("ApplicantID", ApplicantID);
        this._location.back();
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(ClientDetailsDialog, {
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    EditPersonalDetails() {
        //debugger;
        this._EditPersonalDetails = true;
    }

    CancelEditingPersonalDetails() {
        this._EditPersonalDetails = false;
    }
}
