import { Injectable } from '@angular/core';
// Vérification de la connectivité
import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from "tns-core-modules/connectivity";

@Injectable({
  providedIn: 'root'
})
export class ConnectiviteService {

  connexion: boolean = false; // Fixer l'état de la connexion
  requete: Array<string>; // Enregistrer les url des requêtes qui ont été passées si elles n'ont pas pu être délivrées
  autorisation: boolean = false;

  constructor() {
    this.testConnectivite();
  }
  // Test de connectivité pour adaper une stratégie de traitement des données
  testConnectivite() {
    if (this.autorisation) {
      let typeConnexion = getConnectionType();
      switch (typeConnexion) {
        case connectionType.none:
          console.log("Argh, pas de connexion, engageons une surveillance du réseau");
          this.lancerSurveillanceReseau();
          break;
        case connectionType.wifi:
        case connectionType.mobile:
        case connectionType.ethernet:
          console.log("connexion établie");
          // On arrête la surveillance du réseau si elle était lancées
          stopMonitoring();
          this.connexion = true;

        default:
          break;
      }
    }
  }

  // Lancer la surveillance du réseau
  lancerSurveillanceReseau() {
    startMonitoring((typeConnexion) => {
      switch (typeConnexion) {
        case connectionType.none:
          console.log("Plus de connexion");
          break;
        case connectionType.wifi:
        case connectionType.mobile:
        case connectionType.ethernet:
          this.connexion = true;
          // Connexion retrouvée
          stopMonitoring();
        // case connectionType.bluetooth:
        //     // feature coming in NativeScript 5.0.0
        //     console.log("Connection type changed to bluetooth.");
        //     break;
        default:
          break;
      }
    });
  }
}