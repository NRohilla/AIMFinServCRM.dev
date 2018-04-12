import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Component({
    selector: `qualifications-qualification-details`,
    templateUrl: './app.qualifications.qualificationdetails.html',
    animations: [routerTransition()],
    providers: []
})
export class QualificationsQualificationDetailsComponent implements OnInit {
    constructor(public router: Router, private _LocalStorageService: LocalStorageService) { }
    ngOnInit() {
    }
}