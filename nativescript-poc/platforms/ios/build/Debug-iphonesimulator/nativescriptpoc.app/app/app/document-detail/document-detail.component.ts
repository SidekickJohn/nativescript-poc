import {Component, OnInit} from "@angular/core";
import {Document} from "../shared/models/document.model";
import {EventData, Page} from "tns-core-modules/ui/page";
import {ActivatedRoute, Router} from "@angular/router";
import {API_ENDPOINT_URL, DocumentsListService} from "~/app/shared/services/documents-list.service";
import {Button} from "tns-core-modules/ui/button";
import { ImageSource, fromFile } from "tns-core-modules/image-source";
import * as SocialShare from "nativescript-social-share";

@Component({
    selector: "document-detail",
    templateUrl: "./app/document-detail/document-detail.component.html",
    styleUrls: ["./app/document-detail/document-detail.component.css"],
    providers: [DocumentsListService]
})
export class DocumentDetailComponent implements OnInit {
    loadedDocument: Document;
    private currendDocumentId: number;

    constructor(
        private router: Router,
        private page: Page,
        private documentsListService: DocumentsListService,
        private activatedRoute: ActivatedRoute
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.currendDocumentId = +this.activatedRoute.snapshot.params["id"];
        this.documentsListService.getDocumentById(this.currendDocumentId.toString()).then((documentFromServer: Document) => {
            this.loadedDocument = documentFromServer;
        }).catch(e => console.log(e));
    }

    public createUrl(document: Document): string {
        if(document) {
            return API_ENDPOINT_URL + document.document_url;
        } else {
            return "";
        }
    }

    public onBackBtnTapped(args: EventData): void {
        const button: Button = <Button>args.object;
        const page: Page = button.page;
        page.frame.goBack();
    }

    public onImageTapped(args: EventData): void {
        const imageSource: ImageSource = <ImageSource> fromFile(API_ENDPOINT_URL+this.loadedDocument.document_url);
        SocialShare.shareImage(imageSource);
    }

}