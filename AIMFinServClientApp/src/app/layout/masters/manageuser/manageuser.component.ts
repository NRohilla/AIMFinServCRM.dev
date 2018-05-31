import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { MastersService } from '../../../services/app.masters.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManageUserDialog } from '../../../shared/dialogues/manage/ManageUserDialog';
import { GoogleService } from '../../../services/app.googleservices.service';
//import { AuthenticateService } from '../../../services/app.auth.service';
import { environment } from '../../../../environments/environment';

@Component({
    templateUrl: './manageuser.component.html',
    animations: [routerTransition()],
    providers: [MastersService, GoogleService]
})
export class ManageuserComponent implements OnInit {

    public _ManageUserGridData: {
        FirstName: '',
        LastName: '',
        Mobile: '',
        Email: '',
        Role: '',
        DisplayName: ''
    }
    public UserGuid: string = '';
    public _IsNewUser: boolean = false;
    public str: boolean = false;

    public _UserTypeRole: any = {}

    public _RoleOfUser: {
        Name: '',
        RoleId: '',
        Description: ''
    }

    public _ClientName: {
        FirstName: ''
    }

    public _SelectApplicantId = {
        ApplicantID: ''
    };

    public _UserRecord: any = {};
    public _Operationtitle: string = "Add";
    public _isClientRole: boolean = false;
    public _EditUser: boolean = false;
    public errorMessage: string = '';

    public AuthenticationToken: string = '';
    public IsLoggedIn: boolean = false;


    constructor(private _mastersServices: MastersService, public dialog: MatDialog, private _GoogleService: GoogleService, private _LocalStorageService: LocalStorageService) { }

    ngOnInit() {
        this.GetAllUser();
        this.GetRole();
    }

    GetAllUser() {
        this._mastersServices.GetAllUser().subscribe(res => this.GetAllUserSuccess(res), res => this.GetAllUserError(res));
    }

    GetAllUserSuccess(res) {
        debugger
        this._ManageUserGridData = JSON.parse(res._body);
    }

    GetAllUserError(res) { }

    GetRole() {
        this._mastersServices.GetRole().subscribe(res => this.GetRoleSuccess(res), res => this.GetRoleError(res));
    }

    GetRoleSuccess(res) {
        this._RoleOfUser = JSON.parse(res._body);
    }

    GetRoleError(res) { }

    SelectApplicantName(applicantId) {
        this._EditUser = false;
        this._mastersServices.GetUserDetails(applicantId).subscribe(res => this.GetUserDetailsSuccess(res), res => this.GetUserDetailsError(res));
    }

    GetUserDetailsSuccess(res) {
        debugger;
        this._UserRecord = JSON.parse(res._body);
        this._UserRecord.DisplayName = this._UserRecord.FirstName + this._UserRecord.LastName
    }

    GetUserDetailsError(res) { }

    SelectUserType(role) {
        this._EditUser = false;
        this._UserRecord = {}
        this._UserRecord.Role = role;
        if (role == "Client") {
            this._isClientRole = true;
            this._mastersServices.GetApplicants().subscribe(res => this.GetApplicantsSuccess(res), res => this.GetApplicantsError(res));
        } else {
            this._isClientRole = false;
        }
    }

    GetApplicantsSuccess(res) {
        this._ClientName = JSON.parse(res._body);
        console.log(this._ClientName)
    }

    GetApplicantsError(res) { }

    AddUser() {
        debugger;
        this._mastersServices.AddUser(this._UserRecord).subscribe(res => this.AddUserSuccess(res), res => this.AddUserError(res));
    }

    AddUserSuccess(res) {
        debugger;
        this._UserRecord = JSON.parse(res._body);
        this._LocalStorageService.set("UserGuid", this._UserRecord.UserGuid);
        this._mastersServices.GetAllUser().subscribe(res => this.GetAllUserSuccess(res), res => this.GetAllUserError(res));

        this.UserGuid = this._LocalStorageService.get("UserGuid");
        this._GoogleService.GenerateUserTemplate(this.UserGuid).subscribe(res => this.GenerateUserTemplateSuccess(res), error => this.errorMessage = <any>error);
        this.CancelManageUserType();
    }

    GenerateUserTemplateSuccess(res) { }

    AddUserError(res) { }

    CancelManageUserType() {
        debugger;
        this._UserRecord = {}
        this._Operationtitle = "Update";

    }

    ChangePassword(dataItem): void {
        let dialogRef = this.dialog.open(ManageUserDialog, { data: { dataItem } });

        dialogRef.afterClosed().subscribe(result => {
        });
    }

    SwitchStatus(ID) {
        this._mastersServices.SwitchManageUserEntityStatus(ID).subscribe(res => this.SwitchManageUserEntityStatusSuccess(res), res => this.SwitchManageUserEntityStatusError(res));
    }

    SwitchManageUserEntityStatusSuccess(res) {
        this._mastersServices.GetAllUser().subscribe(res => this.GetAllUserSuccess(res), res => this.GetAllUserError(res));
    }

    SwitchManageUserEntityStatusError(res) { }

    GridSelectionChange(data, event) {
        this._isClientRole = false;
        this._Operationtitle = "Update";
        this._EditUser = true;
        this._UserRecord = data.data.data[event.index];
    }
    //SendEmail() {
    //    debugger;
    //    this._GoogleService.GenerateUserTemplate(this.str).subscribe(res => this.SendEmailSuccess(res), error => this.errorMessage = <any>error);
    //}
    //SendEmailSuccess(res) {
    //   // let dialogRef = this.dialog.open(MailSentSuccessfully);
    //}

    //LoginHereClick() {
    //    var IsLoggedIn = localStorage.getItem('isLoggedin') === "true";
    //    this.AuthenticationToken = this._LocalStorageService.get('ActivaitonCode');

    //    this._AuthenticateService.LoggedOffUser(this.AuthenticationToken, IsLoggedIn)
    //        .subscribe(result => this.LoggedOffUserSuccess(result), result => this.LoggedOffUserError(result));
    //}

    //LoggedOffUserSuccess(res) {
    //    debugger;
    //    window.location.href = environment.baseApplicationURL;
    //}

    //LoggedOffUserError(res) { }

}

    


