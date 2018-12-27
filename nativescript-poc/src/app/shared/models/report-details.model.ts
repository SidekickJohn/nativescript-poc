import { Report } from "./report.model";
import { DataElement } from "./dataElement.model";

export class ReportDetails extends Report {
    constructor(
        public id: string, 
        public name: string,
        public date: string,
        public dataStructure: Array<DataElement>,
        public messageString: string,
        public fileUri: string
    ) { 
        super(id, name, date);
    }
}