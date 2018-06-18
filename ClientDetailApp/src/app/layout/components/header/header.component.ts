import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Component, Injectable, ViewChild, OnInit } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { environment } from '../../../../environments/environment';
import { UserOperationService } from '../../../services/app.userops.service';
import { AuthenticateService } from '../../../services/app.auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [UserOperationService, AuthenticateService]
})
export class HeaderComponent implements OnInit {
    public _ShowDetails: boolean = false;
    pushRightClass: string = 'push-right';
    public _UserName: string = '';

    public AuthenticationToken: string = '';
    public IsLoggedIn: boolean = false;

    public URL: any;
    public _UserDetails = {
        AccountExpired: '',
        AccountLocked: '',
        ActivaitonCode: '',
        CreatedBy: '',
        CreatedOn: '',
        Description: '',
        DisplayName: '',
        Email: '',
        FailedPasswordAttempts: '',
        FirstName: '',
        IsActive: '',
        LastLoggedOn: '',
        LastName: '',
        LastPasswordChangedOn: '',
        LocationId: '',
        LoginID: '',
        Mobile: '',
        ModifiedBy: '',
        ModifiedOn: '',
        Password: '',
        PasswordExpired: '',
        PasswordResetToken: '',
        Role: '',
        UserGuid: '',
        UserId: '',
        ApplicantImage: '',
        FileType: '',
        FileName: '',
        Extension: ''
    }

    constructor(private translate: TranslateService, public router: Router, private _LocalStorageService: LocalStorageService,
        private _UserOperationService: UserOperationService, private _AuthenticateService: AuthenticateService, private activatedRoute: ActivatedRoute) {
        debugger;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        debugger;
        this._UserName = this.activatedRoute.snapshot.queryParams["LoggedInEmailId"];
        console.log(this._UserName)
        if (this._UserName != undefined) {
            this._AuthenticateService.AuthenticateLogin(this._UserName, "")
                .subscribe(result => this.RequestSuccess(result), result => this.RequestError(result));
            this.URL = this._LocalStorageService.get('this.URL');
        }
        else {
            //check if logged in or not
            if (!(this._LocalStorageService.get('LoggedInEmailId') != null && this._LocalStorageService.get('LoggedInEmailId') != undefined)) {
                // no redirect to admin
                debugger;
                window.location.href = environment.baseAdminURl;
            } else {
                debugger;
                this._ShowDetails = true;
                this._UserName = this._LocalStorageService.get('this._UserName');
                this._UserDetails = this._LocalStorageService.get('this._UserDetails');
                this.URL = this._LocalStorageService.get('this.URL');
            }
        }
    }

    RequestSuccess(result) {
        var resultReturned = JSON.parse(result._body);
        this._LocalStorageService.set('LoggedInEmailId', this._UserName);
        this._LocalStorageService.set('LoggedInApplicantId', resultReturned._ApplicantID);
        this._LocalStorageService.set('ActivaitonCode', resultReturned.ActivaitonCode);
        this.UserInfo();
    }


    RequestError(err) { }


    UserInfo() {
        if (this._LocalStorageService.get('LoggedInEmailId') != undefined && this._LocalStorageService.get('LoggedInEmailId') != null) {
            this.URL = this._UserDetails.ApplicantImage;
            this._UserOperationService.GetLoggedInUserInfo(<string>this._LocalStorageService.get('LoggedInEmailId'))
                .subscribe(result => this.UserInfoSuccess(result), result => this.UserInfoError(result));
        }
    }

    UserInfoSuccess(result) {

        this._UserName = JSON.parse(JSON.parse(result._body)).FirstName + " " + JSON.parse(JSON.parse(result._body)).LastName;
        this._UserDetails = JSON.parse((JSON.parse(result._body)));
        console.log(this._UserDetails)

        this.URL = this.GetOriginalContentForPriview(this._UserDetails.FileType) + this._UserDetails.ApplicantImage;

        this._LocalStorageService.set('this._UserName', this._UserName);
        this._LocalStorageService.set('this._UserDetails', this._UserDetails);
        this._LocalStorageService.set('this.URL', this.URL);
        window.location.href = environment.baseApplicationURL;
    }

    GetOriginalContentForPriview(FileType) {
        if (FileType == "text/plain")
            return 'data:text/plain;base64,';
        if (FileType == 'application/pdf')
            return 'data:application/pdf;base64,';
        if (FileType == "image/png")
            return 'data:image/png;base64,';
        if (FileType == "image/jpeg")
            return 'data:image/jpeg;base64,';
        if (FileType == 'image/gif')
            return 'data:image/gif;base64,';
    }

    UserInfoError(err) {
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        var IsLoggedIn = localStorage.getItem('isLoggedin') === "true";
        this.AuthenticationToken = this._LocalStorageService.get('ActivaitonCode');

        this._AuthenticateService.LoggedOffUser(this.AuthenticationToken, IsLoggedIn)
            .subscribe(result => this.LoggedOffUserSuccess(result), result => this.LoggedOffUserError(result));

    }

    LoggedOffUserSuccess(res) {
        this._LocalStorageService.clearAll();
        window.location.href = environment.baseAdminURl;
    }

    LoggedOffUserError(res) { }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
