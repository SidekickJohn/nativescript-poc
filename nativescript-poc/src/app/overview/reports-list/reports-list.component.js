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
            _this.listSearchService.setItems(_this.reportsList);
            _this.listSearchService.refreshItems();
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
        this.router.navigate(["/detail/" + id]);
    };
    ReportsListComponent.prototype.configureLocalListService = function () {
        var _this = this;
        var clientFilterComparator = function (report) {
            if (!_this.searchTerm) {
                console.log("no searchterm");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBbUY7QUFDbkYsbUZBQWdGO0FBR2hGLDBDQUF5QztBQUN6QyxpRkFBOEU7QUFFOUUsZ0VBQThEO0FBUzlEO0lBU0ksOEJBQ1ksTUFBYyxFQUNkLGtCQUFzQyxFQUN0QyxpQkFBb0M7UUFGcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVhoRCxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDaEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLDhEQUE4RDtRQUM5RCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFVixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBS21CLENBQUM7SUFFckQsdUNBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTthQUN6QixTQUFTLENBQUMsVUFBQSxhQUFhO1lBQ3BCLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFvQjtnQkFDdkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEMsS0FBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDckUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVNLHdDQUFTLEdBQWhCLFVBQWlCLElBQW1CO1FBQ2hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sd0RBQXlCLEdBQWhDO1FBQUEsaUJBa0JDO1FBakJHLElBQU0sc0JBQXNCLEdBQThCLFVBQUMsTUFBYztZQUNyRSxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELElBQU0sYUFBYSxHQUFHLDBCQUFXLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ25DO2dCQUNFLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLHFDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUF6RFE7UUFBUixZQUFLLEVBQUU7OzREQUF5QjtJQVB4QixvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx5REFBeUQ7WUFDdEUsU0FBUyxFQUFFLENBQUMsd0RBQXdELENBQUM7WUFDckUsU0FBUyxFQUFFLENBQUMseUNBQWtCLEVBQUUsdUNBQWlCLENBQUM7U0FDckQsQ0FBQzt5Q0FXc0IsZUFBTTtZQUNNLHlDQUFrQjtZQUNuQix1Q0FBaUI7T0FadkMsb0JBQW9CLENBaUVoQztJQUFELDJCQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVwb3J0IH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9tb2RlbHMvcmVwb3J0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmVwb3J0c0xpc3RTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9zZXJ2aWNlcy9yZXBvcnRzLWxpc3Quc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTGlzdFNlYXJjaFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2hhcmVkL3NlcnZpY2VzL2xpc3Qtc2VhcmNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUZpbHRlckNvbXBhcmF0b3IgfSBmcm9tIFwifi9hcHAvc2hhcmVkL21vZGVscy9maWx0ZXItY29tcGFyYXRvclwiO1xyXG5pbXBvcnQgeyBlc2NhcGVSZWdFeCB9IGZyb20gXCJ+L2FwcC9zaGFyZWQvdXRpbHMvc3RyaW5nLnV0aWxzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyZXBvcnRzLWxpc3RcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwL292ZXJ2aWV3L3JlcG9ydHMtbGlzdC9yZXBvcnRzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAvb3ZlcnZpZXcvcmVwb3J0cy1saXN0L3JlcG9ydHMtbGlzdC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVwb3J0c0xpc3RTZXJ2aWNlLCBMaXN0U2VhcmNoU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcmVwb3J0c0xpc3Q6IEFycmF5PFJlcG9ydD4gPSBbXTtcclxuICAgIHJlcG9ydCA9IFwiXCI7XHJcbiAgICAvL0BWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGxpc3RMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBzZWFyY2hUZXJtOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0c0xpc3RTZXJ2aWNlOiBSZXBvcnRzTGlzdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsaXN0U2VhcmNoU2VydmljZTogTGlzdFNlYXJjaFNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlcG9ydHNMaXN0U2VydmljZS5sb2FkKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShsb2FkZWRSZXBvcnRzID0+IHtcclxuICAgICAgICAgICAgICAgIGxvYWRlZFJlcG9ydHMuZm9yRWFjaCgocmVwb3J0T2JqZWN0OiBSZXBvcnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydHNMaXN0LnB1c2gocmVwb3J0T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RTZWFyY2hTZXJ2aWNlLnNldEl0ZW1zKHRoaXMucmVwb3J0c0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U2VhcmNoU2VydmljZS5yZWZyZXNoSXRlbXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJlTG9jYWxMaXN0U2VydmljZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYoY2hhbmdlcy5zZWFyY2hUZXJtLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5zZWFyY2hUZXJtLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGlkID0gYXJncy5pbmRleCsxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0ZXMgdG8gcmVwb3J0IGZvciBJRDogJyArIGlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsL1wiKyBpZF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25maWd1cmVMb2NhbExpc3RTZXJ2aWNlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudEZpbHRlckNvbXBhcmF0b3I6IElGaWx0ZXJDb21wYXJhdG9yPFJlcG9ydD4gPSAocmVwb3J0OiBSZXBvcnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFRlcm0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gc2VhcmNodGVybVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVzY2FwZWRSZWdFeHAgPSBlc2NhcGVSZWdFeCh0aGlzLnNlYXJjaFRlcm0pO1xyXG4gICAgICAgICAgICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGVzY2FwZWRSZWdFeHAsICdnaScpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICByZXBvcnQubmFtZS5zZWFyY2gocmVnRXhwKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgICAgIHJlcG9ydC5kYXRlLnNlYXJjaChyZWdFeHApICE9PSAtMSBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0U2VhcmNoU2VydmljZS5zZXRGaWx0ZXIoY2xpZW50RmlsdGVyQ29tcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmxpc3RTZWFyY2hTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5saXN0U2VhcmNoU2VydmljZS5yZWZyZXNoSXRlbXMoKTtcclxuICAgIH1cclxufSJdfQ==