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
    public _EditLiabilityDetails: boolean = false;
    public _LiabilityTypes: {
        LiabilityType: '',
        ID: '',
        IsActive: '',
    };

    public _LiabilityObj: {
        LiabilityType: '',
        ID: '',
        IsActive: '',
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetLiabilityTypes().subscribe(res => this.GetLiabilitySuccess(res), res => this.GetLiabilityError(res));
    }
    GetLiabilitySuccess(res) {
        this._LiabilityTypes = JSON.parse(res._body);
    }
    GetLiabilityError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchLiabilityEntityStatus(ID).subscribe(res => this.SwitchLiabilitySuccess(res), res => this.SwitchLiabilityError(res));
    }
    SwitchLiabilitySuccess(res) { this._MastersService.GetLiabilityTypes().subscribe(res => this.GetLiabilitySuccess(res), res => this.GetLiabilityError(res)); }
    SwitchLiabilityError(res) { }

    GridSelectionChange(data, selection) {
        this._EditLiabilityDetails = true;
        this._LiabilityObj = data.data.data[selection.index]
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
        this._EditLiabilityDetails = false;
        this._LiabilityObj = {
            LiabilityType: '',
            ID: '',
            IsActive: '',
        };
    }
}