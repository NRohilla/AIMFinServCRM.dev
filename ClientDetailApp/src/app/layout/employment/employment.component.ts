import { Component, Injectable, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
    templateUrl: './employment.component.html',
    animations: [routerTransition()]
})
export class EmploymentComponent implements OnInit {
    public _EditDetails: boolean = false;
   
    constructor() { }

    ngOnInit() {
        
    }
    EditDetails() { this._EditDetails = true; }
    CancelEditingDetails() { this._EditDetails = false; }

    displayedColumns = ['source', 'profession', 'employer', 'duration', 'income', 'status'];
    dataSource = ELEMENT_DATA;
}

export interface Element {
    profession: string;
    source: string;
    employer: string;
    duration: string;
    income: number;
    status: string;
}
const ELEMENT_DATA: Element[] = [
    { source: 'Salaried', profession: 'Teacher', employer: 'ABC Consultant', duration: '5 Months', income: 50000, status: 'Current' },
    { source: 'Salelf Employed', profession: 'Architect', employer: 'XYz Company', duration: '8 Months', income: 50000, status: 'Previous' },

];