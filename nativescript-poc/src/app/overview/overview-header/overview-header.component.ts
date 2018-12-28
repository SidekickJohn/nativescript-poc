import { Component } from "@angular/core";

@Component({
    selector: "overview-header",
    templateUrl: "./app/overview/overview-header/overview-header.component.html",
    styleUrls: ["./app/overview/overview-header/overview-header.component.css"]
})

export class OverviewHeaderComponent {
    public searchTearm: string;

    public onSearchSubmit(args): void {
        console.log("You are searching for " + this.searchTearm);
    }
}
