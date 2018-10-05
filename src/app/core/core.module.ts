import { NgModule } from "@angular/core";
import { DataService } from "./data.service";
import { ProfilService } from "./profil.service";
import { BeatsService } from "./beats.service";
import { ConnectiviteService } from "./connectivite.service";

@NgModule({
    declarations: [],
    providers: [
        DataService,
        BeatsService,
        ProfilService,
        ConnectiviteService
    ]
})
export class CoreModule { }
