import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {MastersService} from '../../../services/app.masters.service';

@Component({
    templateUrl: './expense.component.html',
    animations: [routerTransition()],
    providers: [MastersService]
})
export class ExpenseComponent implements OnInit {
    public _EditExpenseDetails: boolean = false;
    public _ExpenseTypes: {
        AutoID: "",
        Description: "",
        ExpenseTypeID: "",
        Frequency: "",
        IsActive: ""
    };

    public _ExpenseObj: {
        AutoID: "",
        Description: "",
        ExpenseTypeID: "",
        Frequency: "",
        IsActive: ""
    };

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _MastersService: MastersService) { }

    ngOnInit() {
        this._MastersService.GetExpenseTypes().subscribe(res => this.GetExpenseSuccess(res), res => this.GetExpenseError(res));
    }
    GetExpenseSuccess(res) {
        debugger;
        this._ExpenseTypes = JSON.parse(res._body);
    }
    GetExpenseError(res) { }

    SwitchStatus(ID) {
        debugger;
        this._MastersService.SwitchExpenseEntityStatus(ID).subscribe(res => this.SwitchExpenseSuccess(res), res => this.SwitchExpenseError(res));
    }
    SwitchExpenseSuccess(res) { this._MastersService.GetExpenseTypes().subscribe(res => this.GetExpenseSuccess(res), res => this.GetExpenseError(res)); }
    SwitchExpenseError(res) { }

    GridSelectionChange(data, selection) {
        this._EditExpenseDetails = true;
        this._ExpenseObj = data.data.data[selection.index]
    }

    UpdateExpenseType() {
        debugger;
        this._MastersService.UpdateExpenseEntity(this._ExpenseObj).subscribe(res => this.UpdateExpenseSuccess(res), res => this.UpdateExpenseError(res));
    }

    UpdateExpenseSuccess(res) {
        this._MastersService.GetExpenseTypes().subscribe(res => this.GetExpenseSuccess(res), res => this.GetExpenseError(res));
        this.CancelExpenseType();
    }
    UpdateExpenseError(res) { }
    CancelExpenseType() {
        debugger;
        this._EditExpenseDetails = false;
        this._ExpenseObj = {
            ExpenseType: '',
            ID: '',
            IsActive: '',
        };
    }
}