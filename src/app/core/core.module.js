"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var profil_service_1 = require("./profil.service");
var beats_service_1 = require("./beats.service");
var connectivite_service_1 = require("./connectivite.service");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [],
            providers: [
                data_service_1.DataService,
                beats_service_1.BeatsService,
                profil_service_1.ProfilService,
                connectivite_service_1.ConnectiviteService
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywrQ0FBNkM7QUFDN0MsbURBQWlEO0FBQ2pELGlEQUErQztBQUMvQywrREFBNkQ7QUFXN0Q7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQVR0QixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsRUFBRTtZQUNoQixTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsMENBQW1CO2FBQ3RCO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQcm9maWxTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvZmlsLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJlYXRzU2VydmljZSB9IGZyb20gXCIuL2JlYXRzLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi9jb25uZWN0aXZpdGUuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERhdGFTZXJ2aWNlLFxuICAgICAgICBCZWF0c1NlcnZpY2UsXG4gICAgICAgIFByb2ZpbFNlcnZpY2UsXG4gICAgICAgIENvbm5lY3Rpdml0ZVNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUgeyB9XG4iXX0=