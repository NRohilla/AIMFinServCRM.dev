import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClientsService } from '../../services/app.clients.service';

@Component({
    templateUrl: './qualifications.component.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class QualificationsComponent implements OnInit {
    public _ViewApplicationDetails: boolean = false;
    public gridData: any[];
    public _EditDetails: boolean = false;
    public ApplicantID: string = '';

    public QualificationDetails = {
        QualificationID: '',
        ApplicantID: '',
        FirstName: '',
        PassingYear: '',
        CourseName: '',
        UniversityName: '',
        TypeOfQualification: ''
    };


    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog) { }

    ngOnInit() {

        if (this._LocalStorageService.get("ApplicantID") != undefined) {
            this.ApplicantID = this._LocalStorageService.get("ApplicantID");
            this._ClientsService.GetQualificationDetailsByAppID(this.ApplicantID).subscribe(res => this.GetQualificationDetailsSuccess(res), res => this.GetQualificationDetailsError(res));

        }
    }
    GetQualificationDetailsSuccess(res) {
        this.QualificationDetails = JSON.parse(res._body);
    }
    GetQualificationDetailsError(res) {
    }

    UpdateDetails() {
        this._EditDetails = false;
        this._ClientsService.UpdateQualificationDetailsByAppID(this.QualificationDetails).subscribe(res => this.UpdateQualificationDetailsByAppIDSuccess(res), res => this.UpdateQualificationDetailsByAppIDError(res));
    }
    UpdateQualificationDetailsByAppIDSuccess(res) {
        this.QualificationDetails = JSON.parse(res._body);
    }
    UpdateQualificationDetailsByAppIDError(res) { }

    CancelEditingDetails() { this._EditDetails = false; }

    EditDetails() {
        this._EditDetails = true;
    }
    displayedColumns = ['position', 'name', 'regular', 'passing'];
    dataSource = ELEMENT_DATA;


}

export interface Element {
    name: string;
    position: number;
    regular: string;
    passing: number;
}
const ELEMENT_DATA: Element[] = [
    { position: 1, name: 'B. Tech.', regular: 'Regular', passing: 2010 },
    { position: 1, name: '10 +2 .', regular: 'Regular', passing: 2006 },
    { position: 1, name: '10th', regular: 'Regular', passing: 2004 }
];
