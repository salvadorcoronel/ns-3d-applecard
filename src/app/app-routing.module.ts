import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/appleCard", pathMatch: "full" },
    { path: "appleCard", loadChildren: () => import("./apple-card/apple-card.module").then(m => m.AppleCardModule) }, // lazy loaded module
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
