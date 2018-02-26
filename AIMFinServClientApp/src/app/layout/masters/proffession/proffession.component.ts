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
    templateUrl: './proffession.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class ProffessionComponent implements OnInit {
    public _ProfessionTypes: {
        Profession: '',
        ID: '',
        IsActive: '',
    };

    public _ProfessionObj: {
        Profession: '',
        ID: '',
        IsActive: '',
    };
    public _EditProffessionDetails: boolean = false;

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetProfessionTypes().subscribe(res => this.GetProfessionSuccess(res), res => this.GetProfessionError(res));
    }
    GetProfessionSuccess(res) {
        debugger;
        this._ProfessionTypes = JSON.parse(res._body);
    }
    GetProfessionError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchProfessionEntityStatus(ID).subscribe(res => this.SwitchProfessionSuccess(res), res => this.SwitchProfessionError(res));
    }
    SwitchProfessionSuccess(res) { this._MastersService.GetProfessionTypes().subscribe(res => this.GetProfessionSuccess(res), res => this.GetProfessionError(res)); }
    SwitchProfessionError(res) { }

    GridSelectionChange(data, selection) {
        debugger;
        this._ProfessionObj = data.data.data[selection.index];
        this._EditProffessionDetails = true;
    }

    UpdateProfessionType() {
        this._MastersService.UpdateProffessionEntity(this._ProfessionObj).subscribe(res => this.UpdateProffessionSuccess(res), res => this.UpdateProffessionError(res));
    }

    UpdateProffessionSuccess(res) {
        this._MastersService.GetProfessionTypes().subscribe(res => this.GetProfessionSuccess(res), res => this.GetProfessionError(res));
        this.CancelProfessionType();
    }
    UpdateProffessionError(res) { }

    CancelProfessionType() {
        debugger;
        this._EditProffessionDetails = false;
        this._ProfessionObj = {
            Profession: '',
            ID: '',
            IsActive: '',
        };
    }
}