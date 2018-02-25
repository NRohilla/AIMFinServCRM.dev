import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class MastersService {
    headers: Headers;
    options: RequestOptions;
    baseurl: string = '';

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
        this.baseurl = environment.baseAPIUrl;
    }

    GetEmploymentTypes() {
        return this._http.get(this.baseurl + "Masters/GetEmploymentTypes", this.options);
    }

    GetQualificationTypes() {
        return this._http.get(this.baseurl + "Masters/GetQualificationTypes", this.options);
    }

    GetRelationshipTypes() {
        return this._http.get(this.baseurl + "Masters/GetRelationshipTypes", this.options);
    }

    GetProfessionTypes() {
        return this._http.get(this.baseurl + "Masters/GetProfessionTypes", this.options);
    }

    GetExpenseTypes() {
        return this._http.get(this.baseurl + "Masters/GetExpenseTypes", this.options);
    }

    GetAssetsTypes() {
        return this._http.get(this.baseurl + "Masters/GetAssetsTypes", this.options);
    }

    GetLiabilityTypes() {
        return this._http.get(this.baseurl + "Masters/GetLiabilityTypes", this.options);
    }

    SwitchEmploymentEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchEmploymentEntityStatus?ID=" + ID, this.options);
    }

    SwitchQualificationEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchQualificationEntityStatus?ID=" + ID, this.options);
    }

    SwitchRelationshipEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchRelationshipEntityStatus?ID=" + ID, this.options);
    }

    SwitchProfessionEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchProfessionEntityStatus?ID=" + ID, this.options);
    }

    SwitchAssetsEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchAssetsEntityStatus?ID=" + ID, this.options);
    }

    SwitchExpenseEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchExpenseEntityStatus?ID=" + ID, this.options);
    }

    SwitchLiabilityEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchLiabilityEntityStatus?ID=" + ID, this.options);
    }

    UpdateEmploymentEntity(EmploymentTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateEmploymentEntity", EmploymentTypeMaster, this.options);
    }

    UpdateQualificationEntity(QualificationTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateQualificationEntity", QualificationTypeMaster, this.options);
    }

    UpdateRelationshipEntity(RelationshipTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateRelationshipEntity", RelationshipTypeMaster, this.options);
    }

    UpdateProffessionEntity(ProfessionTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateProffessionEntity", ProfessionTypeMaster, this.options);
    }

    UpdateAssetsEntity(AssetsTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateAssetsEntity", AssetsTypeMaster, this.options);
    }

    UpdateExpenseEntity(ExpenseTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateExpenseEntity", ExpenseTypeMaster, this.options);
    }

    UpdateLiabilityEntity(LiabilityTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateLiabilityEntity", LiabilityTypeMaster, this.options);
    }
}