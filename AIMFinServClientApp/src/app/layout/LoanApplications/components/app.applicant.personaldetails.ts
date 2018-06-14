import { Component, Injectable, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppBaseComponent } from '../../../shared/app.basecomponent';
import { ClientsService } from '../../../services/app.clients.service';
import { MastersService } from '../../../services//app.masters.service';
@Component({
    selector: `applicant-personal-details`,
    templateUrl: './app.applicant.personaldetails.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class ApplicantPersonalDetailsComponent extends AppBaseComponent implements OnInit {
    _isformvalid: boolean = false;
    @ViewChild('AddPersonalDetails') form;

    public _ApplicantTypeID: {};
    public _Gender: {};
    errorMessage: "No Data"
    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, private _MasterService: MastersService) { super(); }
    ngOnInit() {
        this.GetApplicantTypes();
    }
    ngDoCheck() {
        this._isformvalid = this.form.valid;
    }

    public _ApplicantPersonalDetails = {
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        ApplicantID: '',
        ApplicantImage: '',
        ApplicantType: '',
        ApplicantTypeID: 0,
        AutoID: '',
        Country: '',
        CountryOfBirth: '',
        CreatedBy: '',
        CreatedOn: '',
        DNZResidents: '',
        DateOfBirth: '',
        EmailID: '',
        Extension: '',
        FileName: '',
        FileType: '',
        FileTypeID: '',
        FirstName: '',
        Gender: '',
        HomePhoneNo: '',
        IsActive: true,
        LastName: '',
        LoanApplicationNo: '',
        MaritalStatus: '',
        MiddleName: '',
        MobileNo: '',
        ModifiedBy: '',
        ModifiedOn: '',
        NZResidents: false,
        NoOfDependents: '',
        Title: '',
        Type: '',
        WorkPhoneNo: '',
        ZipCode: '',
        _ApplicantComunctnDetails: '',
        _ApplicantTypeMasterID: {
            ApplicantTypeID: '',
            ApplicantType: '',
            IsActive: false,
            CreatedBy: '',
            CreatedOn: '',
            sActive: false,
            ModifiedBy: '',
            ModifiedOn: ''
        },
        _LoanApplicationNo: '',
        _fileTypeMaster: '',
    };

    GetApplicantTypes() {
        this._MasterService.GetApplicantTypes().subscribe(res => this.GetApplicantTypesSuccess(res), error => this.errorMessage = <any>error);
    }
    GetApplicantTypesSuccess(res) {
        debugger
        this._ApplicantTypeID = JSON.parse(res._body);
    }

    SaveLoanApplicationPersonalDetails() {
        debugger;
        if (this._LocalStorageService.get("LoanApplicationNo") != undefined) {
           // this._ApplicantPersonalDetails.ApplicantTypeID = this._ApplicantPersonalDetails._ApplicantTypeMasterID.ApplicantTypeID;

            this._ApplicantPersonalDetails.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNo");
            
            return this._ClientsService.SaveLoanApplicationPersonalDetails(this._ApplicantPersonalDetails);
        }
        
    }
}

