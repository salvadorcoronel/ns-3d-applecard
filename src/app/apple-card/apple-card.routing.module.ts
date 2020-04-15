import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AppleCardAnimationComponent } from "./apple-card-animation/apple-card-animation.component";

const routes: Routes = [
    { path: "", component: AppleCardAnimationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppleCardRoutingModule { }
