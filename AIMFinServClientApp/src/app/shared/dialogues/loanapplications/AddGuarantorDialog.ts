import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
    templateUrl: './AddGuarantorDialog.html',
    providers: [ClientsService, MastersService]
})
export class AddGuarantorDialog {
   

    constructor(
        public dialogRef: MatDialogRef<AddGuarantorDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, ) { }

    public gridData: any[];
    public _ShowUpdateButton: boolean = false;
    public _ShowAddButton: boolean = true;
    public _ShowViewDetails: boolean = false;
    public _AddGuarantor: boolean = true;
    public _AfterUpdate: boolean = false;

    public _AddGuarantorDetails = {
        GuarantorID: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        MaritalStatus: '',
        NZResidents: true,
        CountryOfBirth: '',
        EmailID: '',
        MobileNo: '',
        HomePhoneNo: '',
        WorkPhoneNo: '',
        Duration:'',
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        LoanApplicationNo:'',
        _LoanApplicationFormDetails: {
            LoanApplicationNo:''
        }
    };

    ngOnInit() {
        this._AddGuarantorDetails =
            {
            GuarantorID: '',
            FirstName: '',
            MiddleName: '',
            LastName: '',
            Gender: '',
            DateOfBirth: '',
            MaritalStatus: '',
            NZResidents: true,
            CountryOfBirth: '',
            EmailID: '',
            MobileNo: '',
            HomePhoneNo: '',
            WorkPhoneNo: '',
            Duration: '',
            AddressLine1: '',
            AddressLine2: '',
            AddressLine3: '',
            LoanApplicationNo: '',
            _LoanApplicationFormDetails: {
                LoanApplicationNo: ''
            }
            };


        this._ClientsService.GetGuarantor().subscribe(res => this.GetGuarantorSuccess(res), res => this.GetGuarantorError(res));

    }

    AddGuarantor() {
     
        if (this._LocalStorageService.get("LoanApplicationNoViewed") != undefined) {
            this._AddGuarantorDetails.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNoViewed");
            debugger;
            this._ClientsService.AddGuarantor(this._AddGuarantorDetails).subscribe(res => this.AddGuarantorSuccess(res), res => this.AddGuarantorError(res));
        }
    }
    AddGuarantorSuccess(res) {
        debugger;
        this._AddGuarantorDetails = JSON.parse(res._body);
        this.GetAddedGuarantorGrid();
    }

    AddGuarantorError(res) { }

    GetAddedGuarantorGrid() {
       

        this._ClientsService.GetGuarantor().subscribe(res => this.GetGuarantorSuccess(res), res => this.GetGuarantorError(res));
        if (this._AddGuarantorDetails.NZResidents.toString() == "1") {
            this._AddGuarantorDetails.NZResidents = true;
        }
        else {
            this._AddGuarantorDetails.NZResidents = false;
        }
    }

    GetGuarantorSuccess(res) {
        this.gridData = JSON.parse(res._body);
        
    }

    GetGuarantorError(res) { }

    ViewDetails(GuarantorID) {
        debugger;
        this._AddGuarantor = false;
        this._LocalStorageService.set("GuarantorIDNoViewed", GuarantorID);
        this._ClientsService.GetGuarantorDetails(GuarantorID).subscribe(res => this.GetGuarantorDetailsSuccess(res), res => this.GetGuarantorDetailsError(res));
    }
    GetGuarantorDetailsSuccess(res) {
        this._AddGuarantorDetails = JSON.parse(res._body);
        this._ShowViewDetails = true;
        this._ShowAddButton = false;
        this._ShowUpdateButton = true;
       
    }
    GetGuarantorDetailsError(res) { }

    UpdateGuarantorDetails() {
        debugger;
        if (this._AddGuarantorDetails.NZResidents.toString() == "1") {
            this._AddGuarantorDetails.NZResidents = true;
        }
        else {
            this._AddGuarantorDetails.NZResidents = false;
        }
        this._ClientsService.UpdateGuarantorDetails(this._AddGuarantorDetails).subscribe(res => this.UpdateGuarantorDetailsSuccess(res), res => this.UpdateGuarantorDetailsError(res)); 
    }

    UpdateGuarantorDetailsSuccess(res) {
        this._AfterUpdate = true;
        if (this._AddGuarantorDetails.NZResidents.toString() == "1") {
            this._AddGuarantorDetails.NZResidents = true;
        }
        else {
            this._AddGuarantorDetails.NZResidents = false;
        }
        this._ShowViewDetails = false;
        this._AddGuarantor = false;
        this._ClientsService.GetGuarantor().subscribe(res => this.GetGuarantorSuccess(res), res => this.GetGuarantorError(res));
    }

    UpdateGuarantorDetailsError(res) { }

    onNoClick(): void {
        this.dialogRef.close();
        debugger;
    }
   

}
