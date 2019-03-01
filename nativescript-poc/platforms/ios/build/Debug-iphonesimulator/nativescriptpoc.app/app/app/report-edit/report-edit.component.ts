import { Component, OnInit } from "@angular/core";
import { ReportDetailsService } from "../shared/services/report-detail.service";
import { Page } from "tns-core-modules/ui/page/page";
import { ActivatedRoute, Router } from "@angular/router";
import { ReportDetails } from "~/app/shared/models/report-details.model";

@Component({
    selector: "report-edit",
    templateUrl: "./app/report-edit/report-edit.component.html",
    styleUrls: ["./app/report-edit/report-edit.component.css"]
})
export class ReportEditComponent implements OnInit {
    public isLoading: boolean;
    public currentReport: ReportDetails;
    public currentMessage: string;
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
            this.currentReport = loadedDetails.filter(report => report.id === this.currentID)[0];
            this.isLoading = false;     
            this.currentMessage = this.currentReport.messageString ? this.currentReport.messageString : 'No Description available.';      
        });
        
    }

    onCancelButtonTap(): void {
        this.router.navigate(["/detail/"+ this.currentID]);
    }

    onSaveButtonTap(): void {
        this.currentReport.messageString = this.currentMessage;
        this.reportDetailsService.saveChanges(this.currentReport);        
        this.router.navigate(["/detail/"+ this.currentID]);
    }
    
}
