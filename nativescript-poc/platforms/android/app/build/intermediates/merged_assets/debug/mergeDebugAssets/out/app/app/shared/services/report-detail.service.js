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
                    reportDetailsList.push(new Report(document.id, document.name, document.date));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWRldGFpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWRldGFpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFzQztBQUN0Qyw2Q0FBK0Q7QUFFL0QsMENBQXlDO0FBRXpDLG1FQUFnRTtBQUloRTtJQUlJLDhCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSGxDLFlBQU8sR0FBRyxxQkFBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcscUJBQVMsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7UUFDOUUsaUJBQVksR0FBeUIsRUFBRSxDQUFDO0lBRUYsQ0FBQztJQUUvQyxtREFBb0IsR0FBcEI7UUFDSSxJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLHVDQUFpQixDQUFDO1lBQ3RDLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0gsT0FBTyxTQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hDO1FBRUQ7Ozs7Ozs7Ozs7OzthQVlLO0lBQ1QsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxhQUE0QjtRQUNwQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUMsRUFBRSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQzthQUN4QztTQUNKO0lBQ0wsQ0FBQztJQUVELG1EQUFvQixHQUFwQjtRQUNJLElBQUksV0FBVyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdkQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8saUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTlDUSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTt5Q0FLdUIsaUJBQVU7T0FKakMsb0JBQW9CLENBK0NoQztJQUFELDJCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBcGlDb25maWcgfSBmcm9tIFwiLi4vYXBpQ29uZmlnXCI7XG5pbXBvcnQgeyBSZXBvcnREZXRhaWxzIH0gZnJvbSBcIi4uL21vZGVscy9yZXBvcnQtZGV0YWlscy5tb2RlbFwiO1xuaW1wb3J0IHsgUmVwb3J0RGV0YWlsc01vY2sgfSBmcm9tIFwiLi4vbW9jay9yZXBvcnQtZGV0YWlscy5tb2NrXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcG9ydERldGFpbHNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGJhc2VVcmwgPSBBcGlDb25maWcuYXBpVXJsICsgXCJhcHBkYXRhL1wiICsgQXBpQ29uZmlnLmFwcEtleSArIFwiL3JlcG9ydERldGFpbHNcIjtcbiAgICBwcml2YXRlIHJlcG9ydHNDYWNoZTogQXJyYXk8UmVwb3J0RGV0YWlscz4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBnZXRSZXBvcnREZXRhaWxzTGlzdCgpOiAgT2JzZXJ2YWJsZTxBcnJheTxSZXBvcnREZXRhaWxzPj4ge1xuICAgICAgICBpZih0aGlzLnJlcG9ydHNDYWNoZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c0NhY2hlID0gUmVwb3J0RGV0YWlsc01vY2s7XG4gICAgICAgICAgICByZXR1cm4gb2YodGhpcy5yZXBvcnRzQ2FjaGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMucmVwb3J0c0NhY2hlKTsgXG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLyogcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQodGhpcy5iYXNlVXJsLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkh0dHBIZWFkZXJzKClcbiAgICAgICAgfSkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcG9ydERldGFpbHNMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChyZXBvcnREZXRhaWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0RGV0YWlsc0xpc3QucHVzaChuZXcgUmVwb3J0KGRvY3VtZW50LmlkLCBkb2N1bWVudC5uYW1lLCBkb2N1bWVudC5kYXRlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9ydERldGFpbHNMaXN0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApOyAqL1xuICAgIH1cblxuICAgIHNhdmVDaGFuZ2VzKGNoYW5nZWRSZXBvcnQ6IFJlcG9ydERldGFpbHMpOiB2b2lkIHtcbiAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IHRoaXMucmVwb3J0c0NhY2hlLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnJlcG9ydHNDYWNoZVthXS5pZCA9PT0gY2hhbmdlZFJlcG9ydC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0c0NhY2hlW2FdID0gY2hhbmdlZFJlcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbW1vbkh0dHBIZWFkZXJzKCkge1xuICAgICAgICBsZXQgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgaHR0cEhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgcmV0dXJuIGh0dHBIZWFkZXJzO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59XG4iXX0=