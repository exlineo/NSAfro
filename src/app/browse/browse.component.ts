import { Component, OnInit } from "@angular/core";
import { BeatsService } from "~/app/core/beats.service";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor(public beatsService:BeatsService) {}

    ngOnInit(): void {
        
    }
}
