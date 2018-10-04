import { NgModule } from "@angular/core";
import { DataService } from "./data.service";
import { ProfilService } from "./profil.service";

@NgModule({
    providers: [
        DataService,
        ProfilService
    ]
})
export class CoreModule { }
