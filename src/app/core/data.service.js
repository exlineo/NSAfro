"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("tns-core-modules/file-system");
var DataService = /** @class */ (function () {
    function DataService() {
        this.documents = file_system_1.knownFolders.documents();
    }
    // Ecrire un fichier
    DataService.prototype.ecritFichier = function (nomDos, nomFichier, contenu) {
        var _this = this;
        this.dos = this.documents.getFolder(nomDos || "testFolder");
        this.fichier = this.dos.getFile((nomFichier || "testfichier") + ".json");
        // Lecture du fichier pour comparer les contenus
        this.fichier.readText()
            .then(function (res) {
            // Comparaison du fichier à réécrire avec le contenu à écrire
            if (res != contenu.toString()) {
                _this.fichier.writeText(contenu.toString() || "Un truc manière de...")
                    .then(function (result) {
                    // Relecture du fichier pour confirmer l'écriture
                    _this.fichier.readText()
                        .then(function (res) {
                        _this.reussite = "Ecriture réussie du fichier " + _this.fichier.path;
                        console.log(_this.reussite);
                        _this.contenuEcrit = res;
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }).catch(function (err) {
            console.log(err.stack);
        });
    };
    // Lire un fichier
    DataService.prototype.litFichier = function (nomDos, nomFichier) {
        this.dos = this.documents.getFolder(nomDos || "testFolder");
        this.fichier = this.dos.getFile((nomFichier || "testfichier") + ".json");
        // Lecture du fichier pour comparer les contenus
        this.fichier.readText()
            .then(function (res) {
            return res;
        }).catch(function (err) {
            console.log(err.stack);
            return "Erreur de chargement";
        });
    };
    // Suppression d'un fichier local
    DataService.prototype.supprimeFichier = function (nomDos, nomFichier) {
        var _this = this;
        var documents = file_system_1.knownFolders.documents();
        this.dos = documents.getFolder(nomDos || "testFolder");
        this.fichier = this.dos.getFile((nomFichier || "testfichier") + ".json");
        this.fichier.remove()
            .then(function (res) {
            // Success removing the file.
            _this.reussite = "Fichier détruit !";
        }).catch(function (err) {
            console.log(err.stack);
        });
    };
    // Suppression d'un dossier local
    DataService.prototype.supprimeDossier = function (nomDos, nomFichier) {
        var _this = this;
        var documents = file_system_1.knownFolders.documents();
        this.dos = documents.getFolder(nomDos || "testFolder");
        this.dos.clear()
            .then(function (res) {
            // Successfully cleared the folder.
            _this.reussite = "Dossier supprimé ...";
        }).catch(function (err) {
            console.log(err.stack);
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDREQUEwRTtBQUcxRTtJQVNJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDRCxvQkFBb0I7SUFDcEIsa0NBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxVQUFVLEVBQUUsT0FBTztRQUFoRCxpQkF5QkM7UUF4QkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUN6RSxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDbEIsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNOLDZEQUE2RDtZQUM3RCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLHVCQUF1QixDQUFDO3FCQUNoRSxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNSLGlEQUFpRDtvQkFDakQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7eUJBQ2xCLElBQUksQ0FBQyxVQUFBLEdBQUc7d0JBQ0wsS0FBSSxDQUFDLFFBQVEsR0FBRyw4QkFBOEIsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzt3QkFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIEZvbGRlciwgRmlsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gICAgZG9jdW1lbnRzO1xuICAgIGRvczogRm9sZGVyO1xuICAgIGZpY2hpZXI6IEZpbGU7XG4gICAgY29udGVudTtcblxuICAgIHJldXNzaXRlOiBzdHJpbmc7XG4gICAgY29udGVudUVjcml0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgfVxuICAgIC8vIEVjcmlyZSB1biBmaWNoaWVyXG4gICAgZWNyaXRGaWNoaWVyKG5vbURvczogc3RyaW5nLCBub21GaWNoaWVyLCBjb250ZW51KSB7XG4gICAgICAgIHRoaXMuZG9zID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKG5vbURvcyB8fCBcInRlc3RGb2xkZXJcIik7XG4gICAgICAgIHRoaXMuZmljaGllciA9IHRoaXMuZG9zLmdldEZpbGUoKG5vbUZpY2hpZXIgfHwgXCJ0ZXN0ZmljaGllclwiKSArIFwiLmpzb25cIik7XG4gICAgICAgIC8vIExlY3R1cmUgZHUgZmljaGllciBwb3VyIGNvbXBhcmVyIGxlcyBjb250ZW51c1xuICAgICAgICB0aGlzLmZpY2hpZXIucmVhZFRleHQoKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENvbXBhcmFpc29uIGR1IGZpY2hpZXIgw6AgcsOpw6ljcmlyZSBhdmVjIGxlIGNvbnRlbnUgw6Agw6ljcmlyZVxuICAgICAgICAgICAgICAgIGlmIChyZXMgIT0gY29udGVudS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmljaGllci53cml0ZVRleHQoY29udGVudS50b1N0cmluZygpIHx8IFwiVW4gdHJ1YyBtYW5pw6hyZSBkZS4uLlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWxlY3R1cmUgZHUgZmljaGllciBwb3VyIGNvbmZpcm1lciBsJ8OpY3JpdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmljaGllci5yZWFkVGV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldXNzaXRlID0gXCJFY3JpdHVyZSByw6l1c3NpZSBkdSBmaWNoaWVyIFwiICsgdGhpcy5maWNoaWVyLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJldXNzaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudUVjcml0ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgLy8gTGlyZSB1biBmaWNoaWVyXG4gICAgbGl0RmljaGllcihub21Eb3MsIG5vbUZpY2hpZXIpe1xuICAgICAgICB0aGlzLmRvcyA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihub21Eb3MgfHwgXCJ0ZXN0Rm9sZGVyXCIpO1xuICAgICAgICB0aGlzLmZpY2hpZXIgPSB0aGlzLmRvcy5nZXRGaWxlKChub21GaWNoaWVyIHx8IFwidGVzdGZpY2hpZXJcIikgKyBcIi5qc29uXCIpO1xuICAgICAgICAvLyBMZWN0dXJlIGR1IGZpY2hpZXIgcG91ciBjb21wYXJlciBsZXMgY29udGVudXNcbiAgICAgICAgdGhpcy5maWNoaWVyLnJlYWRUZXh0KClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyZXVyIGRlIGNoYXJnZW1lbnRcIjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTdXBwcmVzc2lvbiBkJ3VuIGZpY2hpZXIgbG9jYWxcbiAgICBzdXBwcmltZUZpY2hpZXIobm9tRG9zLCBub21GaWNoaWVyKSB7XG4gICAgICAgIGxldCBkb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZG9zID0gZG9jdW1lbnRzLmdldEZvbGRlcihub21Eb3MgfHwgXCJ0ZXN0Rm9sZGVyXCIpO1xuICAgICAgICB0aGlzLmZpY2hpZXIgPSB0aGlzLmRvcy5nZXRGaWxlKChub21GaWNoaWVyIHx8IFwidGVzdGZpY2hpZXJcIikgKyBcIi5qc29uXCIpO1xuXG4gICAgICAgIHRoaXMuZmljaGllci5yZW1vdmUoKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdWNjZXNzIHJlbW92aW5nIHRoZSBmaWxlLlxuICAgICAgICAgICAgICAgIHRoaXMucmV1c3NpdGUgPSBcIkZpY2hpZXIgZMOpdHJ1aXQgIVwiO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFN1cHByZXNzaW9uIGQndW4gZG9zc2llciBsb2NhbFxuICAgIHN1cHByaW1lRG9zc2llcihub21Eb3MsIG5vbUZpY2hpZXIpIHtcbiAgICAgICAgbGV0IGRvY3VtZW50cyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgdGhpcy5kb3MgPSBkb2N1bWVudHMuZ2V0Rm9sZGVyKG5vbURvcyB8fCBcInRlc3RGb2xkZXJcIik7XG5cbiAgICAgICAgdGhpcy5kb3MuY2xlYXIoKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdWNjZXNzZnVsbHkgY2xlYXJlZCB0aGUgZm9sZGVyLlxuICAgICAgICAgICAgICAgIHRoaXMucmV1c3NpdGUgPSBcIkRvc3NpZXIgc3VwcHJpbcOpIC4uLlwiO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=