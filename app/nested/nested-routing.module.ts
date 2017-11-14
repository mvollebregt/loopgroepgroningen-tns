import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NestedComponent } from "./nested.component";

const routes: Routes = [
    { path: "", component: NestedComponent },
    { path: ":nesting", component: NestedComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NestedRoutingModule { }
