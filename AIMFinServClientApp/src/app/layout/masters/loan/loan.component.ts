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
    public _Operationtitle: string = "Add";
    public _LoanTypes: {
        ID: "",
        LoanType: "",
        IsActive: ""
    };

    public _LoanObj: {
        ID: "",
        LoanType: "",
        IsActive: ""
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetLoanTypes().subscribe(res => this.GetLoanSuccess(res), res => this.GetLoanError(res));
        this._LoanObj = {
            ID: "",
            LoanType: "",
            IsActive: ""
        };
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
    SwitchLoanSuccess(res) { this._MastersService.GetLoanTypes().subscribe(res => this.GetLoanSuccess(res), res => this.GetLoanError(res)); }
    SwitchLoanError(res) { }

    GridSelectionChange(data, event) {
        debugger;
        //this._LoanObj = data.data.data[selection.index];
        Object.assign(this._LoanObj, this._LoanTypes[event.index]);
        this._Operationtitle = "Update";
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
        this._Operationtitle = "Add";
        this._LoanObj = {
            ID: "",
            LoanType: "",
            IsActive: ""
        };
    }

    AddLoanType() {
        debugger;
        this._MastersService.AddLoanEntity(this._LoanObj).subscribe(res => this.AddLoanSuccess(res), res => this.AddLoanError(res));
    }
    AddLoanSuccess(res) {
        this._MastersService.GetLoanTypes().subscribe(res => this.GetLoanSuccess(res), res => this.GetLoanError(res));
        this.CancelLoanType();
    }
    AddLoanError(res) { }
}
