import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../shared/shared.module";
import { NestedRoutingModule } from "./nested-routing.module";
import { NestedComponent } from "./nested.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NestedRoutingModule,
        SharedModule
    ],
    declarations: [
        NestedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NestedModule { }
