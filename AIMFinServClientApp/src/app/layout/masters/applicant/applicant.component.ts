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
    public _ApplicantTypes: {
        ApplicantType: "",
        ApplicantTypeID: "",
        IsActive: ""
    };

    public _ApplicantObj: {
        ApplicantType: "",
        ApplicantTypeID: "",
        IsActive: ""
    };

    public _EditApplicantDetails: boolean = false;

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res));
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

    GridSelectionChange(data, selection) {
        debugger;
        this._ApplicantObj = data.data.data[selection.index];
        this._EditApplicantDetails = true;
    }

    UpdateApplicantType() {
        this._MastersService.UpdateApplicantEntity(this._ApplicantObj).subscribe(res => this.UpdateApplicantSuccess(res), res => this.UpdateApplicantError(res));
    }

    UpdateApplicantSuccess(res) {
        this._MastersService.GetApplicantTypes().subscribe(res => this.GetApplicantSuccess(res), res => this.GetApplicantError(res));
        this.CancelApplicantType();
    }
    UpdateApplicantError(res) { }


    CancelApplicantType() {
        debugger;
        this._EditApplicantDetails = false;
        this._ApplicantObj = {
            ApplicantWithApplicant: '',
            ID: '',
            IsActive: '',
        };
    }
}