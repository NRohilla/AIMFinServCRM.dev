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
    public URL: any = '';


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
        ApplicantImage: '',
        FileTypeID:'',
        FileType: '',
        FileName: ''
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
            ApplicantImage: '',
            FileTypeID: '',
            FileType: '',
            FileName:''
        };
        this.ApplicantID = this._LocalStorageService.get("LoggedInApplicantId");
        this.URL = this.PersonalDetails.ApplicantImage;

        this._ClientsService.GetPersonalDetailsByAppID(this.ApplicantID).subscribe(res => this.GetPersonalDetailsByAppIDSuccess(res), res => this.GetPersonalDetailsByAppIDError(res));

        $(document).ready(function () {
            $(".content-section.personal-content").parent().parent().parent().parent().parent().css("background", "#56767b");
        });

    }

    GetPersonalDetailsByAppIDSuccess(res) {
        debugger;
        if (JSON.parse(res._body) != null) {
            this.PersonalDetails = JSON.parse(res._body);

            this.URL = this.GetOriginalContentForPriview(this.PersonalDetails.FileType) + this.PersonalDetails.ApplicantImage;
            console.log(this.URL)
            this._PersonInfo = this.PersonalDetails.FirstName + " " + this.PersonalDetails.MiddleName + " " + this.PersonalDetails.LastName
            this._ClientsService.GetAddresses(this.ApplicantID).subscribe(res => this.GetAddSuccess(res), res => this.GetAddError(res));
            //this._HeaderComponent.UserInfo();
        }
       
    }

    GetOriginalContentForPriview(FileType) {
        debugger;
        if (FileType == "text/plain")
            return 'data:text/plain;base64,';
        if (FileType == 'application/pdf')
            return 'data:application/pdf;base64,';
        if (FileType == "image/png")
            return 'data:image/png;base64,';
        if (FileType == "image/jpeg")
            return 'data:image/jpeg;base64,';
        if (FileType == 'image/gif')
            return 'data:image/gif;base64,';
    }

    GetPersonalDetailsByAppIDError(res) {
    }

    GetAddSuccess(res) {
        this.CommunicationDetails = JSON.parse(res._body);
    }

    GetAddError(res) { }

    UpdateDetails() {
        debugger;
        this.PersonalDetails.ApplicantImage = this.PersonalDetails.ApplicantImage;
        this.PersonalDetails.FileType = this.PersonalDetails.FileType;
        this._ClientsService.UpdatePersonalDetailsByAppID(this.PersonalDetails).subscribe(res => this.UpdatePersonalDetailsByAppIDSuccess(res), res => this.UpdatePersonalDetailsByAppIDError(res));
    }

    UpdatePersonalDetailsByAppIDSuccess(res) {
        this._EditPersonalDetails = false;
        this._ClientsService.GetPersonalDetailsByAppID(this.ApplicantID).subscribe(res => this.GetPersonalDetailsByAppIDSuccess(res), res => this.GetPersonalDetailsByAppIDError(res));
        //window.location.reload();
    }


    UpdatePersonalDetailsByAppIDError(res) { }

    EditPersonalDetails() {
        this._EditPersonalDetails = true;
    }

    CancelEditingPersonalDetails() {
        this._EditPersonalDetails = false;

    }

    OnSelectPersonalAttachmentFile(event) {
        debugger;
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            this.PersonalDetails.FileType = file.type;
           this.PersonalDetails.FileName = file.name;            
            reader.onload = (event) => {                
                this.URL = reader.result;
                this.PersonalDetails.ApplicantImage = reader.result.split(',')[1];
               // console.log(this.PersonalDetails.ApplicantImage);
            };
        }
    }
}
