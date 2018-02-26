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
    templateUrl: './property.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class PropertyComponent implements OnInit {
    public _PropertyTypes: {
        ID :"",
        PropertyType: "",
        IsActive: ""
    };

    public _PropertyObj: {
        ID: "",
        PropertyType: "",
        IsActive: ""
    };

    public _EditPropertyDetails: boolean = false;

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetPropertyTypes().subscribe(res => this.GetPropertySuccess(res), res => this.GetPropertyError(res));
    }
    GetPropertySuccess(res) {
        debugger;
        this._PropertyTypes = JSON.parse(res._body);
        
    }
    GetPropertyError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchPropertyEntityStatus(ID).subscribe(res => this.SwitchPropertySuccess(res), res => this.SwitchPropertyError(res));
    }
    SwitchPropertySuccess(res) { this._MastersService.GetPropertyTypes().subscribe(res => this.GetPropertySuccess(res), res => this.GetPropertyError(res));}
    SwitchPropertyError(res) { }

    GridSelectionChange(data, selection) {
        debugger;
        this._PropertyObj = data.data.data[selection.index];
        this._EditPropertyDetails = true;
    }

    UpdatePropertyType() {
        this._MastersService.UpdatePropertyEntity(this._PropertyObj).subscribe(res => this.UpdatePropertySuccess(res), res => this.UpdatePropertyError(res));
    }

    UpdatePropertySuccess(res) {
        this._MastersService.GetPropertyTypes().subscribe(res => this.GetPropertySuccess(res), res => this.GetPropertyError(res));
        this.CancelPropertyType();
    }
    UpdatePropertyError(res) { }


    CancelPropertyType() {
        debugger;
        this._EditPropertyDetails = false;
        this._PropertyObj = {
            PropertyWithApplicant: '',
            ID: '',
            IsActive: '',
        };
    }
}