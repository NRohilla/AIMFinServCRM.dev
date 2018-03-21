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
    @ViewChild('AddGuarantorform') AddGuarantorform;
   

    constructor(
        public dialogRef: MatDialogRef<AddGuarantorDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _ClientsService: ClientsService, public dialog: MatDialog, private _MasterService: MastersService, private _LocalStorageService: LocalStorageService, ) { }

    public gridData: any[];
    public _ShowViewDetails: boolean = false;
    public _AddGuarantor: boolean = true;
    public _ViewDetails: boolean = false;

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
        Country: '',
        ZipCode:'',
        LoanApplicationNo:'',
        _LoanApplicationFormDetails: {
            LoanApplicationNo:''
        }
    };

    public FormatNZResidents() {
        if (this._AddGuarantorDetails.NZResidents.toString() == "1") {
            this._AddGuarantorDetails.NZResidents = true;
        }
        if (this._AddGuarantorDetails.NZResidents.toString() == "0") {
            this._AddGuarantorDetails.NZResidents = false;
        }
    }
    
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
            Country: '',
            ZipCode: '',
            LoanApplicationNo: '',
            _LoanApplicationFormDetails: {
                LoanApplicationNo: ''
            }
            };
        this._ClientsService.GetAddedGuarantorGrid().subscribe(res => this.GetAddedGuarantorGridSuccess(res), res => this.GetAddedGuarantorGridError(res));

    }
    
    AddGuarantor() {
        if (this._LocalStorageService.get("LoanApplicationNoViewed") != undefined) {
            this._AddGuarantorDetails.LoanApplicationNo = this._LocalStorageService.get("LoanApplicationNoViewed");
            debugger;
            this._ClientsService.AddGuarantor(this._AddGuarantorDetails).subscribe(res => this.AddGuarantorSuccess(res), res => this.AddGuarantorError(res));
        }
    }
    AddGuarantorSuccess(res) {
        this.FormatNZResidents();
        this._AddGuarantorDetails = JSON.parse(res._body);
        this.GetAddedGuarantorGrid();
    }
    AddGuarantorError(res) { }

    GetAddedGuarantorGrid() {
        this._ClientsService.GetAddedGuarantorGrid().subscribe(res => this.GetAddedGuarantorGridSuccess(res), res => this.GetAddedGuarantorGridError(res));
        this.FormatNZResidents();  
       
    }
    GetAddedGuarantorGridSuccess(res) {
        this.FormatNZResidents();  
        this.gridData = JSON.parse(res._body);
    }
    GetAddedGuarantorGridError(res) { }

    ViewDetails(GuarantorID) {
        debugger;
        this._ViewDetails = true;
        this._AddGuarantor = false;
        this._ShowViewDetails = false;
        this._LocalStorageService.set("GuarantorIDNoViewed", GuarantorID);
        this._ClientsService.GetGuarantorDetails(GuarantorID).subscribe(res => this.ViewDetailsSuccess(res), res => this.ViewDetailsError(res));
        this.FormatNZResidents(); 
    }
    ViewDetailsSuccess(res) {
        debugger;
        this._AddGuarantorDetails = JSON.parse(res._body);
       
    }
    ViewDetailsError(res) { }

    UpdateGuarantorDetails() {
        debugger;
        this._ClientsService.UpdateGuarantorDetails(this._AddGuarantorDetails).subscribe(res => this.UpdateGuarantorDetailsSuccess(res), res => this.UpdateGuarantorDetailsError(res));
    }
    UpdateGuarantorDetailsSuccess(res) {
        this.FormatNZResidents();     
        this.AddGuarantorform.reset();
        this._AddGuarantor = true;
        this._ShowViewDetails = false;
        this._ViewDetails = false;
        this.GetAddedGuarantorGrid();
    }
    UpdateGuarantorDetailsError(res) { }

    EditDetails() {
        this._ViewDetails = false;
        this._ShowViewDetails = true;
    }
 
    onNoClick(): void {
        this.dialogRef.close();
        debugger;
    }
   

}
