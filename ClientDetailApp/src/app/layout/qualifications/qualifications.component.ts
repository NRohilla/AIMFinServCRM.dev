import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ClientsService } from '../../services/app.clients.service';
import 'rxjs/add/observable/of';
import { MatTableModule, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
declare var jquery: any;
declare var $: any;

export interface Element {
    UniversityName: string,
    CourseName: string,
    TypeOfQualification: string,
    PassingYear: string,
}

@Component({
    templateUrl: './qualifications.component.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})

export class QualificationsComponent implements OnInit {
    public _EditDetails: boolean = false;
    public ApplicantID: string = '';

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    public displayedColumns = ['University Name', 'Course Name', 'TypeOfQualification', 'PassingYear'];
    public dataSource: any;
    public QualificationDetails = {
        QualificationID: '',
        ApplicantID: '',
        FirstName: '',
        PassingYear: '',
        CourseName: '',
        UniversityName: '',
        TypeOfQualification: '',
        Qualifications: ''
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService, public dialog: MatDialog) {
        this._ClientsService.GetMatQualificationDataByAppID(this._LocalStorageService.get("LoggedInApplicantId")).subscribe(res => this.GetMatQualificationDataByAppIDSuccess(res), res => this.GetMatQualificationDataByAppIDError(res))
    }

    ngOnInit() {
        this.QualificationDetails = {
            QualificationID: '',
            ApplicantID: '',
            FirstName: '',
            PassingYear: '',
            CourseName: '',
            UniversityName: '',
            TypeOfQualification: '',
            Qualifications: ''
        };

        this.ApplicantID = this._LocalStorageService.get("LoggedInApplicantId");
        this._ClientsService.GetQualificationDetailsByAppID(this.ApplicantID).subscribe(res => this.GetQualificationDetailsSuccess(res), res => this.GetQualificationDetailsError(res));

        $(document).ready(function () {
            $(".content-section").parent().parent().parent().parent().parent().css("background", "#ffffff");
        });
    }

    GetMatQualificationDataByAppIDSuccess(res) {
        debugger;
        this.dataSource = new MatTableDataSource<Element>(JSON.parse(res._body));
        this.dataSource.paginator = this.paginator;
    }

    GetMatQualificationDataByAppIDError(res) { }

    GetQualificationDetailsSuccess(res) {
        this.QualificationDetails = JSON.parse(res._body);
    }

    GetQualificationDetailsError(res) {
    }

    GetQualificationDetailsGridSuccess(res) {
        this.dataSource = JSON.parse(res._body);
    }

    GetQualificationDetailsGridError(res) {
    }

   UpdateDetails() {
        this._ClientsService.UpdateQualificationDetailsByAppID(this.QualificationDetails).subscribe(res => this.UpdateQualificationDetailsByAppIDSuccess(res), res => this.UpdateQualificationDetailsByAppIDError(res));
    }

   UpdateQualificationDetailsByAppIDSuccess(res)
   {
        this._EditDetails = false;
        this._ClientsService.GetQualificationDetailsByAppID(this.ApplicantID).subscribe(res => this.GetQualificationDetailsSuccess(res), res => this.GetQualificationDetailsError(res));
    }

    UpdateQualificationDetailsByAppIDError(res) {
    }

    CancelEditingDetails() {
        this._EditDetails = false;
    }

    ViewDetails(QualificationID)
    {
        this._ClientsService.ViewQualificationDetailsByAppID(QualificationID).subscribe(res => this.ViewQualificationDetailsByAppIDSuccess(res), res => this.ViewQualificationDetailsByAppIDError(res));
    }

    ViewQualificationDetailsByAppIDSuccess(res)
    {
        this._EditDetails = false;
        this.QualificationDetails = JSON.parse(res._body);
    }

    ViewQualificationDetailsByAppIDError(res) { }

    EditDetails() {
        this._EditDetails = true;
    }
} 
