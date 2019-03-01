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
    OverviewHeaderComponent.prototype.onSettingsBtnTapped = function () {
        console.log("settings tapped");
    };
    OverviewHeaderComponent.prototype.onUserBtnTapped = function () {
        console.log("User tapped");
    };
    OverviewHeaderComponent.prototype.onSpeachSearchBtnTapped = function () {
        console.log("speach tapped");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0U7QUFTaEU7SUFQQTtRQVFjLHNCQUFpQixHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQTBCbkYsQ0FBQztJQXRCVSxnREFBYyxHQUFyQixVQUFzQixJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSwrQ0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0scURBQW1CLEdBQTFCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHTSxpREFBZSxHQUF0QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLHlEQUF1QixHQUE5QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQXpCUztRQUFULGFBQU0sRUFBRTtrQ0FBb0IsbUJBQVk7c0VBQXNDO0lBRHRFLHVCQUF1QjtRQVBuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsK0RBQStEO1lBQzVFLFNBQVMsRUFBRSxDQUFDLDhEQUE4RCxDQUFDO1NBQzlFLENBQUM7T0FHVyx1QkFBdUIsQ0EyQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwib3ZlcnZpZXctaGVhZGVyXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXctaGVhZGVyL292ZXJ2aWV3LWhlYWRlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXctaGVhZGVyL292ZXJ2aWV3LWhlYWRlci5jb21wb25lbnQuY3NzXCJdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBPdmVydmlld0hlYWRlckNvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIHNlYXJjaFRlcm1DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgcHVibGljIHNlYXJjaFRlYXJtOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgb25TZWFyY2hTdWJtaXQoYXJncyk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHRoaXMuc2VhcmNoVGVhcm0pO1xuICAgICAgICB0aGlzLnNlYXJjaFRlcm1DaGFuZ2VkLm5leHQodGhpcy5zZWFyY2hUZWFybSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2VhcmNoQ2xlYXIoYXJncyk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaCBjbGVhcmVkLlwiKTtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtQ2hhbmdlZC5uZXh0KHRoaXMuc2VhcmNoVGVhcm0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNldHRpbmdzQnRuVGFwcGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmdzIHRhcHBlZFwiKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBvblVzZXJCdG5UYXBwZWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciB0YXBwZWRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3BlYWNoU2VhcmNoQnRuVGFwcGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNwZWFjaCB0YXBwZWRcIik7XG4gICAgfVxufVxuIl19