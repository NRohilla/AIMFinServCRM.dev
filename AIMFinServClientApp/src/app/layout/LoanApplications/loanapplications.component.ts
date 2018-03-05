import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {ClientsService} from '../../services/app.clients.service';
import {LoanApplicationDetailDialog} from '../../shared/dialogues/loanapplications/LoanApplicationDetailDialog';
@Component({
    templateUrl: './loanapplications.component.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class LoanapplicationsComponent implements OnInit {
    public animal: string;
    public name: string;

    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public gridData: any[];
    public _EditPersonalDetails: boolean = false;
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

    openDialog(): void {
        let dialogRef = this.dialog.open(LoanApplicationDetailDialog, {
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

}