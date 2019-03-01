"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
exports.API_ENDPOINT_URL = "https://mobile-poc-endpoint.graffl.com/";
var DocumentsListService = /** @class */ (function () {
    function DocumentsListService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = exports.API_ENDPOINT_URL + "documents.json";
    }
    DocumentsListService.prototype.load = function () {
        return this.httpClient.get(this.baseUrl);
    };
    DocumentsListService.prototype.getDocumentById = function (selectedDocumentId) {
        return this.load().toPromise().then(function (loadedDocuments) {
            var selectedDocument = loadedDocuments.filter(function (document) { return document.document_id === selectedDocumentId; })[0];
            return selectedDocument;
        }).catch(function (e) { return e; });
    };
    DocumentsListService.prototype.getCommonHttpHeaders = function () {
        var httpHeaders = new http_1.HttpHeaders();
        httpHeaders.append("Content-Type", "application/json");
        return httpHeaders;
    };
    DocumentsListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    DocumentsListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DocumentsListService);
    return DocumentsListService;
}());
exports.DocumentsListService = DocumentsListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvY3VtZW50cy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQWtDO0FBQ2xDLDZDQUErRDtBQUlsRCxRQUFBLGdCQUFnQixHQUFHLHlDQUF5QyxDQUFDO0FBRzFFO0lBSUksOEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGbEMsWUFBTyxHQUFHLHdCQUFnQixHQUFFLGdCQUFnQixDQUFDO0lBRVAsQ0FBQztJQUV4QyxtQ0FBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLDhDQUFlLEdBQXRCLFVBQXVCLGtCQUEwQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxlQUFnQztZQUNqRSxJQUFJLGdCQUFnQixHQUFhLGVBQWUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsV0FBVyxLQUFLLGtCQUFrQixFQUEzQyxDQUEyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEgsT0FBTyxnQkFBZ0IsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUssT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUUvQixDQUFDO0lBRUQsbURBQW9CLEdBQXBCO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDcEMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQsMkNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBM0JRLG9CQUFvQjtRQURoQyxpQkFBVSxFQUFFO3lDQUt1QixpQkFBVTtPQUpqQyxvQkFBb0IsQ0E2QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9tb2RlbHMvZG9jdW1lbnQubW9kZWxcIjtcblxuXG5leHBvcnQgY29uc3QgQVBJX0VORFBPSU5UX1VSTCA9IFwiaHR0cHM6Ly9tb2JpbGUtcG9jLWVuZHBvaW50LmdyYWZmbC5jb20vXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb2N1bWVudHNMaXN0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIGJhc2VVcmwgPSBBUElfRU5EUE9JTlRfVVJMKyBcImRvY3VtZW50cy5qc29uXCI7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIHB1YmxpYyBsb2FkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KHRoaXMuYmFzZVVybCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERvY3VtZW50QnlJZChzZWxlY3RlZERvY3VtZW50SWQ6IHN0cmluZyk6IFByb21pc2U8RG9jdW1lbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZCgpLnRvUHJvbWlzZSgpLnRoZW4oKGxvYWRlZERvY3VtZW50czogQXJyYXk8RG9jdW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREb2N1bWVudDogRG9jdW1lbnQgPSBsb2FkZWREb2N1bWVudHMuZmlsdGVyKGRvY3VtZW50ID0+IGRvY3VtZW50LmRvY3VtZW50X2lkID09PSBzZWxlY3RlZERvY3VtZW50SWQpWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkRG9jdW1lbnQ7XG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge3JldHVybiBlO30pO1xuXG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSHR0cEhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICBodHRwSGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICByZXR1cm4gaHR0cEhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cblxufSJdfQ==