"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
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
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "app.component.html",
            styleUrls: ["./app.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHVEQUFxRDtBQVNyRDtJQUVJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixJQUFNLFVBQVUsR0FBRyxvQkFBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBRTVELE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFDRCxxQkFBcUI7SUFDckIsMENBQW1CLEdBQW5CO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixPQUFPLEVBQUUsa0JBQWtCO1lBQzNCLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztTQUN2RCxDQUFDO1FBRUYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCx3QkFBd0I7SUFDNUIsQ0FBQztJQTdCUSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLFlBQVksQ0E4QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXcsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXBwLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgZ2V0SWNvblNvdXJjZShpY29uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBpY29uUHJlZml4ID0gaXNBbmRyb2lkID8gXCJyZXM6Ly9cIiA6IFwicmVzOi8vdGFiSWNvbnMvXCI7XG5cbiAgICAgICAgcmV0dXJuIGljb25QcmVmaXggKyBpY29uO1xuICAgIH1cbiAgICAvLyBBZmZpY2hlciBsZSBwbGF5ZXJcbiAgICBkaXNwbGF5QWN0aW9uRGlhbG9nKCkge1xuICAgICAgICAvLyA+PiBhY3Rpb24tZGlhbG9nLWNvZGVcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJSYWNlIHNlbGVjdGlvblwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaG9vc2UgeW91ciByYWNlXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiSHVtYW5cIiwgXCJFbGZcIiwgXCJEd2FyZlwiLCBcIk9yY1wiLCBcIlVuaWNvcm5cIl1cbiAgICAgICAgfTtcblxuICAgICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gPDwgYWN0aW9uLWRpYWxvZy1jb2RlXG4gICAgfVxufVxuIl19