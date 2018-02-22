import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {ClientsService} from '../../services/app.clients.service';

@Component({
    templateUrl: './clients.component.html',
    styleUrls:
    [
        './clients.component.scss',
    ],
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ClientsComponent implements OnInit {
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public gridData: any[];

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { }

    ngOnInit() {
        this._ClientsService.GetAllClients().subscribe(res => this.GetAllClientsSuccess(res), res => this.GetAllClientsError(res));
    }

    GetAllClientsSuccess(Res) {
        this.gridData = JSON.parse(Res._body);
    }

    GetAllClientsError(Res) { }

    ViewClientDetails(ApplicantID) {
        this._ViewApplicantDetails = !this._ViewApplicantDetails;
        this._LocalStorageService.set("ApplicantID", ApplicantID);
    }

}