"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("@angular/router");
var documents_list_service_1 = require("~/app/shared/services/documents-list.service");
var SocialShare = require("nativescript-social-share");
var http_1 = require("tns-core-modules/http");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
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
    DocumentDetailComponent.prototype.onThreeDotsBtnTapped = function () {
        var _this = this;
        var options = {
            cancelButtonText: "Abbrechen",
            actions: ["Wiedervorlage", "Beleg bereitstellen"]
        };
        dialogs_1.action(options).then(function (result) {
            switch (result) {
                case "Wiedervorlage": {
                    _this.showAlert();
                    break;
                }
                case "Beleg bereitstellen": {
                    _this.onImageTapped();
                    break;
                }
                default: break;
            }
        });
    };
    DocumentDetailComponent.prototype.showAlert = function () {
        var alertOptions = {
            title: "Wiedervorlage",
            message: "Dialog in Arbeit",
            okButtonText: "OK"
        };
        dialogs_1.alert(alertOptions).then(function () {
            console.log("Alert closed.");
        });
    };
    DocumentDetailComponent.prototype.onImageTapped = function () {
        var _this = this;
        http_1.getImage(documents_list_service_1.API_ENDPOINT_URL + this.loadedDocument.document_url).then(function (newImageSource) {
            SocialShare.shareImage(newImageSource, _this.loadedDocument.document_url + " Teilen");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvY3VtZW50LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFFaEQsaURBQXlEO0FBQ3pELDBDQUF1RDtBQUN2RCx1RkFBb0c7QUFHcEcsdURBQXlEO0FBQ3pELDhDQUErQztBQUMvQyx1REFBMEQ7QUFRMUQ7SUFJSSxpQ0FDWSxNQUFjLEVBQ2QsSUFBVSxFQUNWLG9CQUEwQyxFQUMxQyxjQUE4QjtRQUg5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsa0JBQTRCO1lBQzNHLEtBQUksQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sMkNBQVMsR0FBaEIsVUFBaUIsUUFBa0I7UUFDL0IsSUFBRyxRQUFRLEVBQUU7WUFDVCxPQUFPLHlDQUFnQixHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7U0FDbkQ7YUFBTTtZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDO0lBRU0saURBQWUsR0FBdEIsVUFBdUIsSUFBZTtRQUNsQyxJQUFNLE1BQU0sR0FBbUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFNLElBQUksR0FBUyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLHNEQUFvQixHQUEzQjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLE9BQU8sR0FBRztZQUNWLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDO1NBQ3BELENBQUM7UUFFRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDeEIsUUFBUSxNQUFNLEVBQUU7Z0JBQ1osS0FBSyxlQUFnQixDQUFDLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLHFCQUFzQixDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtpQkFDVDtnQkFDRCxPQUFPLENBQUMsQ0FBQyxNQUFNO2FBQ2xCO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkNBQVMsR0FBaEI7UUFDSSxJQUFJLFlBQVksR0FBRztZQUNmLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQztRQUVGLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwrQ0FBYSxHQUFwQjtRQUFBLGlCQUtDO1FBSkcsZUFBUSxDQUFDLHlDQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsY0FBMkI7WUFDM0YsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBekVRLHVCQUF1QjtRQU5uQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsc0RBQXNEO1lBQ25FLFNBQVMsRUFBRSxDQUFDLHFEQUFxRCxDQUFDO1lBQ2xFLFNBQVMsRUFBRSxDQUFDLDZDQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBTXNCLGVBQU07WUFDUixXQUFJO1lBQ1ksNkNBQW9CO1lBQzFCLHVCQUFjO09BUmpDLHVCQUF1QixDQTJFbkM7SUFBRCw4QkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RvY3VtZW50fSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9kb2N1bWVudC5tb2RlbFwiO1xuaW1wb3J0IHtFdmVudERhdGEsIFBhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBUElfRU5EUE9JTlRfVVJMLCBEb2N1bWVudHNMaXN0U2VydmljZX0gZnJvbSBcIn4vYXBwL3NoYXJlZC9zZXJ2aWNlcy9kb2N1bWVudHMtbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7Z2V0SW1hZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcbmltcG9ydCB7YWN0aW9uLCBhbGVydH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJkb2N1bWVudC1kZXRhaWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9kb2N1bWVudC1kZXRhaWwvZG9jdW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FwcC9kb2N1bWVudC1kZXRhaWwvZG9jdW1lbnQtZGV0YWlsLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbRG9jdW1lbnRzTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsb2FkZWREb2N1bWVudDogRG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBjdXJyZW5kRG9jdW1lbnRJZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBkb2N1bWVudHNMaXN0U2VydmljZTogRG9jdW1lbnRzTGlzdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbmREb2N1bWVudElkID0gK3RoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuZG9jdW1lbnRzTGlzdFNlcnZpY2UuZ2V0RG9jdW1lbnRCeUlkKHRoaXMuY3VycmVuZERvY3VtZW50SWQudG9TdHJpbmcoKSkudGhlbigoZG9jdW1lbnRGcm9tU2VydmVyOiBEb2N1bWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWREb2N1bWVudCA9IGRvY3VtZW50RnJvbVNlcnZlcjtcbiAgICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVVybChkb2N1bWVudDogRG9jdW1lbnQpOiBzdHJpbmcge1xuICAgICAgICBpZihkb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIEFQSV9FTkRQT0lOVF9VUkwgKyBkb2N1bWVudC5kb2N1bWVudF91cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkJhY2tCdG5UYXBwZWQoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbjogQnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3QgcGFnZTogUGFnZSA9IGJ1dHRvbi5wYWdlO1xuICAgICAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRocmVlRG90c0J0blRhcHBlZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkFiYnJlY2hlblwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiV2llZGVydm9ybGFnZVwiLCBcIkJlbGVnIGJlcmVpdHN0ZWxsZW5cIl1cbiAgICAgICAgfTtcblxuICAgICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJXaWVkZXJ2b3JsYWdlXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FsZXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiQmVsZWcgYmVyZWl0c3RlbGxlblwiIDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSW1hZ2VUYXBwZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QWxlcnQoKTogdm9pZCB7XG4gICAgICAgIGxldCBhbGVydE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJXaWVkZXJ2b3JsYWdlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkRpYWxvZyBpbiBBcmJlaXRcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgYWxlcnQoYWxlcnRPcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgY2xvc2VkLlwiKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbWFnZVRhcHBlZCgpOiB2b2lkIHtcbiAgICAgICAgZ2V0SW1hZ2UoQVBJX0VORFBPSU5UX1VSTCArIHRoaXMubG9hZGVkRG9jdW1lbnQuZG9jdW1lbnRfdXJsKS50aGVuKChuZXdJbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2UpID0+IHtcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UobmV3SW1hZ2VTb3VyY2UsIHRoaXMubG9hZGVkRG9jdW1lbnQuZG9jdW1lbnRfdXJsICsgXCIgVGVpbGVuXCIpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG59Il19