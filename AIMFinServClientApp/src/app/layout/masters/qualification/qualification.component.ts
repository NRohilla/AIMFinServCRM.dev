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

    public _QualificationObj: {
        Qualifications: '',
        ID: '',
        IsActive: '',
    };

    public _Operationtitle: string = "Add";

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetQualificationTypes().subscribe(res => this.GetQualificationSuccess(res), res => this.GetQualificationError(res));
        this._QualificationObj = {
            Qualifications: '',
            ID: '',
            IsActive: '',
        };
    }
    GetQualificationSuccess(res) {
        if (res._body != null || res._body != undefined || res._body.toString().trim().length > 0) {
            debugger;
            this._QualificationTypes = JSON.parse(res._body);
        }
    }
    GetQualificationError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchQualificationEntityStatus(ID).subscribe(res => this.SwitchQualificationSuccess(res), res => this.SwitchQualificationError(res));
    }
    SwitchQualificationSuccess(res) { this._MastersService.GetQualificationTypes().subscribe(res => this.GetQualificationSuccess(res), res => this.GetQualificationError(res)); }
    SwitchQualificationError(res) { }

    GridSelectionChange(data, event) {
        debugger;
        //this._QualificationObj = data.data.data[selection.index];
        Object.assign(this._QualificationObj, this._QualificationTypes[event.index]);
        this._Operationtitle = "Update";
    }

    UpdateQualificationType() {
        this._MastersService.UpdateQualificationEntity(this._QualificationObj).subscribe(res => this.UpdateQualificationSuccess(res), res => this.UpdateQualificationError(res));
    }

    UpdateQualificationSuccess(res) {
        this._MastersService.GetQualificationTypes().subscribe(res => this.GetQualificationSuccess(res), res => this.GetQualificationError(res));
        this.CancelQualificationType();
    }
    UpdateQualificationError(res) { }


    CancelQualificationType() {
        debugger;
        this._Operationtitle = "Add";
        this._QualificationObj = {
            Qualifications: '',
            ID: '',
            IsActive: '',
        };
    }


    AddQualificationType() {
        debugger;
        this._MastersService.AddQualificationEntity(this._QualificationObj).subscribe(res => this.AddQualificationTypeSuccess(res), res => this.AddQualificationTypeError(res));
    }
    AddQualificationTypeSuccess(res) {
        this._MastersService.GetQualificationTypes().subscribe(res => this.GetQualificationSuccess(res), res => this.GetQualificationError(res));
        this.CancelQualificationType();
    }
    AddQualificationTypeError(res) { }
}
