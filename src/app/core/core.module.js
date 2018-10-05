"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var profil_service_1 = require("./profil.service");
var beats_service_1 = require("./beats.service");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            providers: [
                data_service_1.DataService,
                beats_service_1.BeatsService,
                profil_service_1.ProfilService
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywrQ0FBNkM7QUFDN0MsbURBQWlEO0FBQ2pELGlEQUErQztBQVMvQztJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBUHRCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCw0QkFBWTtnQkFDWiw4QkFBYTthQUNoQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgUHJvZmlsU2VydmljZSB9IGZyb20gXCIuL3Byb2ZpbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCZWF0c1NlcnZpY2UgfSBmcm9tIFwiLi9iZWF0cy5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERhdGFTZXJ2aWNlLFxuICAgICAgICBCZWF0c1NlcnZpY2UsXG4gICAgICAgIFByb2ZpbFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUgeyB9XG4iXX0=