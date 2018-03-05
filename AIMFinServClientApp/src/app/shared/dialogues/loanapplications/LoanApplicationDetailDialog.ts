import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    templateUrl: './LoanApplicationDetailDialog.html',
})
export class LoanApplicationDetailDialog {

    constructor(
        public dialogRef: MatDialogRef<LoanApplicationDetailDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}