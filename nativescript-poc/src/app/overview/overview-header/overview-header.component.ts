import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "overview-header",
    templateUrl: "./app/overview/overview-header/overview-header.component.html",
    styleUrls: ["./app/overview/overview-header/overview-header.component.css"]
})


export class OverviewHeaderComponent {
    @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();

    public searchTearm: string;

    public onSearchSubmit(args): void {
        console.log("You are searching for " + this.searchTearm);
        this.searchTermChanged.next(this.searchTearm);
    }

    public onSearchClear(args): void {
        console.log("Search cleared.");
        this.searchTermChanged.next(this.searchTearm);
    }
}
