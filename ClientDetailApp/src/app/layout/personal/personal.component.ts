import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClientsService } from '../../services/app.clients.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare var jquery: any;
declare var $: any;

@Component({
    templateUrl: './personal.component.html',
    styleUrls:
    [
        './personal.component.css',
    ],
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class PersonalComponent implements OnInit {
    public _EditPersonalDetails: boolean = false;
    public ApplicantID: string = '';
    public _ShowHomeAddress: boolean = false;
    public _ShowWorkAddress: boolean = false;
    public _PersonInfo: string = '';

    public PersonalDetails = {
        AutoID: '',
        ApplicantID: '',
        Title: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        MaritalStatus: '',
        NoOfDependents: '',
        NZResidents: '',
        CountryOfBirth: '',
        ApplicantTypeID: '',
        EmailID: '',
        MobileNo: '',
        HomePhoneNo: '',
        WorkPhoneNo: '',
    };
    public CommunicationDetails: any = [];

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog) { }

    ngOnInit() {
        this.PersonalDetails = {
            AutoID: '',
            ApplicantID: '',
            Title: '',
            FirstName: '',
            MiddleName: '',
            LastName: '',
            Gender: '',
            DateOfBirth: '',
            MaritalStatus: '',
            NoOfDependents: '',
            NZResidents: '',
            CountryOfBirth: '',
            ApplicantTypeID: '',
            EmailID: '',
            MobileNo: '',
            HomePhoneNo: '',
            WorkPhoneNo: '',
        };
        this.ApplicantID = this._LocalStorageService.get("LoggedInApplicantId");
        this._ClientsService.GetPersonalDetailsByAppID(this.ApplicantID).subscribe(res => this.GetPersonalDetailsByAppIDSuccess(res), res => this.GetPersonalDetailsByAppIDError(res));

        $(document).ready(function () {
            $(".content-section.personal-content").parent().parent().parent().parent().parent().css("background", "#56767b");
        });

    }

    GetPersonalDetailsByAppIDSuccess(res) {
        debugger;
        this.PersonalDetails = JSON.parse(res._body);
        this._PersonInfo = this.PersonalDetails.FirstName + " " + this.PersonalDetails.MiddleName + " " + this.PersonalDetails.LastName
        this._ClientsService.GetAddresses(this.ApplicantID).subscribe(res => this.GetAddSuccess(res), res => this.GetAddError(res));
    }

    GetPersonalDetailsByAppIDError(res) {
    }

    GetAddSuccess(res) {
        this.CommunicationDetails = JSON.parse(res._body);
    }

    GetAddError(res) { }

    UpdateDetails() {
        debugger;
        this._ClientsService.UpdatePersonalDetailsByAppID(this.PersonalDetails).subscribe(res => this.UpdatePersonalDetailsByAppIDSuccess(res), res => this.UpdatePersonalDetailsByAppIDError(res));
    }

    UpdatePersonalDetailsByAppIDSuccess(res) {
        debugger;
        this._EditPersonalDetails = false;
        //this._ClientsService.UpdateAddressesByAppID(this.PersonalDetails).subscribe(res => this.UpdateAddressesByAppIDSuccess(res), res => this.UpdateAddressesByAppIDError(res));
        this._ClientsService.GetPersonalDetailsByAppID(this.ApplicantID).subscribe(res => this.GetPersonalDetailsByAppIDSuccess(res), res => this.GetPersonalDetailsByAppIDError(res));

    }
    //UpdateAddressesByAppIDSuccess(res) {
    //    debugger;
    //    this.PersonalDetails = JSON.parse(res._body);
    //}
    //UpdateAddressesByAppIDError(res) { }


    UpdatePersonalDetailsByAppIDError(res) { }

    EditPersonalDetails() {
        this._EditPersonalDetails = true;
    }

    CancelEditingPersonalDetails() {
        this._EditPersonalDetails = false;
    }

}
