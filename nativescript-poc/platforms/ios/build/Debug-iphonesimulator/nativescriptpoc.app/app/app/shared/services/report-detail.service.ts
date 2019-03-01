import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { ApiConfig } from "../apiConfig";
import { ReportDetails } from "../models/report-details.model";
import { ReportDetailsMock } from "../mock/report-details.mock";


@Injectable()
export class ReportDetailsService {
    private baseUrl = ApiConfig.apiUrl + "appdata/" + ApiConfig.appKey + "/reportDetails";
    private reportsCache: Array<ReportDetails> = [];

    constructor(private httpClient: HttpClient) { }

    getReportDetailsList():  Observable<Array<ReportDetails>> {
        if(this.reportsCache.length === 0) {
            this.reportsCache = ReportDetailsMock;
            return of(this.reportsCache);
        } else {
            return of(this.reportsCache); 
        }        
        
        /* return this.httpClient.get(this.baseUrl, {
            headers: this.getCommonHttpHeaders()
        }).pipe(
            map(res => res.json()),
            map(data => {
                let reportDetailsList = [];
                data.forEach((reportDetail) => {
                    reportDetailsList.push(new Report(document.id, document.name, document.date));
                });
                return reportDetailsList;
            }),
            catchError(this.handleErrors)
        ); */
    }

    saveChanges(changedReport: ReportDetails): void {
        for(let a = 0; a < this.reportsCache.length; a++) {
            if(this.reportsCache[a].id === changedReport.id) {
                this.reportsCache[a] = changedReport;
            }
        }
    }

    getCommonHttpHeaders() {
        let httpHeaders = new HttpHeaders();
        httpHeaders.append("Content-Type", "application/json");
        return httpHeaders;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
