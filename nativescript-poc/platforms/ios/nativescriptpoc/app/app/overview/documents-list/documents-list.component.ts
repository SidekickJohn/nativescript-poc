import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import {API_ENDPOINT_URL, DocumentsListService} from "~/app/shared/services/documents-list.service";

import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Router } from "@angular/router";
import { ListSearchService } from "~/app/shared/services/list-search.service";
import { IFilterComparator } from "~/app/shared/models/filter-comparator";
import { escapeRegEx } from "~/app/shared/utils/string.utils";
import { Document } from "~/app/shared/models/document.model";


@Component({
    selector: "documents-list",
    templateUrl: "./app/overview/documents-list/documents-list.component.html",
    styleUrls: ["./app/overview/documents-list/documents-list.component.css"],
    providers: [DocumentsListService, ListSearchService]
})
export class DocumentsListComponent implements OnInit, OnChanges {
    documentsList: Array<Document> = [];
    document = "";
    //@ViewChild("groceryTextField") groceryTextField: ElementRef;
    isLoading = false;
    listLoaded = false;

    @Input() searchTerm: string = "";

    constructor(
        private router: Router, 
        private documentsListService: DocumentsListService,
        private listSearchService: ListSearchService) { }

    ngOnInit() {
        this.isLoading = true;
        this.documentsListService.load()
            .subscribe((loadedDocuments: Array<Document>) => {
                loadedDocuments.forEach((documentObject: Document) => {
                    this.documentsList.push(documentObject);
                });
                this.isLoading = false;
                this.listLoaded = true;
                this.listSearchService.setItems(this.documentsList);
                this.listSearchService.refreshItems();
                this.configureLocalListService();
            });
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.searchTerm.currentValue !== changes.searchTerm.previousValue) {
            this.search();
        }
    }

    public onItemTap(args: ItemEventData): void {
        let id = args.index;
        let currentDocument: Document = this.documentsList[id];
        console.log('Navigates to document for ID: ' + currentDocument.document_id);
        this.router.navigate(["/detail/"+ currentDocument.document_id]);
    }

    public createUrl(imageUrl: string): string {
        return API_ENDPOINT_URL + imageUrl;
    }

    public getDocumentTypeStyleClass(documentType: string): string {
        switch(documentType) {
            case "Lieferantenrechnung": {
                return "document-type type-delivery-invoice"
            }
            case "Kasse": {
                return "document-type type-register"
            }
            case "Kundenrechnung": {
                return "document-type type-customer-invoice"
            }
            case "Lohn": {
                return "document-type type-wage"
            }
            case "Sonstige": {
                return "document-type type-other"
            }
            default:
                break;
        }
    }

    public configureLocalListService(): void {
        const clientFilterComparator: IFilterComparator<Document> = (document: Document): boolean => {
            if (!this.searchTerm) {
                console.log("no searchterm");
                return true;
            }
            const escapedRegExp = escapeRegEx(this.searchTerm);
            const regExp = new RegExp(escapedRegExp, 'gi');
            if (
                document.bp_name.search(regExp) !== -1 ||
                document.document_number.search(regExp) !== -1
            ) {
                return true;
            }
            return false;
        };

        this.listSearchService.setFilter(clientFilterComparator);
    }

    public search() {
        this.listSearchService.reset();
        this.listSearchService.refreshItems();
    }
}