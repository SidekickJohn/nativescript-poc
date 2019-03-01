import { Injectable } from "@angular/core";
import { IFilterComparator } from "../models/filter-comparator";
import { Document } from "../models/document.model";

@Injectable()
export class ListSearchService {
    public totalCount: number = 0;
    public pageSize: number = 1000;
    public upperOuterBound: number = this.pageSize;
    public lowerOuterBound: number = 0;
    public items: Array<Document> = [];
    public filterComparator: IFilterComparator<Document> = null;
    private itemsCache: Array<Document> = [];

    public setItems(items: Array<Document>) {
        this.itemsCache = items;
    }

    public setFilter(filterComparator: IFilterComparator<Document>): void {
        this.filterComparator = filterComparator;
    }

    public reset() {
        this.items = [];
        this.totalCount = 0;
    }

    public refreshItems() {
        let modifiedItems: Array<Document> = this.itemsCache.slice(0);

        if (this.filterComparator) {
            modifiedItems = this.filterItems(modifiedItems);
        }

        this.totalCount = modifiedItems.length;
        this.items = modifiedItems;
    }

    private filterItems(items: Array<Document>): Array<Document> {

        return items.filter(this.filterComparator);
    }


}