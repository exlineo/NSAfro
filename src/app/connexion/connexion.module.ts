import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ConnexionRoutingModule } from "./connexion-routing.module";
import { ConnexionComponent } from "./connexion.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ConnexionRoutingModule
    ],
    declarations: [
        ConnexionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ConnexionModule { }
