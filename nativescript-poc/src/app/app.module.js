"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var overview_header_component_1 = require("./overview/overview-header/overview-header.component");
var reports_list_component_1 = require("./overview/reports-list/reports-list.component");
var overview_component_1 = require("./overview/overview.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-chart/angular");
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
var http_client_1 = require("nativescript-angular/http-client");
var report_detail_component_1 = require("./report-detail/report-detail.component");
var report_edit_component_1 = require("~/app/report-edit/report-edit.component");
var report_detail_service_1 = require("~/app/shared/services/report-detail.service");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
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
                reports_list_component_1.ReportsListComponent,
                report_detail_component_1.ReportDetailComponent,
                report_edit_component_1.ReportEditComponent
            ],
            providers: [
                report_detail_service_1.ReportDetailsService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQyxrR0FBK0Y7QUFDL0YseUZBQXNGO0FBQ3RGLG9FQUFrRTtBQUVsRSxnRkFBOEU7QUFDOUUsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUNyRSx5REFBMEU7QUFFMUUsa0ZBQWtGO0FBQ2xGLGdFQUFnRjtBQUNoRixtRkFBZ0Y7QUFDaEYsaUZBQThFO0FBQzlFLHFGQUFtRjtBQStCbkY7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsbUNBQXlCO2dCQUN6QiwwQ0FBNEI7Z0JBQzVCLHFDQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixzQ0FBaUI7Z0JBQ2pCLG1EQUF1QjtnQkFDdkIsNkNBQW9CO2dCQUNwQiwrQ0FBcUI7Z0JBQ3JCLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCw0Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE92ZXJ2aWV3SGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vb3ZlcnZpZXcvb3ZlcnZpZXctaGVhZGVyL292ZXJ2aWV3LWhlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVwb3J0c0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9vdmVydmlldy9yZXBvcnRzLWxpc3QvcmVwb3J0cy1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCIuL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBSZXBvcnREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZXBvcnQtZGV0YWlsL3JlcG9ydC1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlcG9ydEVkaXRDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvcmVwb3J0LWVkaXQvcmVwb3J0LWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlcG9ydERldGFpbHNTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9zZXJ2aWNlcy9yZXBvcnQtZGV0YWlsLnNlcnZpY2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE92ZXJ2aWV3Q29tcG9uZW50LFxyXG4gICAgICAgIE92ZXJ2aWV3SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcG9ydHNMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFJlcG9ydERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBSZXBvcnRFZGl0Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUmVwb3J0RGV0YWlsc1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==