import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { ApiConfig } from "../apiConfig";
import { Report } from "../models/report.model";


@Injectable()
export class ListService {
    
    private baseUrl = ApiConfig.apiUrl + "appdata/" + ApiConfig.appKey + "/reports";
    
    constructor(private http: Http) { }

    public load(){
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders()
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
        );
    }

    getCommonHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

}