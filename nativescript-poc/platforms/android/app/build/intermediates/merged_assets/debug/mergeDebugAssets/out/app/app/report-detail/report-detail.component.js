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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXBvcnQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFHekQsa0ZBQWdGO0FBQ2hGLHNEQUFxRDtBQVFyRDtJQVNJLCtCQUNZLE1BQWMsRUFDZCxJQUFVLEVBQ1Ysb0JBQTBDLEVBQzFDLEtBQXFCO1FBSHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVZqQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDWixxQkFBZ0IsR0FBVywyQkFBMkIsQ0FBQTtRQVV6RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsYUFBbUM7WUFDM0YsS0FBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsU0FBUyxFQUE1QixDQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEYsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUN2RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztRQUNoSSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0ksZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQ0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsR0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUExQ1EscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsa0RBQWtEO1lBQy9ELFNBQVMsRUFBRSxDQUFDLGlEQUFpRCxDQUFDO1NBQ2pFLENBQUM7eUNBV3NCLGVBQU07WUFDUixXQUFJO1lBQ1ksNENBQW9CO1lBQ25DLHVCQUFjO09BYnhCLHFCQUFxQixDQTZDakM7SUFBRCw0QkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSZXBvcnREZXRhaWxzIH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcmVwb3J0LWRldGFpbHMubW9kZWxcIjtcbmltcG9ydCB7IFJlcG9ydERldGFpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9yZXBvcnQtZGV0YWlsLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IERhdGFFbGVtZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvZGF0YUVsZW1lbnQubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicmVwb3J0LWRldGFpbFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwL3JlcG9ydC1kZXRhaWwvcmVwb3J0LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAvcmVwb3J0LWRldGFpbC9yZXBvcnQtZGV0YWlsLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkZXRhaWxlZFJlcG9ydDogUmVwb3J0RGV0YWlscztcbiAgICBkYXRhU3RydWN0dXJlOiBBcnJheTxEYXRhRWxlbWVudD47XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBtZXNzYWdlVG9EaXNwbGF5OiBzdHJpbmcgPSBcIk5vIERlc2NyaXB0aW9uIGF2YWlsYWJsZS5cIlxuICAgIHByaXZhdGUgY3VycmVudElEOiBudW1iZXI7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJlcG9ydERldGFpbHNTZXJ2aWNlOiBSZXBvcnREZXRhaWxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRJRCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3J0RGV0YWlsc1NlcnZpY2UuZ2V0UmVwb3J0RGV0YWlsc0xpc3QoKS5zdWJzY3JpYmUoKGxvYWRlZERldGFpbHM6IEFycmF5PFJlcG9ydERldGFpbHM+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRldGFpbGVkUmVwb3J0ID0gbG9hZGVkRGV0YWlscy5maWx0ZXIocmVwb3J0ID0+IHJlcG9ydC5pZCA9PT0gdGhpcy5jdXJyZW50SUQpWzBdO1xuICAgICAgICAgICAgdGhpcy5kYXRhU3RydWN0dXJlID0gdGhpcy5kZXRhaWxlZFJlcG9ydC5kYXRhU3RydWN0dXJlO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7ICAgICAgXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VUb0Rpc3BsYXkgPSB0aGlzLmRldGFpbGVkUmVwb3J0Lm1lc3NhZ2VTdHJpbmcgPyB0aGlzLmRldGFpbGVkUmVwb3J0Lm1lc3NhZ2VTdHJpbmcgOiAnTm8gRGVzY3JpcHRpb24gYXZhaWxhYmxlLic7ICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2FsbEJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgLy8gUGhvbmVib29rIEFQSVxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGwgUGhvbmVib29rIEFQSVwiKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbEJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL292ZXJ2aWV3L1wiXSk7XG4gICAgfVxuXG4gICAgb25FZGl0QnV0dG9uVGFwKGFyZ3MpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOYXZpZ2F0ZSB0byBFZGl0UGFnZSBmb3IgZGV0YWlsZWRSZXBvcnQgd2l0aCBJRDogXCIrIHRoaXMuZGV0YWlsZWRSZXBvcnQuaWQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZWRpdC9cIisgdGhpcy5jdXJyZW50SURdKTtcbiAgICB9XG4gICAgICAgIFxuICAgIFxufVxuIl19