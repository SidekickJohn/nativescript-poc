"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var documents_list_service_1 = require("~/app/shared/services/documents-list.service");
var router_1 = require("@angular/router");
var list_search_service_1 = require("~/app/shared/services/list-search.service");
var string_utils_1 = require("~/app/shared/utils/string.utils");
var DocumentsListComponent = /** @class */ (function () {
    function DocumentsListComponent(router, documentsListService, listSearchService) {
        this.router = router;
        this.documentsListService = documentsListService;
        this.listSearchService = listSearchService;
        this.documentsList = [];
        this.document = "";
        //@ViewChild("groceryTextField") groceryTextField: ElementRef;
        this.isLoading = false;
        this.listLoaded = false;
        this.searchTerm = "";
    }
    DocumentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.documentsListService.load()
            .subscribe(function (loadedDocuments) {
            loadedDocuments.forEach(function (documentObject) {
                _this.documentsList.push(documentObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
            _this.listSearchService.setItems(_this.documentsList);
            _this.listSearchService.refreshItems();
            _this.configureLocalListService();
        });
    };
    DocumentsListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.searchTerm.currentValue !== changes.searchTerm.previousValue) {
            this.search();
        }
    };
    DocumentsListComponent.prototype.onItemTap = function (args) {
        var id = args.index;
        var currentDocument = this.documentsList[id];
        console.log('Navigates to document for ID: ' + currentDocument.document_id);
        this.router.navigate(["/detail/" + currentDocument.document_id]);
    };
    DocumentsListComponent.prototype.createUrl = function (thumbnailUrl) {
        return documents_list_service_1.API_ENDPOINT_URL + thumbnailUrl;
    };
    DocumentsListComponent.prototype.getDocumentTypeStyleClass = function (documentType) {
        switch (documentType) {
            case "Lieferantenrechnung": {
                return "document-type type-delivery-invoice";
            }
            case "Kasse": {
                return "document-type type-register";
            }
            case "Kundenrechnung": {
                return "document-type type-customer-invoice";
            }
            case "Lohn": {
                return "document-type type-wage";
            }
            case "Sonstige": {
                return "document-type type-other";
            }
            default:
                break;
        }
    };
    DocumentsListComponent.prototype.configureLocalListService = function () {
        var _this = this;
        var clientFilterComparator = function (document) {
            if (!_this.searchTerm) {
                console.log("no searchterm");
                return true;
            }
            var escapedRegExp = string_utils_1.escapeRegEx(_this.searchTerm);
            var regExp = new RegExp(escapedRegExp, 'gi');
            if (document.bp_name.search(regExp) !== -1 ||
                document.document_number.search(regExp) !== -1) {
                return true;
            }
            return false;
        };
        this.listSearchService.setFilter(clientFilterComparator);
    };
    DocumentsListComponent.prototype.search = function () {
        this.listSearchService.reset();
        this.listSearchService.refreshItems();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DocumentsListComponent.prototype, "searchTerm", void 0);
    DocumentsListComponent = __decorate([
        core_1.Component({
            selector: "documents-list",
            templateUrl: "./app/overview/documents-list/documents-list.component.html",
            styleUrls: ["./app/overview/documents-list/documents-list.component.css"],
            providers: [documents_list_service_1.DocumentsListService, list_search_service_1.ListSearchService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            documents_list_service_1.DocumentsListService,
            list_search_service_1.ListSearchService])
    ], DocumentsListComponent);
    return DocumentsListComponent;
}());
exports.DocumentsListComponent = DocumentsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9jdW1lbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1GO0FBQ25GLHVGQUFvRztBQUdwRywwQ0FBeUM7QUFDekMsaUZBQThFO0FBRTlFLGdFQUE4RDtBQVU5RDtJQVNJLGdDQUNZLE1BQWMsRUFDZCxvQkFBMEMsRUFDMUMsaUJBQW9DO1FBRnBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFYaEQsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCw4REFBOEQ7UUFDOUQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRVYsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUttQixDQUFDO0lBRXJELHlDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUMsZUFBZ0M7WUFDeEMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGNBQXdCO2dCQUM3QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FB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O1lBQ3ZCLHVDQUFpQjtPQVp2QyxzQkFBc0IsQ0E0RmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTVGRCxJQTRGQztBQTVGWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0FQSV9FTkRQT0lOVF9VUkwsIERvY3VtZW50c0xpc3RTZXJ2aWNlfSBmcm9tIFwifi9hcHAvc2hhcmVkL3NlcnZpY2VzL2RvY3VtZW50cy1saXN0LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMaXN0U2VhcmNoU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zaGFyZWQvc2VydmljZXMvbGlzdC1zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHsgSUZpbHRlckNvbXBhcmF0b3IgfSBmcm9tIFwifi9hcHAvc2hhcmVkL21vZGVscy9maWx0ZXItY29tcGFyYXRvclwiO1xuaW1wb3J0IHsgZXNjYXBlUmVnRXggfSBmcm9tIFwifi9hcHAvc2hhcmVkL3V0aWxzL3N0cmluZy51dGlsc1wiO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tIFwifi9hcHAvc2hhcmVkL21vZGVscy9kb2N1bWVudC5tb2RlbFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImRvY3VtZW50cy1saXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvb3ZlcnZpZXcvZG9jdW1lbnRzLWxpc3QvZG9jdW1lbnRzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXBwL292ZXJ2aWV3L2RvY3VtZW50cy1saXN0L2RvY3VtZW50cy1saXN0LmNvbXBvbmVudC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbRG9jdW1lbnRzTGlzdFNlcnZpY2UsIExpc3RTZWFyY2hTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIGRvY3VtZW50c0xpc3Q6IEFycmF5PERvY3VtZW50PiA9IFtdO1xuICAgIGRvY3VtZW50ID0gXCJcIjtcbiAgICAvL0BWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgc2VhcmNoVGVybTogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcbiAgICAgICAgcHJpdmF0ZSBkb2N1bWVudHNMaXN0U2VydmljZTogRG9jdW1lbnRzTGlzdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbGlzdFNlYXJjaFNlcnZpY2U6IExpc3RTZWFyY2hTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRzTGlzdFNlcnZpY2UubG9hZCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsb2FkZWREb2N1bWVudHM6IEFycmF5PERvY3VtZW50PikgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlZERvY3VtZW50cy5mb3JFYWNoKChkb2N1bWVudE9iamVjdDogRG9jdW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudHNMaXN0LnB1c2goZG9jdW1lbnRPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RTZWFyY2hTZXJ2aWNlLnNldEl0ZW1zKHRoaXMuZG9jdW1lbnRzTGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U2VhcmNoU2VydmljZS5yZWZyZXNoSXRlbXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZUxvY2FsTGlzdFNlcnZpY2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYoY2hhbmdlcy5zZWFyY2hUZXJtLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5zZWFyY2hUZXJtLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlkID0gYXJncy5pbmRleDtcbiAgICAgICAgbGV0IGN1cnJlbnREb2N1bWVudDogRG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50c0xpc3RbaWRdO1xuICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGVzIHRvIGRvY3VtZW50IGZvciBJRDogJyArIGN1cnJlbnREb2N1bWVudC5kb2N1bWVudF9pZCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhaWwvXCIrIGN1cnJlbnREb2N1bWVudC5kb2N1bWVudF9pZF0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVVcmwodGh1bWJuYWlsVXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gQVBJX0VORFBPSU5UX1VSTCArIHRodW1ibmFpbFVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RG9jdW1lbnRUeXBlU3R5bGVDbGFzcyhkb2N1bWVudFR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaChkb2N1bWVudFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJMaWVmZXJhbnRlbnJlY2hudW5nXCI6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJkb2N1bWVudC10eXBlIHR5cGUtZGVsaXZlcnktaW52b2ljZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiS2Fzc2VcIjoge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImRvY3VtZW50LXR5cGUgdHlwZS1yZWdpc3RlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiS3VuZGVucmVjaG51bmdcIjoge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImRvY3VtZW50LXR5cGUgdHlwZS1jdXN0b21lci1pbnZvaWNlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJMb2huXCI6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJkb2N1bWVudC10eXBlIHR5cGUtd2FnZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiU29uc3RpZ2VcIjoge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImRvY3VtZW50LXR5cGUgdHlwZS1vdGhlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZUxvY2FsTGlzdFNlcnZpY2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsaWVudEZpbHRlckNvbXBhcmF0b3I6IElGaWx0ZXJDb21wYXJhdG9yPERvY3VtZW50PiA9IChkb2N1bWVudDogRG9jdW1lbnQpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXJtKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBzZWFyY2h0ZXJtXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXNjYXBlZFJlZ0V4cCA9IGVzY2FwZVJlZ0V4KHRoaXMuc2VhcmNoVGVybSk7XG4gICAgICAgICAgICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGVzY2FwZWRSZWdFeHAsICdnaScpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJwX25hbWUuc2VhcmNoKHJlZ0V4cCkgIT09IC0xIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRfbnVtYmVyLnNlYXJjaChyZWdFeHApICE9PSAtMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5saXN0U2VhcmNoU2VydmljZS5zZXRGaWx0ZXIoY2xpZW50RmlsdGVyQ29tcGFyYXRvcik7XG4gICAgfVxuXG4gICAgcHVibGljIHNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5saXN0U2VhcmNoU2VydmljZS5yZXNldCgpO1xuICAgICAgICB0aGlzLmxpc3RTZWFyY2hTZXJ2aWNlLnJlZnJlc2hJdGVtcygpO1xuICAgIH1cbn0iXX0=