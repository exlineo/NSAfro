"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_client_1 = require("nativescript-angular/http-client");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var player_component_1 = require("./player/player.component");
var connexion_module_1 = require("./connexion/connexion.module");
var profil_module_1 = require("./profil/profil.module");
var core_module_1 = require("./core/core.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                http_client_1.NativeScriptHttpClientModule,
                app_routing_module_1.AppRoutingModule,
                connexion_module_1.ConnexionModule,
                profil_module_1.ProfilModule,
                core_module_1.CoreModule
            ],
            declarations: [
                app_component_1.AppComponent,
                player_component_1.PlayerComponent
            ].concat(app_routing_module_1.COMPONENTS),
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLGdFQUFnRjtBQUVoRiwyREFBb0U7QUFDcEUsaURBQStDO0FBQy9DLDhEQUE0RDtBQUM1RCxpRUFBK0Q7QUFDL0Qsd0RBQXNEO0FBQ3RELGtEQUFnRDtBQXVCaEQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXJCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwwQ0FBNEI7Z0JBQzVCLHFDQUFnQjtnQkFDaEIsa0NBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osd0JBQVU7YUFDYjtZQUNELFlBQVk7Z0JBQ1IsNEJBQVk7Z0JBQ1osa0NBQWU7cUJBQ1osK0JBQVUsQ0FDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgQ09NUE9ORU5UUyB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25uZXhpb25Nb2R1bGUgfSBmcm9tIFwiLi9jb25uZXhpb24vY29ubmV4aW9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgUHJvZmlsTW9kdWxlIH0gZnJvbSBcIi4vcHJvZmlsL3Byb2ZpbC5tb2R1bGVcIjtcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tIFwiLi9jb3JlL2NvcmUubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIENvbm5leGlvbk1vZHVsZSxcbiAgICAgICAgUHJvZmlsTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBQbGF5ZXJDb21wb25lbnQsXG4gICAgICAgIC4uLkNPTVBPTkVOVFNcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19