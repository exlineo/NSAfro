import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Beat } from './modele/beat.modele';
import { DataService } from "./data.service";
import { ConnectiviteService } from "./connectivite.service";
@Injectable()
export class BeatsService {

    beats: Array<Beat>; // Liste des beats disponibles
    beat: Beat; // Beat sélectionné

    constructor(private http: HttpClient, private data: DataService, private connectivite: ConnectiviteService) {
        this.getBeats('http://www.fabriquenumerique.fr/tmp/nsafro/beats.json');
    }

    getBeats(url: string) {
        if (this.connectivite.connexion) {
            this.http.get<Array<Beat>>(url).subscribe(
                data => {
                    this.beats = data;
                    this.data.ecritFichier('beats', 'beats', data)
                    console.log(this.beats);
                });
        } else {
            let tmp:any = this.data.litFichier('beats', 'beats');
            console.log(JSON.parse(tmp));
        }
    }
}
