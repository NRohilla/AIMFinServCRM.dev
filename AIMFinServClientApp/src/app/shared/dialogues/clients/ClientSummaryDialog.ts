import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { MastersService } from '../../../services/app.masters.service';
import { ClientsService } from '../../../services/app.clients.service';
import { routerTransition } from '../../../router.animations';

@Component({
    templateUrl: './ClientSummaryDialog.html',
    animations: [routerTransition()],
    providers: [ClientsService, MastersService]
})
export class ClientSummaryDialog {
    public ApplicantID: string = '';
    public URL: string = '';

    constructor(
        public dialogRef: MatDialogRef<ClientSummaryDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, private _LocalStorageService: LocalStorageService, private _MasterService: MastersService, private _ClientsService: ClientsService, public dialog: MatDialog) { }

    public ClientDetails = {
        AutoID: '',
        ApplicantID: '',
        Title: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        MaritalStatus: '',
        NoOfDependents: '',
        NZResidents: '',
        CountryOfBirth: '',
        ApplicantTypeID: '',
        EmailID: '',
        MobileNo: '',
        HomePhoneNo: '',
        WorkPhoneNo: '',
        ApplicantImage: '',
        FileTypeID: '',
        FileType: '',
        FileName: ''
    };

    ngOnInit() {
        this.ClientDetails = {
            AutoID: '',
            ApplicantID: '',
            Title: '',
            FirstName: '',
            MiddleName: '',
            LastName: '',
            Gender: '',
            DateOfBirth: '',
            MaritalStatus: '',
            NoOfDependents: '',
            NZResidents: '',
            CountryOfBirth: '',
            ApplicantTypeID: '',
            EmailID: '',
            MobileNo: '',
            HomePhoneNo: '',
            WorkPhoneNo: '',
            ApplicantImage: '',
            FileTypeID: '',
            FileType: '',
            FileName: ''
        };
        debugger;
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientDetailsSuccess(res), res => this.GetClientDetailsError(res));
        }
    }
    GetClientDetailsSuccess(res) {
        if (res._body != null || res._body != undefined || res._body.toString().trim().length > 0) {
            this.ClientDetails = JSON.parse(res._body);
            this.URL = this.GetOriginalContentForPriview(this.ClientDetails.FileType) + this.ClientDetails.ApplicantImage;
        }
    }
    GetOriginalContentForPriview(FileType) {
        debugger;
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
    GetClientDetailsError(res) { }

     OnSelectClientPersonalAttachmentFile(event) {
        debugger;
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            this.ClientDetails.FileType = file.type;
            this.ClientDetails.FileName = file.name;
            reader.onload = (event) => {
                this.URL = reader.result;
                this.ClientDetails.ApplicantImage = reader.result.split(',')[1];
            };
        }
    }

     UpdateImage() {
         debugger;
         this.ClientDetails.ApplicantImage = this.ClientDetails.ApplicantImage;
         this.ClientDetails.FileType = this.ClientDetails.FileType;
         this._ClientsService.UpdateClientPersonalDetails(this.ClientDetails).subscribe(res => this.UpdateImageSuccess(res), res => this.UpdateImageError(res));
     }

     UpdateImageSuccess(res) {
         this.URL = this.GetOriginalContentForPriview(this.ClientDetails.FileType) + this.ClientDetails.ApplicantImage;
         this.dialogRef.close();
     }

     UpdateImageError(res) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
