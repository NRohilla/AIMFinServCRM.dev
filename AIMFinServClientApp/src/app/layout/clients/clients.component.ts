import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';//https://www.telerik.com/kendo-angular-ui/components/grid/
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { RowArgs, GridDataResult, DataStateChangeEvent, RowClassArgs } from '@progress/kendo-angular-grid';

@Component({
    templateUrl: './clients.component.html',
    styleUrls:
    [
        './clients.component.scss',
    ],
    animations: [routerTransition()],
})
export class ClientsComponent implements OnInit {
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public ServiceRequestGridData: Observable<any[]>;
    constructor(public router: Router, private _LocalStorageService: LocalStorageService) { }
    ngOnInit() { }
}
