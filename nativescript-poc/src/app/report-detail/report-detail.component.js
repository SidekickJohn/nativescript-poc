"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var report_detail_service_1 = require("../shared/services/report-detail.service");
var page_1 = require("tns-core-modules/ui/page/page");
var ReportDetailComponent = /** @class */ (function () {
    function ReportDetailComponent(router, page, reportDetailsService, route) {
        this.router = router;
        this.page = page;
        this.reportDetailsService = reportDetailsService;
        this.route = route;
        this.isLoading = false;
        this.listLoaded = false;
        this.messageToDisplay = "No Description available.";
        this.page.actionBarHidden = true;
    }
    ReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentID = +this.route.snapshot.params["id"];
        this.isLoading = true;
        this.reportDetailsService.getReportDetailsList().subscribe(function (loadedDetails) {
            _this.detailedReport = loadedDetails.filter(function (report) { return report.id === _this.currentID; })[0];
            _this.dataStructure = _this.detailedReport.dataStructure;
            _this.isLoading = false;
            _this.listLoaded = true;
            _this.messageToDisplay = _this.detailedReport.messageString ? _this.detailedReport.messageString : 'No Description available.';
        });
    };
    ReportDetailComponent.prototype.onCallButtonTap = function () {
        // Phonebook API
        console.log("Call Phonebook API");
    };
    ReportDetailComponent.prototype.onCancelButtonTap = function () {
        this.router.navigate(["/overview/"]);
    };
    ReportDetailComponent.prototype.onEditButtonTap = function (args) {
        console.log("Navigate to EditPage for detailedReport with ID: " + this.detailedReport.id);
        this.router.navigate(["/edit/" + this.currentID]);
    };
    ReportDetailComponent = __decorate([
        core_1.Component({
            selector: "report-detail",
            templateUrl: "./app/report-detail/report-detail.component.html",
            styleUrls: ["./app/report-detail/report-detail.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            page_1.Page,
            report_detail_service_1.ReportDetailsService,
            router_1.ActivatedRoute])
    ], ReportDetailComponent);
    return ReportDetailComponent;
}());
exports.ReportDetailComponent = ReportDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXBvcnQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFHekQsa0ZBQWdGO0FBQ2hGLHNEQUFxRDtBQVFyRDtJQVNJLCtCQUNZLE1BQWMsRUFDZCxJQUFVLEVBQ1Ysb0JBQTBDLEVBQzFDLEtBQXFCO1FBSHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVZqQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDWixxQkFBZ0IsR0FBVywyQkFBMkIsQ0FBQTtRQVV6RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsYUFBbUM7WUFDM0YsS0FBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsU0FBUyxFQUE1QixDQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEYsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUN2RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztRQUNoSSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0ksZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQ0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsR0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUExQ1EscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsa0RBQWtEO1lBQy9ELFNBQVMsRUFBRSxDQUFDLGlEQUFpRCxDQUFDO1NBQ2pFLENBQUM7eUNBV3NCLGVBQU07WUFDUixXQUFJO1lBQ1ksNENBQW9CO1lBQ25DLHVCQUFjO09BYnhCLHFCQUFxQixDQTZDakM7SUFBRCw0QkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUmVwb3J0RGV0YWlscyB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL3JlcG9ydC1kZXRhaWxzLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJlcG9ydERldGFpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9yZXBvcnQtZGV0YWlsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgeyBEYXRhRWxlbWVudCB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWxzL2RhdGFFbGVtZW50Lm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJlcG9ydC1kZXRhaWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwL3JlcG9ydC1kZXRhaWwvcmVwb3J0LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FwcC9yZXBvcnQtZGV0YWlsL3JlcG9ydC1kZXRhaWwuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGRldGFpbGVkUmVwb3J0OiBSZXBvcnREZXRhaWxzO1xyXG4gICAgZGF0YVN0cnVjdHVyZTogQXJyYXk8RGF0YUVsZW1lbnQ+O1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBsaXN0TG9hZGVkID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgbWVzc2FnZVRvRGlzcGxheTogc3RyaW5nID0gXCJObyBEZXNjcmlwdGlvbiBhdmFpbGFibGUuXCJcclxuICAgIHByaXZhdGUgY3VycmVudElEOiBudW1iZXI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHJlcG9ydERldGFpbHNTZXJ2aWNlOiBSZXBvcnREZXRhaWxzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgKSB7IFxyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudElEID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVwb3J0RGV0YWlsc1NlcnZpY2UuZ2V0UmVwb3J0RGV0YWlsc0xpc3QoKS5zdWJzY3JpYmUoKGxvYWRlZERldGFpbHM6IEFycmF5PFJlcG9ydERldGFpbHM+KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsZWRSZXBvcnQgPSBsb2FkZWREZXRhaWxzLmZpbHRlcihyZXBvcnQgPT4gcmVwb3J0LmlkID09PSB0aGlzLmN1cnJlbnRJRClbMF07XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVN0cnVjdHVyZSA9IHRoaXMuZGV0YWlsZWRSZXBvcnQuZGF0YVN0cnVjdHVyZTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTsgICAgICBcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlVG9EaXNwbGF5ID0gdGhpcy5kZXRhaWxlZFJlcG9ydC5tZXNzYWdlU3RyaW5nID8gdGhpcy5kZXRhaWxlZFJlcG9ydC5tZXNzYWdlU3RyaW5nIDogJ05vIERlc2NyaXB0aW9uIGF2YWlsYWJsZS4nOyAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FsbEJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBQaG9uZWJvb2sgQVBJXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDYWxsIFBob25lYm9vayBBUElcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWxCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL292ZXJ2aWV3L1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0QnV0dG9uVGFwKGFyZ3MpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRlIHRvIEVkaXRQYWdlIGZvciBkZXRhaWxlZFJlcG9ydCB3aXRoIElEOiBcIisgdGhpcy5kZXRhaWxlZFJlcG9ydC5pZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2VkaXQvXCIrIHRoaXMuY3VycmVudElEXSk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxufVxyXG4iXX0=