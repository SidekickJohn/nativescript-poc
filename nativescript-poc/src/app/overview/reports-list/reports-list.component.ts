import { Report } from "~/app/shared/models/report.model";
import { Component, OnInit } from "@angular/core";
import { ReportsListService } from "~/app/shared/services/reports-list.service";

import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Router } from "@angular/router";


@Component({
    selector: "reports-list",
    templateUrl: "./app/overview/reports-list/reports-list.component.html",
    styleUrls: ["./app/overview/reports-list/reports-list.component.css"],
    providers: [ReportsListService]
})
export class ReportsListComponent implements OnInit {
    reportsList: Array<Report> = [];
    report = "";
    //@ViewChild("groceryTextField") groceryTextField: ElementRef;
    isLoading = false;
    listLoaded = false;

    constructor(private router: Router ,private reportsListService: ReportsListService) { }

    ngOnInit() {
        this.isLoading = true;
        this.reportsListService.load()
            .subscribe(loadedReports => {
                loadedReports.forEach((reportObject: Report) => {
                    this.reportsList.push(reportObject);
                });
                this.isLoading = false;
                this.listLoaded = true;
            });
    }

    onItemTap(args: ItemEventData): void {
        let id = args.index+1;
        console.log('Navigates to report for ID: ' + id);
        this.router.navigate(["/overview/"+ id]);
    }
}