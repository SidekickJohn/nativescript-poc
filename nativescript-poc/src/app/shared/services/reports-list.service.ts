import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { ApiConfig } from "../apiConfig";
import { Report } from "../models/report.model";
import { ReportsMock } from "../mock/reports.mock";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class ReportsListService {
    
    private baseUrl = ApiConfig.apiUrl + "appdata/" + ApiConfig.appKey + "/reports";
    
    constructor(private httpClient: HttpClient) { }

    public load(): Observable<Array<Report>> {
        return of(ReportsMock);
        /* return this.httpClient.get(this.baseUrl, {
            headers: this.getCommonHttpHeaders()
        }).pipe(
            map(res => res.json()),
            map(data => {
                let reportsList = [];
                data.forEach((report) => {
                    reportsList.push(new Report(report.id, report.name, report.date));
                });
                return reportsList;
            }),
            catchError(this.handleErrors)
        ); */
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