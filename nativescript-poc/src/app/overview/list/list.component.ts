import { Report } from "~/app/shared/models/report.model";
import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/shared/services/list.service";


@Component({
    selector: "reports-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"],
    providers: [ListService]
})
export class ListComponent implements OnInit {
    reportList: Array<Report> = [];
    report = "";
    //@ViewChild("groceryTextField") groceryTextField: ElementRef;
    isLoading = false;
    listLoaded = false;

    constructor(private listService: ListService) { }

    ngOnInit() {
        this.isLoading = true;
        this.listService.load()
            .subscribe(loadedReports => {
                loadedReports.forEach((reportObject: Report) => {
                    this.reportList.unshift(reportObject);
                });
                this.isLoading = false;
                this.listLoaded = true;
            });
    }
}