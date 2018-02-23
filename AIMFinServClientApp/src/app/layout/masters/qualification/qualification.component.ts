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
    templateUrl: './qualification.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class QualificationComponent implements OnInit {
    public _QualificationTypes: {
        Qualifications: '',
        ID: '',
        IsActive: '',
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetQualificationTypes().subscribe(res => this.GetQualificationSuccess(res), res => this.GetQualificationError(res));
    }
    GetQualificationSuccess(res) {
        this._QualificationTypes = JSON.parse(res._body);
    }
    GetQualificationError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchQualificationEntityStatus(ID).subscribe(res => this.SwitchQualificationSuccess(res), res => this.SwitchQualificationError(res));
    }
    SwitchQualificationSuccess(res) { this._MastersService.GetQualificationTypes().subscribe(res => this.GetQualificationSuccess(res), res => this.GetQualificationError(res)); }
    SwitchQualificationError(res) { }
}