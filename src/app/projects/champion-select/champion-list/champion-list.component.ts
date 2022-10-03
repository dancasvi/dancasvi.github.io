import { Component, OnInit } from "@angular/core";
import { Champion } from "../../models/champion-select.model";

@Component({
    selector: 'app-champion-list',
    templateUrl: './champion-list.component.html',
    styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit{
    champions: Champion[] = [];

    ngOnInit(): void {
        let champ1: Champion = new Champion();
        champ1.avatar = "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt701ca0d74cad88e2/60ee0cf283f3965f5b9868b8/Ezreal_splash.jpg";
        
        let champ2: Champion = new Champion();
        champ2.avatar = "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt9f9df38e50f393d4/60ee0f4c5eda9722617c575e/Lux_0.jpg";

        let champ3: Champion = new Champion();
        champ3.avatar = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg";

        let champ4: Champion = new Champion();
        champ4.avatar = "https://static1-br.millenium.gg/entity_articles/3/67/33/@/95622-jinx-0-orig-1.jpg";

        this.champions.push(champ1, champ2, champ3, champ4);
    }
}