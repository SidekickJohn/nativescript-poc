"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var report_detail_service_1 = require("../shared/services/report-detail.service");
var page_1 = require("tns-core-modules/ui/page/page");
var ReportDetailComponent = /** @class */ (function () {
    function ReportDetailComponent(page, reportDetailsService, route) {
        this.page = page;
        this.reportDetailsService = reportDetailsService;
        this.route = route;
        this.isLoading = false;
        this.listLoaded = false;
        this.page.actionBarHidden = true;
    }
    ReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params["id"];
        this.isLoading = true;
        this.reportDetailsService.getReportDetailsList().subscribe(function (loadedDetails) {
            _this.detailedReport = loadedDetails.filter(function (report) { return report.id === id; })[0];
            _this.dataStructure = _this.detailedReport.dataStructure;
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ReportDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            templateUrl: "./app/report-detail/report-detail.component.html",
            providers: [report_detail_service_1.ReportDetailsService]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            report_detail_service_1.ReportDetailsService,
            router_1.ActivatedRoute])
    ], ReportDetailComponent);
    return ReportDetailComponent;
}());
exports.ReportDetailComponent = ReportDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXBvcnQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsa0ZBQWdGO0FBQ2hGLHNEQUFxRDtBQVFyRDtJQU1JLCtCQUNZLElBQVUsRUFDVixvQkFBMEMsRUFDMUMsS0FBcUI7UUFGckIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFOakMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBT2YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaRyxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxhQUFtQztZQUMzRixLQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDdkQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFLUCxDQUFDO0lBM0JRLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLGtEQUFrRDtZQUMvRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQVFvQixXQUFJO1lBQ1ksNENBQW9CO1lBQ25DLHVCQUFjO09BVHhCLHFCQUFxQixDQTRCakM7SUFBRCw0QkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJlcG9ydERldGFpbHMgfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9yZXBvcnQtZGV0YWlscy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSZXBvcnREZXRhaWxzU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvcmVwb3J0LWRldGFpbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0YUVsZW1lbnQgfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9kYXRhRWxlbWVudC5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9yZXBvcnQtZGV0YWlsL3JlcG9ydC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW1JlcG9ydERldGFpbHNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGRldGFpbGVkUmVwb3J0OiBSZXBvcnREZXRhaWxzO1xyXG4gICAgZGF0YVN0cnVjdHVyZTogQXJyYXk8RGF0YUVsZW1lbnQ+O1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBsaXN0TG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0RGV0YWlsc1NlcnZpY2U6IFJlcG9ydERldGFpbHNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHsgXHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXBvcnREZXRhaWxzU2VydmljZS5nZXRSZXBvcnREZXRhaWxzTGlzdCgpLnN1YnNjcmliZSgobG9hZGVkRGV0YWlsczogQXJyYXk8UmVwb3J0RGV0YWlscz4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxlZFJlcG9ydCA9IGxvYWRlZERldGFpbHMuZmlsdGVyKHJlcG9ydCA9PiByZXBvcnQuaWQgPT09IGlkKVswXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU3RydWN0dXJlID0gdGhpcy5kZXRhaWxlZFJlcG9ydC5kYXRhU3RydWN0dXJlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19