import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private _LocalStorageService: LocalStorageService, private route: ActivatedRoute) {
        debugger; 
        var test= router.parseUrl(router.url);
        this.route.params.subscribe((params: Params) => {
            let userId = params['test'];
            console.log(userId);
        });
    }

    canActivate() {
        debugger;
        if (this._LocalStorageService.get('LoggedInEmailId') != undefined
            && this._LocalStorageService.get('LoggedInEmailId') != null) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    setLoggedInUserEmail(data) {
        debugger;
        if (data != undefined)
            this._LocalStorageService.set('LoggedInEmailId', data);
    }
}
