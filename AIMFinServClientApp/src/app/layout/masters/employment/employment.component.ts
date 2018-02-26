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
    templateUrl: './employment.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class EmploymentComponent implements OnInit {
    public _EditEmployementDetails: boolean = false;
    public _EmploymentTypes: {
        EmployementType: '',
        ID: '',
        IsActive: '',
    };

    public _EmploymentObj: {
        EmployementType: '',
        ID: '',
        IsActive: '',
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetEmploymentTypes().subscribe(res => this.GetEmploymentSuccess(res), res => this.GetEmploymentError(res));
    }
    GetEmploymentSuccess(res) {
        debugger;
        this._EmploymentTypes = JSON.parse(res._body);
    }
    GetEmploymentError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchEmploymentEntityStatus(ID).subscribe(res => this.SwitchEmploymentSuccess(res), res => this.SwitchEmploymentError(res));
    }
    SwitchEmploymentSuccess(res) { this._MastersService.GetEmploymentTypes().subscribe(res => this.GetEmploymentSuccess(res), res => this.GetEmploymentError(res)); }
    SwitchEmploymentError(res) { }

    GridSelectionChange(data, selection) {
        this._EditEmployementDetails = true;
        this._EmploymentObj = data.data.data[selection.index]
    }

    UpdateEmployementType() {
        debugger;
        this._MastersService.UpdateEmploymentEntity(this._EmploymentObj).subscribe(res => this.UpdateEmploymentSuccess(res), res => this.UpdateEmploymentError(res));
    }

    UpdateEmploymentSuccess(res) {
        this._MastersService.GetEmploymentTypes().subscribe(res => this.GetEmploymentSuccess(res), res => this.GetEmploymentError(res));
        this.CancelEmployementType();
    }
    UpdateEmploymentError(res) { }
    CancelEmployementType() {
        debugger;
        this._EditEmployementDetails = false;
        this._EmploymentObj = {
            EmployementType: '',
            ID: '',
            IsActive: '',
        };
    }
}