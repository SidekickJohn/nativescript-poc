"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OverviewHeaderComponent = /** @class */ (function () {
    function OverviewHeaderComponent() {
        this.searchTermChanged = new core_1.EventEmitter();
    }
    OverviewHeaderComponent.prototype.onSearchSubmit = function (args) {
        console.log("You are searching for " + this.searchTearm);
        this.searchTermChanged.next(this.searchTearm);
    };
    OverviewHeaderComponent.prototype.onSearchClear = function (args) {
        console.log("Search cleared.");
        this.searchTermChanged.next(this.searchTearm);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OverviewHeaderComponent.prototype, "searchTermChanged", void 0);
    OverviewHeaderComponent = __decorate([
        core_1.Component({
            selector: "overview-header",
            templateUrl: "./app/overview/overview-header/overview-header.component.html",
            styleUrls: ["./app/overview/overview-header/overview-header.component.css"]
        })
    ], OverviewHeaderComponent);
    return OverviewHeaderComponent;
}());
exports.OverviewHeaderComponent = OverviewHeaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0U7QUFTaEU7SUFQQTtRQVFjLHNCQUFpQixHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQWFuRixDQUFDO0lBVFUsZ0RBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sK0NBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVpTO1FBQVQsYUFBTSxFQUFFO2tDQUFvQixtQkFBWTtzRUFBc0M7SUFEdEUsdUJBQXVCO1FBUG5DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwrREFBK0Q7WUFDNUUsU0FBUyxFQUFFLENBQUMsOERBQThELENBQUM7U0FDOUUsQ0FBQztPQUdXLHVCQUF1QixDQWNuQztJQUFELDhCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm92ZXJ2aWV3LWhlYWRlclwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXctaGVhZGVyL292ZXJ2aWV3LWhlYWRlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FwcC9vdmVydmlldy9vdmVydmlldy1oZWFkZXIvb3ZlcnZpZXctaGVhZGVyLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdIZWFkZXJDb21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIHNlYXJjaFRlcm1DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAgIHB1YmxpYyBzZWFyY2hUZWFybTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBvblNlYXJjaFN1Ym1pdChhcmdzKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyB0aGlzLnNlYXJjaFRlYXJtKTtcclxuICAgICAgICB0aGlzLnNlYXJjaFRlcm1DaGFuZ2VkLm5leHQodGhpcy5zZWFyY2hUZWFybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2VhcmNoQ2xlYXIoYXJncyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoIGNsZWFyZWQuXCIpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGVybUNoYW5nZWQubmV4dCh0aGlzLnNlYXJjaFRlYXJtKTtcclxuICAgIH1cclxufVxyXG4iXX0=