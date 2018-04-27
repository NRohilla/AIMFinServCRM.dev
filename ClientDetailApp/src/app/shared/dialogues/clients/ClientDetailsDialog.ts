import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    templateUrl: './ClientDetailsDialog.html',
})
export class ClientDetailsDialog {

    constructor(
        public dialogRef: MatDialogRef<ClientDetailsDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}