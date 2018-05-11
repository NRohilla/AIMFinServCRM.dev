import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private _LocalStorageService: LocalStorageService ) {
    }
    canActivate() {
        if (this._LocalStorageService.get('LoggedInEmailId') != undefined && this._LocalStorageService.get('LoggedInEmailId') != null) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
