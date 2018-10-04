import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ProfilRoutingModule } from "./profil-routing.module";
import { ProfilComponent } from "./profil.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ProfilRoutingModule
    ],
    declarations: [
        ProfilComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfilModule { }
