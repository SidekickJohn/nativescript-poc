import {LOCALE_ID, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OverviewHeaderComponent } from "./overview/overview-header/overview-header.component";
import { DocumentsListComponent } from "./overview/documents-list/documents-list.component";
import { OverviewComponent } from "./overview/overview.component";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { ReportEditComponent } from "~/app/report-edit/report-edit.component";
import { ReportDetailsService } from "~/app/shared/services/report-detail.service";

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {DocumentDetailComponent} from "~/app/document-detail/document-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIChartModule,
        NativeScriptHttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        OverviewComponent,
        OverviewHeaderComponent,
        DocumentsListComponent,
        DocumentDetailComponent,
        ReportEditComponent
    ],
    providers: [
        ReportDetailsService,
        {provide: LOCALE_ID, useValue: 'de'}
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
    constructor() {
        registerLocaleData(localeDe, 'de');
    }
}
