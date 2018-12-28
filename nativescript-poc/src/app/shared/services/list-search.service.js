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
        console.log("filtercomparator:" + this.filterComparator);
        return items.filter(this.filterComparator);
    };
    ListSearchService = __decorate([
        core_1.Injectable()
    ], ListSearchService);
    return ListSearchService;
}());
exports.ListSearchService = ListSearchService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3Qtc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFEQTtRQUVXLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixvQkFBZSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIscUJBQWdCLEdBQThCLElBQUksQ0FBQztRQUNsRCxlQUFVLEdBQWtCLEVBQUUsQ0FBQztJQWlDM0MsQ0FBQztJQS9CVSxvQ0FBUSxHQUFmLFVBQWdCLEtBQW9CO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxxQ0FBUyxHQUFoQixVQUFpQixnQkFBMkM7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLHdDQUFZLEdBQW5CO1FBQ0ksSUFBSSxhQUFhLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQy9CLENBQUM7SUFFTyx1Q0FBVyxHQUFuQixVQUFvQixLQUFvQjtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXhELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBckNRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO09BQ0EsaUJBQWlCLENBd0M3QjtJQUFELHdCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlcG9ydCB9IGZyb20gXCIuLi9tb2RlbHMvcmVwb3J0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJDb21wYXJhdG9yIH0gZnJvbSBcIi4uL21vZGVscy9maWx0ZXItY29tcGFyYXRvclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlzdFNlYXJjaFNlcnZpY2Uge1xyXG4gICAgcHVibGljIHRvdGFsQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwMDA7XHJcbiAgICBwdWJsaWMgdXBwZXJPdXRlckJvdW5kOiBudW1iZXIgPSB0aGlzLnBhZ2VTaXplO1xyXG4gICAgcHVibGljIGxvd2VyT3V0ZXJCb3VuZDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8UmVwb3J0PiA9IFtdO1xyXG4gICAgcHVibGljIGZpbHRlckNvbXBhcmF0b3I6IElGaWx0ZXJDb21wYXJhdG9yPFJlcG9ydD4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpdGVtc0NhY2hlOiBBcnJheTxSZXBvcnQ+ID0gW107XHJcblxyXG4gICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBBcnJheTxSZXBvcnQ+KSB7XHJcbiAgICAgICAgdGhpcy5pdGVtc0NhY2hlID0gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEZpbHRlcihmaWx0ZXJDb21wYXJhdG9yOiBJRmlsdGVyQ29tcGFyYXRvcjxSZXBvcnQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJDb21wYXJhdG9yID0gZmlsdGVyQ29tcGFyYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2hJdGVtcygpIHtcclxuICAgICAgICBsZXQgbW9kaWZpZWRJdGVtczogQXJyYXk8UmVwb3J0PiA9IHRoaXMuaXRlbXNDYWNoZS5zbGljZSgwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyQ29tcGFyYXRvcikge1xyXG4gICAgICAgICAgICBtb2RpZmllZEl0ZW1zID0gdGhpcy5maWx0ZXJJdGVtcyhtb2RpZmllZEl0ZW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IG1vZGlmaWVkSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBtb2RpZmllZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVySXRlbXMoaXRlbXM6IEFycmF5PFJlcG9ydD4pOiBBcnJheTxSZXBvcnQ+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlcmNvbXBhcmF0b3I6XCIrIHRoaXMuZmlsdGVyQ29tcGFyYXRvcik7ICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIodGhpcy5maWx0ZXJDb21wYXJhdG9yKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19