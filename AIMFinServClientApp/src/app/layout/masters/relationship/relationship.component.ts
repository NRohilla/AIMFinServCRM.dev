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
    templateUrl: './relationship.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class RelationshipComponent implements OnInit {
    public _RelationshipTypes: {
        RelationshipWithApplicant: '',
        ID: '',
        IsActive: '',
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetRelationshipTypes().subscribe(res => this.GetRelationshipSuccess(res), res => this.GetRelationshipError(res));
    }
    GetRelationshipSuccess(res) {
        this._RelationshipTypes = JSON.parse(res._body);
        
    }
    GetRelationshipError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchRelationshipEntityStatus(ID).subscribe(res => this.SwitchRelationshipSuccess(res), res => this.SwitchRelationshipError(res));
    }
    SwitchRelationshipSuccess(res) { this._MastersService.GetRelationshipTypes().subscribe(res => this.GetRelationshipSuccess(res), res => this.GetRelationshipError(res));}
    SwitchRelationshipError(res) { }
}