import { NgModule } from "@angular/core";
import { DataService } from "./data.service";
import { ProfilService } from "./profil.service";
import { BeatsService } from "./beats.service";

@NgModule({
    providers: [
        DataService,
        BeatsService,
        ProfilService
    ]
})
export class CoreModule { }
