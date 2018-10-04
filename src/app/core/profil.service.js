"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProfilService = /** @class */ (function () {
    function ProfilService() {
        this.profil = {
            id: 1,
            nom: "Gabb",
            description: "Description for Item 1",
            beats: []
        };
    }
    ProfilService.prototype.getBeats = function () {
        return this.profil.beats;
    };
    ProfilService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProfilService);
    return ProfilService;
}());
exports.ProfilService = ProfilService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUszQztJQUVJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLEVBQUUsRUFBRSxDQUFDO1lBQ0wsR0FBRyxFQUFFLE1BQU07WUFDWCxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLEtBQUssRUFBQyxFQUFFO1NBQ1gsQ0FBQTtJQUNMLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFaUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQWF6QjtJQUFELG9CQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFByb2ZpbCB9IGZyb20gJy4vbW9kZWxlL3Byb2ZpbC5tb2RlbGUnO1xuaW1wb3J0IHsgQmVhdCB9IGZyb20gXCJ+L2FwcC9jb3JlL21vZGVsZS9iZWF0Lm1vZGVsZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsU2VydmljZSB7XG4gICAgcHJvZmlsOlByb2ZpbDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2ZpbCA9IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbm9tOiBcIkdhYmJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDFcIixcbiAgICAgICAgICAgIGJlYXRzOltdXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0QmVhdHMoKTogQXJyYXk8QmVhdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9maWwuYmVhdHM7XG4gICAgfVxufVxuIl19