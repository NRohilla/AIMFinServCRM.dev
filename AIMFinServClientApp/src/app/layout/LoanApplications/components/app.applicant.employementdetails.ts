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
import {MastersService } from '../../../services/app.masters.service';
@Component({
    selector: `applicant-employement-details`,
    templateUrl: './app.applicant.employementdetails.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class ApplicantEmployementComponent implements OnInit {
    _isformvalid: boolean = false;
    @ViewChild('AddEmployementDetails') form;

    errorMessage: "No Data"
   public _TypeOfProfession = [];
   public _TypeOfEmployment= [];

    public _ApplicantEmployementDetails = {
        EmploymentID :'',
        SourceOfIncome:'',
        EmployerName:'',
        Duration:'',
       Income:'',
       Status: '',
       ApplicantID: '',
       _ProfessionTypeDetail: { ID: ''},
       _EmploymentTypeDetail: { ID: ''}
    };
     
    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, private _MasterService: MastersService) { }

    ngOnInit() {
        debugger;
        this.GetEmploymentTypeDetails();
        this.GetProfessionTypeDetails();
    }

    ngDoCheck() {
        this._isformvalid = this.form.valid;
    }
    SaveLoanApplicationEmployementDetails(applicantId) {
        this._ApplicantEmployementDetails.ApplicantID = applicantId;
      return  this._ClientsService.SaveLoanApplicationEmploymentDetails(this._ApplicantEmployementDetails);
    }

       GetEmploymentTypeDetails() {
        this._MasterService.GetEmploymentTypes().subscribe(res => this.GetEmploymentTypeDetailsSuccess(res), error => this.errorMessage = <any>error);
    }
    GetEmploymentTypeDetailsSuccess(res) {
        debugger
        this._TypeOfEmployment = JSON.parse(res._body);
    }

    GetProfessionTypeDetails() {
        this._MasterService.GetProfessionTypes().subscribe(res => this.GetProfessionTypeDetailsSuccess(res), error => this.errorMessage = <any>error);
    }
    GetProfessionTypeDetailsSuccess(res) {
        debugger
        this._TypeOfProfession = JSON.parse(res._body);
    }

}
