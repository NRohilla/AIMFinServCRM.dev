import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApplicantPersonalDetailsComponent } from '../../../layout/LoanApplications/components/app.applicant.personaldetails';
import { ApplicantEmployementComponent } from '../../../layout/LoanApplications/components/app.applicant.employementdetails';
import { ApplicantQualificationDetailsComponent } from '../../../layout/LoanApplications/components/app.applicant.qualificationdetails';
import { ApplicantCommunicationDetailsComponent } from '../../../layout/LoanApplications/components/app.applicant.communicationdetails';
@Component({
    templateUrl: './LoanApplicationDetailDialog.html',
})
export class LoanApplicationDetailDialog {
    @ViewChild(ApplicantPersonalDetailsComponent)
    private _ApplicantPersonalDetailsComponent: ApplicantPersonalDetailsComponent;
    @ViewChild(ApplicantEmployementComponent)
    private _ApplicantEmployementComponent: ApplicantEmployementComponent;
    @ViewChild(ApplicantQualificationDetailsComponent)
    private _ApplicantQualificationDetailsComponent: ApplicantQualificationDetailsComponent;
    @ViewChild(ApplicantCommunicationDetailsComponent)
    private _ApplicantCommunicationDetailsComponent: ApplicantCommunicationDetailsComponent;

    constructor(
        public dialogRef: MatDialogRef<LoanApplicationDetailDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
        debugger;
        if (this._ApplicantPersonalDetailsComponent.testpersonal() == true) {
            if (this._ApplicantEmployementComponent.testemployment() == true) {
                if (this._ApplicantQualificationDetailsComponent.testqualification() == true) {
                    if (this._ApplicantCommunicationDetailsComponent.testcommunication()==true){ 
                    console.log('Every click handled of childs');
                    }
                }
            }
        }
    }

    ngAfterViewInit() {
        // child is set

    }
}
