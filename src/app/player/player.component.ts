import { Component, OnInit } from "@angular/core";
import { BeatsService } from '../core/beats.service';
import { Beat } from "../core/modele/beat.modele";

import { TNSPlayer } from 'nativescript-audioplay';

@Component({
    selector: "player-beat",
    moduleId: module.id,
    templateUrl: "./player.component.html",
    styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {

    beat: Beat;
    private _player: TNSPlayer;

    constructor(private beatsService: BeatsService) {

        this.beat = {id:0,titre:'',auteur:'',duree:0,img:'',audio:''};
        
        this._player = new TNSPlayer();
        this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
        this._player
            .initFromFile({
                audioFile: this.beat.audio, // ~ = app directory
                loop: false,
                completeCallback: this._trackComplete.bind(this),
                errorCallback: this._trackError.bind(this)
            })
            .then(() => {
                this._player.getAudioTrackDuration().then(duration => {
                    // iOS: duration is in seconds
                    // Android: duration is in milliseconds
                    console.log(`song duration:`, duration);
                });
            });
    }

    ngOnInit(): void {
        this.beat = this.beatsService.beat;
    }

    public togglePlay() {
        if (this._player.isAudioPlaying()) {
            this._player.pause();
        } else {
            this._player.play();
        }
    }

    private _trackComplete(args: any) {
        console.log('reference back to player:', args.player);
        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
    }

    private _trackError(args: any) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
    }

}
