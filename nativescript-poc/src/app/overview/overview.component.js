"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(page) {
        this.page = page;
        this.page.actionBarHidden = true;
    }
    OverviewComponent.prototype.onSearchTermChanged = function (searchTerm) {
        this.searchTerm = searchTerm;
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: "overview",
            templateUrl: "./app/overview/overview.component.html",
            styleUrls: ["./app/overview/overview.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUFxRDtBQVFyRDtJQUdJLDJCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVNLCtDQUFtQixHQUExQixVQUEyQixVQUFrQjtRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBVFEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1NBQ3ZELENBQUM7eUNBSzRCLFdBQUk7T0FIckIsaUJBQWlCLENBVzdCO0lBQUQsd0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm92ZXJ2aWV3XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FwcC9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdDb21wb25lbnQge1xyXG4gICAgcHVibGljIHNlYXJjaFRlcm06IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TZWFyY2hUZXJtQ2hhbmdlZChzZWFyY2hUZXJtOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFRlcm0gPSBzZWFyY2hUZXJtO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=