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
    templateUrl: './assets.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class AssetsComponent implements OnInit {
    public _EditAssetsDetails: boolean = false;
    public _AssetsTypes: {
        AssetTypeID: "",
        AutoID: "",
        Description: "",
        IsActive: ""
    };

    public _AssetsObj: {
        AssetTypeID: "",
        AutoID: "",
        Description: "",
        IsActive: ""
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetAssetsTypes().subscribe(res => this.GetAssetsSuccess(res), res => this.GetAssetsError(res));
    }
    GetAssetsSuccess(res) {
        debugger;
        this._AssetsTypes = JSON.parse(res._body);
    }
    GetAssetsError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchAssetsEntityStatus(ID).subscribe(res => this.SwitchAssetsSuccess(res), res => this.SwitchAssetsError(res));
    }
    SwitchAssetsSuccess(res) { this._MastersService.GetAssetsTypes().subscribe(res => this.GetAssetsSuccess(res), res => this.GetAssetsError(res)); }
    SwitchAssetsError(res) { }

    GridSelectionChange(data, selection) {
        this._EditAssetsDetails = true;
        this._AssetsObj = data.data.data[selection.index]
    }

    UpdateAssetsType() {
        debugger;
        this._MastersService.UpdateAssetsEntity(this._AssetsObj).subscribe(res => this.UpdateAssetsSuccess(res), res => this.UpdateAssetsError(res));
    }

    UpdateAssetsSuccess(res) {
        this._MastersService.GetAssetsTypes().subscribe(res => this.GetAssetsSuccess(res), res => this.GetAssetsError(res));
        this.CancelAssetsType();
    }
    UpdateAssetsError(res) { }
    CancelAssetsType() {
        debugger;
        this._EditAssetsDetails = false;
        this._AssetsObj = {
            AssetTypeID: "",
            AutoID: "",
            Description: "",
            IsActive: ""
        };
    }
}