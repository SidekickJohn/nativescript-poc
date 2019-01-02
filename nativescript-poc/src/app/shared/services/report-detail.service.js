"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var apiConfig_1 = require("../apiConfig");
var report_details_mock_1 = require("../mock/report-details.mock");
var ReportDetailsService = /** @class */ (function () {
    function ReportDetailsService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = apiConfig_1.ApiConfig.apiUrl + "appdata/" + apiConfig_1.ApiConfig.appKey + "/reportDetails";
        this.reportsCache = [];
    }
    ReportDetailsService.prototype.getReportDetailsList = function () {
        if (this.reportsCache.length === 0) {
            this.reportsCache = report_details_mock_1.ReportDetailsMock;
            return rxjs_1.of(this.reportsCache);
        }
        else {
            return rxjs_1.of(this.reportsCache);
        }
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
    ReportDetailsService.prototype.saveChanges = function (changedReport) {
        for (var a = 0; a < this.reportsCache.length; a++) {
            if (this.reportsCache[a].id === changedReport.id) {
                this.reportsCache[a] = changedReport;
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWRldGFpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFzQztBQUN0Qyw2Q0FBK0Q7QUFFL0QsMENBQXlDO0FBRXpDLG1FQUFnRTtBQUloRTtJQUlJLDhCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSGxDLFlBQU8sR0FBRyxxQkFBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcscUJBQVMsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7UUFDOUUsaUJBQVksR0FBeUIsRUFBRSxDQUFDO0lBRUYsQ0FBQztJQUUvQyxtREFBb0IsR0FBcEI7UUFDSSxJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLHVDQUFpQixDQUFDO1lBQ3RDLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0gsT0FBTyxTQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hDO1FBRUQ7Ozs7Ozs7Ozs7OzthQVlLO0lBQ1QsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxhQUE0QjtRQUNwQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUMsRUFBRSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQzthQUN4QztTQUNKO0lBQ0wsQ0FBQztJQUVELG1EQUFvQixHQUFwQjtRQUNJLElBQUksV0FBVyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdkQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8saUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTlDUSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTt5Q0FLdUIsaUJBQVU7T0FKakMsb0JBQW9CLENBK0NoQztJQUFELDJCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwaUNvbmZpZyB9IGZyb20gXCIuLi9hcGlDb25maWdcIjtcclxuaW1wb3J0IHsgUmVwb3J0RGV0YWlscyB9IGZyb20gXCIuLi9tb2RlbHMvcmVwb3J0LWRldGFpbHMubW9kZWxcIjtcclxuaW1wb3J0IHsgUmVwb3J0RGV0YWlsc01vY2sgfSBmcm9tIFwiLi4vbW9jay9yZXBvcnQtZGV0YWlscy5tb2NrXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0RGV0YWlsc1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBiYXNlVXJsID0gQXBpQ29uZmlnLmFwaVVybCArIFwiYXBwZGF0YS9cIiArIEFwaUNvbmZpZy5hcHBLZXkgKyBcIi9yZXBvcnREZXRhaWxzXCI7XHJcbiAgICBwcml2YXRlIHJlcG9ydHNDYWNoZTogQXJyYXk8UmVwb3J0RGV0YWlscz4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIGdldFJlcG9ydERldGFpbHNMaXN0KCk6ICBPYnNlcnZhYmxlPEFycmF5PFJlcG9ydERldGFpbHM+PiB7XHJcbiAgICAgICAgaWYodGhpcy5yZXBvcnRzQ2FjaGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c0NhY2hlID0gUmVwb3J0RGV0YWlsc01vY2s7XHJcbiAgICAgICAgICAgIHJldHVybiBvZih0aGlzLnJlcG9ydHNDYWNoZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMucmVwb3J0c0NhY2hlKTsgXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQodGhpcy5iYXNlVXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSHR0cEhlYWRlcnMoKVxyXG4gICAgICAgIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXHJcbiAgICAgICAgICAgIG1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXBvcnREZXRhaWxzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChyZXBvcnREZXRhaWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnREZXRhaWxzTGlzdC5wdXNoKG5ldyBSZXBvcnQocmVwb3J0LmlkLCByZXBvcnQubmFtZSwgcmVwb3J0LmRhdGUpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9ydERldGFpbHNMaXN0O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApOyAqL1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVDaGFuZ2VzKGNoYW5nZWRSZXBvcnQ6IFJlcG9ydERldGFpbHMpOiB2b2lkIHtcclxuICAgICAgICBmb3IobGV0IGEgPSAwOyBhIDwgdGhpcy5yZXBvcnRzQ2FjaGUubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5yZXBvcnRzQ2FjaGVbYV0uaWQgPT09IGNoYW5nZWRSZXBvcnQuaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0c0NhY2hlW2FdID0gY2hhbmdlZFJlcG9ydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tb25IdHRwSGVhZGVycygpIHtcclxuICAgICAgICBsZXQgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgICAgICBodHRwSGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJldHVybiBodHRwSGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==