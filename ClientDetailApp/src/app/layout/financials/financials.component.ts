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

@Component({
    templateUrl: './financials.component.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class FinancialsComponent implements OnInit {
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

    
    UpdateDetails() { }

    CancelEditingDetails() { this._EditDetails = false; }

    EditDetails() { this._EditDetails = true; }
    displayedColumns = ['applicaontName', 'assetType', 'details', 'netValue', 'ownership', 'viewDetails'];
    dataSource = ELEMENT_DATA;
  }
  
  export interface Element {
    applicaontName: string;
    assetType: string;
    details: string;
    netValue: string;
    ownership: string;
    viewDetails: string;
    }
  const ELEMENT_DATA: Element[] = [
    { applicaontName: 'Deepak Saini', assetType: 'Residential Property', details: 'Credit Details', netValue: '458587', ownership: 'Deepak', viewDetails: ''},
    { applicaontName: 'Arvind Kumar', assetType: 'Residential Property', details:'Credit Details', netValue:'987899', ownership:'Arvind', viewDetails:''},
    
  ];