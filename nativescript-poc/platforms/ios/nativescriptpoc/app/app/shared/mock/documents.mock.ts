import {Document} from "../models/document.model";

export const DocumentsMock: Array<Document> = [
    {
    "document_id": "123",
    "bp_name": "Kunze GmbH",
    "document_number": "4940",
    "document_date": "2019-02-19T07:22Z",
    "document_sum": 20,
    "article_description": "Holz",
    "document_type": "Lieferantenrechnung",
    "document_url": "binary/123.png"
},
    {
        "document_id": "124",
        "bp_name": "Müller GmbH",
        "document_number": "3214",
        "document_date": "2019-02-17T07:22Z",
        "document_sum": 30,
        "article_description": "Stein",
        "document_type": "Kasse",
        "document_url": "binary/124.png"
    }
];