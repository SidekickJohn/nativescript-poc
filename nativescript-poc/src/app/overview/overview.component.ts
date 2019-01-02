import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "overview",
    templateUrl: "./app/overview/overview.component.html",
    styleUrls: ["./app/overview/overview.component.css"]
})

export class OverviewComponent {
    public searchTerm: string;

    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }

    public onSearchTermChanged(searchTerm: string) {
        this.searchTerm = searchTerm;
    }

}
