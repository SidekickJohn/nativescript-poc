"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OverviewHeaderComponent = /** @class */ (function () {
    function OverviewHeaderComponent() {
    }
    OverviewHeaderComponent.prototype.onSearchSubmit = function (args) {
        console.log("You are searching for " + this.searchTearm);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFRMUM7SUFBQTtJQU1BLENBQUM7SUFIVSxnREFBYyxHQUFyQixVQUFzQixJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFMUSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLCtEQUErRDtZQUM1RSxTQUFTLEVBQUUsQ0FBQyw4REFBOEQsQ0FBQztTQUM5RSxDQUFDO09BRVcsdUJBQXVCLENBTW5DO0lBQUQsOEJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJvdmVydmlldy1oZWFkZXJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwL292ZXJ2aWV3L292ZXJ2aWV3LWhlYWRlci9vdmVydmlldy1oZWFkZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXctaGVhZGVyL292ZXJ2aWV3LWhlYWRlci5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdIZWFkZXJDb21wb25lbnQge1xyXG4gICAgcHVibGljIHNlYXJjaFRlYXJtOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIG9uU2VhcmNoU3VibWl0KGFyZ3MpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHRoaXMuc2VhcmNoVGVhcm0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==