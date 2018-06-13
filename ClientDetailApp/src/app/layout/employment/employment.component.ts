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
import { MastersService } from '../../services/app.masters.service';
declare var jquery: any;
declare var $: any;

export interface Element {
    SourceOfIncome: string,
    Profession: string,
    EmployerName: string,
    Duration: string,
    Income: string,
    Status: string
}


@Component({
    templateUrl: './employment.component.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class EmployementComponent implements OnInit {
    public _EditDetails: boolean = false;
    public ApplicantID: string = '';
    public _EmploymentType = [];
    public _ProfessionType = [];
    items: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    public displayedColumns = ['Source of Income', 'Profession', 'Employer Name', 'Duration', 'Income', 'Status'];
    public dataSource: any;

    public EmploymentDetails = {
      AutoID:'',
      EmploymentID:'',
      ApplicantID:'',
      SourceOfIncome:'',
      ProfessionTypeID:'',
      EmployerName:'',
      Duration:'',
      Income:'',
      Status: '',
      Profession: '',
      EmployementType: '',
      _EmploymentTypeDetail: {},
      _ProfessionTypeDetail: {}
    };


    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MasterService: MastersService, private _ClientsService: ClientsService, public dialog: MatDialog) { }

    ngOnInit() {
        this.EmploymentDetails = {
            AutoID: '',
            EmploymentID: '',
            ApplicantID: '',
            SourceOfIncome: '',
            ProfessionTypeID: '',
            EmployerName: '',
            Duration: '',
            Income: '',
            Status: '',
            Profession: '',
            EmployementType:'',
            _EmploymentTypeDetail: {},
            _ProfessionTypeDetail: {}
        };
        this.GetEmploymentDetails();
        this.GetEmploymentTypes();
        this.GetProfessionType();
        this._ClientsService.GetMatEmploymentDetailsByAppID(this.ApplicantID).subscribe(res => this.GetMatEmploymentDetailsByAppIDSuccess(res), res => this.GetMatEmploymentDetailsByAppIDError(res));
        $(document).ready(function () {
            $(".content-section").parent().parent().parent().parent().parent().css("background", "#ffffff");
        });

    }
    GetMatEmploymentDetailsByAppIDSuccess(res) {
        debugger;
        this.dataSource = new MatTableDataSource<Element>(JSON.parse(res._body));
        this.dataSource.paginator = this.paginator;
    }

    GetMatEmploymentDetailsByAppIDError(res) { }

    GetEmploymentDetails() {
        debugger;
        this.ApplicantID = this._LocalStorageService.get("LoggedInApplicantId");
        this._ClientsService.GetEmploymentDetailsByAppID(this.ApplicantID).subscribe(res => this.GetEmploymentDetailsByAppIDSuccess(res), res => this.GetEmploymentDetailsByAppIDError(res));
    }
    GetEmploymentDetailsByAppIDSuccess(res) {
        debugger;
        this.EmploymentDetails = JSON.parse(res._body);
    }
    GetEmploymentDetailsByAppIDError(res) {
    }

    UpdateDetails() {
        debugger;
        this._ClientsService.UpdateEmploymentDetailsByAppID(this.EmploymentDetails).subscribe(res => this.UpdateEmploymentDetailsByAppIDSuccess(res), res => this.UpdateEmploymentDetailsByAppIDError(res));
    }
    UpdateEmploymentDetailsByAppIDSuccess(res) {
        this._EditDetails = false;
        this._ClientsService.GetEmploymentDetailsByAppID(this.ApplicantID).subscribe(res => this.GetEmploymentDetailsByAppIDSuccess(res), res => this.GetEmploymentDetailsByAppIDError(res));

    }
    UpdateEmploymentDetailsByAppIDError(res) { }

    EditDetails() {
        this._EditDetails = true;
    }

    ViewDetails(EmploymentID)
    {
        this._ClientsService.ViewEmploymentDetailsByAppID(EmploymentID).subscribe(res => this.ViewDetailsByAppIDSuccess(res), res => this.ViewDetailsByAppIDError(res));
    }

    ViewDetailsByAppIDSuccess(res)
    {
        this._EditDetails = false;
        this.EmploymentDetails = JSON.parse(res._body);
    }

    GetEmploymentTypes() {
        debugger;
        this._MasterService.GetEmploymentTypes().subscribe(res => this.GetEmploymentTypesSuccess(res), res => this.GetEmploymentTypesError(res));
    }
    GetEmploymentTypesSuccess(res) {
        debugger;
        this._EmploymentType = JSON.parse(res._body);
    }
    GetEmploymentTypesError(res) { }

    GetProfessionType() {
        this._MasterService.GetProfessionTypes().subscribe(res => this.GetProfessionTypesSuccess(res), res => this.GetProfessionTypesError(res));
    }
    GetProfessionTypesSuccess(res) {
        debugger;
        this._ProfessionType = JSON.parse(res._body);
    }
    GetProfessionTypesError(res) { }


    ViewDetailsByAppIDError(res) { }
    CancelEditingDetails()
    {
        debugger;
        this._EditDetails = false;
        this._ClientsService.GetEmploymentDetailsByAppID(this.ApplicantID).subscribe(res => this.GetEmploymentDetailsByAppIDSuccess(res), res => this.GetEmploymentDetailsByAppIDError(res));
        this.router.navigate(['/employment']);
    }
}

