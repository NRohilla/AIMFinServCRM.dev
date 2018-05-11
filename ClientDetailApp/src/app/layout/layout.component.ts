import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    public _showDetails: boolean = false;
    constructor(private _LocalStorageService: LocalStorageService) {

        if (this._LocalStorageService.get("LoggedInEmailId") != null && this._LocalStorageService.get("LoggedInEmailId") != undefined) {
            this._showDetails = true;
        }
    }

    ngOnInit() {}
}
