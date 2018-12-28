"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var reports_list_service_1 = require("~/app/shared/services/reports-list.service");
var router_1 = require("@angular/router");
var ReportsListComponent = /** @class */ (function () {
    function ReportsListComponent(router, reportsListService) {
        this.router = router;
        this.reportsListService = reportsListService;
        this.reportsList = [];
        this.report = "";
        //@ViewChild("groceryTextField") groceryTextField: ElementRef;
        this.isLoading = false;
        this.listLoaded = false;
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
        });
    };
    ReportsListComponent.prototype.onItemTap = function (args) {
        var id = args.index + 1;
        console.log('Navigates to report for ID: ' + id);
        this.router.navigate(["/overview/" + id]);
    };
    ReportsListComponent = __decorate([
        core_1.Component({
            selector: "reports-list",
            templateUrl: "./app/overview/reports-list/reports-list.component.html",
            styleUrls: ["./app/overview/reports-list/reports-list.component.css"],
            providers: [reports_list_service_1.ReportsListService]
        }),
        __metadata("design:paramtypes", [router_1.Router, reports_list_service_1.ReportsListService])
    ], ReportsListComponent);
    return ReportsListComponent;
}());
exports.ReportsListComponent = ReportsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBa0Q7QUFDbEQsbUZBQWdGO0FBR2hGLDBDQUF5QztBQVN6QztJQU9JLDhCQUFvQixNQUFjLEVBQVUsa0JBQXNDO1FBQTlELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTmxGLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osOERBQThEO1FBQzlELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUVtRSxDQUFDO0lBRXZGLHVDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7YUFDekIsU0FBUyxDQUFDLFVBQUEsYUFBYTtZQUNwQixhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBb0I7Z0JBQ3ZDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsd0NBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBekJRLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHlEQUF5RDtZQUN0RSxTQUFTLEVBQUUsQ0FBQyx3REFBd0QsQ0FBQztZQUNyRSxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztTQUNsQyxDQUFDO3lDQVE4QixlQUFNLEVBQThCLHlDQUFrQjtPQVB6RSxvQkFBb0IsQ0EwQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXBvcnQgfSBmcm9tIFwifi9hcHAvc2hhcmVkL21vZGVscy9yZXBvcnQubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSZXBvcnRzTGlzdFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2hhcmVkL3NlcnZpY2VzL3JlcG9ydHMtbGlzdC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicmVwb3J0cy1saXN0XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9vdmVydmlldy9yZXBvcnRzLWxpc3QvcmVwb3J0cy1saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYXBwL292ZXJ2aWV3L3JlcG9ydHMtbGlzdC9yZXBvcnRzLWxpc3QuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1JlcG9ydHNMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHJlcG9ydHNMaXN0OiBBcnJheTxSZXBvcnQ+ID0gW107XHJcbiAgICByZXBvcnQgPSBcIlwiO1xyXG4gICAgLy9AVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBsaXN0TG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciAscHJpdmF0ZSByZXBvcnRzTGlzdFNlcnZpY2U6IFJlcG9ydHNMaXN0U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c0xpc3RTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZFJlcG9ydHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkUmVwb3J0cy5mb3JFYWNoKChyZXBvcnRPYmplY3Q6IFJlcG9ydCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0c0xpc3QucHVzaChyZXBvcnRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaWQgPSBhcmdzLmluZGV4KzE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRlcyB0byByZXBvcnQgZm9yIElEOiAnICsgaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vdmVydmlldy9cIisgaWRdKTtcclxuICAgIH1cclxufSJdfQ==