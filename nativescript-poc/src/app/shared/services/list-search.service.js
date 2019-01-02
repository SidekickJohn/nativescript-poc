"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListSearchService = /** @class */ (function () {
    function ListSearchService() {
        this.totalCount = 0;
        this.pageSize = 1000;
        this.upperOuterBound = this.pageSize;
        this.lowerOuterBound = 0;
        this.items = [];
        this.filterComparator = null;
        this.itemsCache = [];
    }
    ListSearchService.prototype.setItems = function (items) {
        this.itemsCache = items;
    };
    ListSearchService.prototype.setFilter = function (filterComparator) {
        this.filterComparator = filterComparator;
    };
    ListSearchService.prototype.reset = function () {
        this.items = [];
        this.totalCount = 0;
    };
    ListSearchService.prototype.refreshItems = function () {
        var modifiedItems = this.itemsCache.slice(0);
        if (this.filterComparator) {
            modifiedItems = this.filterItems(modifiedItems);
        }
        this.totalCount = modifiedItems.length;
        this.items = modifiedItems;
    };
    ListSearchService.prototype.filterItems = function (items) {
        return items.filter(this.filterComparator);
    };
    ListSearchService = __decorate([
        core_1.Injectable()
    ], ListSearchService);
    return ListSearchService;
}());
exports.ListSearchService = ListSearchService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3Qtc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFEQTtRQUVXLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixvQkFBZSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIscUJBQWdCLEdBQThCLElBQUksQ0FBQztRQUNsRCxlQUFVLEdBQWtCLEVBQUUsQ0FBQztJQWdDM0MsQ0FBQztJQTlCVSxvQ0FBUSxHQUFmLFVBQWdCLEtBQW9CO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxxQ0FBUyxHQUFoQixVQUFpQixnQkFBMkM7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLHdDQUFZLEdBQW5CO1FBQ0ksSUFBSSxhQUFhLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQy9CLENBQUM7SUFFTyx1Q0FBVyxHQUFuQixVQUFvQixLQUFvQjtRQUVwQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXBDUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTtPQUNBLGlCQUFpQixDQXVDN0I7SUFBRCx3QkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSZXBvcnQgfSBmcm9tIFwiLi4vbW9kZWxzL3JlcG9ydC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyQ29tcGFyYXRvciB9IGZyb20gXCIuLi9tb2RlbHMvZmlsdGVyLWNvbXBhcmF0b3JcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExpc3RTZWFyY2hTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgcHVibGljIHVwcGVyT3V0ZXJCb3VuZDogbnVtYmVyID0gdGhpcy5wYWdlU2l6ZTtcclxuICAgIHB1YmxpYyBsb3dlck91dGVyQm91bmQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PFJlcG9ydD4gPSBbXTtcclxuICAgIHB1YmxpYyBmaWx0ZXJDb21wYXJhdG9yOiBJRmlsdGVyQ29tcGFyYXRvcjxSZXBvcnQ+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXRlbXNDYWNoZTogQXJyYXk8UmVwb3J0PiA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtcyhpdGVtczogQXJyYXk8UmVwb3J0Pikge1xyXG4gICAgICAgIHRoaXMuaXRlbXNDYWNoZSA9IGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRGaWx0ZXIoZmlsdGVyQ29tcGFyYXRvcjogSUZpbHRlckNvbXBhcmF0b3I8UmVwb3J0Pik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQ29tcGFyYXRvciA9IGZpbHRlckNvbXBhcmF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoSXRlbXMoKSB7XHJcbiAgICAgICAgbGV0IG1vZGlmaWVkSXRlbXM6IEFycmF5PFJlcG9ydD4gPSB0aGlzLml0ZW1zQ2FjaGUuc2xpY2UoMCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlckNvbXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgbW9kaWZpZWRJdGVtcyA9IHRoaXMuZmlsdGVySXRlbXMobW9kaWZpZWRJdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSBtb2RpZmllZEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICB0aGlzLml0ZW1zID0gbW9kaWZpZWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckl0ZW1zKGl0ZW1zOiBBcnJheTxSZXBvcnQ+KTogQXJyYXk8UmVwb3J0PiB7ICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKHRoaXMuZmlsdGVyQ29tcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==