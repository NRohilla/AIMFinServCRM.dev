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
    templateUrl: './loanrate.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class LoanrateComponent implements OnInit {
    public _LoanrateTypes: {
        ID: "",
        IsActive: "",
        LoanRateType: ""
    };

    public _LoanrateObj: {
        ID: "",
        IsActive: "",
        LoanRateType: ""
    };

    public _EditLoanrateDetails: boolean = false;

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetLoanrateTypes().subscribe(res => this.GetLoanrateSuccess(res), res => this.GetLoanrateError(res));
    }
    GetLoanrateSuccess(res) {
        debugger;
        this._LoanrateTypes = JSON.parse(res._body);

    }
    GetLoanrateError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchLoanrateEntityStatus(ID).subscribe(res => this.SwitchLoanrateSuccess(res), res => this.SwitchLoanrateError(res));
    }
    SwitchLoanrateSuccess(res) { this._MastersService.GetLoanrateTypes().subscribe(res => this.GetLoanrateSuccess(res), res => this.GetLoanrateError(res)); }
    SwitchLoanrateError(res) { }

    GridSelectionChange(data, selection) {
        debugger;
        this._LoanrateObj = data.data.data[selection.index];
        this._EditLoanrateDetails = true;
    }

    UpdateLoanrateType() {
        this._MastersService.UpdateLoanrateEntity(this._LoanrateObj).subscribe(res => this.UpdateLoanrateSuccess(res), res => this.UpdateLoanrateError(res));
    }

    UpdateLoanrateSuccess(res) {
        this._MastersService.GetLoanrateTypes().subscribe(res => this.GetLoanrateSuccess(res), res => this.GetLoanrateError(res));
        this.CancelLoanrateType();
    }
    UpdateLoanrateError(res) { }


    CancelLoanrateType() {
        debugger;
        this._EditLoanrateDetails = false;
        this._LoanrateObj = {
            LoanrateWithApplicant: '',
            ID: '',
            IsActive: '',
        };
    }
}