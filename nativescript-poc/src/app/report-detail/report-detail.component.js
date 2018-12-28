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
    ReportDetailComponent.prototype.onCallButtonTap = function () {
        // Phonebook API
        console.log("Call Phonebook API");
    };
    ReportDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            templateUrl: "./app/report-detail/report-detail.component.html",
            styleUrls: ["./app/report-detail/report-detail.component.css"],
            providers: [report_detail_service_1.ReportDetailsService]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            report_detail_service_1.ReportDetailsService,
            router_1.ActivatedRoute])
    ], ReportDetailComponent);
    return ReportDetailComponent;
}());
exports.ReportDetailComponent = ReportDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXBvcnQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsa0ZBQWdGO0FBQ2hGLHNEQUFxRDtBQVNyRDtJQU1JLCtCQUNZLElBQVUsRUFDVixvQkFBMEMsRUFDMUMsS0FBcUI7UUFGckIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFOakMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBT2YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxhQUFtQztZQUMzRixLQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDdkQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUNJLGdCQUFnQjtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTVCUSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxrREFBa0Q7WUFDL0QsU0FBUyxFQUFFLENBQUMsaURBQWlELENBQUM7WUFDOUQsU0FBUyxFQUFFLENBQUMsNENBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FRb0IsV0FBSTtZQUNZLDRDQUFvQjtZQUNuQyx1QkFBYztPQVR4QixxQkFBcUIsQ0E2QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSZXBvcnREZXRhaWxzIH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvcmVwb3J0LWRldGFpbHMubW9kZWxcIjtcclxuaW1wb3J0IHsgUmVwb3J0RGV0YWlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL3JlcG9ydC1kZXRhaWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IERhdGFFbGVtZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvZGF0YUVsZW1lbnQubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvcmVwb3J0LWRldGFpbC9yZXBvcnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYXBwL3JlcG9ydC1kZXRhaWwvcmVwb3J0LWRldGFpbC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVwb3J0RGV0YWlsc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZGV0YWlsZWRSZXBvcnQ6IFJlcG9ydERldGFpbHM7XHJcbiAgICBkYXRhU3RydWN0dXJlOiBBcnJheTxEYXRhRWxlbWVudD47XHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGxpc3RMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnREZXRhaWxzU2VydmljZTogUmVwb3J0RGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICkgeyBcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlcG9ydERldGFpbHNTZXJ2aWNlLmdldFJlcG9ydERldGFpbHNMaXN0KCkuc3Vic2NyaWJlKChsb2FkZWREZXRhaWxzOiBBcnJheTxSZXBvcnREZXRhaWxzPikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbGVkUmVwb3J0ID0gbG9hZGVkRGV0YWlscy5maWx0ZXIocmVwb3J0ID0+IHJlcG9ydC5pZCA9PT0gaWQpWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTdHJ1Y3R1cmUgPSB0aGlzLmRldGFpbGVkUmVwb3J0LmRhdGFTdHJ1Y3R1cmU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYWxsQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFBob25lYm9vayBBUElcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGwgUGhvbmVib29rIEFQSVwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=