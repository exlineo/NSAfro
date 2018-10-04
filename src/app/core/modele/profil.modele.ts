import { Beat } from './beat.modele';

export interface Profil {
    id: number;
    nom: string;
    description: string;
    beats?:Array<Beat>;
}