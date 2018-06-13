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
    templateUrl: './liability.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class LiabilityComponent implements OnInit {
    public _Operationtitle: string = "Add";
    public _LiabilityTypes: {
        AutoID: "",
        Description: "",
        IsActive: "",
        LiabilityTypeID: ""

    };

    public _LiabilityObj: {
        AutoID: "",
        Description: "",
        IsActive: "",
        LiabilityTypeID: ""
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetLiabilityTypes().subscribe(res => this.GetLiabilitySuccess(res), res => this.GetLiabilityError(res));
        this._LiabilityObj = {
            AutoID: "",
            Description: "",
            IsActive: "",
            LiabilityTypeID: ""
        };
    }
    GetLiabilitySuccess(res) {
        debugger;
        this._LiabilityTypes = JSON.parse(res._body);
    }
    GetLiabilityError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchLiabilityEntityStatus(ID).subscribe(res => this.SwitchLiabilitySuccess(res), res => this.SwitchLiabilityError(res));
    }
    SwitchLiabilitySuccess(res) { this._MastersService.GetLiabilityTypes().subscribe(res => this.GetLiabilitySuccess(res), res => this.GetLiabilityError(res)); }
    SwitchLiabilityError(res) { }

    GridSelectionChange(data, event) {
        this._Operationtitle = "Update";
       // this._LiabilityObj = data.data.data[selection.index]
        Object.assign(this._LiabilityObj, this._LiabilityTypes[event.index]);
    }

    UpdateLiabilityType() {
        debugger;
        this._MastersService.UpdateLiabilityEntity(this._LiabilityObj).subscribe(res => this.UpdateLiabilitySuccess(res), res => this.UpdateLiabilityError(res));
    }

    UpdateLiabilitySuccess(res) {
        this._MastersService.GetLiabilityTypes().subscribe(res => this.GetLiabilitySuccess(res), res => this.GetLiabilityError(res));
        this.CancelLiabilityType();
    }
    UpdateLiabilityError(res) { }
    CancelLiabilityType() {
        debugger;
        this._Operationtitle = "Add";
        this._LiabilityObj = {
            AutoID: "",
            Description: "",
            IsActive: "",
            LiabilityTypeID: ""
        };
    }

    AddLiabilityType() {
        debugger;
        this._MastersService.AddLiabilityEntity(this._LiabilityObj).subscribe(res => this.AddLiabilitySuccess(res), res => this.AddLiabilityError(res));
    }
    AddLiabilitySuccess(res) {
        this._MastersService.GetLiabilityTypes().subscribe(res => this.GetLiabilitySuccess(res), res => this.GetLiabilityError(res));
        this.CancelLiabilityType();
    }
    AddLiabilityError(res) { }
}
