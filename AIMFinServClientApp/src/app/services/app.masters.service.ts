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
    //Get types
    GetApplicantTypes() {
        return this._http.get(this.baseurl + "Masters/GetApplicantTypes", this.options);
    }

    GetAssetsTypes() {
        return this._http.get(this.baseurl + "Masters/GetAssetsTypes", this.options);
    }

    GetEmploymentTypes() {
        return this._http.get(this.baseurl + "Masters/GetEmploymentTypes", this.options);
    }

    GetExpenseTypes() {
        return this._http.get(this.baseurl + "Masters/GetExpenseTypes", this.options);
    }

    GetLiabilityTypes() {
        return this._http.get(this.baseurl + "Masters/GetLiabilityTypes", this.options);
    }

    GetLoanTypes() {
        return this._http.get(this.baseurl + "Masters/GetLoanTypes", this.options);
    }

    GetLoanrateTypes() {
        return this._http.get(this.baseurl + "Masters/GetLoanrateTypes", this.options);
    }

    GetProfessionTypes() {
        return this._http.get(this.baseurl + "Masters/GetProfessionTypes", this.options);
    }

    GetPropertyTypes() {
        return this._http.get(this.baseurl + "Masters/GetPropertyTypes", this.options);
    }

    GetPurposeofloanTypes() {
        return this._http.get(this.baseurl + "Masters/GetPurposeofloanTypes", this.options);
    }

    GetQualificationTypes() {
        return this._http.get(this.baseurl + "Masters/GetQualificationTypes", this.options);
    }

    GetRelationshipTypes() {
        return this._http.get(this.baseurl + "Masters/GetRelationshipTypes", this.options);
    }

    GetSalutationTypes() {
        return this._http.get(this.baseurl + "Masters/GetSalutationTypes", this.options);
    }

    GetStatusTypes() {
        return this._http.get(this.baseurl + "Masters/GetStatusTypes", this.options);
    }

    //switch status

    SwitchApplicantEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchApplicantEntityStatus?ID=" + ID, this.options);
    }

    SwitchAssetsEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchAssetsEntityStatus?ID=" + ID, this.options);
    }

    SwitchEmploymentEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchEmploymentEntityStatus?ID=" + ID, this.options);
    }

    SwitchExpenseEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchExpenseEntityStatus?ID=" + ID, this.options);
    }

    SwitchLiabilityEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchLiabilityEntityStatus?ID=" + ID, this.options);
    }

    SwitchLoanEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchLoanEntityStatus?ID=" + ID, this.options);
    }

    SwitchLoanrateEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchLoanrateEntityStatus?ID=" + ID, this.options);
    }

    SwitchProfessionEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchProfessionEntityStatus?ID=" + ID, this.options);
    }

    SwitchPropertyEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchPropertyEntityStatus?ID=" + ID, this.options);
    }

    SwitchPurposeofloanEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchPurposeofloanEntityStatus?ID=" + ID, this.options);
    }

    SwitchQualificationEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchQualificationEntityStatus?ID=" + ID, this.options);
    }

    SwitchRelationshipEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchRelationshipEntityStatus?ID=" + ID, this.options);
    }

    SwitchSalutationEntityStatus(ID) {
        return this._http.get(this.baseurl + "Masters/SwitchSalutationEntityStatus?ID=" + ID, this.options);
    }

    //update types
    UpdateApplicantEntity(ApplicantTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateApplicantEntity", ApplicantTypeMaster, this.options);
    }

    UpdateAssetsEntity(AssetsTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateAssetsEntity", AssetsTypeMaster, this.options);
    }

    UpdateEmploymentEntity(EmploymentTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateEmploymentEntity", EmploymentTypeMaster, this.options);
    }

    UpdateExpenseEntity(ExpenseTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateExpenseEntity", ExpenseTypeMaster, this.options);
    }

    UpdateLiabilityEntity(LiabilityTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateLiabilityEntity", LiabilityTypeMaster, this.options);
    }

    UpdateLoanEntity(LoanTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateLoanEntity", LoanTypeMaster, this.options);
    }

    UpdateLoanrateEntity(LoanrateTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateLoanrateEntity", LoanrateTypeMaster, this.options);
    }

    UpdateProffessionEntity(ProfessionTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateProffessionEntity", ProfessionTypeMaster, this.options);
    }

    UpdatePropertyEntity(PropertyTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdatePropertyEntity", PropertyTypeMaster, this.options);
    }

    UpdatePurposeofloanEntity(PurposeofloanTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdatePurposeofloanEntity", PurposeofloanTypeMaster, this.options);
    }

    UpdateQualificationEntity(QualificationTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateQualificationEntity", QualificationTypeMaster, this.options);
    }

    UpdateRelationshipEntity(RelationshipTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateRelationshipEntity", RelationshipTypeMaster, this.options);
    }

    UpdateSalutationEntity(SalutationTypeMaster) {
        return this._http.post(this.baseurl + "Masters/UpdateSalutationEntity", SalutationTypeMaster, this.options);
    }

    //add types
    AddApplicantEntity(ApplicantTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddApplicantEntity", ApplicantTypeMaster, this.options);
    }

    AddAssetsEntity(AssetsTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddAssetsEntity", AssetsTypeMaster, this.options);
    }

    AddEmploymentEntity(EmploymentTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddEmploymentEntity", EmploymentTypeMaster, this.options);
    }

    AddExpenseEntity(ExpenseTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddExpenseEntity", ExpenseTypeMaster, this.options);
    }

    AddLiabilityEntity(LiabilityTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddLiabilityEntity", LiabilityTypeMaster, this.options);
    }

    AddLoanEntity(LoanTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddLoanEntity", LoanTypeMaster, this.options);
    }

    AddLoanrateEntity(LoanrateTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddLoanrateEntity", LoanrateTypeMaster, this.options);
    }

    AddProffessionEntity(ProfessionTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddProffessionEntity", ProfessionTypeMaster, this.options);
    }

    AddPropertyEntity(PropertyTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddPropertyEntity", PropertyTypeMaster, this.options);
    }

    AddPurposeofloanEntity(PurposeofloanTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddPurposeofloanEntity", PurposeofloanTypeMaster, this.options);
    }

    AddQualificationEntity(QualificationTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddQualificationEntity", QualificationTypeMaster, this.options);
    }

    AddRelationshipEntity(RelationshipTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddRelationshipEntity", RelationshipTypeMaster, this.options);
    }

    AddSalutationEntity(SalutationTypeMaster) {
        return this._http.post(this.baseurl + "Masters/AddSalutationEntity", SalutationTypeMaster, this.options);
    }
}
