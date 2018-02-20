import { Component, Injectable, ViewChild, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { Form, FormControl, Validators  } from '@angular/forms';
import 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from '../../../environments/environment';

@Component({
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    animations: [routerTransition()],
})
export class ClientsComponent implements OnInit {
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    constructor(public router: Router, private _LocalStorageService: LocalStorageService) { }
    ngOnInit() { }
}
