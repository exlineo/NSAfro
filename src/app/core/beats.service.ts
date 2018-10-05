import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Beat } from './modele/beat.modele';

@Injectable()
export class BeatsService {
    
    beats:Array<Beat>;

    constructor(private http:HttpClient){
        this.getBeats('http://www.fabriquenumerique.fr/tmp/nsafro/beats.json');
    }
    
    getBeats(url:string) {
        this.http.get<Array<Beat>>(url).subscribe(
            data=>{
              this.beats = data;
              console.log(this.beats);
        });
    }
}
