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

    GetAllLoanApplications() {
        return this._http.get(this.baseurl + "Clients/GetAllLoanApplications", this.options);
    }

    GetClientDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientDetails?ClientID=" + ClientID, this.options);
    }

    GetLoanApplicationDetails(LoanAppNo) {
        return this._http.get(this.baseurl + "Clients/GetLoanApplicationDetails?LoanAppNo=" + LoanAppNo, this.options);
    }

    GetClientCommunicationDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientCommunicationDetails?ClientID=" + ClientID, this.options);
    }

    GetClientEmployementDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientEmployementDetails?ClientID=" + ClientID, this.options);
    }

    GetClientQualificationDetails(ClientID) {
        return this._http.get(this.baseurl + "Clients/GetClientQualificationDetails?ClientID=" + ClientID, this.options);
    }

    updateclientEmploymentdetails(ApplicantEmployementDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateClientEmploymentDetails", ApplicantEmployementDetails, this.options);
    }

    UpdateClientCommunicationDetails(ApplicantCommunicationDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateClientCommunicationDetails", ApplicantCommunicationDetails, this.options);
    }

    UpdateClientPersonalDetails(ApplicantPersonalDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateClientPersonalDetails", ApplicantPersonalDetails, this.options);
    }
    GetQualificationDetailsByAppID(ApplicantID) {
        return this._http.get(this.baseurl + "Clients/GetQualificationDetailsByAppID?ApplicantID=" + ApplicantID, this.options);
    }
    UpdateQualificationDetailsByAppID(ApplicantQualificationDetails) {
        debugger;
        return this._http.post(this.baseurl + "Clients/UpdateQualificationDetailsByAppID", ApplicantQualificationDetails, this.options);
    }
    GetEmploymentDetailsByAppID(ApplicantID) {
        return this._http.get(this.baseurl + "Clients/GetEmploymentDetailsByAppID?ApplicantID=" + ApplicantID, this.options);
    }
    UpdateEmploymentDetailsByAppID(ApplicantEmploymentDetails) {
        debugger;
        return this._http.post(this.baseurl + "Clients/UpdateEmploymentDetailsByAppID", ApplicantEmploymentDetails, this.options);
    }
    GetLendingDetailsByAppID(ApplicantID) {
        return this._http.get(this.baseurl + "Clients/GetLendingDetailsByAppID?ApplicantID=" + ApplicantID, this.options);
    }
    UpdateLendingDetailsByAppID(LoanMasterDetails) {
        debugger;
        return this._http.post(this.baseurl + "Clients/UpdateLendingDetailsByAppID", LoanMasterDetails, this.options);
    }
    GetPersonalDetailsByAppID(ApplicantID) {
        return this._http.get(this.baseurl + "Clients/GetPersonalDetailsByAppID?ApplicantID=" + ApplicantID, this.options);
    }
    UpdatePersonalDetailsByAppID(Applicants) {
        debugger;
        return this._http.post(this.baseurl + "Clients/UpdatePersonalDetailsByAppID", Applicants, this.options);
    }
    //GetCommunicationDetailsByAppID(ApplicantID) {
    //    return this._http.get(this.baseurl + "Clients/GetCommunicationDetailsByAppID?ApplicantID=" + ApplicantID, this.options);
    //}
    UpdateCommunicationDetailsByAppID(ApplicantCommunicationDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateCommunicationDetailsByAppID", ApplicantCommunicationDetails, this.options);
    }
    GetAddresses(ApplicantID) {
        return this._http.get(this.baseurl + "Clients/GetAddresses?ApplicantID=" + ApplicantID, this.options);
    }
    GetCommunicationDetailsByAppID(ApplicantID) {
        return this._http.get(this.baseurl + "Clients/GetCommunicationDetailsByAppID?ApplicantID=" + ApplicantID, this.options);
    }
    UpdateAddressesByAppID(ApplicantCommunicationDetails) {
        return this._http.post(this.baseurl + "Clients/UpdateAddressesByAppID", ApplicantCommunicationDetails, this.options);
    }
    AddNewAddressByAppID(ApplicantCommunicationDetails) {
        debugger;
        return this._http.post(this.baseurl + "Clients/AddNewAddressByAppID", ApplicantCommunicationDetails, this.options);
    }
    GetCommEditdata(CommunicationID) {
        debugger;
        return this._http.get(this.baseurl + "Clients/GetCommEditdata?CommunicationID=" + CommunicationID, this.options);
    }
    GetMatQualificationDataByAppID(ApplicantID) {
        return this._http.get(this.baseurl + "Clients/GetMatQualificationDataByAppID?ApplicantID=" + ApplicantID, this.options);
    }
    GetMatLendingDetailsByAppID(ApplicantID) {
        debugger;
        return this._http.get(this.baseurl + "Clients/GetMatLendingDetailsByAppID?ApplicantID=" + ApplicantID, this.options);
    }
    GetMatEmploymentDetailsByAppID(ApplicantID) {
        debugger;
        return this._http.get(this.baseurl + "Clients/GetMatEmploymentDetailsByAppID?ApplicantID=" + ApplicantID, this.options);
    }
    ViewEmploymentDetailsByAppID(EmploymentID) {
        return this._http.get(this.baseurl + "Clients/ViewEmploymentDetailsByAppID?EmploymentID=" + EmploymentID, this.options);
    }
    ViewQualificationDetailsByAppID(QualificationID) {
        return this._http.get(this.baseurl + "Clients/ViewQualificationDetailsByAppID?QualificationID=" + QualificationID, this.options);
    }
    ViewLendingDetailsByAppID(LANNumber) {
        return this._http.get(this.baseurl + "Clients/ViewLendingDetailsByAppID?LANNumber=" + LANNumber, this.options);
    }
    DeleteCommAddress(CommunicationID) {
        debugger;
        return this._http.delete(this.baseurl + "Clients/DeleteCommAddress?CommunicationID=" + CommunicationID, this.options);
    }
}
