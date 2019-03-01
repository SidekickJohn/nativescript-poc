"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var overview_component_1 = require("./overview/overview.component");
var report_edit_component_1 = require("~/app/report-edit/report-edit.component");
var document_detail_component_1 = require("~/app/document-detail/document-detail.component");
var routes = [
    { path: "", redirectTo: "/overview", pathMatch: "full" },
    { path: "overview", component: overview_component_1.OverviewComponent },
    { path: "detail/:id", component: document_detail_component_1.DocumentDetailComponent },
    { path: "edit/:id", component: report_edit_component_1.ReportEditComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSxvRUFBa0U7QUFDbEUsaUZBQThFO0FBQzlFLDZGQUF3RjtBQUV4RixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0NBQ3ZELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgT3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcG9ydEVkaXRDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvcmVwb3J0LWVkaXQvcmVwb3J0LWVkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0RvY3VtZW50RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvZG9jdW1lbnQtZGV0YWlsL2RvY3VtZW50LWRldGFpbC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9vdmVydmlld1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcIm92ZXJ2aWV3XCIsIGNvbXBvbmVudDogT3ZlcnZpZXdDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZGV0YWlsLzppZFwiLCBjb21wb25lbnQ6IERvY3VtZW50RGV0YWlsQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImVkaXQvOmlkXCIsIGNvbXBvbmVudDogUmVwb3J0RWRpdENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==