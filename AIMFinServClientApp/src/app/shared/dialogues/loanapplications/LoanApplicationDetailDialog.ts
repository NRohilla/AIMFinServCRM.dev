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

    constructor(
        public dialogRef: MatDialogRef<LoanApplicationDetailDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    SaveNewApplicant() : void {
        debugger;
        var getApplicantID = this._ApplicantPersonalDetailsComponent.SaveLoanApplicationPersonalDetailsSuccess();

        if (getApplicantID.toString().trim().length > 0) {

            var IsQualSaved = this._ApplicantQualificationDetailsComponent.SaveLoanApplicationQualificationDetails();

            if (IsQualSaved == true) {

                var IsEmploymentsaved = this._ApplicantEmployementComponent.SaveLoanApplicationEmployementDetails();

                if (IsEmploymentSaved == true) {

                       this._ApplicantCommunicationDetailsComponent.SaveLoanApplicationCommunicationDetails();
                    }

                }
            }
        }
        
        //this.dialogRef.close();
        //this._LoanapplicationsComponent._ViewApplicationDetails = !this._LoanapplicationsComponent._ViewApplicationDetails;
    

    onNoClick(): void {
        this.dialogRef.close();
        debugger;
        //if (this._ApplicantPersonalDetailsComponent.SaveLoanApplicationPersonalDetails() == true) {
        //    if (this._ApplicantEmployementComponent.SaveLoanApplicationEmployementDetails() == true) {
        //        if (this._ApplicantQualificationDetailsComponent.SaveLoanApplicationQualificationDetails() == true) {
        //            if (this._ApplicantCommunicationDetailsComponent.SaveLoanApplicationCommunicationDetails()==true){ 
        //                console.log('Every click handled of childs');



        //            }
        //        }
        //    }
        //}
    }

    ngAfterViewInit() {
        // child is set

    }
}
