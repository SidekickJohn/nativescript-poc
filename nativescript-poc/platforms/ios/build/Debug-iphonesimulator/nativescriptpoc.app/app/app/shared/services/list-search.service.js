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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3Qtc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFEQTtRQUVXLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixvQkFBZSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsVUFBSyxHQUFvQixFQUFFLENBQUM7UUFDNUIscUJBQWdCLEdBQWdDLElBQUksQ0FBQztRQUNwRCxlQUFVLEdBQW9CLEVBQUUsQ0FBQztJQWdDN0MsQ0FBQztJQTlCVSxvQ0FBUSxHQUFmLFVBQWdCLEtBQXNCO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxxQ0FBUyxHQUFoQixVQUFpQixnQkFBNkM7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLHdDQUFZLEdBQW5CO1FBQ0ksSUFBSSxhQUFhLEdBQW9CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQy9CLENBQUM7SUFFTyx1Q0FBVyxHQUFuQixVQUFvQixLQUFzQjtRQUV0QyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXBDUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTtPQUNBLGlCQUFpQixDQXVDN0I7SUFBRCx3QkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUZpbHRlckNvbXBhcmF0b3IgfSBmcm9tIFwiLi4vbW9kZWxzL2ZpbHRlci1jb21wYXJhdG9yXCI7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gXCIuLi9tb2RlbHMvZG9jdW1lbnQubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RTZWFyY2hTZXJ2aWNlIHtcbiAgICBwdWJsaWMgdG90YWxDb3VudDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwMDA7XG4gICAgcHVibGljIHVwcGVyT3V0ZXJCb3VuZDogbnVtYmVyID0gdGhpcy5wYWdlU2l6ZTtcbiAgICBwdWJsaWMgbG93ZXJPdXRlckJvdW5kOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8RG9jdW1lbnQ+ID0gW107XG4gICAgcHVibGljIGZpbHRlckNvbXBhcmF0b3I6IElGaWx0ZXJDb21wYXJhdG9yPERvY3VtZW50PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBpdGVtc0NhY2hlOiBBcnJheTxEb2N1bWVudD4gPSBbXTtcblxuICAgIHB1YmxpYyBzZXRJdGVtcyhpdGVtczogQXJyYXk8RG9jdW1lbnQ+KSB7XG4gICAgICAgIHRoaXMuaXRlbXNDYWNoZSA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGaWx0ZXIoZmlsdGVyQ29tcGFyYXRvcjogSUZpbHRlckNvbXBhcmF0b3I8RG9jdW1lbnQ+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ29tcGFyYXRvciA9IGZpbHRlckNvbXBhcmF0b3I7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hJdGVtcygpIHtcbiAgICAgICAgbGV0IG1vZGlmaWVkSXRlbXM6IEFycmF5PERvY3VtZW50PiA9IHRoaXMuaXRlbXNDYWNoZS5zbGljZSgwKTtcblxuICAgICAgICBpZiAodGhpcy5maWx0ZXJDb21wYXJhdG9yKSB7XG4gICAgICAgICAgICBtb2RpZmllZEl0ZW1zID0gdGhpcy5maWx0ZXJJdGVtcyhtb2RpZmllZEl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IG1vZGlmaWVkSXRlbXMubGVuZ3RoO1xuICAgICAgICB0aGlzLml0ZW1zID0gbW9kaWZpZWRJdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlckl0ZW1zKGl0ZW1zOiBBcnJheTxEb2N1bWVudD4pOiBBcnJheTxEb2N1bWVudD4ge1xuXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIodGhpcy5maWx0ZXJDb21wYXJhdG9yKTtcbiAgICB9XG5cblxufSJdfQ==