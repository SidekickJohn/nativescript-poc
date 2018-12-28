"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var apiConfig_1 = require("../apiConfig");
var reports_mock_1 = require("../mock/reports.mock");
var http_1 = require("@angular/common/http");
var ReportsListService = /** @class */ (function () {
    function ReportsListService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = apiConfig_1.ApiConfig.apiUrl + "appdata/" + apiConfig_1.ApiConfig.appKey + "/reports";
    }
    ReportsListService.prototype.load = function () {
        return rxjs_1.of(reports_mock_1.ReportsMock);
        /* return this.httpClient.get(this.baseUrl, {
            headers: this.getCommonHttpHeaders()
        }).pipe(
            map(res => res.json()),
            map(data => {
                let reportsList = [];
                data.forEach((report) => {
                    reportsList.push(new Report(report.id, report.name, report.date));
                });
                return reportsList;
            }),
            catchError(this.handleErrors)
        ); */
    };
    ReportsListService.prototype.getCommonHttpHeaders = function () {
        var httpHeaders = new http_1.HttpHeaders();
        httpHeaders.append("Content-Type", "application/json");
        return httpHeaders;
    };
    ReportsListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    ReportsListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ReportsListService);
    return ReportsListService;
}());
exports.ReportsListService = ReportsListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXBvcnRzLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBc0M7QUFFdEMsMENBQXlDO0FBRXpDLHFEQUFtRDtBQUNuRCw2Q0FBK0Q7QUFJL0Q7SUFJSSw0QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZsQyxZQUFPLEdBQUcscUJBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLHFCQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUVsQyxDQUFDO0lBRXhDLGlDQUFJLEdBQVg7UUFDSSxPQUFPLFNBQUUsQ0FBQywwQkFBVyxDQUFDLENBQUM7UUFDdkI7Ozs7Ozs7Ozs7OzthQVlLO0lBQ1QsQ0FBQztJQUVELGlEQUFvQixHQUFwQjtRQUNJLElBQUksV0FBVyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdkQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8saUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWhDUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FLdUIsaUJBQVU7T0FKakMsa0JBQWtCLENBa0M5QjtJQUFELHlCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQXBpQ29uZmlnIH0gZnJvbSBcIi4uL2FwaUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSZXBvcnQgfSBmcm9tIFwiLi4vbW9kZWxzL3JlcG9ydC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSZXBvcnRzTW9jayB9IGZyb20gXCIuLi9tb2NrL3JlcG9ydHMubW9ja1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNMaXN0U2VydmljZSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgYmFzZVVybCA9IEFwaUNvbmZpZy5hcGlVcmwgKyBcImFwcGRhdGEvXCIgKyBBcGlDb25maWcuYXBwS2V5ICsgXCIvcmVwb3J0c1wiO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKCk6IE9ic2VydmFibGU8QXJyYXk8UmVwb3J0Pj4ge1xyXG4gICAgICAgIHJldHVybiBvZihSZXBvcnRzTW9jayk7XHJcbiAgICAgICAgLyogcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQodGhpcy5iYXNlVXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSHR0cEhlYWRlcnMoKVxyXG4gICAgICAgIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXHJcbiAgICAgICAgICAgIG1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXBvcnRzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChyZXBvcnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRzTGlzdC5wdXNoKG5ldyBSZXBvcnQocmVwb3J0LmlkLCByZXBvcnQubmFtZSwgcmVwb3J0LmRhdGUpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9ydHNMaXN0O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApOyAqL1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1vbkh0dHBIZWFkZXJzKCkge1xyXG4gICAgICAgIGxldCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgICAgIGh0dHBIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGh0dHBIZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59Il19