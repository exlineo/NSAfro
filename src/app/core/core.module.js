"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var profil_service_1 = require("./profil.service");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            providers: [
                data_service_1.DataService,
                profil_service_1.ProfilService
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywrQ0FBNkM7QUFDN0MsbURBQWlEO0FBUWpEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFOdEIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLDhCQUFhO2FBQ2hCO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQcm9maWxTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvZmlsLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGF0YVNlcnZpY2UsXG4gICAgICAgIFByb2ZpbFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUgeyB9XG4iXX0=