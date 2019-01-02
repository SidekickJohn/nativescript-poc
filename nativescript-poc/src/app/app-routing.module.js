"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var overview_component_1 = require("./overview/overview.component");
var report_detail_component_1 = require("./report-detail/report-detail.component");
var report_edit_component_1 = require("~/app/report-edit/report-edit.component");
var routes = [
    { path: "", redirectTo: "/overview", pathMatch: "full" },
    { path: "overview", component: overview_component_1.OverviewComponent },
    { path: "detail/:id", component: report_detail_component_1.ReportDetailComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSxvRUFBa0U7QUFDbEUsbUZBQWdGO0FBQ2hGLGlGQUE4RTtBQUU5RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0NBQ3ZELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCIuL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXBvcnREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZXBvcnQtZGV0YWlsL3JlcG9ydC1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlcG9ydEVkaXRDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvcmVwb3J0LWVkaXQvcmVwb3J0LWVkaXQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvb3ZlcnZpZXdcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcIm92ZXJ2aWV3XCIsIGNvbXBvbmVudDogT3ZlcnZpZXdDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJkZXRhaWwvOmlkXCIsIGNvbXBvbmVudDogUmVwb3J0RGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiZWRpdC86aWRcIiwgY29tcG9uZW50OiBSZXBvcnRFZGl0Q29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=