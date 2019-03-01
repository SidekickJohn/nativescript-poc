"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var overview_header_component_1 = require("./overview/overview-header/overview-header.component");
var documents_list_component_1 = require("./overview/documents-list/documents-list.component");
var overview_component_1 = require("./overview/overview.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-chart/angular");
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
var http_client_1 = require("nativescript-angular/http-client");
var report_edit_component_1 = require("~/app/report-edit/report-edit.component");
var report_detail_service_1 = require("~/app/shared/services/report-detail.service");
var common_1 = require("@angular/common");
var de_1 = require("@angular/common/locales/de");
var document_detail_component_1 = require("~/app/document-detail/document-detail.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
        common_1.registerLocaleData(de_1.default, 'de');
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIChartModule,
                http_client_1.NativeScriptHttpClientModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                overview_component_1.OverviewComponent,
                overview_header_component_1.OverviewHeaderComponent,
                documents_list_component_1.DocumentsListComponent,
                document_detail_component_1.DocumentDetailComponent,
                report_edit_component_1.ReportEditComponent
            ],
            providers: [
                report_detail_service_1.ReportDetailsService,
                { provide: core_1.LOCALE_ID, useValue: 'de' }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
        ,
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFFcEUsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQyxrR0FBK0Y7QUFDL0YsK0ZBQTRGO0FBQzVGLG9FQUFrRTtBQUVsRSxnRkFBOEU7QUFDOUUsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUNyRSx5REFBMEU7QUFFMUUsa0ZBQWtGO0FBQ2xGLGdFQUFnRjtBQUNoRixpRkFBOEU7QUFDOUUscUZBQW1GO0FBRW5GLDBDQUFxRDtBQUNyRCxpREFBa0Q7QUFDbEQsNkZBQXdGO0FBZ0N4RjtJQUNJO1FBQ0ksMkJBQWtCLENBQUMsWUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFIUSxTQUFTO1FBOUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsbUNBQXlCO2dCQUN6QiwwQ0FBNEI7Z0JBQzVCLHFDQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixzQ0FBaUI7Z0JBQ2pCLG1EQUF1QjtnQkFDdkIsaURBQXNCO2dCQUN0QixtREFBdUI7Z0JBQ3ZCLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCw0Q0FBb0I7Z0JBQ3BCLEVBQUMsT0FBTyxFQUFFLGdCQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQzthQUN2QztZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7OztPQUNXLFNBQVMsQ0FJckI7SUFBRCxnQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMT0NBTEVfSUQsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPdmVydmlld0hlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL292ZXJ2aWV3L292ZXJ2aWV3LWhlYWRlci9vdmVydmlldy1oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb2N1bWVudHNMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vb3ZlcnZpZXcvZG9jdW1lbnRzLWxpc3QvZG9jdW1lbnRzLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCIuL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBSZXBvcnRFZGl0Q29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL3JlcG9ydC1lZGl0L3JlcG9ydC1lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVwb3J0RGV0YWlsc1NlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2hhcmVkL3NlcnZpY2VzL3JlcG9ydC1kZXRhaWwuc2VydmljZVwiO1xuXG5pbXBvcnQgeyByZWdpc3RlckxvY2FsZURhdGEgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IGxvY2FsZURlIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2RlJztcbmltcG9ydCB7RG9jdW1lbnREZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9kb2N1bWVudC1kZXRhaWwvZG9jdW1lbnQtZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgT3ZlcnZpZXdDb21wb25lbnQsXG4gICAgICAgIE92ZXJ2aWV3SGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBEb2N1bWVudHNMaXN0Q29tcG9uZW50LFxuICAgICAgICBEb2N1bWVudERldGFpbENvbXBvbmVudCxcbiAgICAgICAgUmVwb3J0RWRpdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFJlcG9ydERldGFpbHNTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogJ2RlJ31cbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICByZWdpc3RlckxvY2FsZURhdGEobG9jYWxlRGUsICdkZScpO1xuICAgIH1cbn1cbiJdfQ==