import { Injectable } from "@angular/core";
import { Profil } from './modele/profil.modele';
import { Beat } from "~/app/core/modele/beat.modele";

@Injectable()
export class ProfilService {
    profil:Profil;
    constructor(){
        this.profil = {
            id: 1,
            nom: "Gabb",
            description: "Description for Item 1",
            beats:[]
        }
    }
    getBeats(): Array<Beat> {
        return this.profil.beats;
    }
}
