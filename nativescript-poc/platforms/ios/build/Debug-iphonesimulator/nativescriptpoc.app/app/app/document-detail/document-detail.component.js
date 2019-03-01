"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("@angular/router");
var documents_list_service_1 = require("~/app/shared/services/documents-list.service");
var image_source_1 = require("tns-core-modules/image-source");
var SocialShare = require("nativescript-social-share");
var DocumentDetailComponent = /** @class */ (function () {
    function DocumentDetailComponent(router, page, documentsListService, activatedRoute) {
        this.router = router;
        this.page = page;
        this.documentsListService = documentsListService;
        this.activatedRoute = activatedRoute;
        this.page.actionBarHidden = true;
    }
    DocumentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currendDocumentId = +this.activatedRoute.snapshot.params["id"];
        this.documentsListService.getDocumentById(this.currendDocumentId.toString()).then(function (documentFromServer) {
            _this.loadedDocument = documentFromServer;
        }).catch(function (e) { return console.log(e); });
    };
    DocumentDetailComponent.prototype.createUrl = function (document) {
        if (document) {
            return documents_list_service_1.API_ENDPOINT_URL + document.document_url;
        }
        else {
            return "";
        }
    };
    DocumentDetailComponent.prototype.onBackBtnTapped = function (args) {
        var button = args.object;
        var page = button.page;
        page.frame.goBack();
    };
    DocumentDetailComponent.prototype.onImageTapped = function (args) {
        var imageSource = image_source_1.fromFile(documents_list_service_1.API_ENDPOINT_URL + this.loadedDocument.document_url);
        SocialShare.shareImage(imageSource);
    };
    DocumentDetailComponent = __decorate([
        core_1.Component({
            selector: "document-detail",
            templateUrl: "./app/document-detail/document-detail.component.html",
            styleUrls: ["./app/document-detail/document-detail.component.css"],
            providers: [documents_list_service_1.DocumentsListService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            page_1.Page,
            documents_list_service_1.DocumentsListService,
            router_1.ActivatedRoute])
    ], DocumentDetailComponent);
    return DocumentDetailComponent;
}());
exports.DocumentDetailComponent = DocumentDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvY3VtZW50LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFFaEQsaURBQXlEO0FBQ3pELDBDQUF1RDtBQUN2RCx1RkFBb0c7QUFFcEcsOERBQXNFO0FBQ3RFLHVEQUF5RDtBQVF6RDtJQUlJLGlDQUNZLE1BQWMsRUFDZCxJQUFVLEVBQ1Ysb0JBQTBDLEVBQzFDLGNBQThCO1FBSDlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxrQkFBNEI7WUFDM0csS0FBSSxDQUFDLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSwyQ0FBUyxHQUFoQixVQUFpQixRQUFrQjtRQUMvQixJQUFHLFFBQVEsRUFBRTtZQUNULE9BQU8seUNBQWdCLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztTQUNuRDthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNMLENBQUM7SUFFTSxpREFBZSxHQUF0QixVQUF1QixJQUFlO1FBQ2xDLElBQU0sTUFBTSxHQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQU0sSUFBSSxHQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sK0NBQWEsR0FBcEIsVUFBcUIsSUFBZTtRQUNoQyxJQUFNLFdBQVcsR0FBOEIsdUJBQVEsQ0FBQyx5Q0FBZ0IsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNHLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXJDUSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLHNEQUFzRDtZQUNuRSxTQUFTLEVBQUUsQ0FBQyxxREFBcUQsQ0FBQztZQUNsRSxTQUFTLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQU1zQixlQUFNO1lBQ1IsV0FBSTtZQUNZLDZDQUFvQjtZQUMxQix1QkFBYztPQVJqQyx1QkFBdUIsQ0F1Q25DO0lBQUQsOEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtEb2N1bWVudH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbHMvZG9jdW1lbnQubW9kZWxcIjtcbmltcG9ydCB7RXZlbnREYXRhLCBQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QVBJX0VORFBPSU5UX1VSTCwgRG9jdW1lbnRzTGlzdFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9zaGFyZWQvc2VydmljZXMvZG9jdW1lbnRzLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJkb2N1bWVudC1kZXRhaWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9kb2N1bWVudC1kZXRhaWwvZG9jdW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FwcC9kb2N1bWVudC1kZXRhaWwvZG9jdW1lbnQtZGV0YWlsLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbRG9jdW1lbnRzTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsb2FkZWREb2N1bWVudDogRG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBjdXJyZW5kRG9jdW1lbnRJZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBkb2N1bWVudHNMaXN0U2VydmljZTogRG9jdW1lbnRzTGlzdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbmREb2N1bWVudElkID0gK3RoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuZG9jdW1lbnRzTGlzdFNlcnZpY2UuZ2V0RG9jdW1lbnRCeUlkKHRoaXMuY3VycmVuZERvY3VtZW50SWQudG9TdHJpbmcoKSkudGhlbigoZG9jdW1lbnRGcm9tU2VydmVyOiBEb2N1bWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWREb2N1bWVudCA9IGRvY3VtZW50RnJvbVNlcnZlcjtcbiAgICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVVybChkb2N1bWVudDogRG9jdW1lbnQpOiBzdHJpbmcge1xuICAgICAgICBpZihkb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIEFQSV9FTkRQT0lOVF9VUkwgKyBkb2N1bWVudC5kb2N1bWVudF91cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkJhY2tCdG5UYXBwZWQoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbjogQnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3QgcGFnZTogUGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgICAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkltYWdlVGFwcGVkKGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2UgPSA8SW1hZ2VTb3VyY2U+IGZyb21GaWxlKEFQSV9FTkRQT0lOVF9VUkwrdGhpcy5sb2FkZWREb2N1bWVudC5kb2N1bWVudF91cmwpO1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlU291cmNlKTtcbiAgICB9XG5cbn0iXX0=