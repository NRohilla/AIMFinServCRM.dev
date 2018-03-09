import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClientsService } from '../../../services/app.clients.service';
@Component({
    selector: 'applicant-communication-details',
    templateUrl: './app.applicant.communicationdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ApplicantCommunicationDetailsComponent implements OnInit {

    public _ApplicantCommunicationDetails = {
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        Duration: '',
        AddressType: {
            ID: '',
            Type: ''
        }
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService,private _ClientsService: ClientsService) { }

    ngOnInit() {
    }

    SaveLoanApplicationCommunicationDetails() {
        debugger;
        this._ClientsService.SaveLoanApplicationCommunicationDetails(this._ApplicantCommunicationDetails).subscribe(res => this.SaveLoanApplicationCommunicationDetailsSuccess(res), res => this.SaveLoanApplicationCommunicationDetailsError(res));
        return true;
    }

    SaveLoanApplicationCommunicationDetailsSuccess(res) {
        var Data = JSON.parse(res._body);
        if (Data == true) {
            return true;
        }
    }

        SaveLoanApplicationCommunicationDetailsError(res) { }
}
