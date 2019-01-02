import { Injectable } from "@angular/core";
import { Report } from "../models/report.model";
import { IFilterComparator } from "../models/filter-comparator";

@Injectable()
export class ListSearchService {
    public totalCount: number = 0;
    public pageSize: number = 1000;
    public upperOuterBound: number = this.pageSize;
    public lowerOuterBound: number = 0;
    public items: Array<Report> = [];
    public filterComparator: IFilterComparator<Report> = null;
    private itemsCache: Array<Report> = [];

    public setItems(items: Array<Report>) {
        this.itemsCache = items;
    }

    public setFilter(filterComparator: IFilterComparator<Report>): void {
        this.filterComparator = filterComparator;
    }

    public reset() {
        this.items = [];
        this.totalCount = 0;
    }

    public refreshItems() {
        let modifiedItems: Array<Report> = this.itemsCache.slice(0);

        if (this.filterComparator) {
            modifiedItems = this.filterItems(modifiedItems);
        }

        this.totalCount = modifiedItems.length;
        this.items = modifiedItems;
    }

    private filterItems(items: Array<Report>): Array<Report> {       

        return items.filter(this.filterComparator);
    }


}