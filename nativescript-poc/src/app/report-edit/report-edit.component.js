"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var report_detail_service_1 = require("../shared/services/report-detail.service");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("@angular/router");
var ReportEditComponent = /** @class */ (function () {
    function ReportEditComponent(router, page, reportDetailsService, route) {
        this.router = router;
        this.page = page;
        this.reportDetailsService = reportDetailsService;
        this.route = route;
        this.page.actionBarHidden = true;
    }
    ReportEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentID = +this.route.snapshot.params["id"];
        this.isLoading = true;
        this.reportDetailsService.getReportDetailsList().subscribe(function (loadedDetails) {
            _this.currentReport = loadedDetails.filter(function (report) { return report.id === _this.currentID; })[0];
            _this.isLoading = false;
            _this.currentMessage = _this.currentReport.messageString ? _this.currentReport.messageString : 'No Description available.';
        });
    };
    ReportEditComponent.prototype.onCancelButtonTap = function () {
        this.router.navigate(["/detail/" + this.currentID]);
    };
    ReportEditComponent.prototype.onSaveButtonTap = function () {
        this.currentReport.messageString = this.currentMessage;
        this.reportDetailsService.saveChanges(this.currentReport);
        this.router.navigate(["/detail/" + this.currentID]);
    };
    ReportEditComponent = __decorate([
        core_1.Component({
            selector: "report-edit",
            templateUrl: "./app/report-edit/report-edit.component.html",
            styleUrls: ["./app/report-edit/report-edit.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            page_1.Page,
            report_detail_service_1.ReportDetailsService,
            router_1.ActivatedRoute])
    ], ReportEditComponent);
    return ReportEditComponent;
}());
exports.ReportEditComponent = ReportEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtGQUFnRjtBQUNoRixzREFBcUQ7QUFDckQsMENBQXlEO0FBUXpEO0lBTUksNkJBQ1ksTUFBYyxFQUNkLElBQVUsRUFDVixvQkFBMEMsRUFDMUMsS0FBcUI7UUFIckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxhQUFtQztZQUMzRixLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FBQyxTQUFTLEVBQTVCLENBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7UUFDNUgsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFsQ1EsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO1NBQzdELENBQUM7eUNBUXNCLGVBQU07WUFDUixXQUFJO1lBQ1ksNENBQW9CO1lBQ25DLHVCQUFjO09BVnhCLG1CQUFtQixDQW9DL0I7SUFBRCwwQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmVwb3J0RGV0YWlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3JlcG9ydC1kZXRhaWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJlcG9ydERldGFpbHMgfSBmcm9tIFwifi9hcHAvc2hhcmVkL21vZGVscy9yZXBvcnQtZGV0YWlscy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyZXBvcnQtZWRpdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvcmVwb3J0LWVkaXQvcmVwb3J0LWVkaXQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAvcmVwb3J0LWVkaXQvcmVwb3J0LWVkaXQuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0RWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgcHVibGljIGN1cnJlbnRSZXBvcnQ6IFJlcG9ydERldGFpbHM7XHJcbiAgICBwdWJsaWMgY3VycmVudE1lc3NhZ2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgY3VycmVudElEOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnREZXRhaWxzU2VydmljZTogUmVwb3J0RGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICkgeyBcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJRCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlcG9ydERldGFpbHNTZXJ2aWNlLmdldFJlcG9ydERldGFpbHNMaXN0KCkuc3Vic2NyaWJlKChsb2FkZWREZXRhaWxzOiBBcnJheTxSZXBvcnREZXRhaWxzPikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXBvcnQgPSBsb2FkZWREZXRhaWxzLmZpbHRlcihyZXBvcnQgPT4gcmVwb3J0LmlkID09PSB0aGlzLmN1cnJlbnRJRClbMF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7ICAgICBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IHRoaXMuY3VycmVudFJlcG9ydC5tZXNzYWdlU3RyaW5nID8gdGhpcy5jdXJyZW50UmVwb3J0Lm1lc3NhZ2VTdHJpbmcgOiAnTm8gRGVzY3JpcHRpb24gYXZhaWxhYmxlLic7ICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWxCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbC9cIisgdGhpcy5jdXJyZW50SURdKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNhdmVCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVwb3J0Lm1lc3NhZ2VTdHJpbmcgPSB0aGlzLmN1cnJlbnRNZXNzYWdlO1xyXG4gICAgICAgIHRoaXMucmVwb3J0RGV0YWlsc1NlcnZpY2Uuc2F2ZUNoYW5nZXModGhpcy5jdXJyZW50UmVwb3J0KTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhaWwvXCIrIHRoaXMuY3VycmVudElEXSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=