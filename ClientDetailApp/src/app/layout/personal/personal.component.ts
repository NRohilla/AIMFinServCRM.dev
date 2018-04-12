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

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
    templateUrl: './personal.component.html',
    styleUrls:
    [
        './personal.component.css',
    ],
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class PersonalComponent implements OnInit {
    public animal: string;
    public name: string;
    public _EditPersonalDetails: boolean = false;
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public gridData: any[];

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog) { }

    ngOnInit() {
        this._ClientsService.GetAllClients().subscribe(res => this.GetAllClientsSuccess(res), res => this.GetAllClientsError(res));
    }

    GetAllClientsSuccess(Res) {
        this.gridData = JSON.parse(Res._body);
    }

    GetAllClientsError(Res) { }

    ViewClientDetails(ApplicantID) {

        this._ViewApplicantDetails = !this._ViewApplicantDetails;
        this._LocalStorageService.set("ApplicantID", ApplicantID);
    }
   

    EditPersonalDetails() {
        this._EditPersonalDetails = true;
    }

    CancelEditingPersonalDetails() {
        this._EditPersonalDetails = false;
    }
}