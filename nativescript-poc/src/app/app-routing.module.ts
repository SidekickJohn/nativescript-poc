import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { OverviewComponent } from "./overview/overview.component";
import { ReportDetailComponent } from "./report-detail/report-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/overview", pathMatch: "full" },
    { path: "overview", component: OverviewComponent },
    { path: "overview/:id", component: ReportDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }