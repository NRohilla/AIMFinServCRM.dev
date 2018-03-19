import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({})
export class AppBaseComponent {
    constructor() { }
    //trim all the whitespaces of the JSON object
    trimObj(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (typeof obj[prop] == 'string') {
                    obj[prop] = obj[prop].trim();
                } else if (typeof obj[prop] == 'object') {
                    this.trimObj(obj[prop]);
                }
            }
        }
        return obj;
    }
}