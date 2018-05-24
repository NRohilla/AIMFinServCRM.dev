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

@Component({
    templateUrl: './manageuser.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class ManageuserComponent implements OnInit {

    public _ManageUserGridData: {
        FirstName:'',
        LastName: '',
        Mobile: '',
        Email: '',
        Role: '',
        DisplayName: ''
    }

    public _UserTypeRole:any= {}

    public _RoleOfUser: {
        Name: '',
        RoleId: '',
        Description:''
    }

    public _ClientName: {
        FirstName:''
    }

    public _SelectApplicantId={
        ApplicantID:''
    };

    public _UserRecord: any = {};
    public _Operationtitle: string = "Add";
    public _isClientRole: boolean = false;
    public _EditUser: boolean = false;

    constructor(private _mastersServices: MastersService, public dialog: MatDialog) { }

    ngOnInit() {
        this.GetAllUser();
        this.GetRole();
    }

    GetAllUser() {
        this._mastersServices.GetAllUser().subscribe(res => this.GetAllUserSuccess(res), res => this.GetAllUserError(res));
    }

    GetAllUserSuccess(res) {
        this._ManageUserGridData = JSON.parse(res._body);
    }

    GetAllUserError(res) { }

    GetRole() {
        this._mastersServices.GetRole().subscribe(res => this.GetRoleSuccess(res), res => this.GetRoleError(res));
    }

    GetRoleSuccess(res) {
        this._RoleOfUser = JSON.parse(res._body);
    }

    GetRoleError(res) {}

    SelectApplicantName(applicantId) {
        this._EditUser = false;
        this._mastersServices.GetUserDetails(applicantId).subscribe(res => this.GetUserDetailsSuccess(res), res => this.GetUserDetailsError(res));
    }

    GetUserDetailsSuccess(res) {
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
        }else {
            this._isClientRole = false;
        }
    }

    GetApplicantsSuccess(res) {
        this._ClientName = JSON.parse(res._body);
        console.log(this._ClientName)
    }

    GetApplicantsError(res) {}

    AddUser() {
        this._mastersServices.AddUser(this._UserRecord).subscribe(res => this.AddUserSuccess(res), res => this.AddUserError(res));
    }

    AddUserSuccess(res) {
        this._mastersServices.GetAllUser().subscribe(res => this.GetAllUserSuccess(res), res => this.GetAllUserError(res));
        this.CancelManageUserType();
    }

    AddUserError(res) { }

    CancelManageUserType() {
        this._UserRecord = {}
        this._Operationtitle = "Update";
        
    }

    ChangePassword(dataItem): void {
        let dialogRef = this.dialog.open(ManageUserDialog,{ data: { dataItem } });
       
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
}
