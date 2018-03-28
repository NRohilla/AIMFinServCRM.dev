import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ClientsService {
    headers: Headers;
    options: RequestOptions;
    baseurl: string = '';

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
        this.baseurl = environment.baseAPIUrl;
    }

    GetAllClients() {
        return this._http.get(this.baseurl + "Clients/GetAllClients", this.options);
    }

    GetClientDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientDetails?ClientID=" + ClientID, this.options);
    }

    //===== Client_Qualification_Detail Methods CODE START HERE==============  //Deepak Saini [16-03-2018]
    GetClientQualificationDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientQualificationDetails?ClientID=" + ClientID, this.options);
    }
    
    SaveClientQualificationDetails(ClientQualificationDetails) {
        return this._http.post(this.baseurl + "Clients/SaveClientQualificationDetails", ClientQualificationDetails, this.options);
    }

    UpdateClientQualificationDetails(ClientQualificationDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateClientQualificationDetails", ClientQualificationDetails, this.options);
    }

    //================ CODE END HERE ===============//


    //===== Client_Employment_Detail Methods CODE START HERE==============  //Deepak Saini [16-03-2018]

    GetClientEmploymentDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientEmploymentDetails?ClientID=" + ClientID, this.options);
    }

    UpdateClientEmploymentdetails(ClientEmployementDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateClientEmploymentDetails", ClientEmployementDetails, this.options);
    }

    SaveClientEmploymentDetails(ClientEmployementDetails) {
        debugger;
        return this._http.post(this.baseurl + "Clients/SaveClientEmploymentDetails", ClientEmployementDetails, this.options);
    }
    //================ CODE END HERE ===============//

    //===== Client_Communication_Detail Methods CODE START HERE==============  //Deepak Saini [16-03-2018]
    GetClientCommunicationDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientCommunicationDetails?ClientID=" + ClientID, this.options);
    }

    SaveClientCommunicationDetails(ApplicantCommunicationDetails) {
        return this._http.post(this.baseurl + "Clients/SaveClientCommunicationDetails", ApplicantCommunicationDetails, this.options);
    }
    UpdateClientCommunicationDetails(ApplicantCommunicationDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateClientCommunicationDetails", ApplicantCommunicationDetails, this.options);
    }
    //================ CODE END HERE ===============//

    UpdateClientPersonalDetails(ApplicantPersonalDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateClientPersonalDetails", ApplicantPersonalDetails, this.options);
    }

    //=======Loan Application Methods START HERE =======// Neha Bambah
    GetAllLoanApplications() {
        return this._http.get(this.baseurl + "Clients/GetAllLoanApplications", this.options);
    }
    GetLoanApplicationDetails(LoanAppNo) {
        return this._http.get(this.baseurl + "Clients/GetLoanApplicationDetails?LoanAppNo=" + LoanAppNo, this.options);
    }
    UpdateLoanApplicationDetails(LoanApplicationDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateLoanApplicationDetails", LoanApplicationDetails, this.options);
    }
    //Loan Application Methods END HERE =======//
   
    //===Adding Applicant Details in Loan Application START HERE ====// Neha Bambah
    SaveLoanApplicationPersonalDetails(ApplicantPersonalDetails) {
        return this._http.post(this.baseurl + "Clients/SaveLoanApplicationPersonalDetails", ApplicantPersonalDetails, this.options);
    }

    SaveLoanApplicationQualificationDetails(ApplicantQualificationDetails) {
        return this._http.post(this.baseurl + "Clients/SaveLoanApplicationQualificationDetails", ApplicantQualificationDetails, this.options);
    }

    SaveLoanApplicationEmploymentDetails(ApplicantEmploymentDetails) {
        return this._http.post(this.baseurl + "Clients/SaveLoanApplicationEmploymentDetails", ApplicantEmploymentDetails, this.options);
    }
    SaveLoanApplicationCommunicationDetails(ApplicantCommunicationDetails) {
        return this._http.post(this.baseurl + "Clients/SaveLoanApplicationCommunicationDetails", ApplicantCommunicationDetails, this.options);
    }
    //=====Adding Applicant Details in Loan Application END HERE=====//

   //===Manage Guarantor in Loan Application START HERE =====// Neha Bambah
    AddGuarantor(LoanGuarantorDetails) {
        return this._http.post(this.baseurl + "Clients/AddGuarantorDetails", LoanGuarantorDetails, this.options);
    }
    GetAddedGuarantorGrid() {
        return this._http.get(this.baseurl + "Clients/GetAddedGuarantorGrid", this.options);
    }
    GetGuarantorDetails(GuarntID) {
        return this._http.get(this.baseurl + "Clients/GetGuarantorDetails?GuarntID=" + GuarntID, this.options);
    }
    UpdateGuarantorDetails(LoanGuarantorDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateGuarantorDetails", LoanGuarantorDetails, this.options);
    }
    //===Manage Guarantor in Loan Application END HERE =====//

    //====Manage Assets/Liabilities in Loan Applicatio START HERE===// Neha Bambah
    AddAsset(Asset) {
        return this._http.post(this.baseurl + "Clients/AddAsset", Asset, this.options);
    }
    GetAddedAssetGrid(LoanAppNo) {
        return this._http.get(this.baseurl + "Clients/GetAddedAssetGrid?LoanAppNo=" + LoanAppNo, this.options);
    }
    GetAssetDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetAssetDetails?ClientID=" + ClientID, this.options);
    }
    UpdateAssetDetails(Asset) {
        return this._http.post(this.baseurl + "Clients/UpdateAssetDetails", Asset, this.options);
    }

    AddLiability(Liability) {
        return this._http.post(this.baseurl + "Clients/AddLiability", Liability, this.options);
    }
    GetAddedLiabilityGrid(LoanAppNo) {
        return this._http.get(this.baseurl + "Clients/GetAddedLiabilityGrid?LoanAppNo=" + LoanAppNo, this.options);
    }
    GetLiabilityDetails(LbltyID) {
        return this._http.get(this.baseurl + "Clients/GetLiabilityDetails?LbltyID=" + LbltyID, this.options);
    }
    UpdateLiabilityDetails(Liability) {
        return this._http.post(this.baseurl + "Clients/UpdateLiabilityDetails", Liability, this.options);
    }
    //===Manage Assets/Liabilities in Loan Application ENDS HERE===//



}



