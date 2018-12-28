"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var reports_list_service_1 = require("~/app/shared/services/reports-list.service");
var router_1 = require("@angular/router");
var list_search_service_1 = require("~/app/shared/services/list-search.service");
var string_utils_1 = require("~/app/shared/utils/string.utils");
var ReportsListComponent = /** @class */ (function () {
    function ReportsListComponent(router, reportsListService, listSearchService) {
        this.router = router;
        this.reportsListService = reportsListService;
        this.listSearchService = listSearchService;
        this.reportsList = [];
        this.report = "";
        //@ViewChild("groceryTextField") groceryTextField: ElementRef;
        this.isLoading = false;
        this.listLoaded = false;
        this.searchTerm = "";
    }
    ReportsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.reportsListService.load()
            .subscribe(function (loadedReports) {
            loadedReports.forEach(function (reportObject) {
                _this.reportsList.push(reportObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
            _this.configureLocalListService();
        });
    };
    ReportsListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.searchTerm.currentValue !== changes.searchTerm.previousValue) {
            this.search();
        }
    };
    ReportsListComponent.prototype.onItemTap = function (args) {
        var id = args.index + 1;
        console.log('Navigates to report for ID: ' + id);
        this.router.navigate(["/overview/" + id]);
    };
    ReportsListComponent.prototype.configureLocalListService = function () {
        var _this = this;
        var clientFilterComparator = function (report) {
            if (!_this.searchTerm) {
                return true;
            }
            var escapedRegExp = string_utils_1.escapeRegEx(_this.searchTerm);
            var regExp = new RegExp(escapedRegExp, 'gi');
            if (report.name.search(regExp) !== -1 ||
                report.date.search(regExp) !== -1) {
                return true;
            }
            return false;
        };
        this.listSearchService.setFilter(clientFilterComparator);
    };
    ReportsListComponent.prototype.search = function () {
        this.listSearchService.reset();
        this.listSearchService.refreshItems();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ReportsListComponent.prototype, "searchTerm", void 0);
    ReportsListComponent = __decorate([
        core_1.Component({
            selector: "reports-list",
            templateUrl: "./app/overview/reports-list/reports-list.component.html",
            styleUrls: ["./app/overview/reports-list/reports-list.component.css"],
            providers: [reports_list_service_1.ReportsListService, list_search_service_1.ListSearchService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            reports_list_service_1.ReportsListService,
            list_search_service_1.ListSearchService])
    ], ReportsListComponent);
    return ReportsListComponent;
}());
exports.ReportsListComponent = ReportsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBbUY7QUFDbkYsbUZBQWdGO0FBR2hGLDBDQUF5QztBQUN6QyxpRkFBOEU7QUFFOUUsZ0VBQThEO0FBUzlEO0lBU0ksOEJBQ1ksTUFBYyxFQUNkLGtCQUFzQyxFQUN0QyxpQkFBb0M7UUFGcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVhoRCxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDaEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLDhEQUE4RDtRQUM5RCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFVixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBS21CLENBQUM7SUFFckQsdUNBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTthQUN6QixTQUFTLENBQUMsVUFBQSxhQUFhO1lBQ3BCLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFvQjtnQkFDdkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUNyRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRU0sd0NBQVMsR0FBaEIsVUFBaUIsSUFBbUI7UUFDaEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksR0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSx3REFBeUIsR0FBaEM7UUFBQSxpQkFpQkM7UUFoQkcsSUFBTSxzQkFBc0IsR0FBOEIsVUFBQyxNQUFjO1lBQ3JFLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsSUFBTSxhQUFhLEdBQUcsMEJBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDbkM7Z0JBQ0UsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0scUNBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQXREUTtRQUFSLFlBQUssRUFBRTs7NERBQXlCO0lBUHhCLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHlEQUF5RDtZQUN0RSxTQUFTLEVBQUUsQ0FBQyx3REFBd0QsQ0FBQztZQUNyRSxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSx1Q0FBaUIsQ0FBQztTQUNyRCxDQUFDO3lDQVdzQixlQUFNO1lBQ00seUNBQWtCO1lBQ25CLHVDQUFpQjtPQVp2QyxvQkFBb0IsQ0E4RGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTlERCxJQThEQztBQTlEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXBvcnQgfSBmcm9tIFwifi9hcHAvc2hhcmVkL21vZGVscy9yZXBvcnQubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSZXBvcnRzTGlzdFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2hhcmVkL3NlcnZpY2VzL3JlcG9ydHMtbGlzdC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMaXN0U2VhcmNoU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zaGFyZWQvc2VydmljZXMvbGlzdC1zZWFyY2guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyQ29tcGFyYXRvciB9IGZyb20gXCJ+L2FwcC9zaGFyZWQvbW9kZWxzL2ZpbHRlci1jb21wYXJhdG9yXCI7XHJcbmltcG9ydCB7IGVzY2FwZVJlZ0V4IH0gZnJvbSBcIn4vYXBwL3NoYXJlZC91dGlscy9zdHJpbmcudXRpbHNcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJlcG9ydHMtbGlzdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvb3ZlcnZpZXcvcmVwb3J0cy1saXN0L3JlcG9ydHMtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FwcC9vdmVydmlldy9yZXBvcnRzLWxpc3QvcmVwb3J0cy1saXN0LmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtSZXBvcnRzTGlzdFNlcnZpY2UsIExpc3RTZWFyY2hTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICByZXBvcnRzTGlzdDogQXJyYXk8UmVwb3J0PiA9IFtdO1xyXG4gICAgcmVwb3J0ID0gXCJcIjtcclxuICAgIC8vQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHNlYXJjaFRlcm06IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRzTGlzdFNlcnZpY2U6IFJlcG9ydHNMaXN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGxpc3RTZWFyY2hTZXJ2aWNlOiBMaXN0U2VhcmNoU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c0xpc3RTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZFJlcG9ydHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkUmVwb3J0cy5mb3JFYWNoKChyZXBvcnRPYmplY3Q6IFJlcG9ydCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0c0xpc3QucHVzaChyZXBvcnRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJlTG9jYWxMaXN0U2VydmljZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYoY2hhbmdlcy5zZWFyY2hUZXJtLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5zZWFyY2hUZXJtLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGlkID0gYXJncy5pbmRleCsxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0ZXMgdG8gcmVwb3J0IGZvciBJRDogJyArIGlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3ZlcnZpZXcvXCIrIGlkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ3VyZUxvY2FsTGlzdFNlcnZpY2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50RmlsdGVyQ29tcGFyYXRvcjogSUZpbHRlckNvbXBhcmF0b3I8UmVwb3J0PiA9IChyZXBvcnQ6IFJlcG9ydCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoVGVybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZXNjYXBlZFJlZ0V4cCA9IGVzY2FwZVJlZ0V4KHRoaXMuc2VhcmNoVGVybSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlZFJlZ0V4cCwgJ2dpJyk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHJlcG9ydC5uYW1lLnNlYXJjaChyZWdFeHApICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0LmRhdGUuc2VhcmNoKHJlZ0V4cCkgIT09IC0xIFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RTZWFyY2hTZXJ2aWNlLnNldEZpbHRlcihjbGllbnRGaWx0ZXJDb21wYXJhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMubGlzdFNlYXJjaFNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmxpc3RTZWFyY2hTZXJ2aWNlLnJlZnJlc2hJdGVtcygpO1xyXG4gICAgfVxyXG59Il19