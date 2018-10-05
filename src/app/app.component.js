"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var Permissions = require("nativescript-permissions");
var connectivite_service_1 = require("~/app/core/connectivite.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(connectivite) {
        this.connectivite = connectivite;
        // Use the component constructor to inject providers.
    }
    AppComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    AppComponent.prototype.getIconSource = function (icon) {
        var iconPrefix = platform_1.isAndroid ? "res://" : "res://tabIcons/";
        return iconPrefix + icon;
    };
    // Afficher le player
    AppComponent.prototype.displayActionDialog = function () {
        // >> action-dialog-code
        var options = {
            title: "Race selection",
            message: "Choose your race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        };
        dialogs_1.action(options).then(function (result) {
            console.log(result);
        });
        // << action-dialog-code
    };
    // Demander la permission
    AppComponent.prototype.demandePermissions = function () {
        var _this = this;
        Permissions.requestPermission(android.Manifest.permission.ACCESS_NETWORK_STATE, "Needed for connectivity status").then(function () {
            _this.connectivite.autorisation = true;
            console.log("Permission granted!");
        }).catch(function () {
            console.log("Permission is not granted (sadface)");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "app.component.html",
            styleUrls: ["./app.component.scss"]
        }),
        __metadata("design:paramtypes", [connectivite_service_1.ConnectiviteService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHVEQUFxRDtBQUVyRCxzREFBd0Q7QUFDeEQsd0VBQXNFO0FBU3RFO0lBRUksc0JBQW9CLFlBQWdDO1FBQWhDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoRCxxREFBcUQ7SUFDekQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLElBQU0sVUFBVSxHQUFHLG9CQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFFNUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNELHFCQUFxQjtJQUNyQiwwQ0FBbUIsR0FBbkI7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDO1NBQ3ZELENBQUM7UUFFRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUNILHdCQUF3QjtJQUM1QixDQUFDO0lBQ0QseUJBQXlCO0lBQ3pCLHlDQUFrQixHQUFsQjtRQUFBLGlCQU9DO1FBTkcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25ILEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXRDUSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUdtQywwQ0FBbUI7T0FGM0MsWUFBWSxDQXVDeEI7SUFBRCxtQkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlldywgVGFiVmlld0l0ZW0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xuaW1wb3J0ICogYXMgUGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGl2aXRlU2VydmljZSB9IGZyb20gXCJ+L2FwcC9jb3JlL2Nvbm5lY3Rpdml0ZS5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTsgLy8gRMOpY2xhcmF0aW9uIGRlIEFuZHJvw65kIHRpcsOpZSBkdSBTREtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FwcC5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25uZWN0aXZpdGU6Q29ubmVjdGl2aXRlU2VydmljZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBnZXRJY29uU291cmNlKGljb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGljb25QcmVmaXggPSBpc0FuZHJvaWQgPyBcInJlczovL1wiIDogXCJyZXM6Ly90YWJJY29ucy9cIjtcblxuICAgICAgICByZXR1cm4gaWNvblByZWZpeCArIGljb247XG4gICAgfVxuICAgIC8vIEFmZmljaGVyIGxlIHBsYXllclxuICAgIGRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XG4gICAgICAgIC8vID4+IGFjdGlvbi1kaWFsb2ctY29kZVxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlJhY2Ugc2VsZWN0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNob29zZSB5b3VyIHJhY2VcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJIdW1hblwiLCBcIkVsZlwiLCBcIkR3YXJmXCIsIFwiT3JjXCIsIFwiVW5pY29yblwiXVxuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyA8PCBhY3Rpb24tZGlhbG9nLWNvZGVcbiAgICB9XG4gICAgLy8gRGVtYW5kZXIgbGEgcGVybWlzc2lvblxuICAgIGRlbWFuZGVQZXJtaXNzaW9ucygpIHtcbiAgICAgICAgUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLkFDQ0VTU19ORVRXT1JLX1NUQVRFLCBcIk5lZWRlZCBmb3IgY29ubmVjdGl2aXR5IHN0YXR1c1wiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGl2aXRlLmF1dG9yaXNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gZ3JhbnRlZCFcIik7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzc2lvbiBpcyBub3QgZ3JhbnRlZCAoc2FkZmFjZSlcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==