import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {MastersService} from '../../../services/app.masters.service';

@Component({
    templateUrl: './loan.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class LoanComponent implements OnInit {
    public _LoanTypes: {
        LoanWithApplicant: '',
        ID: '',
        IsActive: '',
    };

    public _LoanObj: {
        LoanWithApplicant: '',
        ID: '',
        IsActive: '',
    };

    public _EditLoanDetails: boolean = false;

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetLoanTypes().subscribe(res => this.GetLoanSuccess(res), res => this.GetLoanError(res));
    }
    GetLoanSuccess(res) {
        debugger;
        this._LoanTypes = JSON.parse(res._body);
        
    }
    GetLoanError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchLoanEntityStatus(ID).subscribe(res => this.SwitchLoanSuccess(res), res => this.SwitchLoanError(res));
    }
    SwitchLoanSuccess(res) { this._MastersService.GetLoanTypes().subscribe(res => this.GetLoanSuccess(res), res => this.GetLoanError(res));}
    SwitchLoanError(res) { }

    GridSelectionChange(data, selection) {
        debugger;
        this._LoanObj = data.data.data[selection.index];
        this._EditLoanDetails = true;
    }

    UpdateLoanType() {
        this._MastersService.UpdateLoanEntity(this._LoanObj).subscribe(res => this.UpdateLoanSuccess(res), res => this.UpdateLoanError(res));
    }

    UpdateLoanSuccess(res) {
        this._MastersService.GetLoanTypes().subscribe(res => this.GetLoanSuccess(res), res => this.GetLoanError(res));
        this.CancelLoanType();
    }
    UpdateLoanError(res) { }


    CancelLoanType() {
        debugger;
        this._EditLoanDetails = false;
        this._LoanObj = {
            LoanWithApplicant: '',
            ID: '',
            IsActive: '',
        };
    }
}