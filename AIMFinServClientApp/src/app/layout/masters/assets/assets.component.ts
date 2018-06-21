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
    public _Operationtitle: string = "Add";
    public _AssetsTypes: {
        AssetType: "",
        AssetTypeID: "",
        AutoID: "",
        Description: "",
        IsActive: ""
    };

    public _AssetsObj:any= {
        AssetType:"",
        AssetTypeID: "",
        AutoID: "",
        Description: "",
        IsActive: ""
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetAssetsTypes().subscribe(res => this.GetAssetsSuccess(res), res => this.GetAssetsError(res));
        this._AssetsObj = {
            AssetType: "",
            AssetTypeID: "",
            AutoID: "",
            Description: "",
            IsActive: ""
        };
    }
    GetAssetsSuccess(res) {
        debugger;
        if (res._body != null || res._body != undefined || res._body.toString().trim().length > 0) {
            this._AssetsTypes = JSON.parse(res._body);
        }
    }
    GetAssetsError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchAssetsEntityStatus(ID).subscribe(res => this.SwitchAssetsSuccess(res), res => this.SwitchAssetsError(res));
    }
    SwitchAssetsSuccess(res) { this._MastersService.GetAssetsTypes().subscribe(res => this.GetAssetsSuccess(res), res => this.GetAssetsError(res)); }
    SwitchAssetsError(res) { }

    GridSelectionChange(data, event) {
        debugger
        this._Operationtitle = "Update";
        Object.assign(this._AssetsObj, this._AssetsTypes[event.index]);
        //this._AssetsObj = data.data.data[selection.index]
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
        this._Operationtitle = "Add";
        this._AssetsObj = {
            AssetType: "",
            AssetTypeID: "",
            AutoID: "",
            Description: "",
            IsActive: ""
        };
    }

    AddAssetsType() { debugger;
        this._MastersService.AddAssetsEntity(this._AssetsObj).subscribe(res => this.AddAssetsSuccess(res), res => this.AddAssetsError(res));
    }
    AddAssetsSuccess(res) {
        this._MastersService.GetAssetsTypes().subscribe(res => this.GetAssetsSuccess(res), res => this.GetAssetsError(res));
        this.CancelAssetsType();
    }
    AddAssetsError(res) { }
}
