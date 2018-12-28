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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0U7QUFTaEU7SUFQQTtRQVFjLHNCQUFpQixHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQVFuRixDQUFDO0lBSlUsZ0RBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUFM7UUFBVCxhQUFNLEVBQUU7a0NBQW9CLG1CQUFZO3NFQUFzQztJQUR0RSx1QkFBdUI7UUFQbkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLCtEQUErRDtZQUM1RSxTQUFTLEVBQUUsQ0FBQyw4REFBOEQsQ0FBQztTQUM5RSxDQUFDO09BR1csdUJBQXVCLENBU25DO0lBQUQsOEJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwib3ZlcnZpZXctaGVhZGVyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9vdmVydmlldy9vdmVydmlldy1oZWFkZXIvb3ZlcnZpZXctaGVhZGVyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYXBwL292ZXJ2aWV3L292ZXJ2aWV3LWhlYWRlci9vdmVydmlldy1oZWFkZXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVydmlld0hlYWRlckNvbXBvbmVudCB7XHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoVGVybUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgcHVibGljIHNlYXJjaFRlYXJtOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIG9uU2VhcmNoU3VibWl0KGFyZ3MpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHRoaXMuc2VhcmNoVGVhcm0pO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGVybUNoYW5nZWQubmV4dCh0aGlzLnNlYXJjaFRlYXJtKTtcclxuICAgIH1cclxufVxyXG4iXX0=