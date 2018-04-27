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
    templateUrl: './purposeofloan.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class PurposeofloanComponent implements OnInit {
    public _PurposeofloanTypes: {
        ID: "",
        PurposeOfLoan: "",
        IsActive: ""
    };

    public _PurposeofloanObj: {
        ID: "",
        PurposeOfLoan: "",
        IsActive: ""
    };
    public _Operationtitle: string = "Add";

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetPurposeofloanTypes().subscribe(res => this.GetPurposeofloanSuccess(res), res => this.GetPurposeofloanError(res));
        this._PurposeofloanObj = {
            ID: "",
            PurposeOfLoan: "",
            IsActive: ""
        };
    }
    GetPurposeofloanSuccess(res) {
        debugger;
        this._PurposeofloanTypes = JSON.parse(res._body);

    }
    GetPurposeofloanError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchPurposeofloanEntityStatus(ID).subscribe(res => this.SwitchPurposeofloanSuccess(res), res => this.SwitchPurposeofloanError(res));
    }
    SwitchPurposeofloanSuccess(res) { this._MastersService.GetPurposeofloanTypes().subscribe(res => this.GetPurposeofloanSuccess(res), res => this.GetPurposeofloanError(res)); }
    SwitchPurposeofloanError(res) { }

    GridSelectionChange(data, selection) {
        debugger;
        this._PurposeofloanObj = data.data.data[selection.index];
        this._Operationtitle = "Update";
    }

    UpdatePurposeofloanType() {
        this._MastersService.UpdatePurposeofloanEntity(this._PurposeofloanObj).subscribe(res => this.UpdatePurposeofloanSuccess(res), res => this.UpdatePurposeofloanError(res));
    }

    UpdatePurposeofloanSuccess(res) {
        this._MastersService.GetPurposeofloanTypes().subscribe(res => this.GetPurposeofloanSuccess(res), res => this.GetPurposeofloanError(res));
        this.CancelPurposeofloanType();
    }
    UpdatePurposeofloanError(res) { }


    CancelPurposeofloanType() {
        debugger;
        this._Operationtitle = "Add";
        this._PurposeofloanObj = {
            ID: "",
            PurposeOfLoan: "",
            IsActive: ""
        };
    }

    AddPurposeofloanType() {
        debugger;
        this._MastersService.AddPurposeofloanEntity(this._PurposeofloanObj).subscribe(res => this.AddPurposeofloanSuccess(res), res => this.AddPurposeofloanError(res));
    }
    AddPurposeofloanSuccess(res) {
        this._MastersService.GetPurposeofloanTypes().subscribe(res => this.GetPurposeofloanSuccess(res), res => this.GetPurposeofloanError(res));
        this.CancelPurposeofloanType();
    }
    AddPurposeofloanError(res) { }
}