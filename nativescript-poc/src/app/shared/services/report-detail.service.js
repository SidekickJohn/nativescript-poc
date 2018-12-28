"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var apiConfig_1 = require("../apiConfig");
var report_details_mock_1 = require("../mock/report-details.mock");
var ReportDetailsService = /** @class */ (function () {
    // private detailedReportsList: ReportDetails[];
    function ReportDetailsService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = apiConfig_1.ApiConfig.apiUrl + "appdata/" + apiConfig_1.ApiConfig.appKey + "/reportDetails";
    }
    ReportDetailsService.prototype.getReportDetailsList = function () {
        return rxjs_1.of(report_details_mock_1.ReportDetailsMock);
        /* return this.httpClient.get(this.baseUrl, {
            headers: this.getCommonHttpHeaders()
        }).pipe(
            map(res => res.json()),
            map(data => {
                let reportDetailsList = [];
                data.forEach((reportDetail) => {
                    reportDetailsList.push(new Report(report.id, report.name, report.date));
                });
                return reportDetailsList;
            }),
            catchError(this.handleErrors)
        ); */
    };
    ReportDetailsService.prototype.getCommonHttpHeaders = function () {
        var httpHeaders = new http_1.HttpHeaders();
        httpHeaders.append("Content-Type", "application/json");
        return httpHeaders;
    };
    ReportDetailsService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    ReportDetailsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ReportDetailsService);
    return ReportDetailsService;
}());
exports.ReportDetailsService = ReportDetailsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWRldGFpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFzQztBQUN0Qyw2Q0FBK0Q7QUFFL0QsMENBQXlDO0FBRXpDLG1FQUFnRTtBQUloRTtJQUVJLGdEQUFnRDtJQUVoRCw4QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhsQyxZQUFPLEdBQUcscUJBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLHFCQUFTLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBR3hDLENBQUM7SUFFL0MsbURBQW9CLEdBQXBCO1FBQ0ksT0FBTyxTQUFFLENBQUMsdUNBQWlCLENBQUMsQ0FBQztRQUM3Qjs7Ozs7Ozs7Ozs7O2FBWUs7SUFDVCxDQUFDO0lBRUQsbURBQW9CLEdBQXBCO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDcEMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQsMkNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBaENRLG9CQUFvQjtRQURoQyxpQkFBVSxFQUFFO3lDQUt1QixpQkFBVTtPQUpqQyxvQkFBb0IsQ0FpQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IEFwaUNvbmZpZyB9IGZyb20gXCIuLi9hcGlDb25maWdcIjtcbmltcG9ydCB7IFJlcG9ydERldGFpbHMgfSBmcm9tIFwiLi4vbW9kZWxzL3JlcG9ydC1kZXRhaWxzLm1vZGVsXCI7XG5pbXBvcnQgeyBSZXBvcnREZXRhaWxzTW9jayB9IGZyb20gXCIuLi9tb2NrL3JlcG9ydC1kZXRhaWxzLm1vY2tcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVwb3J0RGV0YWlsc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgYmFzZVVybCA9IEFwaUNvbmZpZy5hcGlVcmwgKyBcImFwcGRhdGEvXCIgKyBBcGlDb25maWcuYXBwS2V5ICsgXCIvcmVwb3J0RGV0YWlsc1wiO1xuICAgIC8vIHByaXZhdGUgZGV0YWlsZWRSZXBvcnRzTGlzdDogUmVwb3J0RGV0YWlsc1tdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIGdldFJlcG9ydERldGFpbHNMaXN0KCk6ICBPYnNlcnZhYmxlPEFycmF5PFJlcG9ydERldGFpbHM+PiB7XG4gICAgICAgIHJldHVybiBvZihSZXBvcnREZXRhaWxzTW9jayk7XG4gICAgICAgIC8qIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KHRoaXMuYmFzZVVybCwge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRDb21tb25IdHRwSGVhZGVycygpXG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXBvcnREZXRhaWxzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgocmVwb3J0RGV0YWlsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydERldGFpbHNMaXN0LnB1c2gobmV3IFJlcG9ydChyZXBvcnQuaWQsIHJlcG9ydC5uYW1lLCByZXBvcnQuZGF0ZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBvcnREZXRhaWxzTGlzdDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKTsgKi9cbiAgICB9XG5cbiAgICBnZXRDb21tb25IdHRwSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICAgIGh0dHBIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIHJldHVybiBodHRwSGVhZGVycztcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufVxuIl19