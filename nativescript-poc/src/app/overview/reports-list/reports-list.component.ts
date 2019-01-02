import { Report } from "~/app/shared/models/report.model";
import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ReportsListService } from "~/app/shared/services/reports-list.service";

import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Router } from "@angular/router";
import { ListSearchService } from "~/app/shared/services/list-search.service";
import { IFilterComparator } from "~/app/shared/models/filter-comparator";
import { escapeRegEx } from "~/app/shared/utils/string.utils";


@Component({
    selector: "reports-list",
    templateUrl: "./app/overview/reports-list/reports-list.component.html",
    styleUrls: ["./app/overview/reports-list/reports-list.component.css"],
    providers: [ReportsListService, ListSearchService]
})
export class ReportsListComponent implements OnInit, OnChanges {
    reportsList: Array<Report> = [];
    report = "";
    //@ViewChild("groceryTextField") groceryTextField: ElementRef;
    isLoading = false;
    listLoaded = false;

    @Input() searchTerm: string = "";

    constructor(
        private router: Router, 
        private reportsListService: ReportsListService,
        private listSearchService: ListSearchService) { }

    ngOnInit() {
        this.isLoading = true;
        this.reportsListService.load()
            .subscribe(loadedReports => {
                loadedReports.forEach((reportObject: Report) => {
                    this.reportsList.push(reportObject);
                });
                this.isLoading = false;
                this.listLoaded = true;
                this.listSearchService.setItems(this.reportsList);
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
        let id = args.index+1;
        console.log('Navigates to report for ID: ' + id);
        this.router.navigate(["/overview/"+ id]);
    }

    public configureLocalListService(): void {
        const clientFilterComparator: IFilterComparator<Report> = (report: Report): boolean => {
            if (!this.searchTerm) {
                console.log("no searchterm");
                return true;
            }
            const escapedRegExp = escapeRegEx(this.searchTerm);
            const regExp = new RegExp(escapedRegExp, 'gi');
            if (
                report.name.search(regExp) !== -1 ||
                report.date.search(regExp) !== -1 
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