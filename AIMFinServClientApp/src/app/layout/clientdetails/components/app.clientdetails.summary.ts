import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ClientsService} from '../../../services/app.clients.service';
import { AppBaseComponent } from '../../../shared/app.basecomponent';
import { ClientSummaryDialog } from '../../../shared/dialogues/clients/ClientSummaryDialog';
@Component({
    selector: `client-summary`,
    templateUrl: './app.clientdetails.summary.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})

export class ClientSummaryComponent extends AppBaseComponent implements OnInit {
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public _EditPersonalDetails: boolean = false;
    public _EditCommunicationDetails: boolean = false;
    public URL: any;
    public _Name: string = '';
    public _ApplicantID: string = '';

    public _ApplicantSummaryDetails = {
        AutoID: '',
        ApplicantID: '',
        Title:'',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        MaritalStatus: '',
        NoOfDependents: '',
        NZResidents: true,
        DNZResidents: '',
        CountryOfBirth: '',
        MobileNo: '',
        HomePhoneNo: '',
        WorkPhoneNo: '',
        EmailID: '',
        ApplicantTypeID: '',
        IsActive: '',
        CreatedBy: '',
        CreatedOn: '',
        ModifiedBy: '',
        ModifiedOn: '',
        ApplicantImage: '',
        FileTypeID: '',
        FileType: '',
        FileName: '',
        ApplicantType: {},
    }

    public _ApplicantCommunicationDetails: {
        AutoID: '',
        CommunicationID: '',
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        Duration: '',
        Status: '',
        ApplicantID: '',
        MobileNo: '',
        HomePhoneNo: '',
        WorkPhoneNo: '',
        EmailID: '',
    }

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        this.getClientdetails();
    }

    getClientdetails() {
        debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ApplicantID = this._LocalStorageService.get("ApplicantID");
            this._ClientsService.GetClientDetails(this._ApplicantID).subscribe(res => this.GetClientDetailsSuccess(res), res => this.GetClientDetailsError(res));
            this._ClientsService.GetClientCommunicationDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientCommDetailsSuccess(res), res => this.GetClientCommDetailsError(res));
        }
    }

    GetOriginalContentForPreview(FileType) {
        debugger;
        if (FileType == "text/plain")
            return 'data:text/plain;base64,';
        if (FileType == "application/pdf")
            return 'data:application/pdf;base64,';
        if (FileType == "image/png")
            return 'data:image/png;base64,';
        if (FileType == "image/jpeg")
            return 'data:image/jpeg;base64,';
        if (FileType == "image/gif")
            return 'data:image/gif;base64,';
    }

    GetClientDetailsSuccess(res) {
        debugger;
        if (res._body != null && res._body != undefined && res._body.toString().trim().length > 0) {
            this._ApplicantSummaryDetails = this.trimObj(JSON.parse(res._body));
            if (this._ApplicantSummaryDetails.NZResidents == true) {
                this._ApplicantSummaryDetails.DNZResidents = "Yes";
            }
            else {
                this._ApplicantSummaryDetails.DNZResidents = "No";
            }
        }
        this._Name = this._ApplicantSummaryDetails.Title+" "+ this._ApplicantSummaryDetails.FirstName+" "+this._ApplicantSummaryDetails.MiddleName + " "+ this._ApplicantSummaryDetails.LastName
        this.URL = this.GetOriginalContentForPreview(this._ApplicantSummaryDetails.FileType) + this._ApplicantSummaryDetails.ApplicantImage;
    }

    GetClientDetailsError(res) { }

    GetClientCommDetailsSuccess(res) {
        this._ApplicantCommunicationDetails = JSON.parse(res._body);
    }
    GetClientCommDetailsError(res) { }

    EditPersonalDetails() {
        this._EditPersonalDetails = !this._EditPersonalDetails;
    }

    EditCommunicationDetails() {
        this._EditCommunicationDetails = !this._EditCommunicationDetails;
    }

    UpdatePersonalDetails() {
        this._EditPersonalDetails = false;
        this._ClientsService.UpdateClientPersonalDetails(this._ApplicantSummaryDetails).subscribe(res => this.updateclientPersonalSuccess(res), res => this.updateclientPersonalError(res));
    }
    updateclientPersonalSuccess(res) {
    }

    updateclientPersonalError(res) {
    }

    UpdateCommunicationDetails() {
        this._EditCommunicationDetails = false;
        this._ClientsService.UpdateClientCommunicationDetails(this._ApplicantCommunicationDetails).subscribe(res => this.updateclientCommunicationSuccess(res), res => this.updateclientCommunicationError(res));
    }

    updateclientCommunicationSuccess(res) {}

    updateclientCommunicationError(res) { }

    openDialog(): void {
        let dialogRef = this.dialog.open(ClientSummaryDialog, {
        });

        dialogRef.afterClosed().subscribe(result => {
            debugger;
            setTimeout(() => {
                this.getClientdetails();
            }, 100);
        });
    }
}
