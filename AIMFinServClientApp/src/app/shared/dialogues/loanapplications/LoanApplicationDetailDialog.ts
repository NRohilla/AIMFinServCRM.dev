import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApplicantPersonalDetailsComponent } from '../../../layout/LoanApplications/components/app.applicant.personaldetails';
import { ApplicantEmployementComponent } from '../../../layout/LoanApplications/components/app.applicant.employementdetails';
import { ApplicantQualificationDetailsComponent } from '../../../layout/LoanApplications/components/app.applicant.qualificationdetails';
import { ApplicantCommunicationDetailsComponent } from '../../../layout/LoanApplications/components/app.applicant.communicationdetails';
//import { LoanapplicationsComponent } from '../../../layout/LoanApplications/loanapplications.component';

@Component({
    templateUrl: './LoanApplicationDetailDialog.html',
})
export class LoanApplicationDetailDialog {
    @ViewChild(ApplicantPersonalDetailsComponent)
    private _ApplicantPersonalDetailsComponent: ApplicantPersonalDetailsComponent;
    @ViewChild(ApplicantQualificationDetailsComponent)
    private _ApplicantQualificationDetailsComponent: ApplicantQualificationDetailsComponent;
    @ViewChild(ApplicantEmployementComponent)
    private _ApplicantEmployementComponent: ApplicantEmployementComponent;
    @ViewChild(ApplicantCommunicationDetailsComponent)
    private _ApplicantCommunicationDetailsComponent: ApplicantCommunicationDetailsComponent;

    private _ApplicantID: string = '';
    constructor(
        public dialogRef: MatDialogRef<LoanApplicationDetailDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    SaveNewApplicant(): void {
        debugger;
        this._ApplicantPersonalDetailsComponent.SaveLoanApplicationPersonalDetails()
            .subscribe(res => this.SaveLoanApplicationPersonalDetailsSuccess(res), res => this.SaveLoanApplicationPersonalDetailsError(res));
    }


    SaveLoanApplicationPersonalDetailsSuccess(res) {
        debugger;
        this._ApplicantID = JSON.parse(res._body);
        if (this._ApplicantID.trim().length > 0) {
            this._ApplicantQualificationDetailsComponent.SaveLoanApplicationQualificationDetails(this._ApplicantID.trim())
                .subscribe(res => this.SaveLoanApplicationQualificationDetailsSuccess(res), res => this.SaveLoanApplicationQualificationDetailsError(res))
        }
    }

    SaveLoanApplicationPersonalDetailsError(res) { }

    SaveLoanApplicationQualificationDetailsSuccess(res) {
        debugger;
        var Data = JSON.parse(res._body);
        if (Data == true) {
            this._ApplicantEmployementComponent.SaveLoanApplicationEmployementDetails(this._ApplicantID.trim())
                .subscribe(res => this.SaveLoanApplicationEmployementDetailsSuccess(res), res => this.SaveLoanApplicationEmployementDetailsError(res));
        }
    }

    SaveLoanApplicationQualificationDetailsError(res) { }


    SaveLoanApplicationEmployementDetailsSuccess(res) {
        debugger;
        var Data = JSON.parse(res._body);
        if (Data == true) {
            this._ApplicantCommunicationDetailsComponent.SaveLoanApplicationCommunicationDetails(this._ApplicantID.trim())
                .subscribe(res => this.SaveLoanApplicationCommunicationDetailsSuccess(res), res => this.SaveLoanApplicationCommunicationDetailsError(res));
        }
    }

    SaveLoanApplicationEmployementDetailsError(res) { }

    SaveLoanApplicationCommunicationDetailsSuccess(res) {
        var Data = JSON.parse(res._body);
        if (Data == true) {
            alert("The Applicant have been added successfully");
        }
    }

    SaveLoanApplicationCommunicationDetailsError(res) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
