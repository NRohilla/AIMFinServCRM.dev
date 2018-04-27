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
    selector: 'applicant-qualification-details',
    templateUrl: './app.applicant.qualificationdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ApplicantQualificationDetailsComponent implements OnInit {
    _isformvalid: boolean = false;
    @ViewChild('AddQualificationform') form;
    public _ApplicantQualificationDetails = {
        QualificationID: '',
        ApplicantID: '',
        PassingYear: '',
        CourseName: '',
        UniversityName: '',
        TypeOfQualification:'',
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { }
    ngOnInit() {
    }

    ngDoCheck() {
        this._isformvalid = this.form.valid;
    }

    SaveLoanApplicationQualificationDetails(applicantID) {
        debugger;
        this._ApplicantQualificationDetails.ApplicantID = applicantID;
        return this._ClientsService.SaveLoanApplicationQualificationDetails(this._ApplicantQualificationDetails);
    }
}
