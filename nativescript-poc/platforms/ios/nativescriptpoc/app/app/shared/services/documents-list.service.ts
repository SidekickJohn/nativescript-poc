import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Document } from "~/app/shared/models/document.model";


export const API_ENDPOINT_URL = "https://mobile-poc-endpoint.graffl.com/";

@Injectable()
export class DocumentsListService {

    private baseUrl = API_ENDPOINT_URL+ "documents.json";
    
    constructor(private httpClient: HttpClient) { }

    public load(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }

    public getDocumentById(selectedDocumentId: string): Promise<Document> {
        return this.load().toPromise().then((loadedDocuments: Array<Document>) => {
            let selectedDocument: Document = loadedDocuments.filter(document => document.document_id === selectedDocumentId)[0];
            return selectedDocument;
        }).catch(e => {return e;});

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