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
    public _ViewApplicationDetails: boolean = false;
    public gridData: any[];
    public _EditDetails: boolean = false;
    public _LoanApplicationDetails: {
    };
    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog) { }

    ngOnInit() {
        this._ClientsService.GetAllLoanApplications().subscribe(res => this.GetAllLoanApplicationSuccess(res), res => this.GetAllLoanApplicationError(res));
    }

    GetAllLoanApplicationSuccess(Res) {
        debugger;
        this.gridData = JSON.parse(Res._body);
    }

    GetAllLoanApplicationError(Res) { }

    ViewDetails(LoanApplicationNo) {
        this._ViewApplicationDetails = !this._ViewApplicationDetails;
        this._ClientsService.GetLoanApplicationDetails(LoanApplicationNo).subscribe(res => this.GetAllLoanApplicationDetailSuccess(res), res => this.GetAllLoanApplicationDetailError(res));
    }

    GetAllLoanApplicationDetailSuccess(res) {
        debugger;
        this._LoanApplicationDetails = JSON.parse(res._body);
    }

    GetAllLoanApplicationDetailError(res) { }

    openDialog(): void {
        let dialogRef = this.dialog.open(LoanApplicationDetailDialog, {
            //data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.animal = result;
        });
    }

    UpdateDetails() { }

    CancelEditingDetails() { this._EditDetails = false; }

    EditDetails() { this._EditDetails = true; }
}