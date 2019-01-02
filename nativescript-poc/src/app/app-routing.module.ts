import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { OverviewComponent } from "./overview/overview.component";
import { ReportDetailComponent } from "./report-detail/report-detail.component";
import { ReportEditComponent } from "~/app/report-edit/report-edit.component";

const routes: Routes = [
    { path: "", redirectTo: "/overview", pathMatch: "full" },
    { path: "overview", component: OverviewComponent },
    { path: "detail/:id", component: ReportDetailComponent },
    { path: "edit/:id", component: ReportEditComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }