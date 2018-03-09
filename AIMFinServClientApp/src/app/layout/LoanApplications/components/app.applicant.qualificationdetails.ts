import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
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

    public _ApplicantQualificationDetails= {
        PassingYear :'',
        CourseName: '',
        UniversityName: '',
        TypeOfQualification: '',
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { }
    ngOnInit() {
    }

    SaveLoanApplicationQualificationDetails() {
        debugger;
        this._ClientsService.SaveLoanApplicationQualificationDetails(this._ApplicantQualificationDetails).subscribe(res => this.SaveLoanApplicationQualificationDetailsSuccess(res), res => this.SaveLoanApplicationQualificationDetailsError(res));
    }

    SaveLoanApplicationQualificationDetailsSuccess(res) {
        var Data = JSON.parse(res._body);
        if (Data == true) {
            return true;
        }
    }

    SaveLoanApplicationQualificationDetailsError(res) { }
}
