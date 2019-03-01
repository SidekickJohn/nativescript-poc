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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtGQUFnRjtBQUNoRixzREFBcUQ7QUFDckQsMENBQXlEO0FBUXpEO0lBTUksNkJBQ1ksTUFBYyxFQUNkLElBQVUsRUFDVixvQkFBMEMsRUFDMUMsS0FBcUI7UUFIckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxhQUFtQztZQUMzRixLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FBQyxTQUFTLEVBQTVCLENBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7UUFDNUgsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFsQ1EsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO1NBQzdELENBQUM7eUNBUXNCLGVBQU07WUFDUixXQUFJO1lBQ1ksNENBQW9CO1lBQ25DLHVCQUFjO09BVnhCLG1CQUFtQixDQW9DL0I7SUFBRCwwQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlcG9ydERldGFpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9yZXBvcnQtZGV0YWlsLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSZXBvcnREZXRhaWxzIH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9tb2RlbHMvcmVwb3J0LWRldGFpbHMubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicmVwb3J0LWVkaXRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9yZXBvcnQtZWRpdC9yZXBvcnQtZWRpdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAvcmVwb3J0LWVkaXQvcmVwb3J0LWVkaXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIHB1YmxpYyBjdXJyZW50UmVwb3J0OiBSZXBvcnREZXRhaWxzO1xuICAgIHB1YmxpYyBjdXJyZW50TWVzc2FnZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY3VycmVudElEOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJlcG9ydERldGFpbHNTZXJ2aWNlOiBSZXBvcnREZXRhaWxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRJRCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3J0RGV0YWlsc1NlcnZpY2UuZ2V0UmVwb3J0RGV0YWlsc0xpc3QoKS5zdWJzY3JpYmUoKGxvYWRlZERldGFpbHM6IEFycmF5PFJlcG9ydERldGFpbHM+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXBvcnQgPSBsb2FkZWREZXRhaWxzLmZpbHRlcihyZXBvcnQgPT4gcmVwb3J0LmlkID09PSB0aGlzLmN1cnJlbnRJRClbMF07XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlOyAgICAgXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy5jdXJyZW50UmVwb3J0Lm1lc3NhZ2VTdHJpbmcgPyB0aGlzLmN1cnJlbnRSZXBvcnQubWVzc2FnZVN0cmluZyA6ICdObyBEZXNjcmlwdGlvbiBhdmFpbGFibGUuJzsgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uQ2FuY2VsQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsL1wiKyB0aGlzLmN1cnJlbnRJRF0pO1xuICAgIH1cblxuICAgIG9uU2F2ZUJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UmVwb3J0Lm1lc3NhZ2VTdHJpbmcgPSB0aGlzLmN1cnJlbnRNZXNzYWdlO1xuICAgICAgICB0aGlzLnJlcG9ydERldGFpbHNTZXJ2aWNlLnNhdmVDaGFuZ2VzKHRoaXMuY3VycmVudFJlcG9ydCk7ICAgICAgICBcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbC9cIisgdGhpcy5jdXJyZW50SURdKTtcbiAgICB9XG4gICAgXG59XG4iXX0=