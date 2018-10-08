import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TabView } from "tns-core-modules/ui/tab-view";
import { BeatsService } from "../core/beats.service";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    constructor(private router: RouterExtensions, private beatsService:BeatsService) { }

    ngOnInit(): void {
    }
    onItemTap(ev){
        console.log(ev);
    }
}
