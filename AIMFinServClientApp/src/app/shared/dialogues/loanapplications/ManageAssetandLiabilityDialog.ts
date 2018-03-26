import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddAssetComponent } from '../../dialogues/loanapplications/AddAsset.component';
import { AddLiabilityComponent } from '../../dialogues/loanapplications/AddLiability.component';

@Component({
    templateUrl: './ManageAssetAndLiabilityDialog.html',
})
export class ManageAssetAndLiabilityDialog {
    @ViewChild(AddAssetComponent)
    private _AddAssetComponent: AddAssetComponent;
    @ViewChild(AddLiabilityComponent)
    private _AddLiabilityComponent: AddLiabilityComponent;
    
    private _ApplicantID: string = '';
    constructor(
        public dialogRef: MatDialogRef<ManageAssetAndLiabilityDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }


    onNoClick(): void {
        this.dialogRef.close();
        debugger;
    }
}
