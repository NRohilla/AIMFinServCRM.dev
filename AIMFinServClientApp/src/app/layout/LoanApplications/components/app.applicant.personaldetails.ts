import { Component, Injectable, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Component({
    selector: `applicant-personal-details`,
    templateUrl: './app.applicant.personaldetails.html',
    animations: [routerTransition()],
    providers: []
})
export class ApplicantPersonalDetailsComponent implements OnInit {

    public _ApplicantPersonalDetails= {
       ApplicantID : '',
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


    constructor(public router: Router, private _LocalStorageService: LocalStorageService) { }
    ngOnInit() {
    }

    testpersonal() {
        debugger;
        return true;
    }
}

