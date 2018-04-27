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
    selector: `applicant-employement-details`,
    templateUrl: './app.applicant.employementdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ApplicantEmployementComponent implements OnInit {
    _isformvalid: boolean = false;
    @ViewChild('AddEmployementDetails') form;

    public _ApplicantEmployementDetails = {
        EmploymentID :'',
        SourceOfIncome:'',
        EmployerName:'',
        Duration:'',
       Income:'',
       Status: '',
       ApplicantID: ''
    };
     
    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { }

    ngOnInit() {
    }

    ngDoCheck() {
        this._isformvalid = this.form.valid;
    }
    SaveLoanApplicationEmployementDetails(applicantId) {
        this._ApplicantEmployementDetails.ApplicantID = applicantId;
      return  this._ClientsService.SaveLoanApplicationEmploymentDetails(this._ApplicantEmployementDetails);
    }

}
