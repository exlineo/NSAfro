import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BrowseComponent } from "./browse/browse.component";
import { HomeComponent } from "./home/home.component";
import { ProfilComponent } from "./profil/profil.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { SearchComponent } from "./search/search.component";

export const COMPONENTS = [BrowseComponent, HomeComponent, ItemDetailComponent, SearchComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//browseTab:browse//profilTab:profil//searchTab:search//connexionTab:connexion)", pathMatch: "full" },

    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "browse", component: BrowseComponent, outlet: "browseTab" },
    { path: "profil", component: ProfilComponent, outlet: "profilTab" },
    { path: "search", component: SearchComponent, outlet: "searchTab" },
    { path: "item/:id", component: ItemDetailComponent, outlet: "homeTab" },
    { path: "connexion", component: ConnexionComponent, outlet: "connexionTab" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
