"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProfilService = /** @class */ (function () {
    function ProfilService() {
        this.profil = {
            id: 1,
            nom: "Lambda",
            description: "Description du beatmaker",
            beats: []
        };
    }
    ProfilService.prototype.getBeats = function () {
        return this.profil.beats;
    };
    ProfilService.prototype.getProfil = function () {
        return this.profil;
    };
    ProfilService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProfilService);
    return ProfilService;
}());
exports.ProfilService = ProfilService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUszQztJQUlJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLEVBQUUsRUFBRSxDQUFDO1lBQ0wsR0FBRyxFQUFFLFFBQVE7WUFDYixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLEtBQUssRUFBQyxFQUFFO1NBQ1gsQ0FBQTtJQUNMLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxpQ0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQWpCUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQWtCekI7SUFBRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQcm9maWwgfSBmcm9tICcuL21vZGVsZS9wcm9maWwubW9kZWxlJztcbmltcG9ydCB7IEJlYXQgfSBmcm9tIFwifi9hcHAvY29yZS9tb2RlbGUvYmVhdC5tb2RlbGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2ZpbFNlcnZpY2Uge1xuICAgIFxuICAgIHByb2ZpbDpQcm9maWw7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2ZpbCA9IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbm9tOiBcIkxhbWJkYVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZHUgYmVhdG1ha2VyXCIsXG4gICAgICAgICAgICBiZWF0czpbXVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEJlYXRzKCk6IEFycmF5PEJlYXQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsLmJlYXRzO1xuICAgIH1cbiAgICBnZXRQcm9maWwoKTogUHJvZmlsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsO1xuICAgIH1cbn1cbiJdfQ==