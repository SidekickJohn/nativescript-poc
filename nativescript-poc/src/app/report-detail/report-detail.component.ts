

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ReportDetails } from "../shared/models/report-details.model";
import { ReportDetailsService } from "../shared/services/report-detail.service";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "ns-details",
    templateUrl: "./app/report-detail/report-detail.component.html",
    providers: [ReportDetailsService]
})
export class ReportDetailComponent implements OnInit {
    detailedReport: ReportDetails;
    isLoading = false;
    listLoaded = false;

    constructor(
        private page: Page,
        private reportDetailsService: ReportDetailsService,
        private route: ActivatedRoute
    ) { 
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.isLoading = true;
        this.reportDetailsService.getReportDetailsList().subscribe((loadedDetails: Array<ReportDetails>) => {
            this.detailedReport = loadedDetails.filter(report => report.id === id)[0];
            this.isLoading = false;
            this.listLoaded = true;            
        });


        
        
    }
}
