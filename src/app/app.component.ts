import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import { action } from "tns-core-modules/ui/dialogs";
import { SelectedIndexChangedEventData, TabView, TabViewItem } from "tns-core-modules/ui/tab-view";
import * as Permissions from "nativescript-permissions";
import { ConnectiviteService } from "~/app/core/connectivite.service";

declare var android: any; // Déclaration de Androîd tirée du SDK
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    constructor(private connectivite:ConnectiviteService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
    // Afficher le player
    displayActionDialog() {
        // >> action-dialog-code
        let options = {
            title: "Race selection",
            message: "Choose your race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        };

        action(options).then((result) => {
            console.log(result);
        });
        // << action-dialog-code
    }
    // Demander la permission
    demandePermissions() {
        Permissions.requestPermission(android.Manifest.permission.ACCESS_NETWORK_STATE, "Needed for connectivity status").then(() => {
            this.connectivite.autorisation = true;
            console.log("Permission donnée !");
        }).catch(() => {
            console.log("Permission non donnée (sadface)");
        });
    }
}
