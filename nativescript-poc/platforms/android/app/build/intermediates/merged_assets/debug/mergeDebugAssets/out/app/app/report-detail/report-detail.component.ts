

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ReportDetails } from "../shared/models/report-details.model";
import { ReportDetailsService } from "../shared/services/report-detail.service";
import { Page } from "tns-core-modules/ui/page/page";
import { DataElement } from "../shared/models/dataElement.model";

@Component({
    selector: "report-detail",
    templateUrl: "./app/report-detail/report-detail.component.html",
    styleUrls: ["./app/report-detail/report-detail.component.css"]
})
export class ReportDetailComponent implements OnInit {
    detailedReport: ReportDetails;
    dataStructure: Array<DataElement>;
    isLoading = false;
    listLoaded = false;
    public messageToDisplay: string = "No Description available."
    private currentID: number;


    constructor(
        private router: Router, 
        private page: Page,
        private reportDetailsService: ReportDetailsService,
        private route: ActivatedRoute
    ) { 
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.currentID = +this.route.snapshot.params["id"];
        this.isLoading = true;
        this.reportDetailsService.getReportDetailsList().subscribe((loadedDetails: Array<ReportDetails>) => {
            this.detailedReport = loadedDetails.filter(report => report.id === this.currentID)[0];
            this.dataStructure = this.detailedReport.dataStructure;
            this.isLoading = false;
            this.listLoaded = true;      
            this.messageToDisplay = this.detailedReport.messageString ? this.detailedReport.messageString : 'No Description available.';      
        });
    }

    onCallButtonTap(): void {
        // Phonebook API
        console.log("Call Phonebook API");
    }

    onCancelButtonTap(): void {
        this.router.navigate(["/overview/"]);
    }

    onEditButtonTap(args): void {
        console.log("Navigate to EditPage for detailedReport with ID: "+ this.detailedReport.id);
        this.router.navigate(["/edit/"+ this.currentID]);
    }
        
    
}
