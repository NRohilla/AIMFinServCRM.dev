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
    templateUrl: './applicant.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class ApplicantComponent implements OnInit {

    public _Operationtitle: string = "Add";
    public _ApplicantObj: {
        ApplicantType: "",
        ApplicantTypeID: "",
        IsActive: ""
    };
    public _ApplicantTypes: {
        ApplicantType: "",
        ApplicantTypeID: "",
        IsActive: ""
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) {
        this._ApplicantObj = {
            ApplicantType: "",
            ApplicantTypeID: "",
            IsActive: ""
        };
    }

    ngOnInit() {
        this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res));
        this._ApplicantTypes = {
            ApplicantType: "",
            ApplicantTypeID: "",
            IsActive: ""
        };
    }
    GetApplicantSuccess(res) {
        debugger;
        this._ApplicantTypes = JSON.parse(res._body);

    }
    GetApplicantError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchApplicantEntityStatus(ID).subscribe(res => this.SwitchApplicantSuccess(res), res => this.SwitchApplicantError(res));
    }
    SwitchApplicantSuccess(res) { this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res)); }
    SwitchApplicantError(res) { }

    UpdateApplicantType() {
        this._MastersService.UpdateApplicantEntity(this._ApplicantObj).subscribe(res => this.UpdateApplicantSuccess(res), res => this.UpdateApplicantError(res));
    }
    UpdateApplicantSuccess(res) {
        this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res));
        this.CancelApplicantType();
    }
    UpdateApplicantError(res) { }

    GridSelectionChange(data, selection) {
        debugger;
        this._Operationtitle = "Update";
        this._ApplicantObj = data.data.data[selection.index];
    }
    CancelApplicantType() {
        debugger;
        this._Operationtitle = "Add";
        this._ApplicantObj = {
            ApplicantType: "",
            ApplicantTypeID: "",
            IsActive: ""
        };
    }

    AddApplicantType() {
        debugger;
        this._MastersService.AddApplicantEntity(this._ApplicantObj).subscribe(res => this.AddApplicantSuccess(res), res => this.AddApplicantError(res));
    }
    AddApplicantSuccess(res) {
        this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res));
        this.CancelApplicantType();
    }
    AddApplicantError(res) { }
}
